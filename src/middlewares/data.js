const age = Math.floor(
    (Date.now() - new Date(1999, 5, 24).getTime()) / 1000 / 60 / 60 / 24 / 365
);

export const dataObject = {
    // Textes de la page d'accueil
    homeIntro: `<p class="description">Jeune de <span>${ age } ans</span> investi, la passion du code m'attire vers de nouvelles expériences, de nouveaux projets. En quête d'algorithmes, je <span>recherche ma première expérience</span> professionnelle en tant qu'<span>alternant</span> en <span>Développement Web</span> dans l'environnement sur <span>Angers et ses alentours</span> ou en télétravail.</p>`,
    homeDescOne: "Je m'appelle donc Alexandre Richard. Tombé amoureux d'internet, j'ai été pris de passion par la capacité à créer des choses comme on le souhaite, de trouver des solutions à des problèmes de logique. Je n'ai pour le moment exploré vraiment que le web, à savoir HTML, CSS, Javascript et ses framework (Vue.JS et React) ainsi que l'environnement Node.JS. J'ai pour objectif présent de finioler certains projets, d'en concevoir d'autres, paufiner mes compétences avec React tout en apprenant TypeScript, NextJS, Nest, JQuery et PHP.",
    homeDescTwo: "À côté du code, je suis passionné de nature, de jeux vidéo, de cinéma, idéaliste et faciné par l'humain, la science et la connaissances en général. J'aime rire, voir la vie du bon côté et j'essaie de ne jamais faillir à mes valeurs.",
    // Texte de la page Curriculum
    curriculumDesc: `Je suis un jeune de ${ age } ans qui s'est pris de passion pour le développement web après des années à chercher l'étincelle. Optimiste et sorti d'une formation en développement web de 6 mois chez O'clock, je continue de me former et d'apprendre. Aussi, ma curiosté pour le secteur du numérique me fait toujours regarder à droite à gauche les nouvelles choses. J'ai expérimenté pour le moment uniquement les langages web, à savoir HTML ; CSS et JS dans lesquels je suis toujours en quête de fonctionnalités à maîtriser et de connaissances à avoir. J'aime beaucoup travailler sur mes projets personnels en essayant d'être le plus rigoureux dans leurs développements et attentif aux axes d'améliorations possibles ainsi qu'à la détection/résolution des bugs. Aimant apprendre, réaliser des challenges et m'investir dans des projets, je recherche une alternance dans une entreprise pour finaliser mes études avec un Bachelor Concepteur, Développeur d'Application. Entreprise dans laquelle je pourrai m'investir et qui saura me faire confiance.`,
    // Listes d'objets de la page Curriculum
    skillsList: [
        "HTML : Toujours des connaissances à prendre",
        "CSS : Des compétences solides",
        "SASS : Surcouche du CSS, préférence personnelle",
        "Javascript/ECMA : Mon langage principal, bonne maîtrise",
        "Vue.JS : Mon coup de ceur, mon outil de prédilection",
        "Vue Router / Pinia : Pour compléter Vue.JS",
        "REACT : Quelques projets réalisés avec, mais une grande marge de progession reste",
        "Redux Toolkit : Utilisé avec React et confortable",
        "Node.JS : Mon seul langage utilisé en back",
        "ExpressJS : Pour créer le serveur",
        "Php : Initiation et prise en main de base",
        "TypeScript : Initiation et prise en main de base",
        "SQL : Les connaissances de bases",
        "i18Next : Pour traduire un site",
        "Axios : Pour simplifier les requêtes serveur",
        "Socket.io : Liaison des utilisateurs avec un serveur",
        "BCrypt : Pour sécuriser les mots de passe",
        "Sequelize : Exploré pour les requêtes de BDD",
        "Excel : Passion pour ce logiciel, très bonne maîtrise",
        "PgAdmin/PhpMyAdmin : Pour la gestion des BDD"
    ],
    qualificationsList: [
        "Brevet des collèges",
        "Bac Scientifique - Mention bien",
        "Développeur DWWM II - Niveau BAC+2",
        "OpQuast, Maîtrise de la qualité en projet Web 785 / 1000",
        "MOOC SecNum Académie de l'ANSSI",
    ],
    informationsList: [
        "Permis B (sans véhicule)",
        "Français : langue natale (C2)",
        "Anglais : Niveau B2",
    ],
    professionalExperiences: [
        {
            key: 1,
            title: "Stage d'observation de 3ème",
            firstDate: "Mars 2014",
            secondDate: null,
            location: "Jefimmo - Saint-Laurent-des-Autels",
            description:
                "Stage d'une durée de 5 jours dans une agence immobilière avec organisation de visite, mise en vente d'une maison et réalisation de photos et de différents croquis.",
        },
        {
            key: 2,
            title: "Stage en seconde professionnelle",
            firstDate: "Janvier 2015",
            secondDate: null,
            location: "Gamm vert - Saint Laurent des Autels",
            description:
                "Stage d'une durée d'une semaine en jardinerie. Manutention, mise en rayon, inventaire et étiquetages.",
        },
        {
            key: 3,
            title: "Stage en seconde professionnelle",
            firstDate: "Mars 2015",
            secondDate: null,
            location: "Super U - Ancenis",
            description:
                "Stage de deux semaines dans une grande surface avec principalement du nettoyage et de la mise en rayon",
        },
        {
            key: 4,
            title: "Stage en seconde professionnelle",
            firstDate: "Mai 2015",
            secondDate: null,
            location: "Top Office - Ancenis",
            description:
                "Stage de quatre semaines au sein de l'entreprise avec une découverte de la majeure partie des fonctions et métiers présents. De l'ouverture avec la mise en place, à la fermeture et le bilan de la journée, en passant par le passage de commande, la gestion des stock ou la réception en caisse.",
        },
        {
            key: 5,
            title: "Projet de fin d'étude",
            firstDate: "Février 2021",
            secondDate: "Mars 2021",
            location: "Apothéose d'O'clock",
            description:
                "Il s'agissait d'un projet de fin d'études organisé par l'école 100% en téléprésentiel à réaliser en groupe. Avec 3 de mes collègues de promo, nous avons conçu un site de A à Z des wireframe jusqu'à la base de donnée, avec router, stylisation, connexion etc. Créé en React avec Webpack, ce site en Single Page Application n'est plus hébergé aujourd'hui mais je l'implémenterai sur ce site un de ces jours.",
        },
        {
            key: 6,
            title: "CDI en restauration rapide",
            firstDate: "Septembre 2021",
            secondDate: "Mai 2022",
            location: "Burger King - Angers",
            description:
                "J'ai travaillé durant 9 mois dans ce restaurant pour payer les factures. C'était également l'occasion pour moi de prendre une année sabatique, une année où j'aurai le temps de faire une transition entre ma vie scolaire et ma future vie professionnelle. J'en ai profité pour me former en autonomie davantage. Dans ce travail, j'y ai appris l'accueil et la gestion de clients, régulièrement en grand nombre et ai développé une grande autonomie dans mes tâches à accomplir pour permettre d'avoir un service le plus fluide possible. J'ai également beaucoup eu besoin de réagir à des problèmes en tout genre impliquant un contact avec la hiérarchie et le client indispendable. J'ai quitté l'entreprise pour me concentrer sur mes projets et ma recherche d'une alternance.",
        },
        {
            key: 7,
            title: "Projet personnel",
            firstDate: "Juin 2022",
            secondDate: "Présent",
            location: "De chez moi",
            description:
                "Depuis que j'ai quitté mon emploi, je travaille sur ce projet, ce site sur lequel vous vous trouvez afin d'affiner mes compétences et de me constituer un portfolio solide. Ce projet est un superbe exercice car n'ayant vraiment pas la fibre créative, le design est un challenge pour moi. Je suis cependant fier de mon site, j'ai énormément appris en le faisant et j'ai hâte de le compléter avec de nouveaux projets annexes. En effet, je m'en sers pour lié mes projets personnels que j'avais réalisé avant et que je fais depuis.",
        },
    ],
    schoolCurriculum: [
        {
            key: 1,
            title: "Collège",
            firstDate: "2010",
            secondDate: "2014",
            location: "Collège Georges Pompidou Champtoceaux",
            description:
                "Quatre années de collège sans accro avec obtention du brevet des collèges. Un voyage en Espagne durant l'année de 3ème",
        },
        {
            key: 2,
            title: "Lycée en cursus scientifique",
            firstDate: "2014",
            secondDate: "2018",
            location: "Lycée Polyvalent Joubert-Maillard Ancenis",
            description:
                "Quatre ans de lycée pour cause de deux années de seconde. En effet, j'ai d'abord choisi le fait d'aller en Bac Professionnel pour commencer le lycée, ce qui ne m'a pas plu. Je suis donc repassé en cursus général dans lequel j'ai effectué trois années dans la filière Scientifique quand elle existait encore. J'en suis sorti très motivé et diplomé du Bac mention Bien. Un voyage à Londres durant l'année de Première.",
        },
        {
            key: 3,
            title: "Licence scientifique",
            firstDate: "2018",
            secondDate: "2020",
            location: "Université d'Angers - Fac de Sciences",
            description:
                "À la sortie du lycée, je voulais partir dans un parcours scientifique car c'était ma voie de prédileciton ne sachant pas où aller d'autre. Cependant, bien que cela me plaisait durant la première année, la deuxième année fut bien plus compliqué et l'arrivée du COVID et les cours en distanciel m'ont convaincu que je devait essayer de me réorienter pour faire ce que j'aimais.",
        },
        {
            key: 4,
            title: "Formation de Développeur Web",
            firstDate: "Octobre 2020",
            secondDate: "Mars 2021",
            location: "École 100% à distance O'Clock",
            description:
                "J'ai intégré la formation Développeur Web Fullstack JS d'O'Clock d'une durée de 6 mois. Moi qui avait besoin auparavant d'être guidé et accompagné pour me former, au début tout du moins, cette formation était parfaite pour moi. Des bases HTML + CSS, puis la découverte du Javascript, on a également été formé à Node.JS et à la création/gestion de Base de Données. Durant quatre semaines sur la fin, nous avons effectué l'Apothéose : la réalisation d'un projet de groupe en reprenant la métohde SCRUM et en divisant les étapes de développement en sprint avec la méthode AGILE. J'ai également grâce à l'école passé et obtenu le diplôme Développeur Web et Web Mobile II.",
        },
    ],
    hobbiesList: [
        "Jeux vidéo",
        "Randonnées",
        "Programmation",
        "Cinéma",
        "Lecture",
        "Course à pied",
        "Gérer des choses (données, organisation...)",
        "Nourrir mes connaissances",
        "Les animaux",
    ],
    qualitiesList: [
        "Autonome",
        "Curieux",
        "Enthousiaste",
        "Esprit d'équipe",
        "Investi",
        "Jovial",
        "Réactif",
        "Rigoureux",
        "Patient",
        "Aimable",
    ],
    // Les infos du Headers
    headerModals: [
        // Un ID pour différencier dans le for in, le contenu indiqué sur le lien et le lien
        { id: 0, type: "modal", content: "Connexion", link: "login" },
        { id: 1, type: "modal", content: "Inscription", link: "register" },
    ],
    headerLinks: [
        { id: 0, type: "link", content: "Accueil", link: "HomePage" },
        {
            id: 1,
            type: "link",
            content: "Curriculum",
            link: "Curriculum",
        },
        {
            id: 2,
            type: "link",
            content: "Projets",
            link: "Project",
        },
        {
            id: 3,
            type: "link",
            content: "Contact",
            link: "Contact",
        },
    ],
    // Mes projets
    projectList: [
        // Portfolio
        {
            id: 1,
            title: "Portfolio",
            linkDetails: "portfolio",
            linkAccess: process.env.PORTFOLIO_URL,
            technos: [1, 2, 3, 4],
            progression_purcent: "95",
            progression: "Plus que quelques finitions à faire, mais d'autres idées en stock",
            abstract:
                "Vous vous trouvez dessus. Fini et développé from scratch, j'ai encore des idées d'améliorations et de features. Il me sert de Portfolio, de CV mais également à regrouper tous mes projets au même endroit, peu importe leur avancé.",
            description:
                "J'ai créé ce site pour pleins de raisons différentes. La première étant de m'en servir de portfolio à montrer aux recruteurs, aux entreprises. Aussi, j'ai toujours pour objectif de m'améliorer, d'apprendre de nouvelles choses et d'approfondir mes connaissances. Cet exercice est parfait pour cela car je rencontre énormément de problématique que j'aime essayer de résoudre. De plus, je trouvais ça intéressant de faire un site à mon nom en partant de rien. J'y travaille à mon rythme, en le faisant d'abord par envie mais je prend toujours du plaisir à y retourner et à tenter de l'améliorer.",
            features: [
                "Un breadCrumb, cette barre qui indique le chemin sur lequel on se trouve actuellement construit à partir de useRoute de Vue Router.",
                "Une apparition de certains éléments fluides au défilement de la page",
                "Accessibilité de mon CV directement depuis le header",
                "Création du site totalement avec Vue.JS. Je trouve ce framework plus simple à apprendre mais également bien plus intuitif à utiliser en combinaison avec Pinia et Vue Router.",
                "Je m'essaie à différents manière de stylisé des éléments pour en apprendre plus que la simple base du CSS",
                "La possibilité de copier différentes informations depuis les liens situés dans Contact.",
                "La possibilité de s'inscrire avec les informations classiques pour. Le mot de passe n'est pas enregistré en clair mais hashé avec bcrypt.",
                "La possibilité de changer d'adresse-mail, de mot de passe et d'accéder à ses informations personnelles.",
            ],
        },
        // Jeu d'échecs
        {
            id: 2,
            title: "Jeu d'échecs",
            linkDetails: "chess",
            linkAccess: process.env.CHESS_GAME_URL,
            technos: [1, 2, 3],
            progression_purcent: "55",
            progression: "Le jeu est quasi complet, manque 2/3 règle et une vrai intégrations agréable",
            abstract:
                "Le jeu d'échec que j'ai créé de toute pièce. Il n'est jouable que seul mais à pour but d'être jouable en ligne. Il manque quelques détails pour que les véritables règles des échecs soient respectées.",
            description:
                "Il s'agit d'un jeu d'échec que j'avais créé à l'origine durant mes études au sein d'O'clock. Quasiment terminé, je l'avais délaissé pour me concentrer sur les dernières semaines de cours. C'est par celui-ci que j'ai décidé de commencer ce projet de portfolio en le reprenant du début. Il n'est pour le moment pas encore tout à fait terminé et n'est jouable qu'en solo, mais quand j'aurai intégré la connexion au site et les différentes fonctionnalités de websocket, je ferai en sorte que deux joueurs puissent créer une partie, personnaliser leur règles et jouer l'un contre l'autre. La sauvegarde des parties et des statistiques sont également prévues.",
            features: [
                "Gestion des différentes pièces à partir de case dynamiques comportant plusieurs informations.",
                "Les mouvements sont calculés côté serveur afin que les joueurs ne puissent tricher en réalisant des coups impossibles.",
                "Un mode permettant de mettre en surbrillance toutes les pièces capable de bouger",
                "Un indicateur montrant le nombre de coups possible pour le joueur dont c'est le tour actuellement",
            ],
        },
        // Genshin Fan Site
        {
            id: 3,
            title: "Genshin - Fan Tool Site",
            linkDetails: "genshin",
            linkAccess: process.env.GENSHIN_IMPACT_URL,
            technos: [1, 2, 3],
            progression_purcent: "85",
            progression: "Le projet ne fait que commencer, mais selon mes prévisions, c'est le plus ambitieux de tous.",
            abstract:
                "Un outil permettant de prévoir à l'avance les statistiques optimales de ses personnages sur Genshin afin d'essayer de s'en rapprocher, et par la suite d'optimiser son farm de ressources à l'aide de toutes les infos nécessaires.",
            description:
                "Ce projet est sur son début. Pris de passion pour le jeu Genshin Impact, j'ai eu envie de transférer mes projets sur tableaux Excel en un site que je pourrait partager à la communauté. J'ai pour le moment implémenter un outil (sans le styliser) permettant d'estimer les statistiques maximales théoriquement atteignable. La suite est de permettre aux joueurs d'indiquer leurs objectifs sur les personnages ou les armes à améliorer et leur stock d'inventaire pour calculer automatiquement tout ce qui est manquant. Ma volonté de vouloir le partager à terme représente le challenge de ce projet.",
            features: [
                "Sélectionner une arme et un personnage ainsi que les statistiques des 5 artefacts pour estimer les stats théorique.",
                "Différents filtres applicables ainsi qu'un champ textuel applicable à une liste en temps réel."
            ],
        },
        // German Test
        {
            id: 4,
            title: "Test d'allemand",
            linkDetails: "germantest",
            linkAccess: process.env.GERMAN_TEST_URL,
            technos: [1, 2, 3],
            progression_purcent: "100",
            progression: "Fini, pas de fioriture, ce projet va au plus simple",
            abstract:
                "Un tableau quiz permettant de réviser ses verbes irréguliers en allemand.",
            description:
                "Ce projet m'est venu de quelqu'un qui avait besoin pour ses études de réviser ses verbes irréguliers en allemand et j'y ai vu une bonne opportunité pour créer un test automatisé. C'est un petit projet sans grande ambition mais que j'avais réussi à développer en moins de 24 heures ce qui m'avait rendu fier.",
            features: [
                "Un bouton permettant de valider ou non chacune de nos réponses, corrigeant celles-ci si besoin",
                "Une note donné à la fin",
                "Génération aléatoire de quelles informations seront données et lesquelles seront demandées",
            ],
        },
        // Satifactory - Tool Fan Site
        {
            id: 5,
            title: "Satisfactory Calculator",
            linkDetails: "satisfactory",
            linkAccess: process.env.SATISFACTORY_CALCULATOR_URL,
            technos: [1, 2, 3],
            progression_purcent: "5",
            progression: "Un projet à peine commencé, des concepts uniquement.",
            abstract:
                "Un outil permettant de calculer la chaîne de production pour obtenir telle ou telle ressources dans le jeu Satisfactory.",
            description:
                "Dans Satisfactory, le but du jeu est de récupérer des ressources et à l'aide d'usine automatisée, de les transformer en des objets de plus en plus manufacturés. Cest un outil qui permettrait de choisir une ressource du jeu Satisfactory ainsi que le rendement par minute souhaité. À partir de cela, le nombre de ressources initiale, ainsi que la chaine de production, le nombre de machine, leur puissance, leur consommation électrique seront calculées automatiquement, tout cela dans le but de prévoir plus efficacement la mise en place des usines. Un outil de perfectionniste farmeur en somme.",
            features: [
                "Rien de plus qu'un début de sélection d'item",
            ],
        },
        // Mastermind
        {
            id: 6,
            title: "Mastermind",
            linkDetails: "mastermind",
            linkAccess: process.env.MASTERMIND_URL,
            technos: [1, 3],
            progression_purcent: "50",
            progression: "Le jeu fonctionne mais il manque de l'affichage et unpeu d'habillage autour.",
            abstract:
                "Une reproduction personnelle et avec des nombres du jeu Mastermind. Devinez le code",
            description:
                "Le jeu du Mastermind est un jeu dans lequel il faut deviner la bonne combinaison de couleur que l'autre a choisi. Ici, ce sont des nombres. À chaque essai de combinaison, il est indiqué le nombre de bonne réponse, de nombre bon à la mauvaise place mais aussi les mauvaises réponses.",
            features: [
                "Indication des résultats fluides et faciles à comprendre",
            ],
        },
        // Etherum Follow
        {
            id: 7,
            title: "Crypto Follow",
            linkDetails: "cryptofollow",
            linkAccess: process.env.ETHERUM_FOLLOW_URL,
            technos: [1, 3],
            progression_purcent: "30",
            progression: "La base est faite, mais il y aurait beaucoup de choses évidente à rajouter.",
            abstract:
                "Petit projet visant à estimer gain ou perte à partir de son investissement sur l'Etherum. Fait en fonction de Binance.",
            description:
                "Ce projet construit à l'époque où je m'intéressais aux cryptomonnaies (ce n'est plus le cas) avec pour but de suivre en temps réel à l'aide de l'API de Binance les gains ou perte de notre investissement sur la plateforme d'échange Binance.",
            features: [
                "Utilisation d'un WebSocket pour se connecter en temps réel au cours de l'ETH depuis la plateforme Binance.",
                "Prise en compte des frais de transaction dans le calcul gain/perte.",
            ],
        },
        // 3D Test World
        {
            id: 8,
            title: "3D Test World",
            linkDetails: "3dtestworld",
            linkAccess: process.env.THREE_D_TEST_WORLD_URL,
            technos: [5, 8, 9],
            progression_purcent: "10",
            progression: "Un test plutôt qu'un vrai projet, destiné à juste",
            abstract:
                "Un test dans le but de prendre un peu en main three.js en essayant de créer un petit monde en 3D avec les moyens de déplacement de Minecraft",
            description:
                "J'ai d'abord utilisé ChatGPT pour me faire une base de ce petit projet avant d'essayer de continuer par moi-même, mais il ne s'agit que d'un test, pas du tout destiné à être continué. Mais je le garde ici au cas-où.",
            features: [
                "Affichage des 3 axes principaux",
                "Capacité à déplacer la caméra à l'aide de certaines touches du clavier.",
            ],
        },
    ],
    technosData: {
        1: { // VueJS
            name: "VueJS",
            logo_code: "vuejs",
            external_link: "https://vuejs.org/",
        },
        2: { // Pinia
            name: "Pinia",
            logo_code: "pinia",
            external_link: "https://pinia.vuejs.org/",
        },
        3: { // Scss
            name: "Scss",
            logo_code: "scss",
            external_link: "https://sass-lang.com/",
        },
        4: { // Zxcvbn
            name: "Zxcvbn",
            logo_code: "notfound",
            external_link: "https://github.com/dropbox/zxcvbn",
        },
        5: { // JavaScript
            name: "JavaScript",
            logo_code: "javascript",
            external_link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        6: { // Node.JS
            name: "Node.JS",
            logo_code: "nodejs",
            external_link: "https://nodejs.org/fr",
        },
        7: { // Express
            name: "Express",
            logo_code: "notfound",
            external_link: "https://expressjs.com/",
        },
        8: { // Css
            name: "Css",
            logo_code: "css",
            external_link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        9: { // Three.JS
            name: "Three.JS",
            logo_code: "threejs",
            external_link: "https://threejs.org/",
        },
    },
    // Les contacts
    contactList: [
        // LinkedIn
        {
            id: 1,
            link: "https://linkedin.com/in/alexandre-richard-dev4",
            copyId: "linkedin",
            type: "link",
            section: "pro",
            title: "LinkedIn",
            content: "alexandre-richard-dev4",
        },
        // Github
        {
            id: 2,
            link: "https://github.com/Alexandre-RICHARD",
            copyId: "github",
            type: "link",
            section: "pro",
            title: "Github",
            content: "Alexandre-RICHARD",
        },
        // Adresse-mail
        {
            id: 3,
            copyId: "gmail",
            type: "copy",
            section: "pro",
            title: "Gmail",
            content: "alexandre.richard.dev@gmail.com",
        },
        // Discord
        {
            id: 4,
            copyId: "discord",
            type: "copy",
            section: "pro",
            title: "Discord",
            content: "shadowmere_s",
        },
        // Steam
        {
            id: 5,
            copyId: "steam",
            type: "copy",
            section: "games",
            title: "Steam",
            content: "197365780",
        },
        // Gog
        {
            id: 6,
            copyId: "gog",
            type: "copy",
            section: "games",
            title: "Gog",
            content: "Shadowmere_Swift",
        },
        // Epic
        {
            id: 7,
            copyId: "epic",
            type: "copy",
            section: "games",
            title: "Epic Games",
            content: "Shadowmere_Swift",
        },
        // Rockstar
        {
            id: 8,
            copyId: "rockstar",
            type: "copy",
            section: "games",
            title: "Rockstar Games",
            content: "Shadowmere_Swift",
        },
        // Uplay
        {
            id: 9,
            copyId: "uplay",
            type: "copy",
            section: "games",
            title: "Uplay",
            content: "ShadowmereSwift",
        },
        // Origin
        {
            id: 10,
            copyId: "origin",
            type: "copy",
            section: "games",
            title: "Origin",
            content: "Shadowmere_Swift",
        },
        // Xbox
        {
            id: 11,
            copyId: "xbox",
            type: "copy",
            section: "games",
            title: "Xbox Live",
            content: "ShadowmereSwift",
        },
        // Playstation
        {
            id: 12,
            copyId: "playstation",
            type: "copy",
            section: "games",
            title: "PlayStation",
            content: "Andromeda-CTZ",
        },
    ],


};
