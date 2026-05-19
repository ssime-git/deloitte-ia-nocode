# Runbook formateur

## Objectif

Ce document couvre uniquement l'exploitation minimale du repo pour faire tourner la semaine de formation. Il ne remplace pas un guide d'infrastructure complet.

## Demarrage initial

Bootstrap initial :

```bash
cp .env.example .env
```

Une fois `.env` present, le demarrage nominal se fait en une commande :

```bash
make setup
```

Effet attendu :

- `postgres` et `n8n` démarrent
- le bootstrap `n8n-bootstrap` tente le préchargement
- si `N8N_API_KEY` est encore vide, la pile démarre quand même et le préchargement est simplement ignoré

Pour les journées qui ont besoin d'un service optionnel :

- `make up-rag` pour les besoins `RAG`, puis `make preload`
- `make up-mcp` pour les besoins `MCP`, puis `make preload`

## Precharger les workflows

Commande nominale :

```bash
make preload
```

Commande de reimport force :

```bash
make reset-workflows
```

Points de controle :

- `N8N_API_KEY` doit etre renseignee dans `.env`
- les workflows learner doivent etre presents sous `n8n/workflows/`
- le script de preload importe aussi les credentials prepares dans `n8n/bootstrap/credentials.json`

## Si n8n est indisponible

Ordre de triage :

```bash
make ps
make logs
```

Si `n8n` ne repond pas ou si la base est incoherente :

```bash
make reset-n8n
make preload
```

Conduite formateur :

- ne faites pas diagnostiquer Docker aux apprenants
- basculez temporairement sur une demonstration projetee ou sur un workflow deja exporte si la reprise prend plus de quelques minutes

## Si MCP est indisponible

Verifier d'abord le profil :

```bash
make up-mcp
docker compose --env-file .env ps
docker compose --env-file .env logs --tail=100 mcp-server
```

Si un autre projet local occupe deja le port hote MCP, deux options mainteneur existent sans changer la doc apprenante :

- lancer ce repo avec un autre `MCP_SERVER_PORT` pour l'acces hote au service
- ou surcharger `MCP_SSE_ENDPOINT` si vous devez pointer J6 vers un autre endpoint MCP

Valeur nominale dans la pile de formation :

```bash
MCP_SSE_ENDPOINT=http://mcp-server:8000/sse
```

Note mainteneur : la pile fixe aussi `N8N_BLOCK_ENV_ACCESS_IN_NODE=false` pour autoriser cette interpolation ciblée via `$env` dans J6. Sans cela, le nœud MCP échoue avec `access to env vars denied`.

Conduite formateur :

- gardez la journee 6 centree sur la comparaison entre approche naive et acces controle
- si le service reste indisponible, utilisez une execution preparee ou une demonstration guidee
- ne demandez pas aux apprenants de toucher a `.mcp.json`, aux conteneurs ou aux logs serveur

## Garder Docker invisible pour les apprenants

- lancer la pile avant l'arrivee du groupe
- precharger workflows et credentials avant la seance
- ne faire manipuler que `n8n` et les fichiers pedagogiques visibles
- reserver `docker compose`, les logs et les resets au formateur
- utiliser les noms de workflows, pas les noms de services, dans les consignes de salle

## Validation avant chaque session

Verification commune :

```bash
make ps
```

Puis verifier le jour cible dans `n8n` avant l'entree en salle :

- J1 a J3 : le workflow s'ouvre, les credentials sont resolus, et une execution nominale produit la sortie attendue sans etape d'infrastructure cote apprenant
- J4 : `Jour 4 - Contrôles et exceptions` produit bien une liste d'exceptions exploitable sur le jeu fictif
- J5 : `Jour 5 - Agents et validation humaine` atteint le point `HITL` et suit correctement les branches valide/rejete
- J6 : `Jour 6 - MCP guidé` execute la comparaison branche libre / branche `MCP` sans debug cote apprenant
- J7 : `Jour 7 - Projet final` assemble le socle requis Jour 4 + Jour 5, avec sourcing Jour 2 si le scenario l'exige, sans etape cachee de reinitialisation

Si une journee ne passe pas ce controle, traiter le probleme avant la session ou preparer un plan de repli explicite.
