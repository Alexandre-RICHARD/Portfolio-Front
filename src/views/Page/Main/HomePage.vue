<script setup>
import ProjectsPart from "@parts/ProjectsPart.vue";

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
                <span>Javascript</span> et <span>Node.JS</span> sur <span>Angers</span> ou en
                télétravail.
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
        <section class="home-section presentation">
            <div class="appear title-box">
                <h2 class="text-box">Ce que j'ai fait</h2>
            </div>
            <div class="appear content">
                <p class="description">
                    <ProjectsPart :number="3" />
                </p>
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
                <p class="description">
                    CONTACTS
                </p>
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
        .description {
            text-align: justify;
        }
    }
}

@media only screen and (min-width: 380px) {
    .home-page {
        padding: 0 25px;

        .presentation {
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
