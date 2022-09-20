<script setup>
const age = Math.round(
    (Date.now() - new Date(1999, 5, 24)) / 1000 / 365 / 24 / 60 / 60
);

const professionalExperiences = [
    {
        key: 1,
        title: "Stage d'observation de 3ème",
        firstDate: "Mars 2014",
        secondDate: null,
        location: "Jefimmo Saint-Laurent-des-Autels",
        description:
            "Stage d'une durée de 5 jours dans une agence immobilièreavec organisation de visite, mise en vente d'une maison et réalisation de photos et de croquis",
    },
    {
        key: 2,
        title: "Stage en seconde professionnelle",
        firstDate: "Janvier 2015",
        secondDate: null,
        location: "Gamm vert Saint Laurent des Autels",
        description:
            "Stage d'une durée d'une semaine en jardinerie. Manutention, mise en rayon, inventaire et étiquetages.",
    },
    {
        key: 3,
        title: "Stage en seconde professionnelle",
        firstDate: "Mars 2015",
        secondDate: null,
        location: "Super U Ancenis",
        description:
            "Stage de deux semaines dans une grande surface avec principalement du nettoyage et de la mise en rayon",
    },
    {
        key: 4,
        title: "Stage en seconde professionnelle",
        firstDate: "Mai 2015",
        secondDate: null,
        location: "Top Office Ancenis",
        description:
            "Stage de quatre semaines au sein de l'entreprise avec une découverte de la majeure partie des fonctions et métiers présent. De l'ouverture avec la mise en place, à la fermeture et le bilan de la journée, en passant par le passage de commande, la gestion des stock ou la réception en caisse",
    },
    {
        key: 5,
        title: "Projet de fin d'étude",
        firstDate: "Février 2021",
        secondDate: "Mars 2021",
        location: "Apothéose d'O'clock",
        description:
            "Il s'agissait d'un projet de fin d'études organisé par l'école 100% en téléprésentiel à réaliser en groupe. Avec 4 de mes collègues de promo, nous avons conçu un site de A à Z à partir des wireframe jusqu'à la base de donnée, avec router, stylisation, connexion etc. Créé en React avec Webpack, ce site en Single Page Application n'est plus hébergé aujourd'hui mais je l'implémenterai sur ce site un de ces jours",
    },
    {
        key: 6,
        title: "CDI en restauration rapide",
        firstDate: "Septembre 2021",
        secondDate: "Mai 2022",
        location: "Burger King Angers",
        description:
            "J'ai travaillé pendant 9 mois dans ce restaurant pour subvenir à mes besoins et pour me prendre une année Free avant de rentrer pour de bons dans le monde du travail mais également me former davantage au développement. J'y ai appris l'accueil et la gestion de clients, régulièrement en grand nombre et ai développé une grande autonomie dans mes tâches à accomplir pour avopir un service le plus fluide possible. J'ai également beaucoup eu besoin de réagir à des problèmes en tout genre impliquant un contact avec la hiérarchie et le client indispendable. J'ai quitté l'entreprise pour me concentrer sur mes projets mais également à cause de gros soucis de dialogues entre employés et manager avec beaucoup d'actes immoraux et d'abus de pouvoir.",
    },
    {
        key: 7,
        title: "Projet personnel",
        firstDate: "Juin 2022",
        secondDate: "Présent",
        location: "De mon petit chez moi",
        description:
            "Depuis que j'ai quitté mon emploi, je travaille activement sur ce projet, ce site sur lequel vous vous trouvez afin d'afiner mes compétences et de constituer un 'quelque chose' à montrer aux recruteurs. Le projet est assez dur à réaliser car j'ai du mal à tout concevoir sans avoir une ligne directrice imposé. Je n'ai pas vraiment de compétence en design ce qui représente un bel obstacle. Néanmoins, ce projet avance et j'en suis fier, j'ai énormément appris en le faisant et j'ai hâte de finir chacune des parties pour pouvoir passer à la suivante et rendre ce site de plus en plus complet. Je m'en sers aussi pour poser des projets perso que j'avais réalisé avant, des outils créé ailleurs (sur Excel par exemple) et pour exposer mes passions. Le readMe du repo contient une liste raccourci de mes idées à réaliser.",
    },
];
</script>

