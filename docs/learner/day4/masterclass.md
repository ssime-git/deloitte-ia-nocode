# Jour 4 — Masterclass : contrôles déterministes, exceptions et preuves

## Ce que vous allez comprendre aujourd'hui

Le problème du jour est la preuve. Un LLM peut aider à lire, résumer ou rédiger. En revanche, quand il faut démontrer qu'une règle est respectée ou non, il faut des contrôles déterministes.

## 1. Pourquoi les règles restent indispensables

Dans un contexte d'audit, certaines vérifications ne doivent pas dépendre de la formulation d'un modèle :

- cohérence d'un calcul
- présence d'une valeur obligatoire
- détection d'un doublon
- repérage d'une situation incohérente

Le rôle d'un contrôle déterministe est de rendre le résultat stable, explicable et rejouable.

## 2. Les concepts qui comptent

- contrôle
- exception
- preuve
- sévérité
- tolérance

Une exception n'est pas encore une conclusion d'audit. C'est un signal qui mérite analyse, justification ou correction.

## 3. Positionnement sur le support DSN-like

Le support DSN-like sert ici de terrain d'application pour des contrôles et des preuves. L'enjeu de la journée reste la méthode IA/no-code, pas une couverture exhaustive du domaine DSN.

Le but n'est donc pas de couvrir toute la richesse d'un domaine paie. Le but est de montrer comment cadrer quelques règles utiles, documenter leurs résultats, puis les réutiliser proprement dans les journées suivantes.

## 4. Ce que vous allez construire

Vous allez travailler sur `Jour 4 - Contrôles et exceptions`.

Le workflow du jour doit :

- lire un petit jeu de données fictives
- appliquer trois contrôles déterministes
- produire une liste d'exceptions
- formater une preuve simple pour chaque exception

La logique doit rester courte et visible. On cherche une démonstration robuste, pas un moteur de règles exhaustif.

## 5. Pourquoi cette journée prépare l'agentique

Les agents du Jour 5 et l'intégration du Jour 7 ont besoin d'une base fiable. Sans contrôles déterministes, l'agent commenterait des signaux incertains. Avec une liste d'exceptions stable, il pourra au contraire :

- prioriser
- expliquer
- demander validation humaine

## 6. Résultat attendu

En fin de journée, vous devez être capable de :

- expliquer pourquoi un calcul ne doit pas être confié au LLM
- distinguer un contrôle d'une interprétation
- produire une exception avec suffisamment de contexte pour être relue
