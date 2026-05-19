# Jour 5 — Masterclass : agent, prompt systeme et validation humaine

## Ce que vous allez comprendre aujourd'hui

Le problème du jour est l'orchestration d'un raisonnement assisté. Après les contrôles déterministes, vous pouvez utiliser un agent pour commenter, reformuler ou arbitrer un cas, à condition de lui donner un rôle clair et de garder l'humain dans la boucle.

## 1. Ce qui change par rapport à un simple appel LLM

Un appel LLM simple répond à une consigne unique. Un agent ajoute une couche de pilotage :

- un rôle explicite
- un cadre de décision
- éventuellement l'usage d'un outil
- un point d'arrêt pour validation

Le Jour 5 ne vise pas la complexité maximale. Il vise un agent unique, utile et borné.

## 2. Les concepts qui comptent

- `system prompt`
- rôle de l'agent
- hypothèses et limites
- `HITL` pour Human In The Loop
- distinction entre brouillon automatisé et décision validée

Le prompt système est la pièce centrale : il définit ce que l'agent peut faire, ce qu'il ne doit pas inventer, et à quel moment il doit demander revue humaine.

## 3. Ce que vous allez construire

Vous allez travailler sur `Jour 5 - Agents et validation humaine`.

Le workflow du jour contient :

- une entrée de cas ou d'exception
- un agent unique
- un prompt système versionnable
- une pause de validation humaine
- une branche validée et une branche rejetée

Cette simplification est volontaire. La valeur pédagogique vient de la qualité du cadrage, pas du nombre d'agents.

## 4. Où l'humain reste indispensable

L'humain garde la main pour :

- accepter ou rejeter une synthèse
- corriger une interprétation trop rapide
- vérifier qu'une recommandation reste cohérente avec le contexte d'audit

Un agent peut préparer une analyse. Il ne remplace pas la responsabilité de validation.

## 5. Résultat attendu

En fin de journée, vous devez être capable de :

- rédiger un prompt système court mais robuste
- expliquer pourquoi un agent doit être borné
- montrer où et pourquoi la validation humaine intervient