<template>
    <div class="curriculum-container">
        <div class="categories description">
            <div class="title-box">
                <h2 class="title">Description</h2>
                <div class="line-up" />
            </div>
            <p class="description-text">
                <img
                    class="photo"
                    alt="Photographie de ma personne"
                    src="../../../images/portrait.png"
                />
                Jeune optimiste de {{ age }} ans sorti de formation en
                développement, je porte un intérêt certain au numérique et au
                développement web. J’ai vite appris et exploré de nombreuses
                facettes du domaine à travers la formation et des projets
                personnels. Ayant encore beaucoup à découvrir, je recherche une
                première expérience professionnelle pour parfaire mes
                connaissances et participer à des projets d’ampleur au sein
                d’une équipe. J’apprends vite, je m’adapte bien aux nouveautés
                et j’apporte au mieux de nouvelles idées.
            </p>
        </div>

        <div class="categories hobbies">
            <div class="title-box">
                <h2 class="title">Loisirs</h2>
                <div class="line-up" />
            </div>
            <ul class="hobbies-list">
                <li>Jeux vidéos</li>
                <li>Randonnées</li>
                <li>Programmation</li>
                <li>Cinéma</li>
                <li>Lecture</li>
                <li>Course à pied</li>
                <li>Gestion (de choses et d'autres)</li>
                <li>Nourrir mes connaissances</li>
                <li>Aimer les animaux</li>
            </ul>
        </div>

        <div class="categories quality">
            <div class="title-box">
                <h2 class="title">Qualités</h2>
                <div class="line-up" />
            </div>
            <ul class="qualities-list">
                <li>Autonome</li>
                <li>Curieux</li>
                <li>Enthousiaste</li>
                <li>Esprit d'équipe</li>
                <li>Investi</li>
                <li>Réactif</li>
                <li>Rigoureux</li>
                <li>Patient</li>
                <li>Aimable</li>
                <li>Curieux</li>
                <li>Casanier</li>
            </ul>
        </div>

        <div class="categories further-information">
            <div class="title-box">
                <h2 class="title">Informations complémentaires</h2>
                <div class="line-up" />
            </div>
            <ul class="further-information-list">
                <li>Permis B (sans véhicule)</li>
                <li>Français : langue natale (C2)</li>
                <li>Anglais : Niveau B2</li>
            </ul>
        </div>

        <div class="categories professional-experiences">
            <div class="title-box">
                <h2 class="title">Expériences professionnelles</h2>
                <div class="line-up" />
            </div>
            <div
                v-for="experience in professionalExperiences"
                :key="experience.key"
                class="experience-pro"
            >
                <div class="experience-pro-left">
                    <p class="whichone">{{ experience.title }}</p>
                    <p class="where">{{ experience.location }}</p>
                </div>
                <div class="experience-pro-middle">
                    <div class="date">{{ experience.firstDate }}</div>
                    <div class="line" />
                </div>
                <div class="experience-pro-right">
                    {{ experience.description }}
                </div>
            </div>
        </div>

        <div class="categories education">
            <div class="title-box">
                <h2 class="title">Formation</h2>
                <div class="line-up" />
            </div>
        </div>

        <div class="categories dev-skills">
            <div class="title-box">
                <h2 class="title">Compétences en développement</h2>
                <div class="line-up" />
            </div>
        </div>

        <div class="categories dev-projects">
            <div class="title-box">
                <h2 class="title">Projets</h2>
                <div class="line-up" />
            </div>
        </div>

        <div class="categories software">
            <div class="title-box">
                <h2 class="title">compétences en logiciel</h2>
                <div class="line-up" />
            </div>
        </div>
    </div>
</template>
