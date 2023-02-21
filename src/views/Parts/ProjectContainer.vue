<script setup>
import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { projectList } = MainStore;

defineProps({
    number: {
        type: Number,
        required: true,
    },
});

// La méthode shuffle, utilisé pour randomizer l'ordre d'un tableau et aisni le mélanger
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};
</script>

<template>
    <!-- On utilise ici un opérateur ternaire. Il fait que si on appelle ce sous-composant avec un nombre différente de 0, alors on renvoit le tableau mélangé des projets et tronqué pour en avoir le bon nombre. Sinon, on renvoi le tableau complet -->
    <div class="project-container">
        <RouterLink
            v-for="project in number != 0
                ? shuffle(projectList).slice(projectList.length - number)
                : projectList"
            :key="project.id"
            class="one-project"
            :to="{
                name: 'ProjectDetails',
                params: { projectName: project.link },
            }"
        >
            <!-- On utilise pour le moment une image d'illustration factice tant que trop peu de projet sont finis -->
            <img
                src="@static/images/projectIllustration/overview/projectIllustrationPlaceholder.png"
                alt="Une image temporaire le temps d'importer d'autre projet"
            >
            <h3 class="one-project-title">{{ project.title }}</h3>
            <p class="one-project-description">{{ project.abstract }}</p>
        </RouterLink>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.project-container {
    background-color: $color0;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .one-project {
        background-color: $color0;
        width: 31%;
        height: fit-content;
        color: $color14;
        padding: 5px;
        margin: 15px 0;
        border-radius: 8px;
        overflow: hidden;
        display: block;
        border: 2px solid $color4;

        &-title {
            background-color: $color0;
            color: $color4;
            text-align: center;
            font-weight: 400;
            font-size: 18px;
        }

        &-description {
            background-color: $color0;
            color: $color14;
            padding: 0 5px 15px 5px;
            text-align: justify;
        }
    }
}
</style>
