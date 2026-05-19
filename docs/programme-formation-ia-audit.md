# Programme de formation : IA & Agentique pour l'Audit

## IA avancée et systèmes agentiques no-code appliqués à l'audit et à l'analyse de la paie

**Public :** Auditeurs maîtrisant les outils bureautiques et l'analyse de données - aucune compétence en programmation requise

**Objectif :** Concevoir des agents IA no-code capables d'assister ou d'automatiser des tâches d'audit, appliqués au cas concret de l'audit de la paie via les fichiers DSN (Déclaration Sociale Nominative)

---

## Compétences acquises

*   Comprendre l'architecture des LLM, leurs typologies et leurs cas d'usage sans coder.
*   Maîtriser le paramétrage des modèles (température, tokens, niveau de raisonnement) et ses impacts sur la fiabilité.
*   Construire des agents autonomes via des interfaces no-code.
*   Exploiter le RAG (*Retrieval Augmented Generation*) sur des documents RH et DSN.
*   Orchestrer des workflows d'audit intelligents sans ligne de code.
*   Comprendre et configurer le MCP (*Model Context Protocol*) pour connecter des sources de données.
*   Appréhender les bases du fine-tuning de modèles pour des besoins métier spécifiques.
*   Analyser et auditer des fichiers DSN (structure, rémunérations, cotisations).

---

## Programme détaillé

### Jour 1 - Acculturation et Psychologie des Modèles
**Objectif :** Comprendre le potentiel et les limites sans la complexité technique.

*   **Panorama des familles de modèles :** Modèles de rédaction (rapides), modèles de raisonnement (logique complexe), modèles multimodaux (analyse de documents visuels).
*   **Le "cerveau" de l'IA :** Comment un modèle traite l'information.
*   **Sécurité & Confidentialité (Module Critique) :**
    *   Enjeux RGPD et secret professionnel en audit.
    *   Différence entre IA publique et instances privées (Enterprise).
    *   Les bonnes pratiques : anonymisation des données de paie avant traitement.
*   **Prompting métier :** Structurer une requête d'audit (Rôle, Contexte, Tâche, Format).
*   **Atelier : "L'auditeur augmenté" :** Utiliser un modèle de raisonnement pour interpréter une clause complexe de convention collective ou un guide de remplissage DSN.

### Jour 2 - RAG et Maîtrise de la Fiabilité
**Objectif :** Connecter l'IA à ses propres référentiels et valider les résultats.

*   **Le concept de RAG (*Retrieval Augmented Generation*) :** Pourquoi et comment donner une "bibliothèque" de documents à l'IA (Conventions, fiches consignes).
*   **Avec ou sans RAG :** Les différences fondamentales.
*   **Gestion des hallucinations :** Techniques de "Double Check" et de citation des sources.
*   **Atelier :** Créer un assistant documentaire sur les règles de gestion DSN. Tester sa fiabilité sur des cas limites et identifier ses zones d'erreur.

### Jour 3 - Automatisation d'Audit avec n8n
**Objectif :** Sortir du "Chat" pour créer des flux de travail.

*   **Introduction à l'orchestration no-code :** Pourquoi n8n est le pivot de l'audit automatisé.
*   **Manipulation de fichiers plats :** Automatiser la lecture d'un CSV de paie ou d'un export DSN simple.
*   **Le premier workflow d'audit :** Récupération d'un fichier -> Analyse par l'IA -> Envoi d'un résumé par email.
*   **Atelier :** Construire un flux qui détecte automatiquement des libellés de cotisations inhabituels dans un fichier plat et les liste dans un rapport.

### Jour 4 - Connexion aux Données & Limites du Réel
**Objectif :** Manipuler la donnée DSN à grande échelle sans tenter de tout envoyer dans le contexte d’un modèle.

*   **Introduction simplifiée au MCP (*Model Context Protocol*) :** Comment exposer à l’IA des outils et des vues de données (DSN, SIRH, référentiels) de manière contrôlée et traçable, plutôt que d’envoyer directement des fichiers bruts.
*   **Réalité de la donnée massive :** Pourquoi il est contre-productif d’envoyer “un million de lignes” dans un simple chat avec un LLM (limite de contexte, coût, perte de fiabilité), et pourquoi on privilégie des requêtes ciblées, des agrégations et des vues filtrées.
*   **Stratégies de passage à l’échelle :**
    *   Pré-agrégation et filtrage côté outil (Excel, n8n, base de données, service exposé via MCP) avant analyse par l’IA.
    *   Partitionnement des données (par établissement, période, population) et traitement par lots.
    *   Échantillonnage intelligent pour explorer ou contrôler sans analyser toute la base à chaque fois.
*   **Atelier :** Interroger un jeu de données DSN (format CSV) via un agent connecté à une source (par exemple via MCP ou n8n) pour :
    *   Poser des questions ciblées (ex: “liste les salariés dont la variation de brut dépasse X % ce mois-ci”).
    *   Observer à partir de quelle taille de réponse ou complexité de requête le modèle commence à se tromper.
    *   Mettre en place des stratégies de filtrage, d’agrégation ou de découpage pour retrouver une bonne fiabilité.

### Jour 5 - Stratégie : Quand utiliser quoi ?
**Objectif :** Devenir architecte de sa propre solution d'audit.

*   **L'arbre de décision de l'auditeur :**
    *   Quand suffit-il d'un bon Prompt ?
    *   Quand le RAG est-il indispensable ?
    *   Quand ajouter de l’automatisation ?
*   **Le Fine-tuning :** Démonstration des capacités (spécialisation sur la nomenclature comptable) et explicitation des coûts de maintenance/limites.
*   **Gestion des erreurs et Robustesse :**
    *   Créer des "Fallbacks" (que fait l'outil si l'IA ne répond pas ?).
    *   Alerting en cas de comportement anormal de l'agent.
*   **Atelier (Démo) :** Comparaison entre un modèle standard et un modèle "orienté audit" (via Few-shot ou Fine-tuning léger) sur la détection d'anomalies de taux URSSAF.

### Jour 6 - Systèmes Multi-Agents & Human-in-the-loop
**Objectif :** Faire collaborer plusieurs IA sous supervision humaine.

*   **L'équipe d'audit virtuelle :** Un agent pour l'extraction, un agent pour le contrôle de cohérence brut/net, un agent pour la rédaction.
*   **Validation humaine (*Human-in-the-loop*) :** Insérer des points d'arrêt dans n8n où l'auditeur doit valider une anomalie avant que l'IA ne poursuive.
*   **Atelier :** Construire une mini-chaîne de contrôle :
    1.  L'agent 1 détecte une variation de montant suspecte.
    2.  L'agent 2 vérifie si cette variation est justifiée par un changement de statut.
    3.  L'auditeur valide ou rejette l'alerte sur une interface simple.

### Jour 7 - Projet Final : "Product Build"
**Objectif :** Cadrer et prototyper un outil d'audit actionnable.

*   **Méthodologie Product Build :** Partir du besoin métier (quelle anomalie rapporte le plus de risques ?) plutôt que de la technique.
*   **Projet de groupe :** Prototypage d'une solution d'assistance à l'audit DSN 100% no-code (Ingestion -> Contrôle -> Validation humaine -> Rapport final).
*   **Restitution :** Présentation du workflow, de sa grille d'évaluation de fiabilité et de son analyse de conformité RGPD.
