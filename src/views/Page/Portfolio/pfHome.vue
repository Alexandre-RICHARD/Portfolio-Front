<script setup>
import ContactButton from "../../Parts/ContactButton.vue";
import ProjectContainer from "../../Parts/ProjectContainer.vue";
import { useMainStore } from "../../../store/Main";
const MainStore = useMainStore();
const { contactList } = MainStore;

const age = Math.floor(
    (Date.now() - new Date(1999, 5, 24).getTime()) / 1000 / 60 / 60 / 24 / 365
);
</script>

<template>
    <div class="portfolio-home">
        <div class="home-first-container">
            <div>
                <p class="paragraph">Bienvenue sur le portfolio d'</p>
                <h1 class="page-title">Alexandre RICHARD</h1>
                <h3 class="main-skills">
                    Développeur Web (Junior) fullstack Javascript
                </h3>
                <h3 class="main-skills">
                    JS ; Node ; React ; Vue.js ; Express ; Webpack
                </h3>
            </div>
            <img
                alt="illustration représentant du code javascript"
                class="illustration"
                src="@static/images/code-illustration.png"
            >
        </div>

        <h2 class="categories">Présentation</h2>
        <p class="paragraph">
            Je suis un jeune de {{ age }} ans qui s'est pris de passion pour le
            développement web après des années à chercher l'étincelle. J'aime
            apprendre, résoudre des challenges, m'amuser évidemment et
            m'investir dans des projets qui tiennent à cœur. Je continue de me
            former en autonomie en attendant de trouver mon premier emploi dans
            ce milieu.
        </p>

        <div class="presentation-link-box">
            <router-link
                title="En savoir un peu plus"
                class="link-to-more"
                :to="{ name: 'PortfolioCurriculum' }"
            >
                En savoir un peu plus
            </router-link>

            <a
                title="Télécharger mon CV"
                class="link-to-more curriculum-pdf"
                href="https://drive.google.com/file/d/1GbyFc9bm7hoCbPl_tXHwOGsQS9_DoqzM/view?usp=share_link"
                target="_blank"
            >Télécharger mon CV</a>
        </div>

        <h2 class="categories">Mes projets</h2>
        <!-- Importation des projets en précisant qu'on en veut que 3 qui seront choisi aléatoirement -->
        <ProjectContainer :number="3" />
        <router-link
            title="Voir tous mes autres projets"
            class="link-to-more"
            :to="{ name: 'PortfolioProject' }"
        >
            Voir tous mes autres projets
        </router-link>

        <h2 class="categories">Mes contacts principaux</h2>

        <!-- Importation de notre sous-composant de contact qui va uniquement créé les 3 premiers -->
        <div class="home-contact-box">
            <ContactButton
                v-for="contact in contactList.filter((el) => el.id <= 3)"
                :key="contact.id"
                :copyid="contact.copyId"
                :type="contact.type"
                :title="contact.title"
                :content="contact.content"
            />
        </div>
        <router-link
            title="Me retrouver partout"
            class="link-to-more"
            :to="{ name: 'PortfolioContact' }"
        >
            Me retrouver partout
        </router-link>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

//? Les élements réutilisés plusieurs fois
.paragraph {
    background-color: var(--backgroundColor);
    color: var(--textColor);
    padding: 3px 0;
    text-align: justify;
}

.categories {
    background-color: var(--backgroundColor);
    color: var(--titleColor);
    padding-top: 15px;
    font-weight: 400;
    font-size: $extra-large;
}
//? Les élements réutilisés plusieurs fois

.portfolio-home {
    background-color: var(--backgroundColor);
    .home-first-container {
        background-color: var(--backgroundColor);
        width: 100%;
        display: flex;
        align-items: center;

        .page-title {
            background-color: var(--backgroundColor);
            color: var(--titleColor);
            font-weight: 500;
            font-size: 35px;
            line-height: 35px;
        }

        .main-skills {
            background-color: var(--backgroundColor);
            color: var(--titleColor);
        }

        .illustration {
            background-color: var(--backgroundColor);
            width: calc(100% - 320px);
            object-fit: cover;
            padding-left: 40px;
        }
    }

    .presentation-link-box {
        background-color: var(--backgroundColor);
        display: flex;
        justify-content: space-evenly;
    }

    .link-to-more {
        background-color: var(--buttonColorOne);
        color: var(--titleColor);
        width: fit-content;
        padding: 6px;
        margin: 10px auto;
        border-radius: 7px;
        display: block;
        text-align: center;

        &.curriculum-pdf {
            background-color: var(--buttonColorTwo);
        }
    }

    .home-contact-box {
        background-color: var(--backgroundColor);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .one-contact-box {
            .contact-element {
                margin: 10px;
            }
        }
    }

    .link-to-more {
        &::before {
            display: block;
            content: attr(title);
            height: 0;
            overflow: hidden;
            visibility: hidden;
        }
    }

    .link-to-more {
        &::before {
            font-weight: 600;
        }
        &:hover {
            font-weight: 600;
        }
    }
}
</style>
