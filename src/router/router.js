// On importe les éléments utiles de Vue Router
import { createRouter, createWebHistory } from "vue-router";
import { useMainStore } from "../store/Main";

// On importe toutes les vues qui seront utilisées par notre router principal
import HomePage from "../views/Page/HomePage.vue";
import NotFound from "../views/Page/Other/NotFound.vue";
import EtherumFollow from "../views/Page/Other/EtherumFollow.vue";
import UserProfile from "../views/Page/Other/UserProfile.vue";

import SatisfactoryCalculator from "../views/Page/SatisfactoryCalculator/SatisfactoryCalculator.vue";
import ChessGame from "../views/Page/Chess/ChessGame.vue";
import GermanTest from "../views/Page/GermanTest/GermanTest.vue";

import pfHome from "../views/Page/Portfolio/pfHome.vue";
import pfCurriculum from "../views/Page/Portfolio/pfCurriculum.vue";
import pfProjects from "../views/Page/Portfolio/pfProjects.vue";
import pfProjectDetails from "../views/Page/Portfolio/pfProjectDetails.vue";
import pfContact from "../views/Page/Portfolio/pfContact.vue";

// On liste toutes les routes qui seront gérées par le router principal
const routes = [
    {
        path: "/",
        name: "Home",
        components: { mainRouter: HomePage },
        meta: {
            documentTitle: "TryHard but SlowRun",
            breadCrumb: [
                {
                    title: "TryHard but SlowRun",
                    link: "Home",
                },
            ],
        },
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        children: [
            {
                path: "home",
                name: "PortfolioHome",
                components: { mainRouter: pfHome },
                meta: {
                    documentTitle: "Alexandre Richard",
                    breadCrumb: [
                        {
                            title: "TryHard but SlowRun",
                            link: "Home",
                        },
                        {
                            title: "Alexandre Richard",
                            link: "PortfolioHome",
                        },
                    ],
                },
            },
            {
                path: "curriculum",
                name: "PortfolioCurriculum",
                components: { mainRouter: pfCurriculum },
                meta: {
                    documentTitle: "Curriculum",
                    breadCrumb: [
                        {
                            title: "TryHard but SlowRun",
                            link: "Home",
                        },
                        {
                            title: "Curriculum",
                            link: "PortfolioCurriculum",
                        },
                    ],
                },
            },
            {
                path: "project",
                name: "PortfolioProject",
                components: { mainRouter: pfProjects },
                meta: {
                    documentTitle: "Mes Projets",
                    breadCrumb: [
                        {
                            title: "TryHard but SlowRun",
                            link: "Home",
                        },
                        {
                            title: "Projets",
                            link: "PortfolioProject",
                        },
                    ],
                },
            },
            {
                path: "project/:projectName",
                name: "ProjectDetails",
                components: { mainRouter: pfProjectDetails },
                meta: {
                    documentTitle: "N/A",
                    breadCrumb: [
                        {
                            title: "TryHard but SlowRun",
                            link: "Home",
                        },
                        {
                            title: "N/A",
                            link: "ProjectDetails",
                        },
                    ],
                },
            },
            {
                path: "contact",
                name: "PortfolioContact",
                components: { mainRouter: pfContact },
                meta: {
                    documentTitle: "Mes Contacts",
                    breadCrumb: [
                        {
                            title: "TryHard but SlowRun",
                            link: "Home",
                        },
                        {
                            title: "Contacts",
                            link: "PortfolioContact",
                        },
                    ],
                },
            },
        ],
    },
    {
        path: "/profile",
        name: "UserProfile",
        components: { mainRouter: UserProfile },
        meta: {
            documentTitle: "Mon profil",
            breadCrumb: [
                {
                    title: "TryHard but SlowRun",
                    link: "Home",
                },
                {
                    title: "Mon profil",
                    link: "UserProfile",
                },
            ],
            requiredLogin: true,
        },
    },
    {
        path: "/gain",
        name: "CurrentETH",
        components: { mainRouter: EtherumFollow },
        meta: {
            documentTitle: "Etherum",
            breadCrumb: [
                {
                    title: "TryHard but SlowRun",
                    link: "Home",
                },
                {
                    title: "Etherum",
                    link: "CurrentETH",
                },
            ],
        },
    },
    {
        path: "/satisfactory/calculator",
        name: "SatisfactoryCalculator",
        components: { mainRouter: SatisfactoryCalculator },
        meta: {
            documentTitle: "Satisfactory Calculator",
            breadCrumb: [
                {
                    title: "TryHard but SlowRun",
                    link: "Home",
                },
                {
                    title: "Satisfactory Calculator",
                    link: "SatisfactoryCalculator",
                },
            ],
        },
    },
    {
        path: "/germantest",
        name: "German Test",
        components: { mainRouter: GermanTest },
        meta: {
            documentTitle: "Apprendre ses verbes irréguliers",
            breadCrumb: [
                {
                    title: "TryHard but SlowRun",
                    link: "Home",
                },
                {
                    title: "Apprendre ses verbes irréguliers",
                    link: "German Test",
                },
            ],
        },
    },
    {
        path: "/chess",
        name: "Chess",
        components: { mainRouter: ChessGame },
        meta: {
            documentTitle: "Jeu d'échecs",
            breadCrumb: [
                {
                    title: "TryHard but SlowRun",
                    link: "Home",
                },
                {
                    title: "Jeu d'échecs",
                    link: "Chess",
                },
            ],
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        components: { mainRouter: NotFound },
        meta: {
            documentTitle: "Perdition complète",
            breadCrumb: [
                {
                    title: "TryHard but SlowRun",
                    link: "Home",
                },
                {
                    title: "Perdition complète",
                    link: "404",
                },
            ],
        },
    },
];

// On créé notre router en indiquand l'historique et le tableau des routes précédemment créées
const router = createRouter({
    history: createWebHistory(),
    routes,
    // Lors d'un changement de composant/page, le scrolling revient en haut automatiquement
    scrollBehavior () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: "smooth" });
            }, 200);
        });
    }
});

router.beforeEach(async (to) => {
    const MainStore = useMainStore();
    const { account } = MainStore;
    if (to.matched.some(element => element.meta.requiredLogin) && account.connected !== true) {
        return { name: "Home" };
    }
});

// On indique qu'à chaque changement de page, le titre du document doit prendre le titre indiqué dans la meta de la route
router.afterEach((to) => {
    document.title = to.meta.documentTitle;
});

// On exporte notre router afin de le récupérer à la création de l'app
export default router;
