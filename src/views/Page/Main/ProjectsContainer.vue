<script setup>
import ProgressionCircle from "@svgs/ProgressionCircle.vue";
import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { projectList } = MainStore;
</script>

<template>
    <!-- On utilise ici un opérateur ternaire. Il fait que si on appelle ce sous-composant avec un nombre différente de 0, alors on renvoit le tableau mélangé des projets et tronqué pour en avoir le bon nombre. Sinon, on renvoi le tableau complet -->
    <div class="project-container">
        <div
            v-for="project in projectList"
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
            <div class="one-project-sub-container">
                <h3 class="title">{{ project.title }}</h3>
                <div class="state">
                    <div class="progression">
                        <ProgressionCircle
                            class="progression-svg"
                            :progression="project.progression_purcent"
                        />
                        <p class="progression-purcent">{{ project.progression_purcent }} %</p>
                    </div>
                    <p class="progression-description">{{ project.progression }}</p>
                </div>
                <p class="description">{{ project.abstract }}</p>
                <RouterLink
                    :to="{
                        name: 'ProjectDetails',
                        params: { projectName: project.link },
                    }"
                    class="details"
                >
                    Voir les détails
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.project-container {
    margin: 0 auto;
    padding: 20px;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .one-project {
        background: linear-gradient(56deg, $color110 0%, $color110 38%, $color0 100%);
        width: 100%;
        max-width: 280px;
        color: $color14;
        margin: 25px 20px;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 1px 1px 8px 2px $color112;
        
        &-sub-container {
            width: 100%;
            height: inherit;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .title {
                color: $color7;
                text-align: center;
                font-weight: 600;
                font-size: 20px;
                padding: 5px 15px 3px 15px;
            }

            .state {
                width: 100%;
                display: flex;
                align-items: center;
                border: solid $color112;
                border-width: 1px 0;
                background-color: $color111;
                
                .progression {
                    width: 70px;
                    margin: 4px 10px;
                    position: relative;

                    .progression-svg {
                        width: 70px;
                        height: 35px;
                    }

                    .progression-purcent {
                        position: absolute;
                        top: 18px;
                        left: 18px;
                    }
                }

                .progression-description {
                    text-align: justify;
                    font-size: 0.9rem;
                    width: calc(100% - 70px);
                    margin: 4px 10px;
                }
            }

            .description {
                color: $color14;
                padding: 0 15px 15px 15px;
                text-align: justify;
            }
    
            .details {
                color: $color14;
                background-color: $transparent-white;
                box-shadow: 1px 1px 8px 4px $color112 inset;
                text-align: center;
                font-weight: 500;
                font-size: $extra-large;
                padding: 4px 10px;
                margin: 10px 30px;

                &:hover {
                    margin: 10px 18px;
                    border-radius: 19px;
                }
            }
        }
    }
}

@media only screen and (min-width: 680px) {
    .project-container {
        .one-project {
            width: 45%;
        }
    }
}

@media only screen and (min-width: 1000px) {
    .project-container {
        .one-project {
            width: 29%;
        }
    }
}
</style>
