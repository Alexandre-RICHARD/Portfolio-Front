# TryHard but SlowRun - Le front

## Historique des version

### 0.0.1 `1er juillet 2022`

-   Création des répertoire Github

### 0.1.0 `3 juillet 2022`

-   Mise en place des premiers fichiers, test ok, prêt à coder

### 0.1.1 `3 juillet 2022`

-   Update Readme (penser à prendre l'habitude avant de push)

### 0.2.0 `4 juillet 2022`

-   Réflexion intense et installation quasi complète de tous les outils me semblant nécessaire du react-modèle.
-   Les deux projets (front/back) sont prêts à être commencés, l'environnement de travail est terminé.

### 0.2.1 `4 juillet 2022`

-   Petit patch, retrait de dotenv sur le front et légère correction de commentaires

### 0.3.0 `5 juillet 2022`

-   Début du projet, fin de la construction du plateau d'échecs terminé.
-   Tout est en javascript commun

### 0.4.0 `6 juillet 2022`

-   Plateau terminé avec chaque pièce placé au bon endroit avec des SVG. - Récupération de données depuis le back.
-   Fichier http et baseUrl crées.
-   Prochaine étape, les mouvements des pièces

### 0.5.0 `7 juillet 2022`

-   Début de la gestion des mouvements de chaque pièces.
-   Normalement pions terminées => 1/6.
-   Quelques morceaux temporaires ajoutés, à pas oublier.
-   Début de la construction des events et de la récupération des mouvements possibles.

### 0.6.0 `9 juillet 2022`

-   Jeux d'échecs fonctionnel visuellement parlant.
-   Reste encore des règles à implémenter.
-   Prochaine étape, rangement, coup de propre.
-   Gros progrès, grosse fierté

### 0.6.1 `10 juillet 2022`

-   Beaucoup de micro-correction, de factorisation (avec un peu de dynamisme)
-   Optimisation des appels d'API et mise en forme

### 0.6.2 `10 juillet 2022`

-   Le précédent Readme n'avait pas été enregistré. C'est tout.

### 0.6.3 `10 juillet 2022`

-   Encore un peu de factorisation et fonction unique pour la gestion des mouvements

### 0.6.4 `12 juillet 2022`

-   Quelques modifs
-   Ajout d'un check définitif des cases Highlight si besoin
-   Tri des async/await/promise/then

### 0.6.7 `19 juillet 2022`

-   Rattrapage des versionning du back
-   Modification de la manière de construire les Readme

### 0.6.8 `21 juillet 2022`

-   Retrait des liens dans les SVGs des pièces.
-   Renommage des IDs des SVG
-   Création et stylisation de la modal pour le choix de la pièce lors de la transformation du pion
-   Diverses changements et applications de variables dans le SASS
-   Rajout d'une fonction intermédiaire avant l'envoi d'un moves au back pour gérer le choix de la pièce lors de la transformation du pion
-   Changement dans l'obtention du mouvement concerné par le choix effectué par le joueur. Plus simple, plus de boucle.
-   Gestion de la récupération du choix de pièce et rajout à l'objet envoyé au back

### 0.6.9 `6 août 2022`

-   Très léger changement du checked true permettant de surligner les cases par défaut.

### 0.6.10 `9 août 2022`

-   Rajout du plugin "syntax jsx" pour babel
-   Rajout du parser vue.js pour Eslint
-   Rajout du loader pour vue.js dans la config webpack
-   Changement et dispatch de l'output de Webpack pour régler le problème de compilation et insertion des fichiers
-   Complétion du plugin HtmlWebpackPlugin
-   Rajout de la règle pour le JSX pour la prise en compte des différents types de fichiers
-   Création d'un point de départ pour le projet en vue.js
-   Changement dans la prise en compte du favicon pour qu'il soit reconnu partout
-   Rajout de l'URL online à rendre unique à chaque upload

### 0.6.11 `10 août 2022`

-   Débuggage d'EsLint qui ne fonctionnait plus après l'ajout de vue-eslint-parser
-   Ajout des sourceMap pour sass-loader
-   Remise en vue.js du projet
-   Déplacement des premiers fichiers vue en vue ^^ de faire une organisation propre
-   Création d'un fichier SCSS temporaire afin de rassembler les styles du jeu d'échecs temporaires

### 0.6.12 `10 août 2022`

-   Modification de l'indentation générale du projet avec 12 pour les fichiers et 4 dedans.

### 0.7.0 / 0.7.1 `14 août 2022`

-   Passage en Version 0.7 car l'installation de vue me permet de passer à la seconde grosse partie
-   Rajout de config et vue.config.js dans l'Eslint ignore
-   Changement de la commande serve pour être compatible avec le reload et vue router
-   Les fichiers webpack ont une indentation de 4
-   Rajout de HistoryAPIFallBack true dans le dev config
-   Rajout de vue router
-   Création des futurs logos du site
-   Création des vues qui seront centrales et légères stylisations primaires
-   Router terminés et fonctionnelles pour les routes primaires
-   Création du store avec VueX, nouvellement appelé Penia et intégration des liens avec

### 0.7.2 `14 août 2022`

-   Déplacement et renommage du fichier z.http -> requestTest.http dans un dossier temporaire pour les fichiers qui seront utiles plus tard lors du rassemblement de tous les morceaux de projets
-   Déplacement des fichiers scss du jeu d'échecs en zone temporaire
-   Déplacements des deux logos en zone temporaire
-   Déplacement des 5 fichiers .js et du fichiers html gérant le jeu d'échec en zone temporaire
-   Déplacement de "HistoryAPIFallBack" de webpack.dev.config.js ailleurs pour éviter le doublon de dev-server
-   Début des annotations dans index.js (entrée de l'application), index.html, le router, l'index.scss et du PortfolioStore
-   Le fichier index.scss, point d'entrée des styles utilisés précédemment comporte des importations qui ne seront plus utiles et qui ont été indiquées
-   Renommage du mainRouter en router. Gestion de toutes les routes améliorées avec l'ajout de la notion de children et des routers nommés
-   Réorganisation des vues. Renommage du dossier components en dossier views.
-   Création de sous-dossiers :
    -   Primary qui regroupent les 4 pages principales : Home ; Portfolio ; Try Hard but Slow Run et 404 (Not Found)
    -   Portfolio qui va regoruper les 4 vues différentes
    -   TryHard qui regroupera toutes ses vues
    -   Parts qui regroupent tous les sous-composants réutilisables
-   Création de la vue HomePage pour permettre la redirection vers soit le protfolio, soit le projet TryHard but SlowRun
-   Création des pages principales pour les deux parties du site

### 0.7.3 `14 août 2022`

-   Supression de vue.congfig.js qui ne servait visiblement à rien
-   Achèvement d'annoter tous les fichiers qui le méritait

### 0.7.4 `16 août 2022`

-   Changement dans les liens créé par les router-link avec l'abandon des paths et l'utilisation direct des noms des routes

### 0.7.5 `16 août 2022`

- Rajout d'un SVG pour faire un boutton Revenir à l'accueil en permanance
- Configuration et utilisation de Prettier sur tous le projet

### 0.7.6 `16 août 2022`

- Test et début d'apprivoisement du SVG en template

### 0.7.7 `17 août 2022`

- Rassemblement de tous les styles des views dans un même nouveau fichier portfolio.scss

### 0.7.8 `17 août 2022`

- Changement d'une règle EsLint
- Mise en gitignore du dossier .temp/ contenant les fichiers temporaires ou inutiles
- Quelques changements d'organisations dans les fichiers scss
- Toutes la refonte du style pour s'adapter à la nouvelle hiérarchie des fichiers
- Création des icones en svg nécessaires à l'affichage du responsive
- Nombreux changements dans les vues visant à reprendre au fur et à mesure la nouvelle façon de créer le site (aller on prie pour que cette idée soit pas mal)

### 0.8.0 `17 août 2022`

- Oops, failli faire un giga fail avec les commit/push mais c'est rattrapé. Rajout d'une clé GPG pour vérifié les commits
- Mise en git ignore des fichiers non nécessaires sur Github