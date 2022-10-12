<script setup>
import { useRoute } from "vue-router";
import { useMainStore } from "../../../store/Main";
const MainStore = useMainStore();
const { projectList } = MainStore;
const route = useRoute();

const ourProject = projectList.find(
    (element) => element.link === route.params.projectName
);
document.title = `Projet : ${ourProject.title}`;
</script>

<template>
    <div class="detailled-project">
        <img
            class="detailled-project-illustration"
            src="../../../images/projectIllustration/large/projectIllustrationPlaceholder.png"
        >
        <router-link
            class="detailled-project-link-access"
            :to="ourProject.linkAccess"
        >
            Lien vers le projet
        </router-link>
        <div class="detailled-project-details">
            <h1 class="detailled-project-title">{{ ourProject.title }}</h1>
            <p class="detailled-project-description">
                {{ ourProject.description }}
            </p>
            <h3 class="detailled-project-features">
                Quelques features intéressantes qui s'y trouvent
            </h3>
            <div class="detailled-project-list-features">
                <p
                    v-for="feature in ourProject.features"
                    :key="feature"
                    class="feature"
                >
                    {{ feature }}
                </p>
            </div>
        </div>
    </div>
</template>
