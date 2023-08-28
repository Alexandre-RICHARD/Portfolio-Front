// Importation de Pinia, le store officiel de Vue.js
import { defineStore } from "pinia";

export const useMainStore = defineStore("Main", {
    state: () => ({
        account: {
            connected: false,
            nickname: null,
            mail: null,
            token: null,
        },
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
        modalData: {
            menu: false,
            open: false,
            type: null,
            loading: false,
            headerVisibility: true,
        },
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
                content: "Shadowmere#5754",
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
        }
    }),
});
