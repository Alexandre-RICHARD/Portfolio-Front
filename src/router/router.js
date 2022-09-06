// On importe les éléments utiles de Vue Router
import { createRouter, createWebHistory } from "vue-router";

// On importe toutes les vues qui seront utilisés par notre router principal
import HomePage from "../views/Page/HomePage.vue";
import NotFound from "../views/Page/NotFound.vue";

// On liste toutes les routes qui seront gérées par le router principal
const routes = [
    {
        // Notre page principale qui fera office de point d'entrée après app en gérant le header et tous les router
        path: "",
        name: "Home",
        components: { mainRouter: HomePage },
        meta: { title: "Alexandre Richard", path: "Page d'accueil" },
    },
    {
        // Gestion des pages non trouvées
        path: "/:pathMatch(.*)*",
        name: "404",
        components: { mainRouter: NotFound },
        meta: { title: "Le coin 404", path: "Le coin 404" },
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
