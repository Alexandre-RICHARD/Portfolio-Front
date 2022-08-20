<script setup>
const age = Math.round(
    (Date.now() - new Date(1999, 5, 24)) / 1000 / 365 / 24 / 60 / 60
);
</script>

<template>
    <h4>Bienvenue sur le portfolio d'</h4>
    <h1>Alexandre RICHARD</h1>
    <h3>Développeur Web (Junior) fullstack Javascript</h3>
    <h3>JS ; Node ; React ; Vue.js ; Express ; Webpack</h3>

    <h2>Présentation</h2>
    <p>
        Je suis un jeune de {{ age }} ans qui s'est pris de passion pour le
        développement web après des années à chercher l'étincelle. J'aime
        apprendre, résoudre des challenges, m'amuser évidemment et m'investir
        dans des projets qui tiennent à cœur. Je continue de me former en
        autonomie en attendant de trouver mon premier emploi dans ce milieu.
    </p>

    <a href="https://drive.google.com/file/d/1Y59Y01e8_Jpww_9pva8av-APP1dgvxkO/view?usp=sharing" target="_blank">Télécharger mon CV</a>

    <router-link :to="{ name: 'PortfolioCurriculum' }">
        En savoir un peu plus
    </router-link>

    <h2>Mes projets</h2>
    <div class="promote-project-box">
        <div>
            <img
                src="../../assets/images/project1-view.png"
                alt="Visuel du projet 1"
            >
            <h3>PROJET 1</h3>
            <p>Description du projet 1</p>
        </div>
        <div>
            <img
                src="../../assets/images/project2-view.png"
                alt="Visuel du projet 2"
            >
            <h3>PROJET 1</h3>
            <p>Description du projet 1</p>
        </div>
        <div>
            <img
                src="../../assets/images/project3-view.png"
                alt="Visuel du projet 3"
            >
            <h3>PROJET 1</h3>
            <p>Description du projet 1</p>
        </div>
    </div>
    <router-link :to="{ name: 'PortfolioProject' }">
        Voir tous mes autres projets
    </router-link>

    <h2>Mes contacts principaux</h2>

    <a href="https://github.com/Alexandre-RICHARD" target="_blank">Github</a>
    <a href="https://linkedin.com/in/alexandre-richard-dev4/" target="_blank">LinkedIn</a>

    <router-link :to="{ name: 'PortfolioContact' }">
        Tous les endroits où je me perds sur Internet
    </router-link>
</template>
