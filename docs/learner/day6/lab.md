# Jour 6 — Lab : comparer un prompt libre et un appel MCP guidé

## Ce que vous allez construire

Un workflow qui pose une question métier, compare une réponse obtenue par prompting direct avec un résultat obtenu via un outil `MCP`, puis affiche une synthèse.

## Prérequis

- accès à `n8n`
- profil `mcp` démarré par le formateur
- credential modèle disponible
- outil `MCP` déjà préparé dans l'environnement

## Fichiers d'entrée

Ce lab dépend surtout de services préchargés. Les entrées apprenantes restent légères :

- une question métier
- éventuellement un identifiant de cas ou d'exception fourni par le formateur

## Workflow à ouvrir ou à créer

- nom du workflow : `Jour 6 - MCP guidé`
- fichier cible dans le repo : `n8n/workflows/day6_mcp_guided.json`

## Étapes

### Étape 1 — Définir la question

Créez une entrée simple et testable. La question doit être assez précise pour que la différence entre prompt libre et outil contrôlé soit visible.

### Étape 2 — Construire la réponse naïve

Ajoutez une première branche avec un appel LLM classique. Elle sert de point de comparaison.

### Étape 3 — Appeler l'outil MCP

Ajoutez une deuxième branche qui consomme l'outil exposé via `MCP`. Le workflow doit utiliser le contrat déjà préparé, pas décrire l'infrastructure.

### Étape 4 — Comparer les deux sorties

Ajoutez un nœud final qui synthétise :

- ce que le modèle a proposé seul
- ce que l'outil a renvoyé
- en quoi l'approche contrôlée améliore la réponse

## Checkpoints

- le workflow distingue clairement les deux branches
- l'appel `MCP` utilise un outil existant, sans bricolage côté apprenant
- la sortie finale explique la différence entre réponse libre et réponse contrôlée
- le lab ne dérive pas vers le débogage du serveur

## Sortie attendue

Une synthèse finale contenant :

- la réponse libre
- le résultat via `MCP`
- un commentaire court sur la gouvernance ou la fiabilité

## Si quelque chose ne fonctionne pas

- laissez le formateur vérifier le service `MCP`
- poursuivez la comparaison conceptuelle avec un exemple préparé si le backend est indisponible
- ne passez pas la séance à inspecter Docker ou la configuration interne du serveur
