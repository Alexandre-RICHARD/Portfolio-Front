<script setup>
import ProgressionCircle from "@svgs/ProgressionCircle.vue";
import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { projectList, technosData } = MainStore;
</script>

<template>
    <!-- On utilise ici un opérateur ternaire. Il fait que si on appelle ce sous-composant avec un nombre différente de 0, alors on renvoit le tableau mélangé des projets et tronqué pour en avoir le bon nombre. Sinon, on renvoi le tableau complet -->
    <div class="project-container">
        <div v-for="project in projectList" :key="project.id" class="one-project">
            <!-- On utilise pour le moment une image d'illustration factice tant que trop peu de projet sont finis -->
            <img
                src="@static/images/projectIllustration/overview/projectIllustrationPlaceholder.png"
                alt="Une image temporaire le temps d'importer d'autre projet"
            >
            <div class="one-project-sub-container">
                <h3 class="title">{{ project.title }}</h3>
                <div class="state">
                    <div class="progression">
                        <ProgressionCircle class="progression-svg" :progression="project.progression_purcent" />
                        <p class="progression-purcent">{{ project.progression_purcent }} %</p>
                    </div>
                    <p class="progression-description">{{ project.progression }}</p>
                </div>
                <p class="description">{{ project.abstract }}</p>
                <div class="technos">
                    <a
                        v-for="techno in project.technos" :key="techno" class="techno" target="_blank"
                        :href="technosData[techno].external_link"
                    >
                        <img
                            class="techno-logo"
                            :src="require(`@static/images/technoLogo/${technosData[techno].logo_code}.png`)"
                        >
                        <p class="techno-name">{{ technosData[techno].name }}</p>
                    </a>
                </div>
                <div class="project-link">
                    <RouterLink
                        :to="{
                            name: 'ProjectDetails',
                            params: { projectName: project.linkDetails },
                        }" class="project-link details"
                    >
                        Détails
                    </RouterLink>
                    <a class="project-link access" target="_blank" :href="project.linkAccess">
                        Lien direct
                    </a>
                </div>
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
        max-width: 290px;
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
                flex-direction: column;
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

            .technos {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;
                border: solid $color112;
                border-width: 1px 0;
                padding: 7px 0;
                background-color: $color111;

                .techno {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0 3px;
                    padding: 5px 2px 1px 2px;
                    border-radius: 5px;
                    transition: none;

                    &-logo {
                        max-width: 32px;
                    }

                    &-name {
                        text-align: center;
                        font-size: 0.9rem;
                        font-weight: 500;
                    }

                    &:hover {
                        background-color: $color110;
                    }
                }
            }

            .project-link {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;

                .details,
                .access {
                    display: block;
                    width: 125px;
                    text-align: center;
                    background-color: $transparent-white;
                    color: $color14;
                    box-shadow: 0px 0px 2px 1px $color112 inset;
                    padding: 8px 3px;
                    font-weight: 500;
                    font-size: $large;
                    border-radius: 4px;
                    margin: 10px 10px;
                }

                .details:hover, .access:hover {
                    border-radius: 21px;
                    box-shadow: 0px 0px 6px 2px $color112 inset;
                }

                &:hover .details:hover,
                &:hover .access:hover {
                    width: 90%;
                    max-width: 200px;
                }
            }

        }
    }
}

@media only screen and (min-width: 415px) {
    .project-container {
        .one-project {
            &-sub-container {
                .state {
                    flex-direction: row;
                }

                .project-link {
                flex-direction: row;

                    .details:hover {
                        border-radius: 21px 0 0 21px;
                        box-shadow: 3px 0px 2px 1px $color112 inset;
                    }

                    .access:hover {
                        border-radius: 0 21px 21px 0;
                        box-shadow: -3px 0px 2px 1px $color112 inset;
                    }

                    &:hover .details:hover,
                    &:hover .access:hover {
                        width: 200px;
                    }
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
