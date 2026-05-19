# Jour 3 — Masterclass : premier workflow utile dans n8n

## Ce que vous allez comprendre aujourd'hui

Le Jour 3 marque la bascule entre interaction par chat et orchestration visuelle. Le problème du jour est simple : sortir d'une conversation ponctuelle et construire un flux `n8n` qui produit un résultat utile, répétable et lisible.

## 1. Pourquoi commencer par un workflow simple

Un bon premier workflow doit être compréhensible en quelques minutes :

- une entrée claire
- quelques transformations lisibles
- un appel LLM utile
- une sortie exploitable

Si le canvas devient trop grand trop tôt, l'apprenant passe plus de temps à se repérer qu'à comprendre la logique du traitement.

## 2. Les concepts qui comptent

- déclencheur, nœud, branchement, exécution
- préparation d'entrées structurées
- passage d'un item à l'autre
- sortie JSON ou tableau simple
- différence entre logique de flux et logique métier

Le Jour 3 ne vise pas la couverture fonctionnelle maximale. Il vise la première automatisation qui rend un service immédiatement visible.

## 3. Ce que vous allez construire

Vous allez travailler sur `Jour 3 - Premier workflow utile`.

Le scénario attendu :

- lire un cas simple ou un petit extrait de données
- préparer un contexte propre
- appeler le modèle une fois
- restituer un résumé d'audit structuré

Cette journée installe les réflexes de construction qui serviront ensuite pour les contrôles, l'agent et l'intégration finale.

## 4. Ce qui change par rapport aux Jours 1 et 2

- vous ne vous limitez plus à une conversation
- vous commencez à penser entrées, sorties et enchaînement de nœuds
- vous rendez visible le chemin de transformation de l'information

Le workflow devient une preuve de méthode : on peut le relancer, l'inspecter et le faire évoluer.

## 5. Résultat attendu

En fin de journée, vous devez être capable de :

- lire un workflow `n8n` sans vous perdre
- expliquer ce qui relève du prompt et ce qui relève du flux
- produire une sortie structurée réutilisable dans les journées suivantes
