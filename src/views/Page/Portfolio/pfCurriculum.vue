<script setup>
const age = Math.round(
    (Date.now() - new Date(1999, 5, 24)) / 1000 / 365 / 24 / 60 / 60
);

// Composant très classique, on créé nos différents tableaux d'informations et on créé nos éléments avec
const skillsList = [
    "HTML : Toujours des connaissances à prendre",
    "CSS : Bien exploré, maîtrise de + en +",
    "SASS : En remplacement du CSS classique",
    "Javascript : Beaucoup exploré, des lacunes restent",
    "REACT : J'ai quelques projets réalisés avec",
    "Redux : Utilisé avec React mais pas",
    "Vue.JS : Ma préférence, en cours d'apprentissge",
    "Vue Router / Pinia : Pour compléter Vue.JS",
    "i18Next : Pour traduire un site",
    "Axios : Pour simplifier les requêtes serveur",
    "Node.JS : Mon seul langage utilisé en back",
    "ExpressJS : Pour créer le serveur",
    "SQL : Les connaissances de bases",
    "Socket.io : Liaison des utilisateurs",
    "BCrypt : Pour sécuriser les mots de passe",
    "Sequelize : Exploré pour les requêtes de BDD",
    "Excel : Passion pour ce logiciel, très bonne maîtrise",
];

const qualificationsList = [
    "Brevet des collèges",
    "Bac Scientifique - Mention bien",
    "Développeur DWWM II - Niveau BAC+2",
    "OpQuast, Maîtrise de la qualité en projet Web 785 / 1000",
    "MOOC SecNum Académie de l'ANSSI",
];

const professionalExperiences = [
    {
        key: 1,
        title: "Stage d'observation de 3ème",
        firstDate: "Mars 2014",
        secondDate: null,
        location: "Jefimmo - Saint-Laurent-des-Autels",
        description:
            "Stage d'une durée de 5 jours dans une agence immobilière avec organisation de visite, mise en vente d'une maison et réalisation de photos et de différents croquis",
    },
    {
        key: 2,
        title: "Stage en seconde professionnelle",
        firstDate: "Janvier 2015",
        secondDate: null,
        location: "Gamm vert - Saint Laurent des Autels",
        description:
            "Stage d'une durée d'une semaine en jardinerie. Manutention, mise en rayon, inventaire et étiquetages.",
    },
    {
        key: 3,
        title: "Stage en seconde professionnelle",
        firstDate: "Mars 2015",
        secondDate: null,
        location: "Super U - Ancenis",
        description:
            "Stage de deux semaines dans une grande surface avec principalement du nettoyage et de la mise en rayon",
    },
    {
        key: 4,
        title: "Stage en seconde professionnelle",
        firstDate: "Mai 2015",
        secondDate: null,
        location: "Top Office - Ancenis",
        description:
            "Stage de quatre semaines au sein de l'entreprise avec une découverte de la majeure partie des fonctions et métiers présents. De l'ouverture avec la mise en place, à la fermeture et le bilan de la journée, en passant par le passage de commande, la gestion des stock ou la réception en caisse",
    },
    {
        key: 5,
        title: "Projet de fin d'étude",
        firstDate: "Février 2021",
        secondDate: "Mars 2021",
        location: "Apothéose d'O'clock",
        description:
            "Il s'agissait d'un projet de fin d'études organisé par l'école 100% en téléprésentiel à réaliser en groupe. Avec 4 de mes collègues de promo, nous avons conçu un site de A à Z des wireframe jusqu'à la base de donnée, avec router, stylisation, connexion etc. Créé en React avec Webpack, ce site en Single Page Application n'est plus hébergé aujourd'hui mais je l'implémenterai sur ce site un de ces jours",
    },
    {
        key: 6,
        title: "CDI en restauration rapide",
        firstDate: "Septembre 2021",
        secondDate: "Mai 2022",
        location: "Burger King - Angers",
        description:
            "J'ai travaillé durant 9 mois dans ce restaurant pour subvenir à mes besoins. C'était également l'occasion pour moi de prendre une année Free, une année où j'aurai le temps de faire une transition entre ma vie scolaire et ma future vie professionnelle. J'en ai profité pour m'auto-former davantage au développement. Dans ce travail, j'y ai appris l'accueil et la gestion de clients, régulièrement en grand nombre et ai développé une grande autonomie dans mes tâches à accomplir pour permettre d'avoir un service le plus fluide possible. J'ai également beaucoup eu besoin de réagir à des problèmes en tout genre impliquant un contact avec la hiérarchie et le client indispendable. J'ai quitté l'entreprise pour me concentrer sur mes projets mais également à cause de gros soucis de dialogues entre employés et manager avec beaucoup d'actes immoraux et d'abus de pouvoir.",
    },
    {
        key: 7,
        title: "Projet personnel",
        firstDate: "Juin 2022",
        secondDate: "Présent",
        location: "De mon petit chez moi",
        description:
            "Depuis que j'ai quitté mon emploi, je travaille activement sur ce projet, ce site sur lequel vous vous trouvez afin d'afiner mes compétences et de constituer un 'quelque chose' à montrer aux recruteurs. Ce projet est un superbe exercice car n'ayant vraiment la fibre créatrice, le design est un challenge pour moi. Néanmoins, ce projet avance et j'en suis fier, j'ai énormément appris en le faisant et j'ai hâte de finir chacune des parties pour pouvoir passer à la suivante et rendre ce site de plus en plus complet. Je m'en sers aussi pour poser des projets personnels que j'avais réalisé avant, des outils créés ailleurs (sur Excel par exemple) et pour exposer mes passions. Le readMe du repo contient une liste raccourcie de mes idées à réaliser.",
    },
];

