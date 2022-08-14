// On importe les éléments utiles de Vue Router
import { createRouter, createWebHistory } from "vue-router";

// On importe toutes les vues qui seront utilisés par notre router principal
import HomePage from "../views/Primary/HomePage.vue";
import PortfolioPage from "../views/Primary/PortfolioPage.vue";
import TryHardSlowRun from "../views/Primary/TryHardSlowRun.vue";
import NotFoundTop from "../views/Primary/NotFoundTop.vue";

import HomeTop from "../views/Portfolio/HomeTop.vue";
import ContactTop from "../views/Portfolio/ContactTop.vue";
import CurriculumTop from "../views/Portfolio/CurriculumTop.vue";
import ProjectsTop from "../views/Portfolio/ProjectsTop.vue";

// On liste toutes les routes qui seront gérées par le router principal 
const routes = [
    {path: "", name: "Home", components: {mainRouter: HomePage}, meta: {title: "Alexandre Richard"}},
    {path: "/portfolio", name: "PortfolioHome", components: {mainRouter: PortfolioPage}, meta: {title: "Portfolio"},
        children: [
            // On range dans le children de portfolio toutes les routes qui lui seront liées pour afficher la vue PortfolioPage qui contient le PortfolioRouter. Ça évite une tonne de répétition
            {path: "", name: "PortfolioHome", components: {portfolioRouter: HomeTop}, meta: {title: "Curriculum"}},
            {path: "curriculum", name: "PortfolioCurriculum", components: {portfolioRouter: CurriculumTop}, meta: {title: "Curriculum"}},
            {path: "project", name: "PortfolioProject", components: {portfolioRouter: ProjectsTop}, meta: {title: "Projets"}},
            {path: "contact", name: "PortfolioContact", components: {portfolioRouter: ContactTop}, meta: {title: "Contact"}},
        ]},
    {path: "/tryhard/slowrun", name: "TryHardSlowRun", components: {mainRouter: TryHardSlowRun}, meta: {title: "Try Hard but Slow Run"}},
    // Gestion des pages non trouvées
    {path: "/:pathMatch(.*)*", name: "404", components: {mainRouter: NotFoundTop}, meta: {title: "404"}},

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