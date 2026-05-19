SHELL := /usr/bin/bash
.ONESHELL:

.PHONY: help require-env setup up up-rag up-mcp down ps logs preload reset-workflows reset-n8n open

help:
	@printf '%s\n' \
		'Available targets:' \
		'  make setup           - start the base stack, then run the preload step' \
		'  make up              - start postgres + n8n in detached mode' \
		'  make up-rag          - start the base stack plus qdrant profile' \
		'  make up-mcp          - start the base stack plus mcp-server profile' \
		'  make down            - stop the stack' \
		'  make ps              - show container status' \
		'  make logs            - follow stack logs' \
		'  make preload         - run the n8n bootstrap import script' \
		'  make reset-workflows - force a bootstrap reimport' \
		'  make reset-n8n       - remove postgres/n8n volumes and rebuild from scratch' \
		'  make open            - print the local n8n URL'

require-env:
	if [ ! -f .env ]; then
		echo ".env not found. Create it from .env.example first."
		exit 1
	fi
	set -a
	source .env
	set +a
	if [ -z "$${POSTGRES_PASSWORD:-}" ] || [ -z "$${N8N_ENCRYPTION_KEY:-}" ]; then
		echo "POSTGRES_PASSWORD and N8N_ENCRYPTION_KEY must be set in .env"
		exit 1
	fi

setup: require-env up preload

up: require-env
	docker compose --env-file .env up -d postgres n8n

up-rag: require-env
	docker compose --env-file .env --profile rag up -d postgres n8n qdrant

up-mcp: require-env
	docker compose --env-file .env --profile mcp up -d postgres n8n mcp-server

down: require-env
	docker compose --env-file .env down

ps: require-env
	docker compose --env-file .env ps

logs: require-env
	docker compose --env-file .env logs -f --tail=100

preload: require-env
	docker compose --env-file .env run --rm n8n-bootstrap

reset-workflows: require-env
	docker compose --env-file .env run --rm -e N8N_PRELOAD_FORCE=1 n8n-bootstrap

reset-n8n: require-env
	docker compose --env-file .env down -v --remove-orphans
	docker compose --env-file .env up -d --build postgres n8n

open:
	@printf '%s\n' 'n8n: http://localhost:5678/home/workflows'