const schoolCurriculum = [
    {
        key: 1,
        title: "Collège",
        firstDate: "2010",
        secondDate: "2014",
        location: "Collège Georges Pompidou Champtoceaux",
        description:
            "Quatre années de collège sans accro avec obtention du brevet des collèges. Un voyage en Espagne durant l'année de 3ème",
    },
    {
        key: 2,
        title: "Lycée en cursus scientifique",
        firstDate: "2014",
        secondDate: "2018",
        location: "Lycée Polyvalent Joubert-Maillard Ancenis",
        description:
            "Quatre ans de lycée pour cause de deux années de seconde. En effet, j'ai (mal) choisi le fait d'aller en Bac Professionnel pour commencer le lycée, ce qui ne m'a pas du tout plu. Suite à ça, j'ai demandé et l'on m'a accordé de revenir en cursus général dans lequel j'ai effectué trois années de lycée dans la filière Scientifique quand elle existait encore. J'en suis sorti très motivé et diplomé du Bac mention Bien. Un voyage à Londres durant l'année de Première",
    },
    {
        key: 3,
        title: "Licence scientifique",
        firstDate: "2018",
        secondDate: "2020",
        location: "Université d'Angers - Fac de Sciences",
        description:
            "À la sortie du lycée, je voulais partir dans un parcours scientifique car c'était ma voie par défaut, ma voie de prédileciton ne sachant pas où aller d'autre. Cependant, bien que cela me plaisait durant la première année, la deuxième année fut bien plus compliqué et l'apparition du COVID et les cours en distanciel m'a convaincu que je devait essayer de me réorienter et faire ce que j'aimais.",
    },
    {
        key: 4,
        title: "Formation de Développeur Web",
        firstDate: "Octobre 2020",
        secondDate: "Mars 2021",
        location: "École 100% à distance O'Clock",
        description:
            "Suite à cette réorientation, j'ai intégré la formation Développeur Web Fullstack JS d'O'Clock d'une durée de 6 mois. Moi qui ait besoin d'être guidé et accompagné pour me former, au début tout du moins, cette formation était parfaite pour moi. Des bases HTML + CSS, puis la découverte du Javascript, on a également été formé à Node.JS et à la création/gestion de Base de Données. Durant quatre semaines sur la fin, nous avons effectué l'Apothéose : la réalisation d'un projet de groupe en reprenant la métohde SCRUM et en divisant les étapes de développement en sprint. J'ai également grâce à l'école passé et obtenu le diplôme Développeur Web et Web Mobile II.",
    },
];

const hobbiesList = [
    "Jeux vidéos",
    "Randonnées",
    "Programmation",
    "Cinéma",
    "Lecture",
    "Course à pied",
    "Gérer (données, organisation...)",
    "Nourrir mes connaissances",
    "Aimer les animaux",
];

const qualitiesList = [
    "Autonome",
    "Curieux",
    "Enthousiaste",
    "Esprit d'équipe",
    "Investi",
    "Réactif",
    "Rigoureux",
    "Patient",
    "Aimable",
    "Curieux",
];

