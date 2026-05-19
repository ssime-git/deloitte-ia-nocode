# Jour 7 — Masterclass : intégrer les briques validées

## Ce que vous allez comprendre aujourd'hui

Le problème du jour est l'assemblage. Vous ne découvrez pas une nouvelle brique : vous combinez celles qui ont déjà été validées pour construire un démonstrateur cohérent, lisible et défendable.

## 1. Le principe du projet final

Le Jour 7 ne demande pas un workflow "impressionnant". Il demande un workflow cohérent :

- une entrée claire
- des contrôles fiables
- des sources identifiables
- une synthèse bornée
- une validation humaine

Chaque brique doit garder son rôle. L'intégration n'efface pas la méthode apprise les jours précédents.

## 2. Les concepts qui comptent

- intégration de briques validées
- séparation entre logique déterministe et logique générative
- réutilisation plutôt que reconstruction
- validation humaine sur la sortie finale

## 3. Les briques à réutiliser

- Jour 4 pour les exceptions déterministes
- Jour 5 pour la synthèse et le `HITL`
- Jour 2 pour la réponse sourcée quand le scénario exige de justifier un constat par une source
- Jour 6 pour l'accès outillé quand il apporte réellement quelque chose

Le projet final est donc un exercice d'intégration de briques validées, pas une reconstruction complète depuis zéro.

## 4. Ce qui est obligatoire et ce qui est optionnel

Socle obligatoire :

- une entrée claire
- une brique de contrôles ou d'exceptions issue du Jour 4
- une brique de synthèse avec validation humaine issue du Jour 5

Obligatoire selon le scénario choisi :

- une brique de sourcing issue du Jour 2 si le constat final s'appuie sur une règle, une procédure ou une documentation à citer

Optionnel :

- un appel `MCP` issu du Jour 6, seulement s'il améliore réellement l'accès contrôlé à l'information

## 5. Ce que vous allez construire

Vous allez travailler sur `Jour 7 - Projet final`.

Le flux final doit rester crédible pour un public métier :

- entrée de cas ou de données
- sélection d'exceptions utiles
- enrichissement documentaire si nécessaire
- synthèse ou commentaire
- validation humaine

Le workflow ne doit pas dépendre d'étapes cachées de réindexation ou d'initialisation manuelle hors session.

## 6. Critères de réussite

Un bon projet final :

- se relance sans manipulation secrète
- réutilise des briques déjà comprises
- explicite ses limites
- produit une sortie défendable devant un tiers

## 7. Résultat attendu

En fin de journée, vous devez être capable de :

- expliquer l'enchaînement complet du pipeline
- montrer quelles briques sont déterministes et lesquelles sont génératives
- justifier l'emplacement de la validation humaine
