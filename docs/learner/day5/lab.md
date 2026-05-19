# Jour 5 — Lab : ajouter un agent simple avec validation humaine

## Ce que vous allez construire

Un workflow qui prend une exception ou un cas d'audit, la fait analyser par un agent unique, puis soumet le résultat à validation humaine avant sortie finale.

## Prérequis

- accès à `n8n`
- workflow ou données de base disponibles depuis les jours précédents
- credential modèle disponible

## Fichiers d'entrée

- un cas d'audit fictif
- ou une exception issue du Jour 4

## Workflow à ouvrir ou à créer

- nom du workflow : `Jour 5 - Agents et validation humaine`
- fichier cible dans le repo : `n8n/workflows/day5_agents_hitl.json`

## Étapes

### Étape 1 — Préparer le cas

Récupérez un cas court et compréhensible. Il doit contenir assez de contexte pour que l'agent puisse produire une synthèse argumentée.

### Étape 2 — Rédiger le prompt système

Définissez :

- le rôle exact de l'agent
- ce qu'il doit produire
- ce qu'il doit refuser d'inventer
- le moment où il doit laisser la décision à l'humain

### Étape 3 — Ajouter l'agent

Ajoutez un seul nœud agent ou LLM avancé. L'objectif est de garder le flux lisible.

### Étape 4 — Ajouter la validation humaine

Insérez une étape `Wait` ou équivalente pour permettre :

- validation
- rejet
- retour à correction si nécessaire

### Étape 5 — Séparer les issues

Ajoutez deux branches finales :

- synthèse validée
- synthèse rejetée ou à reprendre

## Checkpoints

- l'agent travaille à partir d'un rôle explicite
- le prompt système tient en quelques règles claires
- le workflow ne sort pas un résultat final sans point de validation humaine
- le cas rejeté suit bien une branche distincte

## Sortie attendue

Une synthèse courte contenant :

- le constat
- les limites ou hypothèses
- le statut de validation humaine

## Si quelque chose ne fonctionne pas

- simplifiez le prompt système
- réduisez le cas traité à une seule exception
- vérifiez d'abord le mécanisme de pause avant d'améliorer la qualité rédactionnelle
