# IA no-code audit paie/DSN avec n8n

Socle minimal pour la formation no-code d'audit paie/DSN. La surface apprenante reste centrée sur `n8n`, le prompting, le RAG, les agents et le MCP. Docker, PostgreSQL, Qdrant et le serveur MCP restent de l'infrastructure de support.

J1 et J2 sont explicitement `chat-first` : le dépôt prépare ce runtime, mais l'entrée pédagogique initiale reste la conversation et la conception de prompts dans n8n.

## Démarrage rapide

```bash
cp .env.example .env
make setup
```

Ouvrir ensuite `http://localhost:5678`.

## Variables d'environnement

Le dépôt reprend le même pattern local que le repo source pour :

- `N8N_API_KEY`
- `OPENAI_GATEWAY_API_KEY`
- `OPENAI_GATEWAY_BASE_URL`
- `OPENAI_GATEWAY_MODEL`

`N8N_API_KEY` peut rester vide lors du premier `make setup`. Le runtime démarre quand même. Si vous voulez utiliser l'import API pour les workflows et credentials, générez ensuite une clé dans n8n (`Settings -> API`), renseignez `.env`, puis relancez `make preload`.

Le modèle et l'URL du gateway sont injectés par variables d'environnement pour garder le même pattern de nœuds modèle que dans `/home/seb/project/deloitte/agentic_ai_auditing`, sans committer de secret.

Pour J6, l'endpoint MCP du nœud outillé est configurable via `MCP_SSE_ENDPOINT`. La valeur par défaut dans la pile Docker est `http://mcp-server:8000/sse`. Ce point sert surtout aux mainteneurs quand un autre serveur MCP local occupe déjà un port hôte.

Comme ce dépôt est un runtime self-hosted de formation, la pile active aussi `N8N_BLOCK_ENV_ACCESS_IN_NODE=false` pour permettre cette interpolation ciblée dans le workflow J6.

## Profils

- `make up` : runtime de base `postgres + n8n`
- `make up-rag` : ajoute `qdrant` pour les exercices RAG
- `make up-mcp` : ajoute le profil `mcp-server` pour les exercices MCP

Dans ce Task 1, `mcp-server` est un placeholder exécutable avec endpoint `/health` pour garder le profil `mcp` runnable sans embarquer encore les outils métier des tâches suivantes.

Adminer n'est pas inclus dans ce dépôt.

## Commandes utiles

- `make ps`
- `make logs`
- `make preload`
- `make reset-workflows`
- `make reset-n8n`

## Vérification mainteneur

```bash
docker compose ps
docker compose logs --tail=100 n8n
make preload
```

Si vous avez démarré le profil MCP avec `make up-mcp`, ajoutez aussi :

```bash
docker compose logs --tail=100 mcp-server
```

Le bootstrap `n8n-bootstrap` est volontairement tolérant sur un dépôt vide : sans `N8N_API_KEY`, il sort proprement sans importer. Cela permet de garder `cp .env.example .env && make setup` comme quickstart minimal tout en conservant le mécanisme d'import pour la suite.

## Carte de migration depuis `agentic_ai_auditing`

### Conservé tel quel

- image `n8n` épinglée en `2.15.0`
- mécanisme de preload des workflows et credentials
- dataset fictif DSN-like et sorties attendues
- corpus pédagogique Markdown utilisé pour le sourcing et MCP guidé

### Simplifié

- `docker-compose.yml` réduit à `postgres`, `n8n`, `n8n-bootstrap` et deux profils optionnels (`rag`, `mcp`)
- `Makefile` ramené à quelques commandes d'exploitation et de reset mainteneur
- serveur MCP réduit au plus petit slice utile pour le Jour 6
- workflows reconstruits pour la progression apprenante J1→J7
- documentation instructeur réduite à un runbook minimal

### Omis volontairement

- Adminer et autres UIs de support
- workflows instructeur et correcteurs de projet
- documentation de référence lourde côté instructeur
- re-indexation cachée, multi-agent learner workflow, debugging MCP côté apprenant

### Local uniquement, non versionné

- `.env`
- `.mcp.json`
- `.skills/`
- scripts ou helpers de diagnostic temporaires
