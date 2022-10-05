<script setup>
import { useMainStore } from "../../store/Main";
const MainStore = useMainStore();
const { projectList } = MainStore;

defineProps({
    number: {
        type: Number,
        required: true,
    },
});
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};
</script>

<template>
    <div class="project-container">
        <RouterLink
            v-for="project in number != null
                ? shuffle(projectList).slice(1)
                : projectList"
            :key="project.id"
            class="one-project"
            :to="{
                name: 'ProjectDetails',
                params: { projectName: project.link },
            }"
        >
            <img
                src="../../images/projectIllustration/projectIllustrationPlaceholder.png"
                alt="Une image temporaire le temps d'importer d'autre projet"
            >
            <h3 class="one-project-title">{{ project.title }}</h3>
            <p class="one-project-description">{{ project.abstract }}</p>
        </RouterLink>
    </div>
</template>
