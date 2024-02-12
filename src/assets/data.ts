/* eslint-disable max-lines */
/* eslint-disable @stylistic/max-len */
const age = Math.floor(
    (Date.now() - new Date(1999, 5, 24).getTime()) / 1000 / 60 / 60 / 24 / 365
);

export const dataObject = {
    // Textes de la page d'accueil
    "homeDescOne":
        "Je m'appelle Alexandre Richard. Amoureux d'internet depuis très longtemps, j'ai été pris de passion par la capacité à créer des choses comme on le souhaite au travers de la programmation. J'aime trouver des solutions à des problèmes de logique et à partir d'une idée, concevoir, créer et perfectionner un projet complet sur la durée. J'ai beaucoup exploré le web, à savoir HTML, CSS, Javascript, Typescript et ses framework (Vue.JS et React) ainsi que l'environnement Node.JS. Je ne cesse de me former au travers de nouveaux challenges apportant leur nouvelles problématiques. Pour le futur, j'ai l'intention de m'intéresser à Symfony et C# qui sont deux outils qui m'intéresse.",
    "homeDescTwo":
        "À côté du code, je suis passionné de nature, de jeux vidéo, de cinéma, idéaliste et faciné par l'humain, la science et la connaissances en général. J'aime rire, voir la vie du bon côté et j'essaie de ne jamais faillir à mes valeurs.",
    // Texte de la page Curriculum
    "curriculumDesc": `Je suis un jeune de ${age} ans qui s'est pris de passion pour le développement web après des années à chercher l'étincelle. Optimiste et sorti d'une formation en développement web de 6 mois chez O'clock, je continue de me former et d'apprendre depuis. Je fais beaucoup de veille pour apprendre de nouvelles choses et resté focus sur les nouveautés de ce que je connais déjà.  J'ai expérimenté pour le moment uniquement les langages web, à savoir HTML ; CSS et JS pour lesquels je cherche à me perfectionner toujours davantage. J'aime beaucoup travailler sur mes projets personnels en essayant d'être rigoureux dans leurs développements, attentif aux améliorations possibles ainsi qu'à la résolution des bugs. Aimant apprendre, réaliser des challenges et m'investir dans des projets, je recherche une alternance dans une entreprise pour finaliser mes études avec un Bachelor Concepteur, Développeur d'Application, entreprise dans laquelle je pourrai m'investir et qui saura me faire confiance.`,
    // Listes d'objets de la page Curriculum
    "skillsList": [
        "HTML : Très compétent, mais pas expert",
        "CSS/SCSS : Des compétences solides, beaucoup d'expérimentations",
        "Javascript/ECMA : Très bonne maîtrise et toujours avec Typescript",
        "Vite & Vitest : Bundler de projet, plus pratique que Webpack",
        "Vue.JS : Mon premier FrameWork, utilisé avec Pinia et Vue Router",
        "React : Très utilisé depuis récemment avec Redux Toolkit et React Router",
        "Node.JS : Expertise qui progresse, utilisé avec Express",
        "SQL : Connaissances correctes, utilisé avec PgSQL et MariaDB",
        "Php : Initiation et prise en main de base",
        "Package NPM d'intérêt : i18Next ; Axios ; Socket.io ; BCrypt ; Sequelize",
        "Excel : Passion pour ce logiciel, très bonne maîtrise"
    ],
    "qualificationsList": [
        "Brevet des collèges",
        "Bac Scientifique - Mention bien",
        "Développeur DWWM II - Niveau BAC+2",
        "OpQuast, Maîtrise de la qualité en projet Web 785 / 1000",
        "MOOC SecNum Académie de l'ANSSI"
    ],
    "informationsList": [
        "Permis B (sans véhicule)",
        "Français : langue natale (C2)",
        "Anglais : Niveau B2"
    ],
    "professionalExperiences": [
        {
            "key": 1,
            "title": "Stage d'observation de 3ème",
            "firstDate": "Mars 2014",
            "secondDate": null,
            "location": "Jefimmo - Saint-Laurent-des-Autels",
            "description":
                "Stage d'une durée de 5 jours dans une agence immobilière avec organisation de visite, mise en vente d'une maison et réalisation de photos et de différents croquis.",
        },
        {
            "key": 2,
            "title": "Stage en seconde professionnelle",
            "firstDate": "Janvier 2015",
            "secondDate": null,
            "location": "Gamm vert - Saint Laurent des Autels",
            "description":
                "Stage d'une durée d'une semaine en jardinerie. Manutention, mise en rayon, inventaire et étiquetages.",
        },
        {
            "key": 3,
            "title": "Stage en seconde professionnelle",
            "firstDate": "Mars 2015",
            "secondDate": null,
            "location": "Super U - Ancenis",
            "description":
                "Stage de deux semaines dans une grande surface avec principalement du nettoyage et de la mise en rayon en équipe.",
        },
        {
            "key": 4,
            "title": "Stage en seconde professionnelle",
            "firstDate": "Mai 2015",
            "secondDate": null,
            "location": "Top Office - Ancenis",
            "description":
                "Stage de quatre semaines au sein de l'entreprise avec une découverte de la majeure partie des fonctions et métiers présents. De l'ouverture avec la mise en place, à la fermeture et le bilan de la journée, en passant par le passage de commande, la gestion des stock ou l'accueil en caisse.",
        },
        {
            "key": 5,
            "title": "Projet de fin d'étude",
            "firstDate": "Février 2021",
            "secondDate": "Mars 2021",
            "location": "Apothéose d'O'clock",
            "description":
                "Il s'agissait d'un projet de fin d'études organisé par l'école 100% en téléprésentiel à réaliser en groupe. Avec 3 de membres de ma promo, nous avons conçu un site de A à Z des wireframe jusqu'à la base de donnée, avec router, stylisation, connexion etc. Créé en React avec Webpack, ce site en Single Page Application n'est plus hébergé aujourd'hui.",
        },
        {
            "key": 6,
            "title": "CDI en restauration rapide",
            "firstDate": "Septembre 2021",
            "secondDate": "Mai 2022",
            "location": "Burger King - Angers",
            "description":
                "J'ai travaillé durant 9 mois dans ce restaurant. C'était l'occasion pour moi de prendre une année sabatique, une année où j'aurai le temps de faire une transition entre ma vie scolaire et ma future vie professionnelle. J'en ai profité pour me former en autonomie davantage. Dans ce travail, j'y ai appris l'accueil et la gestion de clients, régulièrement en grand nombre et ai développé une grande autonomie dans mes tâches à accomplir pour permettre d'avoir un service le plus fluide possible. J'ai également beaucoup eu besoin de réagir à des problèmes en tout genre impliquant un contact avec la hiérarchie et le client indispendable. J'ai quitté l'entreprise pour me concentrer sur mes projets et ma recherche d'une alternance.",
        },
        {
            "key": 7,
            "title": "Projet personnel",
            "firstDate": "Juin 2022",
            "secondDate": "Présent",
            "location": "De chez moi",
            "description":
                "Depuis que j'ai quitté mon emploi, je travaille sur mes projets afin de monter en compétences sur des technologies que je ne connaissais pas ou pas assez afin de me constituer un portfolio solide. Je suis fier de ce que j'ai accompli mais n'ayant pas réussi à trouver d'alternance pour l'année 2023, je cherche désormais pour l'année 2024-2025. J'ai énormément appris avec tous mes projets et je suis convaincu de pouvoir être un atout dans une entreprise car mon manque d'expérience se voit compensé par mes connaissances, mes ambitions, le sérieux de mon travail et ma motivation.",
        }
    ],
    "schoolCurriculum": [
        {
            "key": 1,
            "title": "Collège",
            "firstDate": "2010",
            "secondDate": "2014",
            "location": "Collège Georges Pompidou Champtoceaux",
            "description":
                "Quatre années de collège sans accro avec obtention du brevet des collèges. Un voyage en Espagne durant l'année de 3ème",
        },
        {
            "key": 2,
            "title": "Lycée en cursus scientifique",
            "firstDate": "2014",
            "secondDate": "2018",
            "location": "Lycée Polyvalent Joubert-Maillard Ancenis",
            "description":
                "Quatre ans de lycée pour cause de deux années de seconde. En effet, j'ai d'abord choisi le fait d'aller en Bac Professionnel pour commencer le lycée, ce qui ne m'a pas plu. Je suis donc repassé en cursus général dans lequel j'ai effectué trois années dans la filière Scientifique quand elle existait encore. J'en suis sorti très motivé et diplomé du Bac mention Bien. Un voyage à Londres durant l'année de Première.",
        },
        {
            "key": 3,
            "title": "Licence scientifique",
            "firstDate": "2018",
            "secondDate": "2020",
            "location": "Université d'Angers - Fac de Sciences",
            "description":
                "À la sortie du lycée, je voulais partir dans un parcours scientifique car c'était ma voie de prédileciton ne sachant pas où aller d'autre. Cependant, bien que cela me plaisait durant la première année, la deuxième année fut bien plus compliqué et l'arrivée du COVID et les cours en distanciel m'ont convaincu que je devait essayer de me réorienter pour faire ce que j'aimais.",
        },
        {
            "key": 4,
            "title": "Formation de Développeur Web",
            "firstDate": "Octobre 2020",
            "secondDate": "Mars 2021",
            "location": "École 100% à distance O'Clock",
            "description":
                "J'ai intégré la formation Développeur Web Fullstack JS d'O'Clock d'une durée de 6 mois. Cette formation m'a fait révélé une passion pour ce métier et son étendue mais était insuffisante pour prétendre à une insertion professionnelle directe. Ainsi, j'y ait vu de solides bases HTML, CSS et Javascript côté client, et Node.JS et à la création/gestion de Base de Données côté serveur mais ai continué depuis à m'améliorer pour atteindre mon objectif. Durant quatre semaines sur la fin, nous avons effectué l'Apothéose : la réalisation d'un projet de groupe en reprenant la métohde SCRUM et en divisant les étapes de développement en sprint avec la méthode AGILE. J'ai également grâce à l'école passé et obtenu le diplôme Développeur Web et Web Mobile II.",
        }
    ],
    "hobbiesList": [
        "Jeux vidéo",
        "Randonnées",
        "Programmation",
        "Cinéma",
        "Lecture",
        "Course à pied",
        "Nourrir mes connaissances",
        "Les animaux"
    ],
    "qualitiesList": [
        "Autonome",
        "Curieux",
        "Enthousiaste",
        "Esprit d'équipe",
        "Ponctuel",
        "Investi",
        "Jovial",
        "Réactif",
        "Rigoureux",
        "Aimable"
    ],
    // Les infos du Headers
    "headerLinks": [
        {
            "id": 0,
            "link": "/",
            "title": "Accueil",
        },
        {
            "id": 1,
            "link": "/curriculum",
            "title": "Curriculum",
        },
        {
            "id": 2,
            "link": "/projects",
            "title": "Projets",
        },
        {
            "id": 3,
            "link": "/contacts",
            "title": "Contact",
        }
    ],
    // Mes projets
    "projectList": [
        // Portfolio
        {
            "showed": true,
            "title": "Portfolio",
            "linkDetails": "portfolio",
            "linkAccess": import.meta.env.VITE_PORTFOLIO_URL,
            "technos": [
                10,
                11,
                12,
                3
            ],
            "progressionPurcent": "95",
            "progression": "Après refonte en React, quelques détails à finioler",
            "abstract":
                "Vous vous trouvez dessus. Fini et développé from scratch. Il me sert de Portfolio, de CV mais également à regrouper tous mes projets au même endroit, peu importe leurs avancées. Les moins avancées ne sont pas affichés mais sont disponibles sur mon Github.",
            "description":
                "J'ai créé ce site pour pleins de raisons différentes. La première étant de m'en servir de portfolio à montrer aux recruteurs, aux entreprises. Aussi, j'ai toujours pour objectif de m'améliorer, d'apprendre de nouvelles choses et d'approfondir mes connaissances. Cet exercice est parfait pour cela car je rencontre énormément de problématique que j'aime essayer de résoudre. De plus, je trouvais ça intéressant de faire un site à mon nom en partant de rien. Je le considère aujourd'hui propre et fini, ni trop peu, ni pas assez mais je continue d'y rajouter mes autres projets au fur et à mesure.",
            "features": [
                "Une apparition de certains éléments fluides au défilement de la page",
                "Accessibilité de mon CV directement depuis le header",
                "La possibilité de copier différentes informations depuis les liens situés dans Contact.",
                "L'interface de connexion/inscription a été migré de ce projet vers un autre, mais toute la logique de sécurité, changement des informations était installée."
            ],
        },
        // Genshin Fan Site
        {
            "showed": true,
            "title": "Werewolf Manager",
            "linkDetails": "werewolf",
            "linkAccess": import.meta.env.VITE_PORTFOLIO_URL,
            "technos": [
                12,
                10,
                11,
                3
            ],
            "progressionPurcent": "35",
            "progression":
                "Projet entièrement conceptualisé. Début de son développpement",
            "abstract":
                "Développement d'une application pour faciliter le travail du Maître du Jeu lors d'une partie de Loups-Garou.",
            "description":
                "Passionné du jeu de société, avec mon entourage, nous apprécions le Loups-Garous de Thiercelieux. Cependant lors de parties avec de nombreux joueurs, le maître du jeu peut avoir des difficultés à suivre la partie. Ainsi, en groupe d'amis designer, développeur, artiste, nous avons décidé de créer une appli. Je me place en Lead Dev de l'application. Nous avons pour le moment passé un peu plus de 20 jours à sa conception dans les détails et la partie développement est en cours.",
            "features": [
                "Possibilité de personnaliser l'interface",
                "Enregistrement des données de jeu pour conserver l'historique des parties",
                "Outil pour gérer des sons et musiques d'ambiance",
                "Gestion automatique des événements et des informations à garder pour que le MJ en ait le moins à faire"
            ],
        },
        // Genshin Fan Site
        {
            "showed": true,
            "title": "Genshin - Fan Tool Site",
            "linkDetails": "genshin",
            "linkAccess": import.meta.env.VITE_GENSHIN_IMPACT_URL,
            "technos": [
                1,
                2,
                3
            ],
            "progressionPurcent": "100",
            "progression": "Projet fini, pour l'instant.",
            "abstract":
                "Un outil pour permettre de simplifier la vie des joueurs de ce jeu, qui nécessite la récolte de nombreuses ressources. Calculées automatiquement, mon outil rend cette tâche moins fastidieuse.",
            "description":
                "J'ai réalisé ce projet d'une traîte avec un objectif clair que je m'étais fixé et un délai. En plus de respecter ce délai, le site était en son état final exactement comme je le voulais. Pris de passion pour le jeu Genshin Impact, j'ai eu envie de transférer mes projets, initialement sur tableaux Excel en un site que je pourrait partager à la communauté. Le site permet de calculer automatiquement au travers d'informations fournies par le joueur un certain nombres d'informations utiles et pratique pour se faciliter la vie sur le jeu. Ce projet était pour moi l'occasion parfait d'allier la création d'un outil fort en logique, un outil à but communautaire, le tout mêlé à une construction que je voulais sérieuse et professionnelle.",
            "features": [
                "Personnaliser les informations que l'on souhaite garder ou non",
                "Récupérer son compte sur n'importe quel appareil à l'aide d'un identifiant",
                "Des mises à jour régulière afin de suivre l'actualité du jeu",
                "Une interface qui a été créé avec les retours d'un certains nombres d'utilisateurs",
                "Un formulaire de contact opérationnel pour quiconque souhaiterait me contacter"
            ],
        },
        // Jeu d'échecs
        {
            "showed": true,
            "title": "Jeu d'échecs",
            "linkDetails": "chess",
            "linkAccess": import.meta.env.VITE_CHESS_GAME_URL,
            "technos": [
                1,
                2,
                3
            ],
            "progressionPurcent": "70",
            "progression":
                "Le jeu est quasi complet, manque quelques règles et une interface agréable",
            "abstract":
                "Le jeu d'échec que j'ai créé de toute pièce. Il n'est jouable que seul mais à pour but d'être jouable en ligne à terme. Il manque quelques détails pour que les véritables règles des échecs soient respectées.",
            "description":
                "Il s'agit d'un jeu d'échec que j'avais créé à l'origine durant mes études au sein d'O'clock. Quasiment terminé, je l'avais délaissé pour me concentrer sur les dernières semaines de cours. C'est par celui-ci que j'ai décidé de commencer ce projet de portfolio en le reprenant du début. Il n'est pour le moment pas encore tout à fait terminé et n'est jouable qu'en solo, mais quand j'aurai intégré la connexion au site et les différentes fonctionnalités de websocket, je ferai en sorte que deux joueurs puissent créer une partie, personnaliser leur règles et jouer l'un contre l'autre. La sauvegarde des parties et des statistiques sont également prévues.",
            "features": [
                "Gestion des différentes pièces à partir de case dynamiques comportant plusieurs informations.",
                "Les mouvements sont calculés côté serveur afin que les joueurs ne puissent tricher en réalisant des coups impossibles.",
                "Un mode permettant de mettre en surbrillance toutes les pièces capable de bouger",
                "Un indicateur montrant le nombre de coups possible pour le joueur dont c'est le tour actuellement"
            ],
        },
        // German Test
        {
            "showed": false,
            "title": "Test d'allemand",
            "linkDetails": "germantest",
            "linkAccess": import.meta.env.VITE_GERMAN_TEST_URL,
            "technos": [
                1,
                2,
                3
            ],
            "progressionPurcent": "100",
            "progression": "Fini, pas de fioriture, ce projet va au plus simple",
            "abstract":
                "Un tableau quiz permettant de réviser ses verbes irréguliers en allemand.",
            "description":
                "Ce projet m'est venu de quelqu'un qui avait besoin pour ses études de réviser ses verbes irréguliers en allemand et j'y ai vu une bonne opportunité pour créer un test automatisé. C'est un petit projet sans grande ambition mais que j'avais réussi à développer en moins de 24 heures ce qui m'avait rendu fier.",
            "features": [
                "Un bouton permettant de valider ou non chacune de nos réponses, corrigeant celles-ci si besoin",
                "Une note donné à la fin",
                "Génération aléatoire de quelles informations seront données et lesquelles seront demandées"
            ],
        },
        // Satifactory - Tool Fan Site
        {
            "showed": false,
            "title": "Satisfactory Calculator",
            "linkDetails": "satisfactory",
            "linkAccess": import.meta.env.VITE_SATISFACTORY_CALCULATOR_URL,
            "technos": [
                1,
                2,
                3
            ],
            "progressionPurcent": "5",
            "progression": "Un projet à peine commencé, des concepts uniquement.",
            "abstract":
                "Un outil permettant de calculer la chaîne de production pour obtenir telle ou telle ressources dans le jeu Satisfactory.",
            "description":
                "Dans Satisfactory, le but du jeu est de récupérer des ressources et à l'aide d'usine automatisée, de les transformer en des objets de plus en plus manufacturés. Cest un outil qui permettrait de choisir une ressource du jeu Satisfactory ainsi que le rendement par minute souhaité. À partir de cela, le nombre de ressources initiale, ainsi que la chaine de production, le nombre de machine, leur puissance, leur consommation électrique seront calculées automatiquement, tout cela dans le but de prévoir plus efficacement la mise en place des usines. Un outil de perfectionniste farmeur en somme.",
            "features": ["Rien de plus qu'un début de sélection d'item"],
        },
        // Mastermind
        {
            "showed": false,
            "title": "Mastermind",
            "linkDetails": "mastermind",
            "linkAccess": import.meta.env.VITE_MASTERMIND_URL,
            "technos": [
                1,
                3
            ],
            "progressionPurcent": "50",
            "progression":
                "Le jeu fonctionne mais il manque de l'affichage et unpeu d'habillage autour.",
            "abstract":
                "Une reproduction personnelle et avec des nombres du jeu Mastermind. Devinez le code",
            "description":
                "Le jeu du Mastermind est un jeu dans lequel il faut deviner la bonne combinaison de couleur que l'autre a choisi. Ici, ce sont des nombres. À chaque essai de combinaison, il est indiqué le nombre de bonne réponse, de nombre bon à la mauvaise place mais aussi les mauvaises réponses.",
            "features": ["Indication des résultats fluides et faciles à comprendre"],
        },
        // Etherum Follow
        {
            "showed": false,
            "title": "Crypto Follow",
            "linkDetails": "cryptofollow",
            "linkAccess": import.meta.env.VITE_ETHERUM_FOLLOW_URL,
            "technos": [
                1,
                3
            ],
            "progressionPurcent": "30",
            "progression":
                "La base est faite, mais il y aurait beaucoup de choses évidente à rajouter.",
            "abstract":
                "Petit projet visant à estimer gain ou perte à partir de son investissement sur l'Etherum. Fait en fonction de Binance.",
            "description":
                "Ce projet construit à l'époque où je m'intéressais aux cryptomonnaies (ce n'est plus le cas) avec pour but de suivre en temps réel à l'aide de l'API de Binance les gains ou perte de notre investissement sur la plateforme d'échange Binance.",
            "features": [
                "Utilisation d'un WebSocket pour se connecter en temps réel au cours de l'ETH depuis la plateforme Binance.",
                "Prise en compte des frais de transaction dans le calcul gain/perte."
            ],
        },
        // 3D Test World
        {
            "showed": false,
            "title": "3D Test World",
            "linkDetails": "3dtestworld",
            "linkAccess": import.meta.env.VITE_THREE_D_TEST_WORLD_URL,
            "technos": [
                5,
                8,
                9
            ],
            "progressionPurcent": "10",
            "progression": "Un test plutôt qu'un vrai projet, destiné à juste",
            "abstract":
                "Un test dans le but de prendre un peu en main three.js en essayant de créer un petit monde en 3D avec les moyens de déplacement de Minecraft",
            "description":
                "J'ai d'abord utilisé ChatGPT pour me faire une base de ce petit projet avant d'essayer de continuer par moi-même, mais il ne s'agit que d'un test, pas du tout destiné à être continué. Mais je le garde ici au cas-où.",
            "features": [
                "Affichage des 3 axes principaux",
                "Capacité à déplacer la caméra à l'aide de certaines touches du clavier."
            ],
        }
    ],
    "technosData": [
        {
            // VueJS
            "id": 1,
            "name": "VueJS",
            "logo_code": "vuejs",
            "external_link": "https://vuejs.org/",
        },
        {
            // Pinia
            "id": 2,
            "name": "Pinia",
            "logo_code": "pinia",
            "external_link": "https://pinia.vuejs.org/",
        },
        {
            // Scss
            "id": 3,
            "name": "Scss",
            "logo_code": "scss",
            "external_link": "https://sass-lang.com/",
        },
        {
            // Zxcvbn
            "id": 4,
            "name": "Zxcvbn",
            "logo_code": "notfound",
            "external_link": "https://github.com/dropbox/zxcvbn",
        },
        {
            // JavaScript
            "id": 5,
            "name": "JavaScript",
            "logo_code": "javascript",
            "external_link":
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            // Node.JS
            "id": 6,
            "name": "Node.JS",
            "logo_code": "nodejs",
            "external_link": "https://nodejs.org/fr",
        },
        {
            // Express
            "id": 7,
            "name": "Express",
            "logo_code": "notfound",
            "external_link": "https://expressjs.com/",
        },
        {
            // Css
            "id": 8,
            "name": "Css",
            "logo_code": "css",
            "external_link":
                "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        {
            // Three.JS
            "id": 9,
            "name": "Three.JS",
            "logo_code": "threejs",
            "external_link": "https://threejs.org/",
        },
        {
            // React
            "id": 10,
            "name": "React",
            "logo_code": "react",
            "external_link": "https://react.dev/",
        },
        {
            // Redux Toolkit
            "id": 11,
            "name": "Redux Toolkit",
            "logo_code": "redux",
            "external_link": "https://redux-toolkit.js.org/",
        },
        {
            // Vite
            "id": 12,
            "name": "Vite",
            "logo_code": "vite",
            "external_link": "https://vitejs.dev/",
        }
    ],
    // Les contacts
    "contactList": [
        // LinkedIn
        {
            "id": 1,
            "link": "https://linkedin.com/in/alexandre-richard-dev4",
            "copyId": "linkedin",
            "type": "link",
            "section": "pro",
            "title": "LinkedIn",
            "content": "alexandre-richard-dev4",
        },
        // Github
        {
            "id": 2,
            "link": "https://github.com/Alexandre-RICHARD",
            "copyId": "github",
            "type": "link",
            "section": "pro",
            "title": "Github",
            "content": "Alexandre-RICHARD",
        },
        // Adresse-mail
        {
            "id": 3,
            "copyId": "gmail",
            "type": "copy",
            "section": "pro",
            "title": "Gmail",
            "content": "alexandre.richard.dev@gmail.com",
        },
        // Discord
        {
            "id": 4,
            "copyId": "discord",
            "type": "copy",
            "section": "pro",
            "title": "Discord",
            "content": "shadowmere_s",
        },
        // Steam
        {
            "id": 5,
            "copyId": "steam",
            "type": "copy",
            "section": "games",
            "title": "Steam",
            "content": "197365780",
        },
        // Gog
        {
            "id": 6,
            "copyId": "gog",
            "type": "copy",
            "section": "games",
            "title": "Gog",
            "content": "Shadowmere_Swift",
        },
        // Epic
        {
            "id": 7,
            "copyId": "epic",
            "type": "copy",
            "section": "games",
            "title": "Epic Games",
            "content": "Shadowmere_Swift",
        },
        // Rockstar
        {
            "id": 8,
            "copyId": "rockstar",
            "type": "copy",
            "section": "games",
            "title": "Rockstar Games",
            "content": "Shadowmere_Swift",
        },
        // Uplay
        {
            "id": 9,
            "copyId": "uplay",
            "type": "copy",
            "section": "games",
            "title": "Uplay",
            "content": "ShadowmereSwift",
        },
        // Origin
        {
            "id": 10,
            "copyId": "origin",
            "type": "copy",
            "section": "games",
            "title": "Origin",
            "content": "Shadowmere_Swift",
        },
        // Xbox
        {
            "id": 11,
            "copyId": "xbox",
            "type": "copy",
            "section": "games",
            "title": "Xbox Live",
            "content": "ShadowmereSwift",
        },
        // Playstation
        {
            "id": 12,
            "copyId": "playstation",
            "type": "copy",
            "section": "games",
            "title": "PlayStation",
            "content": "Andromeda-CTZ",
        }
    ],
};
