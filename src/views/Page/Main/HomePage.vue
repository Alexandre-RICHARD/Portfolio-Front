<script setup>
import ContactButton from "@parts/ContactButton.vue";
import ProgressionCircle from "@svgs/ProgressionCircle.vue";
import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { contactList, projectList, technosData } = MainStore;

const age = Math.floor(
    (Date.now() - new Date(1999, 5, 24).getTime()) / 1000 / 60 / 60 / 24 / 365
);
</script>

<template>
    <div class="home-page">
        <section class="welcome-container">
            <h2 class="welcome-in">Bienvenue sur le portfolio d'</h2>
            <h1 class="fullname">Alexandre RICHARD</h1>
            <h1 class="job">Développeur Web Junior</h1>
            <p class="description">
                Jeune de <span>{{ age }}</span> ans investi, la passion du code
                m'attire vers de nouvelles expériences, de nouveaux projets. En
                quête d'algorithmes, je
                <span>recherche ma première expérience</span> professionnelle en
                tant qu'<span>alternant</span> en
                <span>Développement Web</span> dans l'environnement
                <span>Javascript</span> et <span>Node.JS</span> sur
                <span>Angers</span> ou en télétravail.
            </p>
        </section>
        <section class="home-section presentation">
            <div class="appear title-box">
                <h2 class="text-box">J'ai oublié de me présenter</h2>
            </div>
            <div class="appear content">
                <p class="description">
                    Je m'appelle donc Alexandre Richard. Tombé amoureux
                    d'internet, j'ai été pris de passion par la capacité à créer
                    des choses comme on le souhaite, de trouver des solutions à
                    des problèmes de logique. Je n'ai pour le moment exploré
                    vraiment que le web, à savoir HTML, CSS, Javascript et ses
                    framework et l'environnement Node.JS. J'ai pour objectif de
                    paufiner ce portfolio et d'ensuite apprendre TypeScript,
                    Angular, NextJS, JQuery et PHP ainsi que d'explorer petit à petit
                    chaque domaine de ce vaste océan qu'est la programmation.
                </p>
                <p class="description">
                    À côté du code, je suis passionné de nature, de jeux vidéos,
                    de cinéma, idéaliste et faciné par l'humain, la science et
                    la connaissances en général. J'aime rire, voir la vie du bon
                    côté et j'essaie de ne jamais faillir à mes valeurs.
                </p>
                <router-link class="link-to-more" :to="{ name: 'Curriculum' }">
                    En savoir plus
                </router-link>
            </div>
        </section>
        <section class="home-section projects">
            <div class="appear title-box">
                <h2 class="text-box">Mes chers projets</h2>
            </div>
            <div class="appear content">
                <div class="project-container">
                    <div
                        v-for="project in projectList.filter(
                            (el) => el.id <= 3
                        )" :key="project.id" class="appear one-project-homepage"
                    >
                        <h3 class="one-project-homepage-title">
                            {{ project.title }}
                        </h3>
                        <p class="one-project-homepage-description">
                            {{ project.abstract }}
                        </p>
                        <div class="one-project-homepage-footer">
                            <div class="progression">
                                <ProgressionCircle class="progression-svg" :progression="project.progression_purcent" />
                                <p class="progression-purcent">{{ project.progression_purcent }} %</p>
                            </div>
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
                            <router-link
                                class="access" :to="{
                                    name: 'ProjectDetails',
                                    params: { projectName: project.linkDetails },
                                }"
                            >
                                Voir en détail
                            </router-link>
                        </div>
                    </div>
                </div>
                <router-link class="link-to-more" :to="{ name: 'Project' }">
                    Tous mes projets
                </router-link>
            </div>
        </section>
        <section class="home-section contacts">
            <div class="appear title-box">
                <h2 class="text-box">N'hésitez pas à me contacter</h2>
            </div>
            <div class="appear content">
                <p class="annoncement">Vous pouvez me retrouver sur</p>
                <div class="contact-container">
                    <ContactButton
                        v-for="contact in contactList.filter(
                            (el) => el.id <= 3
                        )" :key="contact.id" :copyid="contact.copyId" :type="contact.type"
                        :title="contact.title"
                        :content="contact.content" :section="contact.section"
                    />
                </div>
                <router-link class="link-to-more" :to="{ name: 'Contact' }">
                    Tous mes contacts
                </router-link>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.home-page {
    max-width: 1300px;
    margin: auto;
    padding: 0 10px;

    .welcome-container {
        padding-top: 115px;
        min-height: calc(101vh - $total-header-height);
        max-width: 500px;
        margin: auto;

        .welcome-in {
            position: relative;
            top: 15px;
            color: $color14;
            font-weight: 400;
            font-size: $big-title;
        }

        .fullname {
            background-color: transparent;
            color: $color11;
            font-weight: 800;
            letter-spacing: normal;
            transform: scaleY(1);
            font-size: 32px;
        }

        .job {
            color: $color12;
            font-weight: 700;
            font-size: 25px;
        }

        .description {
            color: $color14;
            font-weight: 300;
            font-size: $large;
            text-align: justify;

            span {
                font-weight: 500;
                color: $color12;
            }
        }
    }

    .home-section {
        margin: 0 auto;
        margin-bottom: 150px;
        max-width: 600px;

        .title-box {
            border: 4px solid $color14;
            border-radius: 20px;
            padding: 8px;
            box-shadow: 4px 4px 0 2px $color15,
                3px 12px 25px -3px rgba(0, 0, 0, 0.219);
            margin-bottom: 15px; //! TEMPORAIRE

            .text-box {
                position: relative;
                font-size: $big-title;
                text-transform: uppercase;
                font-weight: 500;
                color: $color15;
            }
        }

        .content {
            background-color: transparent;

            .link-to-more {
                color: $color14;
                border: 1px solid $color15;
                font-weight: 500;
                font-size: $large;
                padding: 6px 12px;
                float: right;
                margin-top: 10px;
                border-radius: 10px;
                text-align: center;

                &:hover {
                    background-color: $color15;
                    color: $color0;
                }
            }
        }
    }

    .presentation {
        .content {
            .description {
                text-align: justify;
                margin: 15px;
            }
        }
    }

    .projects {
        .content {
            .project-container {
                background-color: transparent;

                .one-project-homepage {
                    background-color: $color15;
                    color: $color0;
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    border-radius: 25px 0 25px 0;
                    margin: 30px 0;
                    position: relative;
                    overflow: hidden;
                    transition: 250ms;

                    &-title {
                        width: fit-content;
                        text-align: center;
                        font-weight: 400;
                        font-size: $extra-large;
                    }

                    &-description {
                        color: $color0;
                        width: 100%;
                        padding: 9px 18px;
                        text-align: justify;
                        border-radius: 5px;
                    }

                    &-footer {
                        display: flex;
                        justify-content: end;
                        align-items: center;

                        .progression {
                            display: none;
                            width: 70px;
                            margin: 4px 0 4px 30px;
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

                        .technos {
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            align-items: center;
                            justify-content: center;
                            padding: 7px;

                            .techno {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                margin: 0 6px;
                                padding: 2px;
                                border-radius: 5px;
                                transition: none;

                                &-logo {
                                    max-width: 25px;
                                }

                                &-name {
                                    text-align: center;
                                    font-size: 0.8rem;
                                    font-weight: 300;
                                }

                                &:hover {
                                    background-color: $color12;
                                }
                            }
                        }

                        .access {
                            position: relative;
                            display: block;
                            align-self: flex-end;
                            margin-top: 10px;
                            font-weight: 500;
                            font-size: $large;

                            &:after {
                                content: "";
                                position: absolute;
                                width: 100%;
                                transform: scaleX(0);
                                height: 3px;
                                bottom: 0;
                                left: 0;
                                background-color: $color0;
                                transform-origin: bottom right;
                                transition: transform 0.25s ease-out;
                            }

                            &:hover::after {
                                transform: scaleX(1);
                                transform-origin: bottom left;
                            }
                        }
                    }

                    &:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        box-shadow: 2px 2px 10px $transparent-black;
                        border-width: 0;
                        border-color: $transparent-white $transparent-white $color0 $color0;
                        // border-radius: 0 5px 0 0;
                        transition: border-width 0.2s;
                    }

                    &:hover:after {
                        border-width: 22px;
                    }
                }
            }
        }
    }

    .contacts {
        .content {
            .annoncement {
                font-size: large;
                font-weight: 400;
            }

            .contact-container {
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
            }
        }
    }
}

@media only screen and (min-width: 380px) {
    .home-page {
        padding: 0 25px;

        .welcome-container {
            .fullname {
                letter-spacing: 3px;
                transform: scaleY(1.1);
                font-size: 45px;
            }

            .job {
                font-size: 38px;
            }
        }
    }
}

@media only screen and (min-width: 430px) {
    .home-page {
        .projects {
            .content {
                .project-container {
                    .one-project-homepage {
                        &-footer {
                            justify-content: space-between;

                            .progression {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (min-width: 600px) {
    .home-page {
        padding: 0 60px;
    }
}
</style>
