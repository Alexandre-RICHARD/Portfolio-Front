<script setup>
const age = Math.round(
    (Date.now() - new Date(1999, 5, 24)) / 1000 / 365 / 24 / 60 / 60
);
</script>

<template>
    <div class="home-first-container">
        <div class="description">
            <p class="paragraph">Bienvenue sur le portfolio d'</p>
            <h1 class="page-title">Alexandre RICHARD</h1>
            <h3 class="main-skills">
                Développeur Web (Junior) fullstack Javascript
            </h3>
            <h3 class="main-skills">
                JS ; Node ; React ; Vue.js ; Express ; Webpack
            </h3>
        </div>
        <img class="illustration" src="../../assets/images/code-illustration.png">
    </div>

    <h2 class="categories">Présentation</h2>
    <p class="paragraph">
        Je suis un jeune de {{ age }} ans qui s'est pris de passion pour le
        développement web après des années à chercher l'étincelle. J'aime
        apprendre, résoudre des challenges, m'amuser évidemment et m'investir
        dans des projets qui tiennent à cœur. Je continue de me former en
        autonomie en attendant de trouver mon premier emploi dans ce milieu.
    </p>

    <div class="presentation-link-box">
        <router-link class="link-to-more" :to="{ name: 'PortfolioCurriculum' }">
            En savoir un peu plus
        </router-link>

        <a
            class="link-to-more curriculum-pdf"
            href="https://drive.google.com/file/d/1Y59Y01e8_Jpww_9pva8av-APP1dgvxkO/view?usp=sharing"
            target="_blank"
        >Télécharger mon CV</a>
    </div>

    <h2 class="categories">Mes projets</h2>
    <div class="promote-project-box">
        <div class="one-project">
            <img
                src="../../assets/images/project1-view.png"
                alt="Visuel du projet 1"
                class="one-project-image"
            >
            <h3 class="one-project-title">PROJET 1</h3>
            <p class="one-project-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam labore repudiandae, consectetur quidem sed incidunt. Fugiat ut quis impedit tenetur.
            </p>
        </div>
        <div class="one-project">
            <img
                src="../../assets/images/project2-view.png"
                alt="Visuel du projet 2"
                class="one-project-image"
            >
            <h3 class="one-project-title">PROJET 2</h3>
            <p class="one-project-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia tenetur quaerat impedit ipsa, quisquam doloribus cum a sint deleniti quae?
            </p>
        </div>
        <div class="one-project">
            <img
                src="../../assets/images/project3-view.png"
                alt="Visuel du projet 3"
                class="one-project-image"
            >
            <h3 class="one-project-title">PROJET 3</h3>
            <p class="one-project-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam expedita veritatis facilis hic temporibus. Sapiente blanditiis quisquam dolor eius.
            </p>
        </div>
    </div>
    <router-link class="link-to-more" :to="{ name: 'PortfolioProject' }">
        Voir tous mes autres projets
    </router-link>

    <h2 class="categories">Mes contacts principaux</h2>

    <div class="primary-contact-box">
        <div class="link-box">
            <a
                class="contact-link"
                href="https://github.com/Alexandre-RICHARD"
                target="_blank"
            >Github</a>
        </div>
        <div class="link-box">
            <a
                class="contact-link"
                href="https://linkedin.com/in/alexandre-richard-dev4/"
                target="_blank"
            >LinkedIn</a>
        </div>
        <div class="link-box">
            <p class="contact-link">Shadowmere#5754</p>
        </div>
    </div>

    <router-link class="link-to-more" :to="{ name: 'PortfolioContact' }">
        Tous les endroits où je me perds sur Internet
    </router-link>
</template>
