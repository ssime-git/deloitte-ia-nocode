# Jour 7 — Lab : assembler le démonstrateur final

## Ce que vous allez construire

Un workflow final qui réutilise les briques validées pendant la semaine pour produire une synthèse d'audit relisible et validable.

## Prérequis

- accès à `n8n`
- disponibilité des workflows et services utiles des jours précédents
- compréhension du rôle des contrôles, des sources et de la validation humaine

## Fichiers d'entrée

- dataset ou cas d'audit fictif préparé dans le repo
- corpus pédagogique déjà prêt
- éventuellement une exception cible issue du Jour 4

## Workflow à ouvrir ou à créer

- nom du workflow : `Jour 7 - Projet final`
- fichier cible dans le repo : `n8n/workflows/day7_final_project.json`

## Périmètre attendu

Obligatoire :

- une entrée de scénario ou de données
- une réutilisation de la logique Jour 4
- une synthèse avec validation humaine issue du Jour 5

Obligatoire si le scénario demande une justification documentaire :

- une brique de sourcing issue du Jour 2

Optionnel :

- une brique `MCP` issue du Jour 6 si elle apporte un gain clair sur le scénario choisi

## Étapes

### Étape 1 — Définir l'entrée du scénario

Choisissez un cas simple et représentatif. Le groupe doit être capable d'expliquer en une phrase ce que le pipeline cherche à démontrer.

### Étape 2 — Réutiliser la brique de contrôles

Intégrez ou appelez la logique de détection d'exceptions construite en Jour 4. Ne recréez pas un moteur de règles plus large que nécessaire.

### Étape 3 — Réutiliser la brique de sourcing

Ajoutez le composant de réponse sourcée issu du Jour 2 dès que le constat doit être justifié par une source ou une règle documentaire. Cette brique doit faire un vrai appel de recherche documentaire, pas seulement injecter une source simulée dans un `Set`.

### Étape 4 — Réutiliser la brique de synthèse

Ajoutez l'agent ou la logique de synthèse du Jour 5 avec son point de validation humaine.

### Étape 5 — Finaliser la sortie

Préparez une sortie finale lisible pour un public métier :

- constat
- preuve ou source
- limite éventuelle
- statut de validation

## Checkpoints

- le workflow final assemble des briques déjà validées
- le socle obligatoire Jour 4 + Jour 5 est bien présent
- la brique de sourcing Jour 2 est réelle dès qu'une justification documentaire est requise
- aucune étape cachée d'indexation ou d'initialisation n'est nécessaire pendant le lab
- le groupe peut expliquer ce qui relève du contrôle, de la source et de la synthèse
- le résultat final passe par une validation humaine

## Prompts d'essai

Vous pouvez cadrer le projet final avec des demandes comme :

- `À partir d'une exception URSSAF détectée en J4, produis un brouillon de synthèse avec source documentaire et validation humaine finale.`
- `Assemble un mini-rapport d'audit sur un écart URSSAF : constat, règle citée, limite, décision humaine attendue.`
- `Réutilise les briques J4, J2 et J5 pour produire une synthèse courte, lisible par un responsable paie.`

Pour rester dans le bon périmètre :

- partez d'un seul cas ou d'une seule exception
- n'ajoutez MCP que s'il apporte un vrai gain de contrôle
- n'introduisez aucune étape cachée d'indexation ou de préparation hors workflow

## Sortie attendue

Une synthèse finale ou un mini-rapport contenant :

- le cas analysé
- les exceptions ou constats retenus
- les sources mobilisées
- le statut final après revue humaine

## Si quelque chose ne fonctionne pas

- revenez à un scénario plus petit
- réutilisez les briques qui marchent déjà au lieu d'en inventer de nouvelles
- demandez au formateur de traiter l'incident d'environnement hors du temps d'atelier
