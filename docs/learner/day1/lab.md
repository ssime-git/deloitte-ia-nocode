# Jour 1 — Lab : construire une interaction LLM cadrée

## Ce que vous allez construire

Un workflow `n8n` très court qui prend une demande d'audit via chat, appelle un modèle, puis retourne une réponse structurée avec un garde-fou de format.

## Prérequis

- accès à `n8n`
- environnement démarré par le formateur
- credential modèle déjà préparé dans l'instance
- aucune donnée réelle dans les tests

## Fichiers d'entrée

Ce lab ne dépend d'aucun fichier métier. Vous travaillez uniquement avec :

- un court scénario d'audit fourni en séance
- des consignes de sortie structurée

## Workflow à ouvrir ou à créer

- nom du workflow : `Jour 1 - Prompting audit`
- fichier cible dans le repo : `n8n/workflows/day1_prompting.json`

Si le workflow a déjà été préchargé, ouvrez-le. Sinon, créez-le avec ce nom exact.

## Étapes

### Étape 1 — Créer l'entrée chat

Ajoutez un déclencheur orienté conversation. Le message d'entrée doit décrire un besoin d'audit simple, par exemple la lecture d'une clause, d'un extrait de procédure ou d'un constat à reformuler.

### Étape 2 — Préparer le contexte

Ajoutez un nœud de préparation qui :

- rappelle le rôle attendu du modèle
- impose l'usage de données fictives
- demande une réponse courte et structurée

### Étape 3 — Appeler le modèle

Configurez un seul nœud LLM avec :

- une consigne stable
- une température basse, idéalement `0`
- un format de sortie explicite

### Étape 4 — Valider la sortie

Ajoutez un parser ou une validation simple pour vérifier que la sortie respecte le contrat attendu. Si le format n'est pas bon, le workflow doit partir vers une branche d'erreur lisible.

## Checkpoints

- le workflow s'exécute depuis le chat sans étape manuelle intermédiaire
- la réponse contient les champs attendus
- une variation du prompt change le fond de la réponse sans casser le format
- la branche de garde-fou capte un format invalide

## Sortie attendue

Une réponse structurée qui contient au minimum :

- une lecture métier courte
- une liste de risques ou points d'attention
- des questions de contrôle à approfondir

## Si quelque chose ne fonctionne pas

- vérifiez d'abord le credential du modèle
- réduisez la taille du prompt
- simplifiez le format demandé avant de le re-spécifier proprement
- si le problème vient de l'environnement, laissez le formateur intervenir sans transformer le lab en diagnostic Docker
