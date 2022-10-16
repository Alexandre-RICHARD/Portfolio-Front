// On importe les éléments utiles de Vue Router
import { createRouter, createWebHistory } from "vue-router";

// On importe toutes les vues qui seront utilisées par notre router principal
import HomePage from "../views/Page/HomePage.vue";
import NotFound from "../views/Page/Other/NotFound.vue";
import EtherumFollow from "../views/Page/Other/EtherumFollow.vue";

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
                components: { portfolioRouter: pfHome },
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
                components: { portfolioRouter: pfCurriculum },
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
                components: { portfolioRouter: pfProjects },
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
                components: { portfolioRouter: pfProjectDetails },
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
                components: { portfolioRouter: pfContact },
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
    { //! CHANGE
        path: "/gain",
        name: "CurrentETH",
        components: { mainRouter: EtherumFollow },
        meta: {
            title: "Suivi de gains",
            path: "EtherumFollow",
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        components: { notFoundRouter: NotFound },
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

// On indique qu'à chaque changement de page, le titre du document doit prendre le titre indiqué dans la meta de la route
router.afterEach((to) => {
    document.title = to.meta.documentTitle;
});

// On exporte notre router afin de le récupérer à la création de l'app
export default router;
