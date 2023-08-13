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
            {
                id: 1,
                title: "Portfolio",
                link: "portfolio",
                linkAccess: "HomePage",
                techno: [
                    "VueJS",
                    "Pinia",
                    "SCSS",
                    "Zxcvbn",
                ],
                progression_purcent: "89",
                progression: "Fini, reste des finiolages et d'autres features en projet",
                abstract:
                    "Le site sur lequel vous vous trouvez, toujours en construction, toujours plus d'idée que j'ai envie d'intégrer. Il me sert de Portfolio, de CV mais également de site sur lequel héberger et placer mes différentes idées.",
                description:
                    "J'ai créé ce site pour pleins de raisons différentes. La première étant de m'en servir de portfolio à montrer aux recruteurs. Aussi, j'ai toujours pour objectif de m'améliorer, d'apprendre de nouvelles choses et d'approfondir mes connaissances. Cet exercice est parfait pour cela car je rencontre énormément de problématique que j'aime essayer de résoudre seul. Aussi, je trouvais ça intéressant de faire un site à mon nom. J'y travaille à mon rythme, en le faisant d'abord par envie mais je prend toujours du plaisir à y retourner et à tenter de l'améliorer.",
                features: [
                    "Un breadCrumb, cette barre qui indique le chemin sur lequel on se trouve actuellement construit facilement à partir de useRoute de Vue Router.",
                    "Une apparition de certains éléments fluides au défilement de la page",
                    "Accessibilité de mon CV directement depuis le header",
                    "Création du site totalement avec Vue.JS. Je trouve ce framework plus simple à apprendre mais également bien plus intuitif à utiliser en combinaison avec Pinia et Vue Router.",
                    "La possibilité de copier différentes informations depuis les liens situés dans Contact.",
                    "La possibilité de s'inscrire avec les informations classiques pour. Le mot de passe n'est pas enregistré en clair.",
                    "La possibilité de changer d'adresse-mail, de mot de passe et d'accéder à ses informations personnelles.",
                    // "Un formulaire de contact ayant pour but de rentrer des informations et qu'en validant, un mail me soit automatiquement envoyé.",
                ],
            },
            // {
            //     id: 2,
            //     title: "Jeu d'échecs",
            //     link: "chess",
            //     linkAccess: "Chess",
            //     abstract:
            //         "Le jeu d'échec que j'ai créé de toute pièce. Il est jouable pour le moment seul et il manque quelques détails pour que les véritables règles des échecs soient respectées. À pour but d'être jouable en ligne.",
            //     description:
            //         "Il s'agit d'un jeu d'échec que j'avais créé à l'origine durant mes études au sein d'O'clock. Quasiment terminé, je l'avais délaissé pour me concentrer sur les dernières semaines de cours. C'est par celui-ci que j'ai décidé de commencer ce projet de portfolio en le reprenant du début. Il n'est pour le moment pas encore tout à fait terminé et n'est jouable qu'en solo, mais quand j'aurai intégré la connexion au site et les différentes fonctionnalités de websocket, je ferai en sorte que deux joueurs puissent créer une partie, personnaliser leur règles et jouer l'un contre l'autre. La sauvegarde des parties et des statistiques sont également prévues.",
            //     features: [
            //         "Gestion des différentes pièces à partir de case dynamiques comportant plusieurs informations.",
            //         "Les mouvements sont calculés côté serveur afin que les joueurs ne puissent tricher en réalisant des coups impossibles.",
            //         "Un mode permettant de mettre en surbrillance toutes les pièces capable de bouger",
            //         "Un indicateur montrant le nombre de coups possible pour le joueur dont c'est le tour actuellement",
            //     ],
            // },
            // {
            //     id: 3,
            //     title: "Test d'allemand",
            //     link: "germantest",
            //     linkAccess: "GermanTest",
            //     abstract:
            //         "Un tableau quiz permettant de réviser ses verbes irréguliers en allemand",
            //     description:
            //         "Ce projet m'est venu de quelqu'un qui avait besoin pour ses études de réviser ses verbes irréguliers en allemand et j'y ai vu une bonne opportunité pour créer un test automatisé",
            //     features: [
            //         "Un bouton permettant de valider ou non chacune de nos réponses, corrigeant celles-ci si besoin",
            //         "Une note donné à la fin",
            //         "Génération aléatoire de quelles informations seront données et lesquelles seront demandées",
            //     ]
            // },
            // {
            //     id: 4,
            //     title: "Genshin Statisfyer",
            //     link: "genshinstatisfyer",
            //     linkAccess: "GenshinStatisfyer",
            //     abstract:
            //         "Un outil permettant de prévoir à l'avance les statistiques optimales de ses personnages sur Genshin afin d'essayer de s'en rapprocher",
            //     description:
            //         "TO DO",
            //     features: ["TO DO"],
            // },
            // {
            //     id: 5,
            //     title: "Mastermind",
            //     link: "mastermind",
            //     linkAccess: "Mastermind",
            //     abstract:
            //         "Une reproduction avec une touche bien personnel du jeu Mastermind",
            //     description:
            //         "TO DO",
            //     features: ["TO DO"],
            // },
            // {
            //     id: 6,
            //     title: "Satisfactory Calculator",
            //     link: "satisfactory/calculator",
            //     linkAccess: "SatisfactoryCalculator",
            //     abstract:
            //         "Un outil permettant de calculer la chaîne de production pour obtenir telle ou telle ressources dans le jeu Satisfactory",
            //     description:
            //         "C'est un outil qui permet de choisir une ressource du jeu Satisfactory ainsi que le rendement par minute souhaité. À partir de cela, le nombre de ressources initiale, ainsi que la chaine de production, le nombre de machine, leur puissance, leur consommation électrique seront calculées automatiquement, tout cela dans le but de prévoir plus efficacement la mise en place des usines. Un outil de perfectionniste farmeur en somme.",
            //     features: ["TO DO"],
            // },
            // {
            //     id: 7,
            //     title: "Crypto Follow",
            //     link: "cryptofollow",
            //     linkAccess: "Crypto Follow",
            //     abstract:
            //         "Un utilitaire permettant de suivre la valeur d'un cours de Cryptomonnaie et de visualiser en direct perte ou gain",
            //     description:
            //         "TO DO",
            //     features: ["TO DO"],
            // },
        ],
        contactList: [
            {
                id: 1,
                link: "https://linkedin.com/in/alexandre-richard-dev4",
                copyId: "linkedin",
                type: "link",
                section: "pro",
                title: "LinkedIn",
                content: "alexandre-richard-dev4",
            },
            {
                id: 2,
                link: "https://github.com/Alexandre-RICHARD",
                copyId: "github",
                type: "link",
                section: "pro",
                title: "Github",
                content: "Alexandre-RICHARD",
            },
            {
                id: 3,
                copyId: "gmail",
                type: "copy",
                section: "pro",
                title: "Gmail",
                content: "alexandre.richard.dev@gmail.com",
            },
            {
                id: 4,
                copyId: "discord",
                type: "copy",
                section: "pro",
                title: "Discord",
                content: "Shadowmere#5754",
            },
            {
                id: 5,
                copyId: "steam",
                type: "copy",
                section: "games",
                title: "Steam",
                content: "197365780",
            },
            {
                id: 6,
                copyId: "gog",
                type: "copy",
                section: "games",
                title: "Gog",
                content: "Shadowmere_Swift",
            },
            {
                id: 7,
                copyId: "epic",
                type: "copy",
                section: "games",
                title: "Epic Games",
                content: "Shadowmere_Swift",
            },
            {
                id: 8,
                copyId: "rockstar",
                type: "copy",
                section: "games",
                title: "Rockstar Games",
                content: "Shadowmere_Swift",
            },
            {
                id: 9,
                copyId: "uplay",
                type: "copy",
                section: "games",
                title: "Uplay",
                content: "ShadowmereSwift",
            },
            {
                id: 10,
                copyId: "origin",
                type: "copy",
                section: "games",
                title: "Origin",
                content: "Shadowmere_Swift",
            },
            {
                id: 11,
                copyId: "xbox",
                type: "copy",
                section: "games",
                title: "Xbox Live",
                content: "ShadowmereSwift",
            },
            {
                id: 12,
                copyId: "playstation",
                type: "copy",
                section: "games",
                title: "PlayStation",
                content: "Andromeda-CTZ",
            },
        ],
    }),
});
