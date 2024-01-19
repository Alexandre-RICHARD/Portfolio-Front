// On importe les éléments utiles de Vue Router
import { createRouter, createWebHistory } from "vue-router";
import { useMainStore } from "@store/Main";

// On importe toutes les vues qui seront utilisées par notre router principal
import HomePage from "@views/Page/Main/HomePage.vue";
import CurriculumPage from "@views/Page/Main/CurriculumPage.vue";
import ProjectsContainer from "@views/Page/Main/ProjectsContainer.vue";
import ProjectDetails from "@views/Page/Main/ProjectDetails.vue";
import ContactPage from "@views/Page/Main/ContactPage.vue";

import NotFound from "@views/Page/Other/NotFound.vue";
import AccountHandler from "@views/Page/User/AccountHandler.vue";
import UserProfile from "@views/Page/User/UserProfile.vue";

// On liste toutes les routes qui seront gérées par le router principal
const routes = [
    //HomePage
    {
        path: "/",
        name: "HomePage",
        components: { mainRouter: HomePage },
        meta: {
            documentTitle: "Alexandre Richard",
            breadCrumb: [
            ],
        },
    },
    //Curriculum
    {
        path: "/curriculum",
        name: "Curriculum",
        components: { mainRouter: CurriculumPage },
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
    //Project
    {
        path: "/project",
        name: "Project",
        components: { mainRouter: ProjectsContainer },
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
    //Details
    {
        path: "/project/:projectLinkName",
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
                    params: ["projectLinkName", "projectTitle"],

                },
            ],
        },
    },
    //Contact
    {
        path: "/contact",
        name: "Contact",
        components: { mainRouter: ContactPage },
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
    //AccountHandler
    {
        path: "/account",
        name: "AccountHandler",
        components: { mainRouter: AccountHandler },
        meta: {
            documentTitle: "Page de connexion",
            breadCrumb: [
                {
                    title: "Mon profil",
                    link: "AccountHandler",
                },
            ],
        },
    },
    //UserProfile
    {
        path: "/profile",
        name: "UserProfile",
        components: { mainRouter: UserProfile },
        meta: {
            documentTitle: "Mon profil",
            breadCrumb: [
                {
                    title: "Mon profil",
                    link: "UserProfile",
                },
            ],
            requiredLogin: true,
        },
    },
    //404
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        components: { mainRouter: NotFound },
        meta: {
            documentTitle: "Perdition complète",
            breadCrumb: [
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
        const MainStore = useMainStore();
        const { modalData } = MainStore;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: "smooth" });
                modalData.headerVisibility = true;
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
