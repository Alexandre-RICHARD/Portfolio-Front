// On importe les éléments utiles de Vue Router
import { createRouter, createWebHistory } from "vue-router";
import { useMainStore } from "@store/Main";

// On importe toutes les vues qui seront utilisées par notre router principal
import HomePage from "@views/Page/Main/HomePage.vue";
import Curriculum from "@views/Page/Main/Curriculum.vue";
import Projects from "@views/Page/Main/Projects.vue";
import ProjectDetails from "@views/Page/Main/ProjectDetails.vue";
import Contact from "@views/Page/Main/Contact.vue";

import NotFound from "@views/Page/Other/NotFound.vue";
import EtherumFollow from "@views/Page/Other/EtherumFollow.vue";
import UserProfile from "@views/Page/User/UserProfile.vue";

import SatisfactoryCalculator from "@views/Page/Projects/SatisfactoryCalculator/SatisfactoryCalculator.vue";
import ChessGame from "@views/Page/Projects/Chess/ChessGame.vue";
import GermanTest from "@views/Page/Projects/GermanTest/GermanTest.vue";


// On liste toutes les routes qui seront gérées par le router principal
const routes = [
    {
        //Home
        path: "/",
        name: "HomePage",
        components: { mainRouter: HomePage },
        meta: {
            documentTitle: "Accueil",
            breadCrumb: [
                {
                    title: "Accueil",
                    link: "HomePage",
                },
            ],
        },
    },
    {
        //Curriculum
        path: "/curriculum",
        name: "Curriculum",
        components: { mainRouter: Curriculum },
        meta: {
            documentTitle: "Curriculum",
            breadCrumb: [
                {
                    title: "Curriculum",
                    link: "Curriculum",
                },
            ],
        },
    },
    {
        //PortfolioProject
        path: "/project",
        name: "Project",
        components: { mainRouter: Projects },
        meta: {
            documentTitle: "Mes Projets",
            breadCrumb: [
                {
                    title: "Projets",
                    link: "Project",
                },
            ],
        },
    },
    {
        //ProjectDetails
        path: "/project/:projectName",
        name: "ProjectDetails",
        components: { mainRouter: ProjectDetails },
        meta: {
            documentTitle: "N/A",
            breadCrumb: [
                {
                    title: "Projets",
                    link: "Project",
                },
                {
                    params: "projectList",
                    title: "N/A",
                    link: "ProjectDetails",
                },
            ],
        },
    },
    {
        //PortfolioContact
        path: "/contact",
        name: "Contact",
        components: { mainRouter: Contact },
        meta: {
            documentTitle: "Mes Contacts",
            breadCrumb: [
                {
                    title: "Contacts",
                    link: "Contact",
                },
            ],
        },
    },
    {
        //UserProfile
        path: "/profile",
        name: "UserProfile",
        components: { mainRouter: UserProfile },
        meta: {
            documentTitle: "Mon profil",
            breadCrumb: [
                {
                    title: "Accueil",
                    link: "HomePage",
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
        //CurrentETH
        path: "/gain",
        name: "CurrentETH",
        components: { mainRouter: EtherumFollow },
        meta: {
            documentTitle: "Etherum",
            breadCrumb: [
                {
                    title: "Accueil",
                    link: "HomePage",
                },
                {
                    title: "Etherum",
                    link: "CurrentETH",
                },
            ],
        },
    },
    {
        //SatisfactoryCalculator
        path: "/satisfactory/calculator",
        name: "SatisfactoryCalculator",
        components: { mainRouter: SatisfactoryCalculator },
        meta: {
            documentTitle: "Satisfactory Calculator",
            breadCrumb: [
                {
                    title: "Accueil",
                    link: "HomePage",
                },
                {
                    title: "Satisfactory Calculator",
                    link: "SatisfactoryCalculator",
                },
            ],
        },
    },
    {
        //GermanTest
        path: "/germantest",
        name: "GermanTest",
        components: { mainRouter: GermanTest },
        meta: {
            documentTitle: "Apprendre ses verbes irréguliers",
            breadCrumb: [
                {
                    title: "Accueil",
                    link: "HomePage",
                },
                {
                    title: "Apprendre ses verbes irréguliers",
                    link: "GermanTest",
                },
            ],
        },
    },
    {
        //Chess
        path: "/chess",
        name: "Chess",
        components: { mainRouter: ChessGame },
        meta: {
            documentTitle: "Jeu d'échecs",
            breadCrumb: [
                {
                    title: "Accueil",
                    link: "HomePage",
                },
                {
                    title: "Jeu d'échecs",
                    link: "Chess",
                },
            ],
        },
    },
    {
        //404
        path: "/:pathMatch(.*)*",
        name: "404",
        components: { mainRouter: NotFound },
        meta: {
            documentTitle: "Perdition complète",
            breadCrumb: [
                {
                    title: "Accueil",
                    link: "HomePage",
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
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: "smooth" });
            }, 200);
        });
    },
});

router.beforeEach(async (to) => {
    const MainStore = useMainStore();
    const { account } = MainStore;
    if (
        to.matched.some((element) => element.meta.requiredLogin) &&
        account.connected !== true
    ) {
        return { name: "HomePage" };
    }
});

// On indique qu'à chaque changement de page, le titre du document doit prendre le titre indiqué dans la meta de la route
router.afterEach((to) => {
    document.title = to.meta.documentTitle;
});

// On exporte notre router afin de le récupérer à la création de l'app
export default router;
