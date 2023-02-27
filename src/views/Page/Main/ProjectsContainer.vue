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

// .detailled-project {
//     &-illustration {
//         background-color: $color0;
//         position: absolute;
//         top: $header-height;
//         left: 0;
//         height: 300px;
//         width: 100%;
//         object-fit: cover;
//         opacity: 0.6;
//     }

//     &-link-access {
//         background-color: $color14;
//         color: $color0;
//         font-weight: 500;
//         font-size: 16px;
//         padding: 2px 5px;
//         border-radius: 5px;
//         position: absolute;
//         top: calc($header-height + 250px);
//         right: 30px;
//     }

//     &-details {
//         background-color: $color0;
//         margin-top: 250px;
//     }

//     &-title {
//         background-color: $color0;
//         font-size: 30px;
//         font-weight: 600;
//         letter-spacing: 5px;
//         color: $color4;
//     }

//     &-description {
//         background-color: $color0;
//         font-size: 18px;
//         color: $color14;
//         text-align: justify;
//     }

//     &-features {
//         margin: 20px 0 8px 0;
//         background-color: $color0;
//         font-size: 20px;
//         color: $color6;
//         text-shadow: 1px 1px 1px $color13;
//         text-decoration: underline;
//         text-underline-offset: 2px;
//     }

//     &-list-features {
//         background-color: $color0;
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-between;

//         .feature {
//             background-color: $color111;
//             padding: 6px;
//             border-radius: 5px;
//             margin: 6px 0;
//             width: 100%;
//             text-align: justify;
//             color: $color14;

//             &::before {
//                 content: "> ";
//                 font-weight: 700;
//                 color: $color6;
//             }
//         }
//     }
// }

// @media only screen and (min-width: 600px) {
//     .detailled-project {
//         &-list-features {
//             .feature {
//                 width: 47%;
//             }
//         }
//     }
// }

// .project-container {
//     background-color: $color0;
//     padding: 20px 0;
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;

//     .one-project {
//         background-color: $color0;
//         width: 31%;
//         height: fit-content;
//         color: $color14;
//         padding: 5px;
//         margin: 15px 0;
//         border-radius: 8px;
//         overflow: hidden;
//         display: block;
//         border: 2px solid $color4;

//         &-title {
//             background-color: $color0;
//             color: $color4;
//             text-align: center;
//             font-weight: 400;
//             font-size: 18px;
//         }

//         &-description {
//             background-color: $color0;
//             color: $color14;
//             padding: 0 5px 15px 5px;
//             text-align: justify;
//         }
//     }
// }
</style>
