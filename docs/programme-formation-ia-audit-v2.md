# Proposition de planning final - formation IA no-code audit paie/DSN avec n8n

## Positionnement

Formation pratique de 7 jours pour auditeurs paie/RH avec un fil rouge unique :
concevoir dans `n8n` un assistant d'audit paie/DSN-like capable de :

- analyser un cas d'audit
- s'appuyer sur des sources documentaires
- produire des constats structurés
- intégrer une validation humaine
- expliciter ses limites et garde-fous

Cette version vise un meilleur compromis entre :

- progressivité pédagogique
- pratique quotidienne
- pertinence métier
- complexité technique maîtrisée

Le coeur de la formation porte sur :

- le prompting
- les réglages des LLM
- les workflows `n8n`
- le `RAG`
- les agents supervisés
- le `MCP` comme mécanisme d'accès contrôlé à la donnée

La donnée DSN-like reste un support réaliste, mais la formation n'a pas pour objet d'enseigner la DSN en profondeur.

## Principes pédagogiques

- une seule commande de démarrage pour l'environnement ; `Docker` reste en arrière-plan
- un atelier principal par jour
- un livrable visible chaque jour
- pratique prioritaire sur les briques réellement utiles aux auditeurs
- traitement conceptuel des sujets trop lourds pour un atelier crédible

## Préparation amont

- environnement prêt avant la formation via une seule commande de lancement
- accès `n8n` opérationnel pour toute l'équipe
- LLM autorisé : Azure OpenAI, OpenAI, Anthropic, Gemini ou autre solution validée
- corpus documentaire RH/paie déjà préparé pour les ateliers `RAG`
- dataset DSN-like fictif déjà préparé
- aucune donnée réelle de paie ou de DSN
- politique de logs : aucune donnée personnelle réelle dans prompts, sorties ou historiques

## Jeu de données pédagogique

Le dataset utilisé pendant la formation est fictif et sert uniquement de support d'exercice.

Il contient des colonnes représentatives d'un cas paie/DSN-like :

- `periode_declaration`
- `siret_etablissement`
- `matricule_salarie`
- `nir_fictif`
- `nom_fictif`
- `date_entree`
- `date_sortie`
- `type_contrat`
- `salaire_brut`
- `base_urssaf`
- `taux_urssaf`
- `montant_urssaf`
- `base_retraite`
- `montant_retraite`
- `heures_remunerees`
- `statut_paie`

Des anomalies pédagogiques sont injectées pour permettre les démonstrations et ateliers.

## Jour 1 - Fondations LLM, typologies, réglages et prompting

**Objectif**

Donner les repères de base pour utiliser les modèles correctement en contexte audit.

**Contenu**

- typologies de modèles :
  - modèles généralistes
  - modèles de raisonnement
  - modèles multimodaux
  - modèles spécialisés
  - dense vs `MoE` au niveau conceptuel
- quand utiliser quel type de modèle: Différence entre IA publique et instances privées (Enterprise).
- réglages utiles :
  - `temperature`
  - `max_tokens`
  - niveau de raisonnement
  - format de sortie
- limites :
  - hallucinations
  - variabilité
  - traçabilité
- sécurité :
  - données fictives uniquement
  - minimisation
  - pas de donnée sensible réelle dans prompts et logs

**Atelier**

- écrire plusieurs prompts pour un même besoin d'audit
- comparer les sorties selon les réglages
- imposer une sortie structurée exploitable

**Livrables**

- checklist de prompting
- mini-charte sécurité/logs
- template de sortie d'audit structurée

## Jour 2 - Fiabilité, RAG et usage des sources

**Objectif**

Montrer comment améliorer la fiabilité sans prétendre tout résoudre avec le modèle seul.

**Contenu**

- différence entre :
  - prompt seul
  - prompt enrichi par contexte
  - `RAG`
- pourquoi un modèle sans source peut inventer
- principe de citation et de double vérification
- introduction simple au corpus documentaire RH/paie
- limites du `RAG` :
  - source absente
  - source faible
  - réponse trop confiante

**Atelier**

- poser des questions avec et sans source
- comparer les réponses
- produire une réponse sourcée exploitable en audit

**Livrables**

- mini workflow ou démonstration de Q/R sourcée
- grille d'évaluation de la fiabilité
- note de méthode "avec ou sans RAG"

## Jour 3 - n8n niveau 1 : premier workflow utile

**Objectif**

