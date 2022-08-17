// On importe les éléments utiles de Vue Router
import { createRouter, createWebHistory } from "vue-router";

// On importe toutes les vues qui seront utilisés par notre router principal
import HomePage from "../views/Primary/HomePage.vue";
import NotFoundTop from "../views/Primary/NotFoundTop.vue";

import pfHome from "../views/Portfolio/pfHome.vue";
import pfCurriculum from "../views/Portfolio/pfCurriculum.vue";
import pfProjects from "../views/Portfolio/pfProjects.vue";
import pfContact from "../views/Portfolio/pfContact.vue";

// On liste toutes les routes qui seront gérées par le router principal
const routes = [
    {
        // Notre page principale qui fera office de point d'entrée après app en gérant le header et tous les router
        path: "",
        name: "Home",
        components: { mainRouter: HomePage },
        meta: { title: "Alexandre Richard" },
        children: [
            {
                // Un simple intermédiaire pour dire que tous les enfants auront cette base d'URL là
                path: "/portfolio",
                children: [
                    {
                        path: "",
                        name: "PortfolioHome",
                        components: { portfolioRouter: pfHome },
                        meta: { title: "Alexandre Richard" },
                    },
                    {
                        path: "curriculum",
                        name: "PortfolioCurriculum",
                        components: { portfolioRouter: pfCurriculum },
                        meta: { title: "Curriculum" },
                    },
                    {
                        path: "project",
                        name: "PortfolioProject",
                        components: { portfolioRouter: pfProjects },
                        meta: { title: "Projets" },
                    },
                    {
                        path: "contact",
                        name: "PortfolioContact",
                        components: { portfolioRouter: pfContact },
                        meta: { title: "Contact" },
                    },
                ],
            },
            // {
            //     path: "/tryhard/slowrun",
            //     children: [{
            //         path: "/tryhard/slowrun",
            //         name: "TryHardSlowRunHome",
            //         components: { mainRouter: HomePage },
            //         meta: { title: "Try Hard but Slow Run" },
            //     }]
            // }
        ],
    },
    // Gestion des pages non trouvées
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        components: { mainRouter: NotFoundTop },
        meta: { title: "404" },
    },
];

// On créé notre router en indiquand l'historique et le tableau des routes précédemment créé
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// On indique qu'à chaque changement de page, le titre du document doit prendre le titre indiqué dans la meta de la route
router.afterEach((to) => {
    document.title = to.meta.title;
});

// On exporte notre router afin de le récupérer à la création de l'app
export default router;
