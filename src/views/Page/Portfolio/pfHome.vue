<script setup>
import ContactButton from "../../Parts/ContactButton.vue";
import ProjectContainer from "../../Parts/ProjectContainer.vue";
import { useMainStore } from "../../../store/Main";
const MainStore = useMainStore();
const { contactList } = MainStore;

const age = Math.round(
    (Date.now() - new Date(1999, 5, 24)) / 1000 / 365 / 24 / 60 / 60
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
                src="../../../images/code-illustration.png"
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