const informationsList = [
    "Permis B (sans véhicule)",
    "Français : langue natale (C2)",
    "Anglais : Niveau B2",
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
                >
                Je suis un jeune de {{ age }} ans qui s'est pris de passion pour
                le développement web après des années à chercher l'étincelle.
                Optimiste et sorti d'une formation en développement web de 6
                mois chez O'clock, je continue de me former et d'apprendre.
                Aussi, ma curiosté pour le secteur du numérique me fait toujours
                regarder à droite à gauche les nouvelles choses. J'ai
                expérimenté pour le moment uniquement les langages web, à savoir
                HTML ; CSS et JS dans lesquels je suis toujours en quête de
                fonctionnalités à maîtriser et de connaissances à avoir. J'aime
                beaucoup travailler sur ce gros projet personnel en essayant
                d'être le plus rigoureux dans son développement et attentif aux
                axes d'améliorations possibles ainsi qu'à la
                détection/résolution des bugs. Aimant apprendre, réaliser des
                challenges et m'investir dans des projets, je recherche ma
                première expérience professionnelle dans une entreprise dans
                laquelle je pourrai m'investir au sein de leur équipe et qui
                saura me faire confiance.
            </p>
        </div>

        <div class="categories skills">
            <div class="title-box">
                <h2 class="title">Compétences en développement</h2>
                <div class="line-up" />
            </div>
            <ul class="skills-list">
                <li v-for="skill in skillsList" :key="skill">{{ skill }}</li>
            </ul>
        </div>

        <div class="categories qualification">
            <div class="title-box">
                <h2 class="title">Diplômes et Certification</h2>
                <div class="line-up" />
            </div>
            <ul class="qualification-list">
                <li
                    v-for="qualification in qualificationsList"
                    :key="qualification"
                >
                    {{ qualification }}
                </li>
            </ul>
        </div>

        <div class="categories professional-experiences">
            <div class="title-box">
                <h2 class="title">Expériences professionnelles</h2>
                <div class="line-up" />
            </div>
            <div
                v-for="experience in professionalExperiences.reverse()"
                :key="experience.key"
                class="one-of-them"
            >
                <div class="left">
                    <p class="whichone">{{ experience.title }}</p>
                    <p class="where">{{ experience.location }}</p>
                </div>
                <div class="middle">
                    <div class="date">
                        <p>{{ experience.firstDate }}</p>
                        <p v-if="experience.secondDate !== null">
                            {{ experience.secondDate }}
                        </p>
                    </div>
                    <div class="line-cache" />
                    <div class="line" />
                    <div class="line-uncache" />
                </div>
                <div class="right">
                    {{ experience.description }}
                </div>
            </div>
        </div>

        <div class="categories education">
            <div class="title-box">
                <h2 class="title">Formation</h2>
                <div class="line-up" />
            </div>
            <div
                v-for="study in schoolCurriculum.reverse()"
                :key="study.key"
                class="one-of-them"
            >
                <div class="left">
                    <p class="whichone">{{ study.title }}</p>
                    <p class="where">{{ study.location }}</p>
                </div>
                <div class="middle">
                    <div class="date">
                        <p>{{ study.firstDate }}</p>
                        <p v-if="study.secondDate !== null">
                            {{ study.secondDate }}
                        </p>
                    </div>
                    <div class="line-cache" />
                    <div class="line" />
                    <div class="line-uncache" />
                </div>
                <div class="right">
                    {{ study.description }}
                </div>
            </div>
        </div>

        <div class="categories hobbies">
            <div class="title-box">
                <h2 class="title">Loisirs</h2>
                <div class="line-up" />
            </div>
            <ul class="hobbies-list">
                <li v-for="hobbie in hobbiesList" :key="hobbie">
                    {{ hobbie }}
                </li>
            </ul>
        </div>

        <div class="categories quality">
            <div class="title-box">
                <h2 class="title">Qualités</h2>
                <div class="line-up" />
            </div>
            <ul class="qualities-list">
                <li v-for="quality in qualitiesList" :key="quality">
                    {{ quality }}
                </li>
            </ul>
        </div>

        <div class="categories further-information">
            <div class="title-box">
                <h2 class="title">Informations complémentaires</h2>
                <div class="line-up" />
            </div>
            <ul class="further-information-list">
                <li v-for="info in informationsList" :key="info">{{ info }}</li>
            </ul>
        </div>
    </div>
</template>
