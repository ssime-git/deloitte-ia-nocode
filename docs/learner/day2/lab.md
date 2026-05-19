# Jour 2 — Lab : comparer une réponse libre et une réponse sourcée

## Ce que vous allez construire

Un workflow orienté chat qui pose une question métier, produit une réponse libre, produit une réponse sourcée, puis affiche clairement la différence de fiabilité entre les deux.

Le support DSN-like reste ici un cas d'exercice. Le lab porte sur la fiabilité d'une réponse et sur sa justification par les sources.

## Prérequis

- accès à `n8n`
- corpus pédagogique déjà préparé
- service nécessaire au mode sourcé déjà démarré par le formateur
- credential modèle disponible

## Fichiers d'entrée

- corpus pédagogique monté par le repo
- éventuellement un extrait de question métier fourni par le formateur

Les apprenants n'ont pas à préparer l'indexation ni à manipuler l'infrastructure du corpus pendant ce lab.

## Workflow à ouvrir ou à créer

- nom du workflow : `Jour 2 - Fiabilité et RAG`
- fichier cible dans le repo : `n8n/workflows/day2_rag_fiabilite.json`

Le lab apprenant utilise le **Chat Trigger**. Un second chemin **Déclencheur Manuel** peut exister dans le workflow pour les tests mainteneur et les vérifications sans chat public ; il ne change pas le parcours attendu côté apprenant.

## Étapes

### Étape 1 — Formuler une question vérifiable

Choisissez une question qui appelle une réponse documentée et non une opinion générale. Exemple : demande d'explication d'une règle ou d'un contrôle à partir du corpus fourni.

### Étape 2 — Créer la branche "réponse libre"

Ajoutez une première branche qui envoie la question au modèle sans source supplémentaire. Cette branche sert de comparaison.

### Étape 3 — Créer la branche "réponse sourcée"

Ajoutez une deuxième branche qui enrichit la question avec un accès au corpus déjà préparé. Cette branche doit orienter la recherche vers les bons mots-clés ou identifiants de règles lorsque le cas s'y prête. La sortie doit inclure au moins :

- une réponse synthétique
- une ou plusieurs références
- une mention de limite si la source est insuffisante

### Étape 4 — Comparer

Ajoutez un nœud de synthèse finale qui met côte à côte :

- la réponse libre
- la réponse sourcée
- un commentaire court sur le niveau de confiance

## Checkpoints

- la branche libre répond, même si elle reste générale
- la branche sourcée cite effectivement le corpus
- le workflow sait signaler qu'une réponse est incomplète
- les apprenants peuvent expliquer pourquoi la réponse sourcée est plus exploitable

## Prompts d'essai

Vous pouvez tester avec des questions comme :

- `Quelle règle pédagogique explique qu'un écart URSSAF trop important doit devenir une exception d'audit ? Cite la règle et la limite de la réponse.`
- `Dans le corpus, quelle règle relie une date de sortie présente et un statut de paie encore ACTIF ?`
- `Quelle preuve documentaire est attendue lorsqu'un montant URSSAF observé ne correspond pas au montant attendu ?`

Pour la comparaison libre vs sourcée, demandez-vous à chaque test :

- la branche libre répond-elle de manière plausible mais générale ?
- la branche sourcée cite-t-elle une règle, un identifiant ou une preuve attendue ?
- le workflow sait-il dire quand le corpus ne suffit pas ?

## Sortie attendue

Une vue finale qui permet de comparer :

- ce que le modèle dit seul
- ce qu'il dit avec une source
- quelles règles ou preuves sont réellement citées
- ce qui reste incertain malgré le support documentaire

## Si quelque chose ne fonctionne pas

- vérifiez que le corpus attendu est bien disponible
- vérifiez le nœud ou service de recherche configuré dans l'environnement
- si le souci vient de l'indexation ou du backend, gardez la séance centrée sur l'analyse comparative des réponses
