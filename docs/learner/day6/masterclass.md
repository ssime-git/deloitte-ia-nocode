# Jour 6 — Masterclass : consommer MCP depuis n8n

## Ce que vous allez comprendre aujourd'hui

Le problème du jour est l'accès contrôlé à l'information. Jusqu'ici, vous avez surtout fait dialoguer un workflow avec un modèle ou avec un corpus. Aujourd'hui, vous voyez comment un workflow peut consommer un outil exposé via `MCP` sans transformer la journée en atelier d'infrastructure.

## 1. Ce qu'il faut retenir de MCP

`MCP` ne remplace ni une API classique ni un corpus documentaire. Il fournit une manière standardisée d'exposer un outil à un agent ou à un workflow outillé.

La bonne intuition est la suivante :

- le workflow formule un besoin
- le client `MCP` appelle un outil déjà borné
- l'outil retourne un résultat plus contrôlé qu'un simple prompt libre

## 2. Les concepts qui comptent

- différence entre prompt seul, `RAG` et `MCP`
- notion d'outil exposé avec un contrat clair
- gouvernance de l'accès à la donnée
- comparaison entre approche naïve et approche contrôlée

Le Jour 6 reste une journée d'usage. Le détail Python du serveur ne devient pertinent que pour les mainteneurs.

## 3. Ce que vous allez construire

Vous allez travailler sur `Jour 6 - MCP guidé`.

Le workflow attendu reste volontairement compact :

- une question métier
- une réponse naïve pour comparaison
- un appel `MCP` depuis `n8n`
- une synthèse des écarts entre les deux approches

L'objectif n'est pas de déboguer le serveur, mais de comprendre la valeur métier d'un accès contrôlé.

## 4. Pourquoi cette journée prépare le Jour 7

Le projet final ne doit pas reposer sur une seule technique. Il doit réutiliser :

- les sources du Jour 2
- les contrôles du Jour 4
- la validation du Jour 5
- et, quand c'est pertinent, un accès outillé via `MCP`

## 5. Résultat attendu

En fin de journée, vous devez être capable de :

- expliquer en une phrase ce que `MCP` apporte
- comparer une réponse libre et une réponse outillée
- dire pourquoi l'infrastructure `MCP` doit rester invisible aux apprenants pendant le lab
