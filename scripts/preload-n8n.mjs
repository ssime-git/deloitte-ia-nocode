import { createHash } from "crypto";
import { execFileSync } from "child_process";
import fs from "fs/promises";
import path from "path";

const baseUrl = process.env.N8N_BASE_URL || "http://n8n:5678";
const workflowsDir = process.env.N8N_PRELOAD_WORKFLOWS_DIR || "/workflows";
const credentialsFile =
	process.env.N8N_PRELOAD_CREDENTIALS_FILE || "/bootstrap/credentials.json";
const stateFile =
	process.env.N8N_PRELOAD_STATE_FILE || "/home/node/.n8n/.preload-state.json";
const apiKey = process.env.N8N_API_KEY;
const force = process.env.N8N_PRELOAD_FORCE === "1";

const headers = {
	"Content-Type": "application/json",
	"X-N8N-API-KEY": apiKey,
};

async function sleep(ms) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForApi() {
	for (let attempt = 1; attempt <= 60; attempt += 1) {
		try {
			const response = await fetch(`${baseUrl}/api/v1/workflows?limit=1`, {
				headers,
			});
			if (response.ok) {
				return;
			}
		} catch {
			// keep waiting
		}
		await sleep(2000);
	}
	throw new Error(`n8n API at ${baseUrl} did not become ready`);
}

async function readJson(filePath) {
	const content = await fs.readFile(filePath, "utf8");
	return JSON.parse(content);
}

async function listWorkflowFiles() {
	async function walk(dir) {
		const entries = await fs.readdir(dir, { withFileTypes: true });
		const files = await Promise.all(
			entries.map(async (entry) => {
				const entryPath = path.join(dir, entry.name);
				if (entry.isDirectory()) {
					return walk(entryPath);
				}
				return entry.name.endsWith(".json") ? [entryPath] : [];
			}),
		);
		return files.flat();
	}

	return (await walk(workflowsDir)).sort();
}

async function computeCredentialsFingerprint() {
	const hash = createHash("sha256");
	try {
		const content = await fs.readFile(credentialsFile, "utf8");
		hash.update(content);
	} catch {
		hash.update("[]");
	}
	hash.update("\0");
	hash.update(process.env.OPENAI_GATEWAY_API_KEY || "");
	hash.update("\0");
	hash.update(
		process.env.OPENAI_GATEWAY_BASE_URL || "https://ai-gateway.liora.tech/v1",
	);
	return hash.digest("hex");
}

async function readState() {
	try {
		return await readJson(stateFile);
	} catch {
		return null;
	}
}

async function writeState(state) {
	await fs.mkdir(path.dirname(stateFile), { recursive: true });
	await fs.writeFile(stateFile, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

async function importCredentialsIfNeeded(state, credentialsFingerprint) {
	try {
		await fs.access(credentialsFile);
	} catch {
		return state;
	}

	if (!force && state?.credentialsFingerprint === credentialsFingerprint) {
		return state;
	}

	const credentials = await readJson(credentialsFile);
	const gatewayApiKey = process.env.OPENAI_GATEWAY_API_KEY || "";
	const gatewayBaseUrl =
		process.env.OPENAI_GATEWAY_BASE_URL || "https://ai-gateway.liora.tech/v1";

	if (gatewayApiKey) {
		credentials.push({
			updatedAt: new Date().toISOString(),
			createdAt: new Date().toISOString(),
			id: "llBbatZjnM6zdCyD",
			name: "OpenAI Liora Gateway",
			data: {
				apiKey: gatewayApiKey,
				organizationId: "",
				url: gatewayBaseUrl,
				header: false,
				headerName: "",
				headerValue: "",
			},
			type: "openAiApi",
			isManaged: false,
			isGlobal: false,
		});
	}

	if (credentials.length === 0) {
		return {
			...state,
			credentialsFingerprint,
		};
	}

	const generatedCredentialsFile = "/tmp/n8n-preload-credentials.json";
	await fs.writeFile(
		generatedCredentialsFile,
		`${JSON.stringify(credentials, null, 2)}\n`,
		"utf8",
	);

	try {
		execFileSync(
			"n8n",
			["import:credentials", "--input", generatedCredentialsFile],
			{
				env: process.env,
				stdio: "inherit",
			},
		);
	} catch (error) {
		console.error("Failed to import credentials");
		throw error;
	}

	return {
		...state,
		credentialsFingerprint,
	};
}

async function patchWorkflowCredentials(workflow) {
	const nameToId = new Map();
	try {
		const response = await fetch(`${baseUrl}/api/v1/credentials?limit=250`, {
			headers,
		});
		if (!response.ok) {
			return workflow;
		}
		const payload = await response.json();
		const items = Array.isArray(payload.data) ? payload.data : [];
		for (const cred of items) {
			if (cred.name && cred.id) {
				nameToId.set(cred.name, cred.id);
			}
		}
	} catch {
		return workflow;
	}

	for (const node of workflow.nodes || []) {
		const creds = node.credentials;
		if (!creds) {
			continue;
		}
		for (const ref of Object.values(creds)) {
			const realId = nameToId.get(ref.name) || nameToId.get(ref.id);
			if (realId) {
				ref.id = realId;
			}
		}
	}
	return workflow;
}

function minimalWorkflowPayload(workflow) {
	return {
		name: workflow.name,
		nodes: workflow.nodes,
		connections: workflow.connections,
		settings: workflow.settings || {},
	};
}

async function upsertWorkflows() {
	const response = await fetch(`${baseUrl}/api/v1/workflows?limit=250`, {
		headers,
	});
	if (!response.ok) {
		throw new Error(
			`Failed to list workflows: ${response.status} ${await response.text()}`,
		);
	}

	const payload = await response.json();
	const existing = Array.isArray(payload.data) ? payload.data : [];
	const byId = new Map(existing.map((workflow) => [workflow.id, workflow]));
	const byName = new Map(existing.map((workflow) => [workflow.name, workflow]));

	for (const filePath of await listWorkflowFiles()) {
		let workflow = await readJson(filePath);
		workflow = await patchWorkflowCredentials(workflow);
		const minimal = minimalWorkflowPayload(workflow);
		const current =
			(workflow.id && byId.get(workflow.id)) || byName.get(workflow.name);

		const targetUrl = current
			? `${baseUrl}/api/v1/workflows/${current.id}`
			: `${baseUrl}/api/v1/workflows`;
		const method = current ? "PUT" : "POST";

		const result = await fetch(targetUrl, {
			method,
			headers,
			body: JSON.stringify(minimal),
		});

		if (!result.ok) {
			if (result.status === 400 && current) {
				console.warn(`Skipping archived workflow: ${workflow.name}`);
				continue;
			}
			throw new Error(
				`Failed to ${current ? "update" : "create"} workflow ${workflow.name}: ${result.status} ${await result.text()}`,
			);
		}
	}
}

async function main() {
	if (!apiKey) {
		console.log(
			"N8N_API_KEY is not set; skipping preload on this fresh scaffold.",
		);
		return;
	}

	await waitForApi();

	const credentialsFingerprint = await computeCredentialsFingerprint();
	const state = await readState();
	const updatedState = await importCredentialsIfNeeded(
		state,
		credentialsFingerprint,
	);
	await upsertWorkflows();

	await writeState({
		...updatedState,
		forced: force,
		lastBootstrapAt: new Date().toISOString(),
	});

	console.log("n8n bootstrap completed");
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
