import {
    createRouter,
    createWebHistory
} from "vue-router";

import ContactTop from "../components/Primary/ContactTop.vue";
import CurriculumTop from "../components/Primary/CurriculumTop.vue";
import HomeTop from "../components/Primary/HomeTop.vue";
import ProjectsTop from "../components/Primary/ProjectsTop.vue";
import NotFoundTop from "../components/Primary/NotFoundTop.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: HomeTop,
    meta: {
        title: "Accueil"
    }
},
{
    path: "/curriculum",
    name: "Curriculum",
    component: CurriculumTop,
    meta: {
        title: "Curriculum"
    }
},
{
    path: "/project",
    name: "Project",
    component: ProjectsTop,
    meta: {
        title: "Projets"
    }
},
{
    path: "/contact",
    name: "Contact",
    component: ContactTop,
    meta: {
        title: "Contact"
    }
},
{
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFoundTop,
    meta: {
        title: "404"
    }
},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;