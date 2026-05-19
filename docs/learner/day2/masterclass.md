# Jour 2 — Masterclass : sourcing, fiabilité et réponses sourcées via chat

## Ce que vous allez comprendre aujourd'hui

Le problème du jour est la fiabilité. Un bon prompt améliore la forme d'une réponse, mais il ne suffit pas quand l'auditeur doit s'appuyer sur une source identifiable. Aujourd'hui, vous apprenez à distinguer une réponse plausible d'une réponse réellement exploitable.

## 1. Pourquoi le Jour 2 existe

Un LLM sans source peut répondre vite, mais aussi inventer vite. En audit, une réponse utile doit pouvoir être reliée à un document, à une règle ou à un corpus explicitement fourni.

Le Jour 2 reste volontairement `chat-first` : vous travaillez d'abord la méthode de questionnement et la lecture critique des réponses avant d'ouvrir des workflows plus complexes.

## 2. Les concepts qui comptent

- différence entre prompt seul, contexte ajouté et `RAG`
- citation de source et justification d'une réponse
- limites d'une réponse confiante mais non prouvée
- critères simples de fiabilité : source présente, source pertinente, réponse bornée

Le point important n'est pas de "faire du RAG" pour faire du RAG, mais de savoir quand un modèle doit répondre, quand il doit citer, et quand il doit dire qu'il ne sait pas.

## 3. Positionnement sur le support DSN-like

Le jeu de données DSN-like sert de support pédagogique. La formation porte sur la méthode IA/no-code et non sur l'exhaustivité métier de la DSN.

Autrement dit, la journée ne cherche pas à transformer les apprenants en experts réglementaires DSN. Elle montre comment une source documentaire et un cadre de réponse améliorent la fiabilité d'un échange avec un LLM.

## 4. Ce que vous allez construire

Vous allez travailler sur `Jour 2 - Fiabilité et RAG`.

Le flux attendu reste léger :

- une question métier posée via chat
- un accès à un corpus déjà préparé par le formateur
- une réponse courte avec source ou refus explicite

La partie indexation ou infrastructure reste hors du parcours apprenant. Le focus porte sur la qualité du questionnement et sur l'évaluation de la réponse.

## 5. Comment lire une réponse fiable

Une bonne réponse de Jour 2 doit :

- citer la ou les sources utilisées
- rester proportionnée à ce que disent réellement ces sources
- signaler les limites si le corpus ne suffit pas
- éviter d'inventer un détail réglementaire absent du corpus

Une mauvaise réponse de Jour 2 est une réponse qui semble convaincante mais ne dit jamais d'où elle parle.

## 6. Résultat attendu

En fin de journée, vous devez être capable de :

- reformuler une question pour la rendre vérifiable
- distinguer une réponse sourcée d'une réponse simplement plausible
- expliquer quand une absence de réponse vaut mieux qu'une réponse trop confiante