Sortir du chat et construire un flux lisible dans `n8n`.

**Contenu**

- introduction courte à `n8n`
- logique :
  - trigger
  - nodes
  - branchements
  - exécution
  - gestion simple des erreurs
- lecture d'un CSV ou d'une source simple
- premier workflow :
  - entrée
  - préparation
  - appel LLM
  - sortie structurée

**Atelier**

- construire un workflow qui lit un cas simple et produit un résumé d'audit structuré

**Livrables**

- premier workflow `n8n` fonctionnel
- sortie JSON ou tableau
- trace d'exécution simple

## Jour 4 - Contrôles, exceptions et preuves dans n8n

**Objectif**

Ajouter la logique d'audit explicite avant de complexifier avec les agents.

**Contenu**

- pourquoi les règles déterministes restent indispensables
- notions de :
  - contrôle
  - exception
  - preuve
  - sévérité
- utilisation d'un petit jeu de contrôles déjà cadré

**Atelier**

- implémenter 3 contrôles déterministes dans `n8n`
- générer une liste d'exceptions
- formater une fiche d'exception

**Contrôles recommandés**

- doublon salarié/période
- incohérence `base x taux x montant`
- salarié sorti encore actif

**Livrables**

- workflow contrôles v1
- table d'exceptions
- modèle de preuve simple

## Jour 5 - Agents, prompts système et validation humaine

**Objectif**

Introduire l'agentique de façon utile et abordable.

**Contenu**

- qu'est-ce qu'un agent dans `n8n`
- rôle du prompt système
- différence entre :
  - simple appel LLM
  - agent
  - agent outillé
- garde-fous :
  - hypothèses explicites
  - refus
  - format attendu
  - seuil de confiance
- validation humaine `HITL`

**Atelier**

- créer un agent contrôleur ou rédacteur
- rédiger un prompt système
- ajouter une étape de validation humaine

**Livrables**

- workflow agent simple
- prompt système versionné
- sortie avec validation humaine

## Jour 6 - MCP, accès contrôlé à la donnée et passage à l'échelle

**Objectif**

Conserver le `MCP` demandé par le client sans transformer la journée en atelier d'infrastructure.

**Contenu**

- `MCP` expliqué simplement :
  - `MCP` vs API vs `RAG`
  - pourquoi ne pas envoyer des millions de lignes au modèle
  - intérêt des filtres, agrégats et vues ciblées
- cas d'usage :
  - base de données
  - CSV volumineux
  - API métier
- limites :
  - coût
  - latence
  - contexte
  - qualité des requêtes
- aperçu simple du code Python d'un outil `MCP` :
  - entrée
  - sortie
  - filtrage
  - agrégation

**Atelier guidé**

- consommer un outil `MCP` déjà prêt depuis `n8n`
- comparer avec une approche naïve

**Livrables**

- workflow `n8n` avec appel `MCP`
- fiche "quand utiliser MCP"
- compréhension simple du pattern côté Python

## Jour 7 - Projet final : assistant d'audit DSN-like

**Objectif**

Assembler les briques apprises dans un démonstrateur cohérent.

**Flux final**

- ingestion
- analyse ou contrôle
- enrichissement documentaire
- agent de synthèse
- validation humaine
- rapport final

**Atelier**

- construction guidée par groupes
- restitution
- revue finale :
  - fiabilité
  - sécurité
  - limites
  - valeur métier

**Livrables**

- workflow final
- rapport d'audit
- annexes de preuves et sources
- backlog d'amélioration

## Sujets traités au niveau conceptuel

Les sujets suivants sont couverts pour donner des repères de décision, sans atelier technique complet :

- fine-tuning
- typologies détaillées de modèles
- dense vs `MoE` au-delà des repères de choix
- industrialisation complète
- gouvernance avancée multi-environnements

L'angle retenu est :

- quand y penser
- pourquoi
- quels prérequis
- quels coûts et risques

## Synthèse de l'équilibre pédagogique

- **Pratique forte** : J1, J2, J3, J4, J5, J7
- **Pratique guidée + démonstration** : J6
- **Conceptuel court** : typologies de modèles, fine-tuning, passage à l'échelle

## Logique repo cible

Ce planning suppose un repo recentré sur :

- `n8n` comme coeur de la formation
- données et corpus déjà prêts
- `Docker` rendu invisible pour les apprenants
- `MCP` simplifié et montré comme pattern utile
- complexité formateur séparée de l'expérience apprenant
