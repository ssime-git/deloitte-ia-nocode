# Jour 3 — Lab : construire un premier workflow utile

## Ce que vous allez construire

Un workflow `n8n` simple qui prend une entrée structurée, prépare un contexte d'analyse, interroge un modèle, puis restitue un résumé d'audit réutilisable.

## Prérequis

- accès à `n8n`
- environnement démarré
- credential modèle disponible
- compréhension des journées 1 et 2 sur le cadrage du prompt et la lecture critique d'une réponse

## Fichiers d'entrée

Selon le scénario retenu par le formateur :

- un petit extrait de données fictives
- ou un cas d'audit préparé dans un nœud `Set`

Le but du jour n'est pas de traiter un fichier complexe, mais d'apprendre la logique de construction du flux.

## Workflow à ouvrir ou à créer

- nom du workflow : `Jour 3 - Premier workflow utile`
- fichier cible dans le repo : `n8n/workflows/day3_premier_workflow.json`

## Étapes

### Étape 1 — Définir l'entrée

Choisissez une entrée simple et contrôlée : quelques champs métier, un texte court, ou une ligne d'exemple. L'entrée doit tenir sur un écran et rester facile à relire.

### Étape 2 — Préparer le contexte

Ajoutez un nœud qui met l'entrée en forme pour le modèle :

- rôle attendu
- objectif d'analyse
- format de sortie

### Étape 3 — Appeler le modèle

Ajoutez un unique appel LLM avec une température basse et une sortie structurée.

### Étape 4 — Restituer un résultat lisible

Ajoutez un dernier nœud pour exposer clairement :

- le résumé d'audit
- les risques ou questions ouvertes
- la matière qui pourra être réutilisée en Jour 5 ou Jour 7

## Checkpoints

- le workflow se relance sans modification manuelle cachée
- chaque nœud a un rôle compréhensible
- la sortie est courte, structurée et lisible
- le canvas reste simple à expliquer à un autre participant

## Sortie attendue

Une structure finale de synthèse contenant au minimum :

- un résumé métier
- quelques points de vigilance
- une proposition d'action ou de question complémentaire

## Si quelque chose ne fonctionne pas

- réduisez la taille de l'entrée
- simplifiez le format attendu
- vérifiez la connexion du nœud modèle avant d'ajouter des raffinements
