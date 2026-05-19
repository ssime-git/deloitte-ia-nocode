# Jour 1 — Masterclass : interaction LLM via chat, prompting et gouvernance

## Ce que vous allez comprendre aujourd'hui

Aujourd'hui, vous posez les bases du parcours. Le problème à résoudre n'est pas encore l'automatisation d'un contrôle paie, mais la bonne façon d'interroger un LLM pour obtenir une réponse utile, structurée et exploitable en audit.

À la fin de la séance, vous saurez quels réglages comptent, quels risques surveiller, et comment cadrer une première conversation dans `n8n` sans exposer de données sensibles.

## 1. Le problème du jour

Un LLM peut reformuler, structurer, proposer des pistes de contrôle et rédiger un premier constat. En revanche, il ne prouve rien par lui-même. Si le prompt est flou, la sortie sera floue. Si le contexte est mal borné, la réponse peut être fausse, trop confiante ou non traçable.

Le but du Jour 1 est donc simple : apprendre à transformer une demande vague en interaction fiable via chat.

## 2. Les concepts qui comptent

- le rôle d'un `system prompt` ou d'une consigne de cadrage
- la différence entre une réponse libre et une sortie structurée
- les réglages utiles : `temperature`, longueur de réponse, format attendu
- les limites : hallucination, variabilité, absence de preuve native
- les règles de base de minimisation des données

En audit, la bonne question n'est pas "le modèle sait-il répondre ?" mais "dans quel cadre sa réponse est-elle utilisable ?".

## 3. API publiques vs environnements enterprise/privés

Toutes les plateformes LLM ne se valent pas du point de vue gouvernance. Une API publique et un environnement enterprise/privé n'offrent pas les mêmes garanties en matière d'isolation, de rétention, de journalisation et de traitement contractuel des données.

Points à retenir :

- une API publique peut impliquer un niveau de journalisation, de conservation ou d'exposition différent selon le fournisseur et la configuration retenue
- un environnement enterprise ou privé vise en général un meilleur contrôle contractuel, réseau et opérationnel
- la confidentialité ne dépend pas seulement du modèle, mais aussi des logs, des traces d'exécution et de la politique de rétention
- une donnée envoyée dans un prompt peut se retrouver dans l'historique du chat, dans les journaux applicatifs, ou dans les traces d'un workflow si rien n'est masqué

Conséquence pratique pour la formation : données fictives uniquement, anonymisation par défaut, et aucune donnée réelle de paie dans les prompts ou historiques.

## 4. Ce que vous allez construire

Vous allez travailler sur le workflow `Jour 1 - Prompting audit`.

Ce workflow reste volontairement léger :

- un déclenchement par chat
- un contexte d'audit court
- un appel LLM
- une sortie structurée
- une branche de garde-fou si le format attendu n'est pas respecté

L'objectif pédagogique est de comparer plusieurs formulations de prompts sans se perdre dans un grand canvas.

## 5. Ce que cette journée prépare pour la suite

Le Jour 1 prépare tout le reste :

- Jour 2 : vous ajouterez les sources et la question de la fiabilité
- Jour 3 : vous quitterez le chat pour construire un premier workflow utile
- Jour 4 : vous verrez pourquoi les contrôles déterministes restent indispensables
- Jour 5 à 7 : vous réutiliserez les mêmes garde-fous de prompt, de sortie et de validation

## 6. Résultat attendu

En fin de journée, vous devez être capable de :

- formuler une demande d'audit claire
- demander une réponse structurée
- expliquer pourquoi `temperature = 0` est souvent le bon défaut en audit
- justifier pourquoi certaines données ne doivent jamais partir dans le prompt
