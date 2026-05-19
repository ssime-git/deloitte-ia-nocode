# Jour 4 — Lab : produire des exceptions à partir de contrôles déterministes

## Ce que vous allez construire

Un workflow qui lit un jeu de données fictives, applique trois contrôles déterministes, puis produit une table d'exceptions réutilisable.

Le jeu DSN-like est utilisé comme support d'exercice. Le livrable attendu est la logique de contrôle, pas une démonstration d'exhaustivité métier.

## Prérequis

- accès à `n8n`
- fichier de données fictives disponible dans l'environnement
- compréhension du Jour 3 sur la logique de flux

## Fichiers d'entrée

- dataset DSN-like fictif du repo
- éventuellement catalogue de contrôles pédagogique fourni par le formateur

## Workflow à ouvrir ou à créer

- nom du workflow : `Jour 4 - Contrôles et exceptions`
- fichier cible dans le repo : `n8n/workflows/day4_controles_exceptions.json`

## Étapes

### Étape 1 — Lire les données

Ajoutez les nœuds nécessaires pour charger un petit jeu de lignes. La lecture doit rester simple et visible.

### Étape 2 — Préparer les champs utiles

Ajoutez un nœud de préparation pour normaliser les types et calculer les champs intermédiaires dont vos contrôles ont besoin.

### Étape 3 — Implémenter trois contrôles

Implémentez exactement trois contrôles, par exemple :

- doublon salarié/période
- incohérence `base x taux x montant`
- salarié sorti encore actif

Chaque contrôle doit produire une exception identifiable et relisible.

### Étape 4 — Formater la preuve

Ajoutez un nœud final qui standardise la sortie avec quelques colonnes stables :

- identifiant d'exception
- contrôle déclenché
- sévérité
- valeur observée
- règle attendue

## Checkpoints

- les trois contrôles sont lisibles séparément
- le workflow produit une sortie stable d'une exécution à l'autre
- une exception contient assez d'éléments pour être comprise sans relire tout le dataset
- le canvas reste simple à présenter à un public non technique

## Sortie attendue

Une liste d'exceptions ou un tableau final contenant, pour chaque signal :

- le contrôle qui a déclenché
- la ligne ou le cas concerné
- une preuve courte
- le niveau de sévérité

## Si quelque chose ne fonctionne pas

- vérifiez le chemin du fichier ou le format d'entrée
- vérifiez vos conversions de types avant de revoir la règle métier
- si le dataset pose problème, revenez à quelques lignes de test isolées
