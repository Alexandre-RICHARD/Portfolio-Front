<script setup>
const age = Math.round(
    (Date.now() - new Date(1999, 5, 24)) / 1000 / 365 / 24 / 60 / 60
);

const copy = () => {
    navigator.clipboard.writeText(
        document.querySelector("#discordId").getAttribute("toCopy")
    );
};
const discordId = "Shadowmere#5754";
</script>

<template>
    <div class="portfolio-home">
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
            <img
                class="illustration"
                src="../../assets/images/code-illustration.png"
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
                href="https://drive.google.com/file/d/1FdHFjZ57ShkzJEui6oKj8c0xwiLWilaG/view?usp=sharing"
                target="_blank"
            >Télécharger mon CV</a>
        </div>

        <h2 class="categories">
            Mes projets (cette page n'est pas encore tout à fait fonctionnelle)
        </h2>
        <div class="promote-project-box">
            <div class="one-project">
                <img
                    src="../../assets/images/project1-view.png"
                    alt="Visuel du projet 1"
                    class="one-project-image"
                >
                <h3 class="one-project-title">Portfolio</h3>
                <p class="one-project-description">
                    Ce même portfolio sur lequel vous vous situez, je suis assez
                    ambitieux sur la suite du projet et des sous-partie très
                    différentes et nouvelles.
                </p>
            </div>
            <div class="one-project">
                <img
                    src="../../assets/images/project2-view.png"
                    alt="Visuel du projet 2"
                    class="one-project-image"
                >
                <h3 class="one-project-title">Intro to Blockchain</h3>
                <p class="one-project-description">
                    Mon projet de fin d'étude, réalisé en groupe de 4, dans des
                    conditions voulues pour se rapprochées d'un environnement
                    professionnel.
                </p>
            </div>
            <div class="one-project">
                <img
                    src="../../assets/images/project3-view.png"
                    alt="Visuel du projet 3"
                    class="one-project-image"
                >
                <h3 class="one-project-title">Crypto Récap</h3>
                <p class="one-project-description">
                    Un outil que j'avais fait quand je m'intéressais aux
                    cryptomonnaies.
                </p>
            </div>
        </div>
        <router-link
            title="Voir tous mes autres projets"
            class="link-to-more"
            :to="{ name: 'PortfolioProject' }"
        >
            Voir tous mes autres projets
        </router-link>

        <!-- ! FINI -->
        <h2 class="categories">Mes contacts principaux</h2>

        <div class="primary-contact-box">
            <a
                title="Github"
                class="contact-link"
                href="https://github.com/Alexandre-RICHARD"
                target="_blank"
            >Github</a>
            <a
                title="LinkedIn"
                class="contact-link"
                href="https://linkedin.com/in/alexandre-richard-dev4/"
                target="_blank"
            >LinkedIn</a>
            <button
                id="discordId" title="Discord" :toCopy="discordId" class="contact-link"
                content="Discord" @click="copy"
            >
                Discord
            </button>
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
