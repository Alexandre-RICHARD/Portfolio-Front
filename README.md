# TryHard but SlowRun - Le front

## Historique des version

### 0.0.1 ```1er juillet 2022```
- Création des répertoire Github

### 0.1.0 ```3 juillet 2022```
- Mise en place des premiers fichiers, test ok, prêt à coder

### 0.1.1 ```3 juillet 2022```
- Update Readme (penser à prendre l'habitude avant de push)

### 0.2.0 ```4 juillet 2022```
- Réflexion intense et installation quasi complète de tous les outils me semblant nécessaire du react-modèle.
- Les deux projets (front/back) sont prêts à être commencés, l'environnement de travail est terminé.

### 0.2.1 ```4 juillet 2022```
- Petit patch, retrait de dotenv sur le front et légère correction de commentaires

### 0.3.0 ```5 juillet 2022```
- Début du projet, fin de la construction du plateau d'échecs terminé.
- Tout est en javascript commun

### 0.4.0 ```6 juillet 2022```
- Plateau terminé avec chaque pièce placé au bon endroit avec des SVG. - Récupération de données depuis le back.
- Fichier http et baseUrl crées.
- Prochaine étape, les mouvements des pièces

### 0.5.0 ```7 juillet 2022```
- Début de la gestion des mouvements de chaque pièces.
- Normalement pions terminées => 1/6.
- Quelques morceaux temporaires ajoutés, à pas oublier.
- Début de la construction des events et de la récupération des mouvements possibles.

### 0.6.0 ```9 juillet 2022```
- Jeux d'échecs fonctionnel visuellement parlant.
- Reste encore des règles à implémenter.
- Prochaine étape, rangement, coup de propre.
- Gros progrès, grosse fierté

### 0.6.1 ```10 juillet 2022```
- Beaucoup de micro-correction, de factorisation (avec un peu de dynamisme)
- Optimisation des appels d'API et mise en forme

### 0.6.2 ```10 juillet 2022```
- Le précédent Readme n'avait pas été enregistré. C'est tout.

### 0.6.3 ```10 juillet 2022```
- Encore un peu de factorisation et fonction unique pour la gestion des mouvements

### 0.6.4 ```12 juillet 2022```
- Quelques modifs
- Ajout d'un check définitif des cases Highlight si besoin
- Tri des async/await/promise/then

### 0.6.7 ```19 juillet 2022```
- Rattrapage des versionning du back
- Modification de la manière de construire les Readme

### 0.6.8 ```21 juillet 2022```
- Retrait des liens dans les SVGs des pièces.
- Renommage des IDs des SVG
- Création et stylisation de la modal pour le choix de la pièce lors de la transformation du pion
- Diverses changements et applications de variables dans le SASS
- Rajout d'une fonction intermédiaire avant l'envoi d'un moves au back pour gérer le choix de la pièce lors de la transformation du pion
- Changement dans l'obtention du mouvement concerné par le choix effectué par le joueur. Plus simple, plus de boucle.
- Gestion de la récupération du choix de pièce et rajout à l'objet envoyé au back

### 0.6.9 ```6 août 2022```
- Très léger changement du checked true permettant de surligner les cases par défaut.