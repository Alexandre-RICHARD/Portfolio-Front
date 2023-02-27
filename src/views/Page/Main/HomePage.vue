<script setup>
import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { projectList } = MainStore;

// La méthode shuffle, utilisé pour randomizer l'ordre d'un tableau et aisni le mélanger
const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

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
                <span>recherche ma première expérience professionnelle</span> en
                tant que <span>Développeur Web Front</span> ou bien
                <span>Fullstack</span> dans l'environnement
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
                    Angular, JQuery et PHP ainsi que d'explorer petit à petit
                    chaque domaine de ce vaste océan qu'est la programmation.
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
                        v-for="project in shuffle(projectList).slice(
                            projectList.length - 3
                        )"
                        :key="project.id"
                        class="appear one-project"
                    >
                        <h3 class="one-project-title">{{ project.title }}</h3>
                        <p class="one-project-description">
                            {{ project.abstract }}
                        </p>
                        <RouterLink
                            class="one-project-access"
                            :to="{
                                name: 'ProjectDetails',
                                params: { projectName: project.link },
                            }"
                        >
                            Voir en détail
                        </RouterLink>
                    </div>
                </div>
                <router-link class="link-to-more" :to="{ name: 'Project' }">
                    Tous mes projets
                </router-link>
            </div>
        </section>
        <section class="home-section presentation">
            <div class="appear title-box">
                <h2 class="text-box">N'hésitez pas à me contacter</h2>
            </div>
            <div class="appear content">
                <p class="description">CONTACTS</p>
                <router-link class="link-to-more" :to="{ name: 'Contact' }">
                    Tous mes contacts
                </router-link>
            </div>
        </section>
        <!-- <h2 class="categories">Mes projets</h2>
        Importation des projets en précisant qu'on en veut que 3 qui seront choisi aléatoirement

        Importation de notre sous-composant de contact qui va uniquement créé les 3 premiers
            <ContactButton
                v-for="contact in contactList.filter((el) => el.id <= 3)"
                :key="contact.id"
                :copyid="contact.copyId"
                :type="contact.type"
                :title="contact.title"
                :content="contact.content"
            />
        </router-link> -->
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
            }
        }
    }

    .projects {
        .content {
            .project-container {
                background-color: transparent;

                .one-project {
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
                        color: $color8;
                        width: 100%;
                        padding: 9px 18px;
                        text-align: justify;
                        border-radius: 5px;
                    }

                    &-access {
                        position: relative;
                        display: block;
                        align-self: flex-end;
                        margin-top: 10px;

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

                    &:before {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        box-shadow: 2px 2px 10px $transparent-black;
                        border-width: 0;
                        border-color: $transparent-white
                        $transparent-white $color0 $color0;
                        // border-radius: 0 5px 0 0;
                        transition: border-width 0.2s;
                    }
                    
                    &:hover:before {
                        border-width: 22px;
                    }
                }
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

@media only screen and (min-width: 600px) {
    .home-page {
        padding: 0 60px;
    }
}
</style>
