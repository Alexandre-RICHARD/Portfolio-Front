# Portfolio - Le front

Bonjour, bienvenue sur le répo de mon portfolio. J'y présente mon CV, mes projets ainsi que mes contacts. Les projets présentés sont accessibles depuis le site mais hébergés séparemment sur des sous-domaines afin d'être libre sur les technologies utilisées.
Il s'agit ici du front avec ci-dessous l'historique des version et leur détails.

Voici [le site](http://rial7539.odns.fr/) en question.

Et voici [le répo du serveur](https://github.com/Alexandre-RICHARD/Portfolio-Back).

## Historique des versions

### Version 0

<details>

### build 0 - 0.0.1 `1er juillet 2022`

-   Création des répertoire Github

### build 1 - 0.1.0 `3 juillet 2022`

-   Mise en place des premiers fichiers, test ok, prêt à coder

### build 2 - 0.1.1 `3 juillet 2022`

-   Update Readme (penser à prendre l'habitude avant de push)

### build 3 - 0.2.0 `4 juillet 2022`

-   Réflexion intense et installation quasi complète de tous les outils me semblant nécessaire du react-modèle.
-   Les deux projets (front/back) sont prêts à être commencés, l'environnement de travail est terminé.

### build 4 - 0.2.1 `4 juillet 2022`

-   Petit patch, retrait de dotenv sur le front et légère correction de commentaires

### build 5 - 0.3.0 `5 juillet 2022`

-   Début du projet, fin de la construction du plateau d'échecs terminé.
-   Tout est en javascript commun

### build 6 - 0.4.0 `6 juillet 2022`

-   Plateau terminé avec chaque pièce placé au bon endroit avec des SVG. - Récupération de données depuis le back.
-   Fichier http et baseUrl crées.
-   Prochaine étape, les mouvements des pièces

### build 7 - 0.5.0 `7 juillet 2022`

-   Début de la gestion des mouvements de chaque pièces.
-   Normalement pions terminées => 1/6.
-   Quelques morceaux temporaires ajoutés, à pas oublier.
-   Début de la construction des events et de la récupération des mouvements possibles.

### build 8 - 0.6.0 `9 juillet 2022`

-   Jeux d'échecs fonctionnel visuellement parlant.
-   Reste encore des règles à implémenter.
-   Prochaine étape, rangement, coup de propre.
-   Gros progrès, grosse fierté

### build 9 - 0.6.1 `10 juillet 2022`

-   Beaucoup de micro-correction, de factorisation (avec un peu de dynamisme)
-   Optimisation des appels d'API et mise en forme

### build 10 - 0.6.2 `10 juillet 2022`

-   Le précédent Readme n'avait pas été enregistré. C'est tout.

### build 11 - 0.6.3 `10 juillet 2022`

-   Encore un peu de factorisation et fonction unique pour la gestion des mouvements

### build 12 - 0.6.4 `12 juillet 2022`

-   Quelques modifs
-   Ajout d'un check définitif des cases Highlight si besoin
-   Tri des async/await/promise/then

### build 13 - 0.6.7 `19 juillet 2022`

-   Rattrapage des versionning du back
-   Modification de la manière de construire les Readme

### build 14 - 0.6.8 `21 juillet 2022`

-   Retrait des liens dans les SVGs des pièces.
-   Renommage des IDs des SVG
-   Création et stylisation de la modal pour le choix de la pièce lors de la transformation du pion
-   Diverses changements et applications de variables dans le SASS
-   Rajout d'une fonction intermédiaire avant l'envoi d'un moves au back pour gérer le choix de la pièce lors de la transformation du pion
-   Changement dans l'obtention du mouvement concerné par le choix effectué par le joueur. Plus simple, plus de boucle.
-   Gestion de la récupération du choix de pièce et rajout à l'objet envoyé au back

### build 15 - 0.6.9 `6 août 2022`

-   Très léger changement du checked true permettant de surligner les cases par défaut.

### build 16 - 0.6.10 `9 août 2022`

-   Rajout du plugin "syntax jsx" pour babel
-   Rajout du parser vue.js pour Eslint
-   Rajout du loader pour vue.js dans la config webpack
-   Changement et dispatch de l'output de Webpack pour régler le problème de compilation et insertion des fichiers
-   Complétion du plugin HtmlWebpackPlugin
-   Rajout de la règle pour le JSX pour la prise en compte des différents types de fichiers
-   Création d'un point de départ pour le projet en vue.js
-   Changement dans la prise en compte du favicon pour qu'il soit reconnu partout
-   Rajout de l'URL online à rendre unique à chaque upload

### build 17 - 0.6.11 `10 août 2022`

-   Débuggage d'EsLint qui ne fonctionnait plus après l'ajout de vue-eslint-parser
-   Ajout des sourceMap pour sass-loader
-   Remise en vue.js du projet
-   Déplacement des premiers fichiers vue en vue ^^ de faire une organisation propre
-   Création d'un fichier SCSS temporaire afin de rassembler les styles du jeu d'échecs temporaires

### build 18 - 0.6.12 `10 août 2022`

-   Modification de l'indentation générale du projet avec 12 pour les fichiers et 4 dedans.

### build 19 - 0.7.0 / 0.7.1 `14 août 2022`

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

### build 20 - 0.7.2 `14 août 2022`

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
-   Création de la vue HomePage pour permettre la redirection vers soit le portfolio, soit le projet TryHard but SlowRun
-   Création des pages principales pour les deux parties du site

### build 21 - 0.7.3 `14 août 2022`

-   Supression de vue.congfig.js qui ne servait visiblement à rien
-   Achèvement d'annoter tous les fichiers qui le méritait

### build 22 - 0.7.4 `16 août 2022`

-   Changement dans les liens créé par les router-link avec l'abandon des paths et l'utilisation direct des noms des routes

### build 23 - 0.7.5 `16 août 2022`

-   Rajout d'un SVG pour faire un boutton Revenir à l'accueil en permanance
-   Configuration et utilisation de Prettier sur tous le projet

### build 24 - 0.7.6 `16 août 2022`

-   Test et début d'apprivoisement du SVG en template

### build 25 - 0.7.7 `17 août 2022`

-   Rassemblement de tous les styles des views dans un même nouveau fichier portfolio.scss

### build 26 - 0.7.8 `17 août 2022`

-   Changement d'une règle EsLint
-   Mise en gitignore du dossier .temp/ contenant les fichiers temporaires ou inutiles
-   Quelques changements d'organisations dans les fichiers scss
-   Toutes la refonte du style pour s'adapter à la nouvelle hiérarchie des fichiers
-   Création des icones en svg nécessaires à l'affichage du responsive
-   Nombreux changements dans les vues visant à reprendre au fur et à mesure la nouvelle façon de créer le site (aller on prie pour que cette idée soit pas mal)

### build 27 - 0.8.0 `17 août 2022`

-   Oops, failli faire un giga fail avec les commit/push mais c'est rattrapé. Rajout d'une clé GPG pour vérifié les commits
-   Mise en git ignore des fichiers non nécessaires sur Github

### build 28 - 0.8.1 `17 août 2022`

-   Supression d'un commentaire dans le html original pour ne pas qu'il apparassent dans le chrome dev
-   Gros changement dans le router. Il n'y aura plus de page intermédiaire pour tryhard ou portfolio et les router se situeront dans la home page
-   Renommmage de quelques fichiers pour encore améliorer la lisibilité de l'arborescence
-   Le reset.css est devenu un fichier scss
-   Supression du portfolio.scss. Il est à présent divisé en 5 partie, le header et les 4 parties différentes du portfolio
-   Remise de la font dans l'index.scss de base, ça ne sert à rien de l'indiquer ailleurs
-   Le fichier app.vue contient désormais le header ainsi que le router principal qui lui servira à diriger vers les grandes zones, au nombre de 3 pour l'instant
-   Le header est fini. Les liens login et register ne fonctionnent pas encore, et la modal responsive n'est pas faite

### build 29 - 0.8.2 `20 août 2022`

-   Rajout d'une variable path dans la meta des routes pour être affiché dans le BreadCrumb
-   Déplacement de toutes les variables SCSS dans un fichier séparé
-   Création du BreadCrumb qui se fait automatiquement et stylisation

### build 30 - 0.8.3 `20 août 2022`

-   Rajout du loader pour pdf
-   Finition de la page d'accueil du portfolio mais non stylisé encore
-   Suppression du console log inutile
-   Sur index.scss, min-width mis en 400px
-   Correction d'un léger bug du BreadCrumb et mise d'un name sur la route intermédiaire du portfolio

### build 31 - 0.8.4 `20 août 2022`

-   Petite amélioration du Readme.md

### build 32 - 0.8.5 `23 août 2022`

-   Résolution du problème du white screen au recharhement de la page avec un lien avancé
-   Ajout d'un fichier .htaccess qui sert à paramétrer le serveur en partie, à redirigé le http vers https, à inscrire le html/index.html comme point d'entrée et à rediriger toutes les requêtes de html vers ce fichier (très très content d'avoir trouvé la réponse à ce problème problématique)

### build 33 - 0.8.6 `24 août 2022`

-   Stylisation et correction de la page pfHome
-   Rajout d'une div page-background pour avoir un bon background en ayant notre contenu à 1000px

### build 34 - 0.8.7 `27 août 2022`

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

### build 35 - 0.8.8 `27 août 2022`

-   Rajout d'une petite inscription du build et de la version directement sur la page

### build 36 - 0.8.9 `27 août 2022`

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

### build 37 - 0.8.10 `27 août 2022`

-   Rétablissement du .htaccess car impossible de le supprimer du projet en l'ignorant de git

### build 38 - 0.8.11 `27 août 2022`

-   Ressuppression et mise en gitignore de .htaccess car nouvelle idée
-   Rajout d'un dossier .copy pour les potentiels fichiers type "public" mais qui doivent être ignorés sur le commit

### build 39 - 0.8.12 `29 août 2022`

-   Tentative de trouver d'autres couleurs agréables changeables facilement grace au variables SCSS. À suivre
-   Le padding de la page est réduit en dessous de 700px de large
-   Factorisation et nombreux changements dans le portfolio.scss
-   Quelques changements dans le portfolioHome

### build 40 - 0.8.13 `29 août 2022`

-   Stylisation des différents boutons en hover avec utilisation d'un faux contenu en before pour que les boutons/liens ne changent pas de taille après
-   Ajout d'attribut title pour chaque afin de faire correspondre le contenu en CSS

### build 41 - 0.8.14 `29 août 2022`

-   Création d'un début de modal dynamique à l'aide de Pinia. Elle s'ouvre dans 3 cas et se ferme en cliquant à côté
-   Changement du nom des modals dans le store d'origine et création d'un nouveau store

### build 42 - 0.8.15 `3 septembre 2022`

-   Suppression du try/catch(error) pour le copy en clipboard
-   Mise à jour du CV et donc du lien
-   Création de la modal du Menu avec les liens dedans
-   Gestion de l'ouverture et de la fermeture de la menuModal
-   Factorisation et amélioration de l'ouverture et de la fermeture des accountModal
-   Léger Hover sur le SVG du Menu
-   Stylisation de la modal du Menu

### build 43 - 0.8.16 `4 septembre 2022`

-   Rajout d'un petit message "copié" quand on clique sur le boutton du Discord pour copier le pseudo

### build 44 - 0.8.17 `7 septembre 2022`

-   Reprise de la structure du projet pour y implémenterma nouvelle manière de voir le site, ces deux facettes et ainsi mieux reprendre la création de celui-ci car cela commençait à bloquer
-   Mise en .temp, donc sortis du projet tous les fichiers sauf ceux nécessaire à une reprise à zéro du projet
-   Retrait de .htaccess du dossier .copy et remise dans le dossier public. Effectivement, je suis parevenu à le .gitignorer
-   Renommmagede ces quelques fichiers initiaux pour qu'ils soient plus clairs et ainsi moins me perdre dans la suite (mine de rien, l'organisation des fichiers est un petit casse-tête)

### build 45 - 0.9.0 `9 septembre 2022`

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

### build 46 - 0.9.1 `9 septembre 2022`

-   Remise des images utilisé dans pfHome
-   Remise de pfHome et le début de pfContact que j'avais commencé
-   Adaptation des styles pour correspondre au nouvelles variables de couleurs
-   Rajout d'une animation pour le petit span "copié" qui apparait à la suite du clic sur un boutton de copie

### build 47 - 0.9.2 `10 septembre 2022`

-   Petit correctif pour mettre les couleurs de Background et de title sur chaque couche d'élément qui avait besoin pour ne pas être en retard lors des transition

### build 48 - 0.9.3 `11 septembre 2022`

-   Synchronisation entre les noms de fichiers vue et des fichiers scss ainsi que leur organisation
-   Mise du NotFound dans un 4ème router-view nommé Other
-   Retrait de deux lignes dans la template SVG du menu-header-icon
-   Tentative de faire un habillage avec des vagues animés, bien avancé mais remis à plus tard

### build 49 - 0.9.4 `13 septembre 2022`

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

### build 50 - 0.9.5 `13 septembre 2022`

-   Push de deux fichier non validé par erreur

### build 51 - 0.9.6 `13 septembre 2022`

-   La hauteur minimal n'est plus sur le page-container mais sur le page-background maintenant
-   Déplacement du NotFound sur le bloc supérieur, dans le page-background
-   Stylisation finie de la transition 404 > Other
-   Mise en place du toggle lors du clic de la Dolorean

### build 52 - 0.9.7 `13 septembre 2022`

-   Utilisation de Prettier sur tous les fichiers du projets pour unformiser le code et avoir un projet plus propre
-   Préservation du index.scss de base mais déplacement à la racine du dossier source pour avoir html/js/css au même endroit

### build 53 - 0.9.8 `14 septembre 2022`

-   Petite modification dans le background image du fire (NotFound) pour que la hauteur soit de 15px, avec le repeat et la proportion conservé

### build 54 - 0.9.9 `14 septembre 2022`

-   Petite mise à jour du NotFound pour qu'il s'adaptent correctement au changement de couleur du thème. CAD, mettre la propriétés background à chaque élément

### build 55 - 0.9.10 `14 septembre 2022`

-   Création d'un composant dédier à la palette de couleur/thème
-   Les liens account du header ne sont plus en width 100% au dessus de 820px pour laisser place aux autres liens
-   Correction de quelques couleurs lors des transitions
-   Ajout d'une flèche dans la modal du menu avec "retour à l'accueil", agtandi par rapport au reste
-   Suppression du @media responsive 700 pixels et transfert sur les 820px
-   La stylisation de la palette à son propre fichier avec des styles séparés pour le header et le menu-modal

### build 56 - 0.9.11 `15 septembre 2022`

-   Changement dans le router pour que portfolio et tryhard ne soit plus enfant de home afin que home soit indépendante en terme de contenu
-   Dans Breadcrumb, changement de 1 à 0 pour la recherche de route.matched afin de gérer le changement de section pour l'affichage des liens
-   Déplacement des deux router secondaires pour les mettre dans app plutôt que dans homePage afin de pouvoir avoir une page séparée

### build 57 - 0.9.12 `17 septembre 2022`

-   La stylisation de page-container et page-background est maintenant sur \_index.scss pour simplifier et unifier le style de HomePage
-   Création et stylisation de la page HomePage avec un jeu de Mastermind fonctionnel

### build 58 - 0.9.13 `17 septembre 2022`

-   Création d'une div pour entouré chaque ligne du mastermind et se séparer de la width sur l'élément parent
-   Changement du border-radius pour éliminer le petit effet moche
-   Mise du header en z-index 1 pour qu'il passe par dessus le contenu de la page

### build 59 - 0.9.14 `20 septembre 2022`

-   Changement de deux couleurs pour le mode light
-   Rajout d'une image servant de photo 'officielle'
-   Première partie de la page Curriculum, toujours en construction

### build 60 - 0.9.15 `20 septembre 2022`

-   Finition du style des expérience profesionnelles
-   Rajout de petite div pour pouvoir faire une box-shadow à moitié caché
-   Mise en place de z-index 10 pour le header et les account Modal

### build 61 - 0.9.16 `20 septembre 2022`

-   Quelques corrections dans le textes, que ce soit le contenu ou l'orthographe
-   Rajout d'une petite marge pour chaque grosse box du Curriculum

### build 62 - 0.9.17 `21 septembre 2022`

-   Fin de la stylisation pour la catégories "expériences profesionnelles"
-   Découverte d'un petit bug global au site assez compliqué à comprendre, remis à plus tard car vraiment pas gênant

### build 63 - 0.9.18 `21 septembre 2022`

-   Quelques factorisations dans le SCSS de la page CV du Portfolio
-   Fin de la stylisation primaire de la page CV du Portfolio
-   Finition du contenu de la page CV du Portfolio
-   Mise du contenu du CV en array

### build 64 - 0.9.19 `22 septembre 2022`

-   Rajout d'un petit encadré comme le projet versionning pour afficher en direct le prix de l'Etherum
-   Contient également en direct le gain ou la perte que je fais

### build 65 - 0.9.20 `22 septembre 2022`

-   Rajout de la partie vente de l'Etherum et également de l'affichage de la croissance avec un pourcentage

### build 66 - 0.9.21 `24 septembre 2022`

-   Rajout de formulaire pour rentrer directement les prix dans la page gain et ainsi rendre l'outil utilisable à souhait
-   Interface primaire mais suppression du petit encadré en bas à gauche et présence uniquement de la page via /gain
-   Rajout de la route correspondante dans le router

### build 67 - 0.9.22 `29 septembre 2022`

-   Grosse mise à jour après pas mal de jours sans avoir trop avancé, remise sur le projet plein pot
-   Mise à jour des package npm
-   La page "gain" consacré à mes petites expérience lié à l'Etherum, le résultat va venir changer le titre de la page pour une meilleure visibilité
-   Tentative de mettre le package-lock.json en .gitignore
-   Pour la page contact, création et mise en dossier des logo des différents launcher
-   Les informations des différents contacts sont maintenant dans le store plutôt que dans le script car...
-   ...les 3 liens dans la page d'accueil du portfolio sont gérés par le même composant que la page contact
-   Création, dynamisation, stylisation et finition de la page contact - partie liens
-   Rajout d'un petit logo copie pour indiquer à l'utilisateur que c'est possible
-   Les liens sont tous générés dynamiquement
-   Adaptation vis-à-vis de la recherche des logos car gérés en assets par webpack et convertis en base64
-   Prise en compte du responsive
-   Suppression de l'effet du hover sur les liens de contact de la page d'accueil du portfolio

### build 68 - 0.9.23 `29 septembre 2022`

-   Mise à jour du logo de Gog, le launcher afin de le rendre plus distingable
-   Mise en place d'un fichier baseUrl.js pour les futures et très prochaines relation avec la BDD
-   Mise en place d'un formulaire de contact avec récupération des données et envoi en back, l'envoi du mail derrière n'est pas encore fonctionnel

### build 69 - 0.9.24 `5 octobre 2022`

-   Changement dans la gestion de l'affichage des projets
-   Remplacement des images d'illustration par un placeholder qui sera remplacé une fois plus de 3 projets incorporés
-   Mise à jour des packages NPM
-   Rajout d'une route dédiée au projet détaillée avec donc une route par projet
-   Rajout de la liste des projets avec leurs détails dans le store de Pinia
-   Création et utilisation d'un même composant pour créer le container et les différentes div de projets que ce soit sur la page projet ou sur la page Home
-   Suppression de la template des projets dans pfHome et du style correspondant pour le remplacer par l'appel du composant dynamique
-   Dans pfHome, l'affichage des projets est rendu aléatoire, 3 projets parmi tous sont affichés dans un ordre aléatoire
-   Changement de la valeur d'un coefficient dans EhterumFollow.vue 0.999 -> 0.99747
-   Initialisation et préparation à la création de la page de détails de chaque projet

### build 70 - 0.9.25 `5 octobre 2022`

-   Rajout d'un dossier large pour les images d'illustration de projets afin d'avoir des images légères à charger lors de l'aperçu de tous
-   Le breadcrumb n'a plus de z-index qui était inutile
-   Modification des données de projets pour les rendre plus précise et rendre le côté temporaire des 2 projets factices plus clair
-   Changement de la variable number passé au projectContainer de null à 0 pour la page pfProject
-   Création et stylisation de la page ProjectDetails qui permet d'accéder à tous les détails d'un projet

### build 71 - 0.9.26 `6 octobre 2022`

-   Ajout de <base href="/"> dans le document HTML de base pour contrer les problèmes de redirection et de recherche de ressources
-   Problème du lien pour le portfolio project réglé

### build 72 - 0.9.27 `7 octobre 2022`

-   Création du contenu de la modal Account avec deux formulaire semi-dynamique de connexion ou d'inscription
-   Stylisation basique de ces formulaires
-   Changement du nom de toutes les variables formulaires pour le formulaire de contact
-   Ajout de autocomplete pour chaque input

### build 73 - 0.9.28 `10 octobre 2022`

-   Changement de la fonction gérant la fermeture de la modal de compte afin qu'elle puisse gérer le changement de modal entre connexion et inscription
-   Changement dans l'objet qui contient les valeurs des 6 inputs en remplacement le null par une string vide
-   Création d'un système de stockage de message d'erreur lors de l'analyse des value d'input
-   Objet fonction avec les 6 fonctions de tests pour chaque input uniquement lors du submit
-   Rajout de diverse conditions à travers les regex pour valider ou nom les valeurs entrées par l'user
-   Affichage des messages d'erreurs sous les différents input
-   Ajout d'un bouton pour changer d'une modal à l'autre si déjà un compte : inscription -> connexion ; si pas de compte connexion -> inscription
-   Modification de l'opacité du cache de la modal
-   Rajout d'une largeur minimum pour la modal même si normalement, 350px n'est jamais atteind
-   Augmentation de la largeur de la bordure de la modal
-   Stylisation des messages d'erreur et du bouton de changement de modal
-   Les boutons submit des formulaire ont maintenant une bordure invisible pour prévoir la taille définitive lors du hover

### build 74 - 0.9.29 `11 octobre 2022`

-   Factorisation importante des 6 inputs des modals de connexion
-   Renommage d'une classe CSS : password-error-box -> error-box
-   Création d'un composant gérant la création des inputs
-   Supression des consoles.log inutiles
-   Création d'une fonction changeInputValue qui va recevoir les emit du composant enfant pour changer les valeurs d'input
-   Installation de l'appel des 6 input via le nouveau composant
-   Utilisation de la fonction emit permettant de transmettre une données du fils au parent lors du trigger d'un event

### build 75 - 0.9.30 `11 octobre 2022`

-   Ajout d'une fonction détectant la perte de focus de chacun des input
-   Une nouvelle fonction emit existe ainsi dans le sous-composant
-   Cette fonction appelle le test spécifique de cet input
-   Ainsi, les tableaux d'erreurs sont maintenant vidés dans les sous-fonction plutôt que dans les fonction submit
-   La vérification du passwordConfirmation ne fait plus appel à deux paramètres de fonction mais à un seul et va chercher le mot de passe d'origine dans l'object spécifique
-   Supression des deux videurs d'array
-   Ajout d'un return true or false pour chaque test afin de pouvoit styliser les input selon ce simple résultat
-   Rajout d'un style léger pour les input afin de reconnaître le fait qu'ils soient ou non correctement remplis

### build 76 - 0.9.31 `11 octobre 2022`

-   Installation de "zxcvbn", le mesureur de puissance d'un mot de passe par DropBox
-   La fonction stylisant les inputs à la perte de focus ne fonctionne que si l'input a au moins 1 caractère
-   Rajout d'une progress bar si l'input de registerPassword a au moins un caractère pour indiquer la puissance du mot de passe

### build 77 - 0.9.32 `11 octobre 2022`

-   Légère modification du style (size et margin) pour la photo du Curriculum
-   Modification du texte sur la page d'accueil du site
-   Modification du texte de présentation dans le curriculum
-   Mise en commentaires d'une variables pour correspondre à EsLint
-   Mise à jour des package npm (comme à chaque commit mais je le notifie de temps en temps)
-   Mise en forme de la section "Features à venir" du Readme pour qu'elle soit plus clair

### build 78 - 0.9.33 `12 octobre 2022`

-   Utilisation de Prettier sur tout le projet

### build 79 - 0.9.34 `12 octobre 2022`

-   Changement dans les fonctions gérant les submit d'account. Les données sont maintenant en objet pour un envoi global au serveur
-   Dans le cas ou tous les feux sont verts, on appelle les fonctions connection ou registration pour lancer un appel API, pour le moment sans effet

### build 80 - 0.9.35 `13 octobre 2022`

-   Rajout de "node": true dans le fichier de configuration d'EsLint
-   Création de fichier contenant des variables d'environnement afin de changer automatiquement d'adresse d'API en fonction du mode dev/run ou prod/build
-   Mise en gitignore de ces fichiers
-   Installation de dotenv-webpack pour gérer ces fichiers
-   Mise en devDependencies de Vue et de Zxcvbn
-   ProjectVersionning, le petit encadré en bas à droite qui indique la version va maintenant récupérer la valeur depuis le package.json

### build 81 - 0.9.36 `14 octobre 2022`

-   Petit changement dans le début de Readme pour qu'il soit conforme à celui du front et à l'évolution actuelle du projet
-   Utilisation de la variable d'environnement pour l'importer dans les composants qui ont des requêtes à faire
-   Rajout d'un fichier scss temporaire pour les moments de débug ou les gros tests pas beaux
-   Supression du fichier baseUrl.js qui n'a donc plus son utilité

### build 82 - 0.9.37 `14 octobre 2022`

-   Le dossier build devient .dist pour le placer en haut de liste
-   Adaptation des commandes dans le package.json

### build 83 - 0.9.38 `15 octobre 2022`

-   Mise à jour des packages npm
-   Code review de tous le projet avec quelques corrections mais surtout l'identification de nombreux point à changer et à améliorer (liste en dessous)
-   Ajout de Webpack-Bundle-Analyzer, plugin qui permet d'ouvrir lors du start/build une page montrant les fichiers de compilations créés, leur taille et ce qu'ils contiennent
-   Mise en commentaires des fichiers suivants (pas pour tout, uniquement les choses qui me semblaient importantes à expliquer, fonctions complexes, package, configuration...) :
-   Index.html
-   Index.js
-   Index.scss
-   Router.js
-   \_index.scss
-   \_variables.scss
-   EtherumFollow.scss
-   NotFound.scss
-   App.vue
-   NotFound.vue
-   pfContact.vue
-   pfCurriculum.vue
-   pfHome.vue
-   pfProjectDetails.vue
-   pfProjects.vue
-   thsrHome.vue
-   AccountModal.vue
-   AccountModalInput.vue
-   BreadCrumb.vue
-   ContactButton.vue
-   ProjectContainer.vue
-   ProjectVersionning.vue
-   SiteHeader.vue
-   ThemePallet.vue
-   Placement de quelques commentaires spéciaux pour indiquer des zones à changer plus tard
-   Renommage de \_elTempo.scss en \_temporary.scss
-   Suppression des deux event.preventDefault() dans AccountModal.vue
-   Dans AccountModalInput.vue, zxcvbn n'est plus chargé pareil. Il est maintenant chargé uniquement à l'appel de la fonction chargé de modifier le contenu du password. Cela est très économe pour la compilation des fichiers
-   Une variable en ref est donc indispensable, elle contient la valeur du score de sécurité du mot de passe
-   La progressbar a maintenant un max à 18, plutôt que 16
-   Dans ProjectContainer.vue, la fonction slice pour raccourcir le tableau est maintenant dynamique au nombre de projet demandé en appelant le composant
-   Dans le header, changement du nom de la fonction "AccountModal" => "handleChangeModal"
-   Complétion du Readme avec toutes les ToDo que j'avais fait à droite à gauche pour centraliser

### build 84 - 0.9.39 `16 octobre 2022`

-   Suppression des importations de WaveDecorations et mise en temporaire des fichiers concernés
-   Retrait de toute notion de section référent à la navigation.
-   Ainsi, les fonctions sectionChanger et ses appels contenus dans SiteHeader.vue, breadCrumb.vue,
-   Cela avait pour but de simplifier le site en supprimant la partie TryHard but Slow Run que je n'avais pas encore commencé.
-   Les liens dans le header ou dans la modal du Menu sont donc maintenant toujours les mêmes impliquant la suppression des autres dans le store
-   Gros changement dans le BreadCrumb. Les données de chemin ne sont plus générés directement à partir des différents route.matched mais à partir des données BreadCrumb contenu dans le meta du dernier path
-   Utilisation du hook watch de vue pour réagir aux changements de route et d'un array reactive
-   Suppression de 3 consoles.log oubliés
-   Suppression du composant de la page TryHard but SlowRun
-   Adaptation du texte de la HomePage pour convenir à ces nouveaux changements
-   Suppresion du VueRouter tryhard
-   Changement du lien pour le projet de jeu d'échecs
-   Modification de quelques titres de pages
-   Rajout dans le Store dans le différents dossier meta des informations qui servent à créer le BreadCrumb
-   Lors d'un changement de page, le scrolling revient en haut de la page après 200ms
-   La largeur minimum du projet est maintenant de 386 pixels contre 400 avant pour rejoindre le minimum de 400px souhaité. En effet, le padding causait un petit surplus.

### build 85 - 0.9.40 `19 octobre 2022`

-   Mise à jour des packages NPM
-   Mise en commantaires du plugin d'analyse des packages "BundleAnalyzerPlugin"
-   Mise en commentaires de la fonction sendMail de la page Contact, tant qu'elle ne sera pas utilisée
-   Remise du Event.preventDefault() car nécessaire sur le site hébergé
-   Ajout de la récupération de la réponse pour le register

### build 86 - 0.9.41 `21 octobre 2022`

-   Rajout d'un nouveau sous-tableau pour les tableaux d'erreurs respectifs de login et de register afin d'y rentrer et donc d'afficher les informations gloables (succès, identifiants incorrect, erreurs)
-   Suppression de chaque ligne type errorDataRegister[0].length = 0 et ajout d'une fonction dédiée qui va boucler sur les deux tableaux afin de vider les tous les sous-tableaux
-   Changement dans la manière de vérifier si tous les tests regex ont été concluants avec la méthode every.
-   Récupération du status des deux requêtes register/login afin de l'utiliser pour inclure un message d'erreur si code 500.
-   Mise en place d'une série de test avec switch case pour inclure les messages d'erreur au bon endroit en fonction de la réponse reçue pour les deux requêtes
-   Rajout d'une petite div déjà utilisé ailleurs dans les formulaire pour inclure les messages d'informations globales

### build 87 - 0.9.42 `22 octobre 2022`

-   Mise à jour des packages npm
-   Création, importation du composant et du fichier scss pour la page user.
-   Copie d'une grande partie du style depuis accountModal. A factoriser plus tard
-   Création de la route permettant d'accéder à cette nouvelle page
-   Création d'un objet account dans le store chargé de récupérer les informations de connexion
-   Rajout de deux fonctionnalités pour le projet portfolio
-   Renommage d'une fonction dans le composant de la page NotFound (404)
-   Lors d'une inscription/connexion réussie, les données pertinentes sont entrées dans le store
-   De manière globale, la variable email est renommée mail
-   Rajout d'une condition pour que les modals de connexion/incription se ferment automatiquement et ne peuvent être ouvertes si l'utilisateur est connecté
-   Adaptation du composant AccountModalInput.vue pour qu'il gèrent la condition de force du password pour deux input différent
-   Si l'utilisateur est connecté les boutons Connexion/Inscription disparaissent au profit de la page profil et du bouton de déconnexion
-   Création d'une fonction de déconnexion supprimant les infos de connexion, fermant les modals et ramenant à la page d'accueil
-   La page UserProfile non-terminée encore reprend en grande partie le code du composant AccountModal, ça sera sûrement factorisable

### build 88 - 0.9.43 `24 octobre 2022`

-   Ajout d'une propriétés requiredLogin à la route UserProfile
-   Rajout d'un before each dans le router qui va venir vérifier la condition de requiredLogin
-   Ajout d'une propriété flex-wrap pour la page UserProfile afin que ça ne dépasse plus
-   Ajout d'une div supérieur à la progress bar du password. Ceci pour que les deux formulaires soit bien alignés
-   Renommage d'AccountModalInput en AccountInput
-   Correction du nom d'un objet du store qui causait un problème d'undefined
-   Suppression des messages type "Connexion réussi mais ça sert à rien pour l'instant"
-   Rajout d'un cleanError lors de la perte de focus
-   Après le copié collé de AccountModal dans UserProfile, de nombreux changements :
-   Adaptation des 6 fonction de test pour qu'elles correspondent à nos 6 inputs
-   Adaptation des 2 x 3 fonctions de test des inputs / envoi de la requête / traitement du résultat pour le changement mot de passe / mail

### build 89 - 0.9.44 `24 octobre 2022`

-   Rajout de la couleur de background pour les formulaires dans UserProfile
-   Rajout du style pour le formulaire de suppression de compte
-   Rajout d'une animation pour l'apparition de l'input de suppression de compte
-   Rajout toujours sur le même principe d'un formulaire simple pour supprimer le compte avec confirmation par mot de passe
-   Ajout d'une variable pour déclencher l'apparition de l'input lors du premier clic sur "Supprimer le compte"
-   Ajout du tableau d'erreur, de la fonction de vidage de ce tableau et des tests regex liés.
-   Reprise de la logique test des inputs / envoi de la requête / traitement du résultat pour gérer
-   LE bug des autocomplete m'a fait remplacé toutes les valeurs d'autcomplete par quelque chose de cohérent même si ça n'a rien changé au comportement de Chrome

### build 90 - 0.9.45 `24 octobre 2022`

-   Rajout de 2 images en SVG créés par mes soins pour indiquer la visibilité ou non du mot de passe
-   Création d'un ficher scss pour très prochainement factoriser le css des modals account et tu userProfile
-   Création d'une petite box placé à droite des inputs de mot de passe et stylisation
-   Simplification des mise en couleur des bordures d'input
-   Clarification du système de good/error lors de la perte de focus
-   Une image de base sert de placeholder dans la petite boite servant de afficher/cacher jusqu'à son remplacement
-   La différenciation des input se fait à partir d'un opérateur ternaire dans la création de la div dans AccountInput.vue
-   Création de la fonction toggleShowPassword :
-   Elle récupère l'élément cliqué, trouve le formulaire le plus proche (celui qui le contient), et trouve tous les inputs à password que le form contient
-   Pour tous les inputs trouvés, on change le type (text => password ; password => text), on change l'attribut showed du button et on créé l'icône

### build 91 - 0.9.46 `24 octobre 2022`

-   Rajout d'une div supérieur dans le UserProfile
-   Séparation propre des styles afin que les styles d'input soient bien rangés dans un seul fichier
-   Les styles propres aux fichiers précédent sont gardés mais la taille des fichier en a été fortement réduite

### build 92 - 0.9.47 `26 octobre 2022`

-   Importation brute du jeu d'échec pas encore implanté (js et scss)
-   Dans le router, suppression de tous les sous-routeur et ne reste que le Main Router
-   Adaptation de ceci dans l'APP.vue
-   Création de la route du jeu d'échec
-   Dans le détail d'un projet, son lien est nommé, impliquant le changement dans Main.js (le store) et PfProjectDetails.vue
-   Mise à jour des package NPM

### build 93 - 0.9.48 `26 octobre 2022`

-   Rajout temporairement de toutes les fonctions js de base du jeu d'échec dans le composant ChessGame.vue et initialisation dans un onMounted
-   Remise en temporaire (hors du projet des 3 fichier originaux)
-   Adaptation de la div app originelle en div ChessGame
-   Création d'un composant pour chaque SVG de chaque pièce
-   Jeu fonctionnel et communication avec le serveur totalement ok depuis le temps

### build 94 - 0.9.49 `2 novembre 2022`

-   Retrait des templates de SVG desx pièces d'échecs dans l'index.html
-   Retrait du RequiredLogin pour la route Etherum
-   Rajout de suspense dans App.vue pour le chargement initial des données du jeu d'échec, sûrement temporaire.
-   Correction de fautes d'orthographes
-   Transformation en composant "dynamique" du jeu d'échec à la base en js vanilla
-   Création d'un objet reprenant les différents fichiers SVG des pièces pour pouvoir les insérer dynamiquement
-   Création de plusieurs objet contenant les informations à afficher en boucle
-   Changement et test à taton des fonctions de création du jeu, de récupération des données
-   Peu de changement dans les fonction de gestion des mouvements, en effet, celles-ci sont toujours fonctionnelles
-   L'objet GameData est maintenant global à la fonction, il n'est plus contenu dans un objet faisant des appels à rallonge
-   Changement de nom de quelques classes en kebab-case afin de s'aligner sur les normes CSS
-   Diminution du délai de transition par rapport au reste du projet
-   Quelques changements dans le style des éléments temporaires

### build 95 - 0.9.50 `3 novembre 2022`

-   Changement de nom d'une classe pour respecter le kebab-case
-   Les pièces sont en cursor: pointer maintenant
-   Rajout d'un reset button initial qui disparait quand les données sont bonnes et que le jeu est créé
-   Retrait de Suspense dans App.vue
-   Utiliser de deux variables ref() pour la préparation du jeu
-   GameData est un objet vide en reactive initialement
-   Fonction intermédiaire pour exécuter l'initialisation des mouvements (il reste un bug lors d'un reset)
-   Condition avant d'assigner le resultat du fetch à gameData.
-   Changement dans le fonctionnement de la réponse. Elle contient un objet donc une clé correspond à si oui ou non le gameData est initialisé ou vide
-   Rajout d'une fonction resetAll qui va venir supprimer les classes supplémentaires et les events avant qu'ils soient tous remis correctement à chaque nouveau coup

</details>

### Version 1

<details>

### build 96 - 1.0.0 `15 novembre 2022`

-   Passage en 1.0 maintenant que j'ai commencé à postuler et que je pars du principe que mon objectif initial est atteind.
-   Mise à jour des package NPM
-   Suppression de la transition pour le textArea du contact afin que width/height soient instantanés
-   Petit changement dans la gestion d'état du jeu d'échec. Pas encore bien finiolé
-   Correction de quelques coquilles orthographiques
-   Mise à jour du CV et donc de son lien

### build 97 - 1.0.1 `26 décembre 2022`

-   Dans l'index.js, fichier racine du projet, insertion du middleware pour la gestion des Cookies
-   A l'entrée du fichier, on demande la gestion du cookie comptant le nombre de visite
-   Utilisation d'une logique de traitement des cookies générique mais complexe à comprendre. Une fonction pour get, une pour set, et il y aura une fonction pour chaque cookie et ce qu'il doit faire
-   Pour les tests d'allemand, création d'un middleware servant à stocker les verbes
-   Incorporation du test d'allemand dans le router
-   Dans le store, changement des données pour les projets factices qui faisaient planté le site
-   Stylisation de la page de test de manière assez simpliste
-   Un mot de passe protège l'accès à la page, c'est temporaire mais c'était aussi pour tester
-   Les tests devaient durer 2 semaines, ainsi la page par défaut affiche les dates correspondantes aux tests.
-   Cliquer sur un test va sélectionner un certain nombre de verbe, et pour chacun décidera d'une seule de ses formes qui sera affichée. Un tableau vide de réponse est aussi créé.
-   Valider le tests va venir récupérer toutes les valeurs d'input, les comparer aux bonnes réponse pour surligner les mauvaises et afficher le score.
-   Dans UserProfile, transformation des requêtes de modifications de données de compte de PATCH vers POST

### build 98 - 1.0.2 `29 décembre 2022`

-   Suppression de la gestion des cookies de visites dans index.js au profit d'un composant dédié
-   Création donc du CookieHandler.vue qui à l'avantage d'être connecté au store et peut donc faire le lien entre celui-ci et le middleware
-   Dans AccountModal.vue, lors de l'inscription ou de la connexion réussie, en plus de la mise en store, les cookies sont créés/mis à jour
-   Dans la fonction Disconnect du header, rajout d'un appel à cookieHandler pour supprimer les deux cookies de compte
-   Rajout de la base du projet Satisfactory Calculator. Création importation du style et du composant
-   Création d'un début de fichier data pour les différents craft et d'un début de sélecteur de craft

### build 99 - 1.0.3 `29 décembre 2022`

-   Rajout d'une propriété loading dans le mainStore.modalData
-   Création et stylisation d'un composant loading personnalisé
-   Pour tous les appels de fonction asynchrone, globalement car nécessite un traitement serveur, le loading est appelé.
-   Cela concerne ChessGame.vue, germanTest.vue, UserProfile.vue et AccountModal.vue
-   Dans GermanTest, correction d'un petit bug d'élément inexistant lors de son changement, ajout d'une condition d'existence

### build 100 - 1.0.4 `30 décembre 2022`

-   Correction de l'affichage du breadcrumb pour les projets fonctionnant avec des routes paramétrées
-   Léger changement dans l'affichage de la page 404. Le container est en absolute pour pouvoir remplir toute la largeur de l'écran
-   Ajout de petits commentaires dans le router afin de mieux s'y repérer
-   Ajout d'une propriété "params" dans les objet de breadcrumb afin de repérer quand un titre de section du breadcrumb ne peut être géré par le routeur.
-   Ainsi, cette propriété sert dans BreadCrumb.vue. Avec Watch, on surveille les paramètres d'url et si un apparait, on trouve le titre de la page associé pour l'inscrire
-   Pour les projets, si on invente un nom, il ne sera pas trouvé ainsi, on envoi sur la page 404 si cela arrive
-   Suppression d'un console.log()

### build 101 - 1.0.5 `30 janvier 2023`

-   Beaucoup d'exploration et de test pour la satisfactory calculator
-   Mise à jour des tests en allemand pour les rendre plus généraux
-   Supression d'un peu de CSS par rapport aux anciens tests d'Allemand datés
-   Ajout d'un style pour les verbes corrigés
-   Simplification des tests et ajout de la fonctionnalité permettant de voir la correction des verbes faux
-   Correction de la date pour mon age car il indiquait une erreur
-   Petit changement dans le breadcrumb

### build 102 - 1.1.0 `18 février 2023`

-   Mise à jour de tous les packages NPM
-   Déplacement de toutes les images dans un sous-dossier de src : static
-   Modification du Favicon pour l'adapter au nouveau logo
-   Refonte total du header, du logo et du menu lattéral
-   Suppression du ThemePallet. Avec la reprise du site dans sa globalité pour lui donner un coup de neuf, je supprime (temporairement ou non) le choix du thème
-   Tout les fichiers Vue ont vu leur styles être directement dans le fichier plutôt que de l'avoir dans un fichier tierce
-   Des changements dans le BreadCrumb pour l'intégrer au Header.
    -   Passage en position: absolute pour le placer correctement.
    -   Adaptation de ses couleurs aux nouvelles variables
    -   Adaptation de son Z-index aux nouvelles variables
    -   Ajout de propriété transform et opacity pour que la nouvelle classe hidden le fasse disparaitre à souhait
-   Rajout de "Only" dans tous les "@media Only Screen"
-   Pour le Logo de chargement, adaptation de quelques variables pour convenirs aux nouvelles mais aucun changement directe
-   Petit changement de variables pour le petit encadre Project Versionning ainsi qu'un Z-index à lui
-   Modification dans les fichiers SCSS. Il n'en reste que trois regroupés et appelés correctement. Variable et Reset sont appelés par Index qui est appelé par Webpack. Tous les autres styles contenus dans les views sont gérés par Vue. Variables est appelé grâce à un alias et à la nouvelle prise en charge du scss dans Vue.JS.
-   Suppression du fichier scss temporary
-   Réaménagement total du fichier variables. Les anciennes variables sont gardées temporairement.
-   Adaptation de toutes les images pour les appelés maintenant avec l'alias @static/images
-   Suppression de tous les consoles.log et tout le code qui était en commentaire ne l'est plus. On fera le tri plus tard
-   pfProjects, adaptation de noms de variables par rapport aux nouvelles.
-   Trop complexe pour détaillé les changements du header, donc juste une grosse amélioration par rapport à avant. Je le trouve bien mieux
-   Passage de prettier sur tous les fichiers pour les rendes plus clean même si plus long parfois
-   Déplacement du fichier UserProfile du dossier Other au dossier User.
-   Intervertion légère dans le store.
-   Suppression de l'icone SVG du menu pour l'ouvrir ou le fermer. Remplacé par des balise HTML classiques
-   Ajout d'un lien pour accéder au CV directement dans le Header. Géré par Webpack, le PDF est directement stocké dans le projet
-   Le Menu et le Logo du header sont dans deux fichiers distincts
-   Ajout de séparateur dans le header
-   En fonction du scroll vertical, le header disparait et revient au besoin
-   Suppression de la vue CookieHandler. Sa logique est maintenant dans un middleWares à part. Ne contenant aucune balise HTML, cette vue ne servait à rien.
-   Le BreadCrumb est maintenant contenu dans le header et utilise sa logique pour être visible ou non, c'est transmit par un prop.
-   Simplification du style global à tous le projet, qui est aussi maintenant intégré dans App.Vue
-   Cookie Handler n'existe plus, le BreadCrumb est dans le Header, il n'y a plus de background du contenu pour conditionné la largeur d'écran et le router-view est dans la div main. L'appel des cookies de visites se fait dans App.Vue aussi.
-   Création d'alias dans Webpack.config.js pour simplifier les imports. D'autres à venir
-   Ajout d'un loader pour les fichier PDF.

### build 103 - 1.1.1 `18 février 2023`

-   Simplification de la gestion du menu du header
-   Plus d'ajout direct ou de retrait direct des classes sur les éléments pour gérer apparition/disparition. Une variable ref conditionne maintenant ces classes.
-   Séparation des deux fonctions handleMenuModal et ClickOutside
-   Simplification de la méthode d'entré dans la fonction handleMenuModal avec une seule variable proprement appelé depuis chaque point d'entrée.
-   Ajout d'une propriété sur tous les éléments qui vont déclencher la fermeture de la modal. La présence de cette propriété sur l'event target est la seule condition.
-   Meilleur gestion de l'ajout et du retrait de l'event listener pour empêcher les bugs oùu il persistait

### build 104 - 1.1.2 `18 février 2023`

-   Attribution de variables aux divers z-index du projet. Retrait de 2 z-index qui semblaient inutiles.
-   Fix d'un bug du menu qui disparaissait à moitié si le header disparaissait. Le composant HeaderMenu est dans le même fichier que le headerContainer mais en dehors du header
-   Le bouton du menu latéral est maintenant en fixed pour être le seul élément de la page hormis le versionning à rester toujours visible même en scroll.
-   Ajout d'une bordure transparante si le menu n'est pas ouvert sur le bouton pour avoir une petite transition agréable

### build 105 - 1.1.3 `18 février 2023`

-   Tous les imports réguliers utilisent des alias adaptés, on compte : @middlewares, @parts, @root, @router, @src, @static, @store, @styles et @views
-   Déplacer des pièces d'échecs SVG dans parts

### build 106 - 1.1.4 `21 février 2023`

-   Mise à jour des packages
-   Changement de nom du projet, plus question de l'appeler tryhard but slowrun. C'est un peu nul comme nom, c'est simplement mon portfolio

### build 107 - 1.1.5 `21 février 2023`

-   Déplacement de tous les SVG de pièce d'échecs dans un nouveau sous-dossier de views : svg
-   Création d'un nouvel alias pour et actualisation des importations
-   Suppresion dans le header de la partie Mon CV pour l'ouvrir. C'est maintenant un simple icône à côté de Curriculum
-   Cela ayant libéré de la place, le menu apparait maintenant à 750 pixels de large
-   Rajout d'une div pour contrer la suppression de cette partie et garder les liens au centre

### build 108 - 1.1.6 `21 février 2023`

-   Petits détails de CSS pour le bouton de téléchargement du CV
-   Suppression de la notion de Portfolio dans le routeur, et donc suppression du groupe Portfolio. Tous les liens ont été mis à jour
-   Suppression de la hauteur volontairement grande
-   Déplacement des pages portfolio dans le dossier main avec la Home inutilisée pour l'instant
-   Gestion des données meta de Breadcrumb pour les rendre cohérent aux changements

### build 109 - 1.1.7 `21 février 2023`

-   Fusion du contenu de Home et de l'ancien HomePage, on fera le tri bien après.
-   Déplacement de tous les projets dans un sous-dossier projets

### build 110 - 1.1.8 `21 février 2023`

-   Remplacement de tous les appels aux anciennes variables CSS stockées dans :root par des nouvelles variables. Pas du tout définitif, c'est uniquement pour se séparer de l'ancien système
-   Ajout d'une variante à la variable de transparance (transparent-white & transparent-black)
-   Suppression du mastermind de la page principale. Il a maintenant sa propre page projet
-   Suppression de la section theme dans le store. Elle n'est plus utilisé maintenant que le changement de thème n'est plus possible
-   Supression des deux objets représentant des projets factice dans le store
-   Rajout du MAstermind dans les projets, ainsi que de CryptoFollow
-   Mais CryptoFollow et SatisfactoryCalculator seront en commentaires dans le store donc absent de la page projet tant qu'ils ne seront pas plus avancés.
-   Ils sont toujours accessibles en connaissant le lien
-   Remaniement et rangement dans le router afin de le rendre plus lisible. Rajout du Mastermind

### build 111 - 1.1.9 `24 février 2023`

-   Commencer à remanier la page principale du site. Suppression de l'illustration de code obsolète
-   Suppression (peut-être temporaire) de l'import des projets sur la page principale
-   Suppression du fichier ProjectContainer pour que son contenu soit dans Project tout simplement
-   Rajout d'une couleur temporaire pour que les couleurs soient plus convenables le temps de finir la base
-   Réudction de la taille de l'icône de téléchargement du CV
-   Changement d'un commentaire dans le router erroné

### build 112 - 1.1.10 `24 février 2023`

-   Changement de nom pour le document.title de la page d'accueil en Alexandre Richard au lieu de Accueil
-   Rajout dans modalData du Store d'une propriété headerVisibility pour centraliser le système de gestion du scroll
-   Création d'une vue qui n'a que pour objectif de s'occuper du scroll "ScrollEmergence"
-   Rajout d'une variable CSS prennant en compte la hauteur total du header en prennant compte du BreadCrumb
-   Correction d'un nom de route dans les projets stockés dans le store
-   Appel du composant ScrollEmergence dans App.vue. Il s'occupe de cacher/montrer le header comme avant en modifiant la variable headerVisibility du Store
-   Il s'occupe aussi à présent de vérifier tous les élements qui comportent la classe "appear". En dessous d'un certains scrolls, ils apparaissent avec animation
-   Refonte en cours de la page d'accueil, première partie terminée
-   Suppression d'un console.log qui trainaient.

### build 113 - 1.1.11 `24 février 2023`

-   Création d'un footer simpliste mais suffisant
-   Suppression du petit encadré "versionning" au profit de son intégration dans le footer
-   2 petits détails CSS sur la homePage

### build 114 - 1.1.12 `24 février 2023`

-   Renommage de quelques vues pour convenir aux bonnes pratiques conseillés par Vue.JS avec des noms en deux mots
-   Lors d'un changement de page nécessitant de faire remontant le scroll en haut, la propriété headerVisibility est mise sur true pour éviter des problèmes de disparition
-   Modification de la durée de l'animation du logo initial afin que l'animation dure 2 500 ms
-   Rajout d'une propriété Overflow: hidden dans le body qui est supprimé à la fin du logo pour éviter un rendu moche en cas de scroll
-   Importation initial des projets dans la page principale afin de les styliser par la suite
-   Suppression de tous ce qui était ancien de la page principale maintenant que ça a été remplacé
-   Changement de style de l'animation des éléments appear
-   Les animations appear se déclenche après un scroll d'au moins 200 pixels en dessous de l'élément

### build 115 - 1.1.13 `24 février 2023`

-   Rajout d'une variable footer-height dans le scss pour pouvoir créer un padding artificiel au main. Le main et le header sont ainsi "protégé" du contenu
-   Mise de la div app en position : relative, cela semble n'avoir rien cassé
-   Suppression de style inutile dans projects

### build 116 - 1.1.14 `27 février 2023`

-   Deux petites modifications de textes dans le Store
-   Rajout d'un message temporaire indiquand le travail en cours effectué sur le site pour le rendre plus agréable
-   Rajout de style généraux temporaire pour forcer les pages à être mieux présentées
-   Petit changement sur le message de non fonctionnement du formulaire de contact
-   Importation et stylisation des projet-box dans la homePage
-   Suppression temporaire des styles pour les projets de la page projets

### build 117 - 1.1.15 `7 mai 2023`

-   Mise à jour des packages NPM
-   Déplacement des logos de contact du dossier launcherLogo au dossier contactLogo
-   Changement dans l'organisation des données de contact dans le state
-   Suppression du message "temporaire" d'avertissement de refonte du site
-   Changement dans deux intitulés de la page contact et léger changement de couleurs
-   Refonte du CSS de la page Curriculum
-   Création d'un fichier Vue pour le stockage du svg copy-icon et suppression de celui-ci dans le fichier original
-   Réorganisation de l'import de contactButton et de la logique de boucle de création de ceux-ci. CSS changés par la même occasion
-   Suppression de 2 lignes de changement d'état dans la page 404. 
-   Agrandissement de la police du footer
-   Mise en Majuscule de l'appel d'un composant Vue dans le HeaderContainer

### build 118 - 1.1.16 `7 mai 2023`

-   Rajout de 2 couleurs dans les variables pour plus de subtilités des gris clair
-   Sur la page Curriculum, rajout de quelques classes "appear" sur certains éléments pour être cohérent avec la homepage
-   Rajout d'une sécurité sur la logique de la gestion des scroll. Si on est inférieur à 200 pixels de scroll, on force l'affichage du header au cas où
-   Suppression de la logique de random sur la sélection des projets à afficher globalement, celle-ci étant géré indépendemment par la homepage
-   Rajout d'un bouton plus explicite pour accéder au projet en détails
-   Refonte totale du style de la page ProjectsContainer
-   Déplacement du style des projets détaillés de la vue ProjectsContainer à la page ProjectDetails
-   Changement du nom de la classe des projets seuls sur la homepage pour que leur styles n'interfèrent pas avec la vue ProjectContainer

### build 119 - 1.1.17 `10 mai 2023`

-   Suppression d'un effet de text-shadow plus du tout adapté aux nouvelles couleurs.
-   Petits ajouts de CSS pour rendre la page userProfile et Contact plus agréable.

### build 120 - 1.2.0 `10 mai 2023`

-   Changement du nom de variable répendu "dateTest" en "verbTest" dans le germanTest
-   Rajout d'une couleur dans le CSS
-   Inversion de 2 z-index dans le fichier de variable
-   Correction du bug du link pour les deux contact github et linkedin
-   Modification de nombreuses tournures de phrase ou même de contenu dans les différents textes de la homepage et du curriculum
-   Changement du contenu de quelques projets dans le store et mise à jour des nouveautés/retrait/changement
-   Dans la page Curriculum, déplacement d'une catégories plus haut et rajout d'une div pour pouvoir améliorer la mise en page
-   Petit ajout d'un encard de description plus personnel
-   Dans le germanTest, suppression de toute notion d'accès à la page par mot de passe et de la logique du formulaire utilisé
-   Rajout d'une variable pour définir si nous sommes en phase de correction ou non afin d'afficher ou non les bonnes réponses en temps voulu
-   Mise à jour du CSS du germanTest pour le rendre plus compatible avec la volonté d'améliorer le design du site en général
-   Changement de la couleur du titre principale de la page UserProfile
-   Changement des couleurs d'input pour les formulaires de connexions

</details>

### Version 2

<details>

### build 121 - 2.0.0 `5 août 2023`

-   Changement important dans la manière de gérer tous les projets et dissociation complète du versionning du back et du front
-   Mise à jour des dépendances
-   Modification du fichier de sortie de .dist en .build
-   Changement de npm en pnpm passant de package-lock à pnpm-lock
-   Mise à jour des commandes clean dans package.json
-   La grosse modification de cette 2.0 est de sortir et d'extraire tous les projets qui étaient hébergé directement sur celui-ci pour tous les rendre indépendant
-   Ainsi, tous les fichiers liés ont été supprimé. Cela concerne satisfactoryData.js ; verbData.js ; ChessGame.vue ; EtherumFollow.vue ; GermanTest.vue ; MasterMind.vue ; SatisfactoryCalculator.vue ; Les 6 fichiers SVG.vue du jeu d'échecs.
-   Aussi, suppression de toutes leurs mentions dans le router de vue et mise en commantaire de ces projets dans le store
-   Création d'une page de connexion dédiée dans le but de permettre la connexion à ce site à partir des autres projets héberger sur une autre adresse. formulaire accessible à partir d'un popup.
-   Cette page reprend pour le moment toute la logique précédemment utilisée ce qui cause des duplicats mais ça sera réglé par la suite 
-   Rajout d'un lien vers mon CV sur la page Curriculum directement

### build 122 - 2.0.1 `12 août 2023`

-   Mise à jour des packages npm
-   Rajout d'un script pnpm pour mettre à jour plus facilement les dépendances
-   Dossier de compilation changé de dist en build
-   Simplification de la regex pour la vérification de l'adresse-mail après avoir découvert que la précédente comptait invalide des adresse-mail valide.

### build 123 - 2.0.2 `13 août 2023`

-   Retrait de file-loader pour les fichiers de police d'écriture

### build 124 - 2.0.3 `13 août 2023`

-   Amélioration de la page des différents projets sur la présentation. Ajout d'un petit encadré avec l'état du projet, son avancement.
-   Création avec GeoGebra et Inkscape d'un svg pour représenter à l'aide d'un pourcentage cette progression de manière automatique.
-   Rajout d'un tableau de donnée pour les projets pour stocker les technologies utilisées (à utiliser plus tard).
-   Rajout d'une couleur dans variable.scss
-   Petit changement dans le style des projets affichés

### build 125 - 2.0.4 `14 août 2023`

-   Mise à jour des packages npm
-   Ajout d'un encadré dans la page des projets pour les technologies utilisées dans chaque projet.
-   Cet encadre comprend le nom et le logo de la techno en plus de renvoyé vers le site de celle-ci
-   Petit changement dans le style global des projets pour les rendre plus lisible
-   L'encadré sur l'avancement du projet à un peu de responsive pour les pages de petites taille ou le flex-direction passe de column à row au dessus de 415px
-   Ajout des différents logo de chaque technologies ainsi qu'un logo Not Found pour celle n'en ayant pas

### build 126 - 2.0.5 `14 août 2023`

-   Changement dans les liens en bas des encadrés des projets. En plus des détails, on peut accéder directement au projet. Lien gérer depuis dotenv
-   Adaptation des nouveautes des encadrés des projets en terme de taille et de responsive
-   Changement du nom de la variable du lien vers les détails d'un projet

</details>