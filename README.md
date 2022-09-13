# TryHard but SlowRun - Le front

Bonjour, bienvenue sur mon gros projet. J'avais envie de réunir tous mes projets sur un seul site, de tout rendre tout bien, tout joli, en plus de m'en faire un portfolio. À l'heure où j'écris ces lignes, la partie portfolio n'est pas encore fini mais ça avance bien et cela me permet de me confronter à tellement de problématique et donc d'apprentissage que je me sens progressé vite.

Voici [le site](http://alexandre-richard.fr) en question

## Historique des version

### Version 0

<details>

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

-   Rajout d'un SVG pour faire un boutton Revenir à l'accueil en permanance
-   Configuration et utilisation de Prettier sur tous le projet

### 0.7.6 `16 août 2022`

-   Test et début d'apprivoisement du SVG en template

### 0.7.7 `17 août 2022`

-   Rassemblement de tous les styles des views dans un même nouveau fichier portfolio.scss

### 0.7.8 `17 août 2022`

-   Changement d'une règle EsLint
-   Mise en gitignore du dossier .temp/ contenant les fichiers temporaires ou inutiles
-   Quelques changements d'organisations dans les fichiers scss
-   Toutes la refonte du style pour s'adapter à la nouvelle hiérarchie des fichiers
-   Création des icones en svg nécessaires à l'affichage du responsive
-   Nombreux changements dans les vues visant à reprendre au fur et à mesure la nouvelle façon de créer le site (aller on prie pour que cette idée soit pas mal)

### 0.8.0 `17 août 2022`

-   Oops, failli faire un giga fail avec les commit/push mais c'est rattrapé. Rajout d'une clé GPG pour vérifié les commits
-   Mise en git ignore des fichiers non nécessaires sur Github

### 0.8.1 `17 août 2022`

-   Supression d'un commentaire dans le html original pour ne pas qu'il apparassent dans le chrome dev
-   Gros changement dans le router. Il n'y aura plus de page intermédiaire pour tryhard ou portfolio et les router se situeront dans la home page
-   Renommmage de quelques fichiers pour encore améliorer la lisibilité de l'arborescence 
-   Le reset.css est devenu un fichier scss
-   Supression du portfolio.scss. Il est à présent divisé en 5 partie, le header et les 4 parties différentes du portfolio
-   Remise de la font dans l'index.scss de base, ça ne sert à rien de l'indiquer ailleurs
-   Le fichier app.vue contient désormais le header ainsi que le router principal qui lui servira à diriger vers les grandes zones, au nombre de 3 pour l'instant
-   Le header est fini. Les liens login et register ne fonctionnent pas encore, et la modal responsive n'est pas faite

### 0.8.2 `20 août 2022`

-   Rajout d'une variable path dans la meta des routes pour être affiché dans le BreadCrumb
-   Déplacement de toutes les variables SCSS dans un fichier séparé
-   Création du BreadCrumb qui se fait automatiquement et stylisation

### 0.8.3 `20 août 2022`

-   Rajout du loader pour pdf
-   Finition de la page d'accueil du portfolio mais non stylisé encore
-   Suppression du console.log inutile
-   Sur index.scss, min-width mis en 400px
-   Correction d'un léger bug du BreadCrumb et mise d'un name sur la route intermédiaire du portfolio

### 0.8.4 `20 août 2022`

-   Petite amélioration du Readme.md

### 0.8.5 `23 août 2022`

-   Résolution du problème du white screen au recharhement de la page avec un lien avancé
-   Ajout d'un fichier .htaccess qui sert à paramétrer le serveur en partie, à redirigé le http vers https, à inscrire le html/index.html comme point d'entrée et à rediriger toutes les requêtes de html vers ce fichier (très très content d'avoir trouvé la réponse à ce problème problématique)

### 0.8.6 `24 août 2022`

-   Stylisation et correction de la page pfHome
-   Rajout d'une div page-background pour avoir un bon background en ayant notre contenu à 1000px

### 0.8.7 `27 août 2022`

-   Rajout du .htaccess dans le gitignore
-   Modification d'un commentaire dans la config Webpack
-   Mise en dossier du fichier html et favicon d'origine.
-   Remplacement des 3 projets mis en avant par des vrais données et vraies images
-   Suppression de la partie commentées du Router
-   Changement dans le Store pour prendre en compte les liens et les boutons/modals dans les liens
-   Léger changement dans le style du Header
-   Changement dans le style de la page, mise en appliation des variables
-   Mise en fonction du bouton pour Copier le lien Discord
-   Changement du nom du composant TopLinks

### 0.8.8 `27 août 2022`

-   Rajout d'une petite inscription du build et de la version directement sur la page

### 0.8.9 `27 août 2022`

-   Déplacement et rangement de tous les fichiers de styles et mise à jour des importations
-   Mise dans le store des liens pour les modals
-   Amélioration du reset.scss pour avoir encore plus de contrôle sur le style de certains élements
-   Mise en variables de toutes les couleurs utilisés dans le style
-   Mise en variables de certaines tailles de texte
-   Révision du style pour le header
-   Les transitions sont désormais hérités à tous le projets pour avoir des changements plus fluides (0.4s)
-   Le header change quand on scroll vers le bas
-   Mise en "temporaire" donc suppression des icônes non utilisés
-   Suppression de quelques div et règles CSS non utilisées
-   Les liens de modals générés par composant ne portent plus la fonction, ce qui générait une erreur mais une valeurs qui sera appliquée à une seule fonction commune.
-   Le props link n'est plus indispensable et a une valeur par défaut
-   La div représentant le contenu de la page principale est désormais une balise "main"

### 0.8.10 `27 août 2022`

-   Rétablissement du .htaccess car impossible de le supprimer du projet en l'ignorant de git

### 0.8.11 `27 août 2022`

-   Ressuppression et mise en gitignore de .htaccess car nouvelle idée
-   Rajout d'un dossier .copy pour les potentiels fichiers type "public" mais qui doivent être ignorés sur le commit

### 0.8.12 `29 août 2022`

-   Tentative de trouver d'autres couleurs agréables changeables facilement grace au variables SCSS. À suivre
-   Le padding de la page est réduit en dessous de 700px de large
-   Factorisation et nombreux changements dans le portfolio.scss
-   Quelques changements dans le portfolioHome

### 0.8.13 `29 août 2022`

-   Stylisation des différents boutons en hover avec utilisation d'un faux contenu en before pour que les boutons/liens ne changent pas de taille après
-   Ajout d'attribut title pour chaque afin de faire correspondre le contenu en CSS

### 0.8.14 `29 août 2022`

-   Création d'un début de modal dynamique à l'aide de Pinia. Elle s'ouvre dans 3 cas et se ferme en cliquant à côté
-   Changement du nom des modals dans le store d'origine et création d'un nouveau store

### 0.8.15 `3 septembre 2022`

-   Suppression du try/catch(error) pour le copy en clipboard
-   Mise à jour du CV et donc du lien
-   Création de la modal du Menu avec les liens dedans
-   Gestion de l'ouverture et de la fermeture de la menuModal
-   Factorisation et amélioration de l'ouverture et de la fermeture des accountModal
-   Léger Hover sur le SVG du Menu
-   Stylisation de la modal du Menu

### 0.8.16 `4 septembre 2022`

-   Rajout d'un petit message "copié" quand on clique sur le boutton du Discord pour copier le pseudo

### 0.8.17 `7 septembre 2022`

-   Reprise de la structure du projet pour y implémenterma nouvelle manière de voir le site, ces deux facettes et ainsi mieux reprendre la création de celui-ci car cela commençait à bloquer
-   Mise en .temp, donc sortis du projet tous les fichiers sauf ceux nécessaire à une reprise à zéro du projet
-   Retrait de .htaccess du dossier .copy et remise dans le dossier public. Effectivement, je suis parevenu à le .gitignorer
-   Renommmagede ces quelques fichiers initiaux pour qu'ils soient plus clairs et ainsi moins me perdre dans la suite (mine de rien, l'organisation des fichiers est un petit casse-tête)

### 0.9.0 `9 septembre 2022`

-   Dossier styles/base renommé Base
-   Grosse refonte du site en repartant de zéro et en remettant ce qui a déjà été fait en l'adaptant
-   Instauration d'un site en 3 parties avec Home, Portfolio et TryHard
-   Restructuration du Header pour s'y adapter
-   Rajout d'une variable section dans la meta des routes pour identifier quelle section du site est utilisée
-   Mise en place d'une partie pour changer le thème du site
-   Pour cela, le header comporte des petits boutons sur la gauche et dans le futur, dans la modalMenu pour les petits écrans
-   Aussi, le store comporte les différentes variables de thème de couleur et les variables en css pure (pas en scss) sont changés
-   Séparation des données de liens en 3. POur les 3 parties différentes comme cela, les liens du header correspondent à la partie mais avec toujours la possibilité de revenir au menu de 2 manières
-   Mise dans une pseudo-classe :root les variables d'origine. Peut-être le futur fera que le choix du thème sera enregistré dans un cookie
-   Remplacement de toutes les appels de variales scss par les nouvelles en css var(--###)
-   Quelques animations sur le header
-   Refonte des @media-queries et ajustement
-   accountModal déplacé dans le fichier App.vue d'origine
-   Rajout de la fonction sectionChanger pour gérer le changement de section du site avec les différents Router-Link
-   Remise en place de tous les composants d'avant sauf la page PortfolioHome
-   Instauration des fichiers de composants pour les futures pages

### 0.9.1 `9 septembre 2022`

-   Remise des images utilisé dans pfHome
-   Remise de pfHome et le début de pfContact que j'avais commencé
-   Adaptation des styles pour correspondre au nouvelles variables de couleurs
-   Rajout d'une animation pour le petit span "copié" qui apparait à la suite du clic sur un boutton de copie

### 0.9.2 `10 septembre 2022`

-   Petit correctif pour mettre les couleurs de Background et de title sur chaque couche d'élément qui avait besoin pour ne pas être en retard lors des transition

### 0.9.3 `11 septembre 2022`

-   Synchronisation entre les noms de fichiers vue et des fichiers scss ainsi que leur organisation
-   Mise du NotFound dans un 4ème router-view nommé Other
-   Retrait de deux lignes dans la template SVG du menu-header-icon
-   Tentative de faire un habillage avec des vagues animés, bien avancé mais remis à plus tard

### 0.9.4 `13 septembre 2022`

-   Changement dans l'eslintIgnore pour ignorer le nouveau webpack.config.js
-   Mise à jour des packages NPM
-   Dans package.json, mise à jour des commandes start et build
-   Combinaison des 3 fichiers de config de webpack pour optimiser et mieux gérer/comprendre les paramètres webpack
-   Suppression du fichier paths et imbication de son contenu (que le nécessaire) dans le nouveau fichier
-   Changement de la gestion dev/prod avec des variables d'environnement provenant des commandes npm run
-   Changement de la gestion des fichiers/requête d'image en mettant type="asset" géré par webpack 5
-   Suppression du dossier assets
-   Déplacement du favicon dans src/images
-   Déplacement de toutes les images dans src/images
-   Déplacement d'index.html à la racine du dossier source
-   Début de personnalisation de la page 404
-   Première partie de l'animation 404 réalise avec la Dolorean de retour vers le futur
-   Déplacement de la vue NotFound dans un router dédié
-   Création d'un fichier (peut-être temporaire) scss pour être le point d'entrée

### 0.9.5 `13 septembre 2022`

-   Push de deux fichier non validé par erreur

### 0.9.6 `13 septembre 2022`

-   La hauteur minimal n'est plus sur le page-container mais sur le page-background maintenant
-   Déplacement du NotFound sur le bloc supérieur, dans le page-background
-   Stylisation finie de la transition 404 > Other
-   Mise en place du toggle lors du clic de la Dolorean
-   

</details>