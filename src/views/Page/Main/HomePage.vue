<script setup>
import ContactButton from "@parts/ContactButton.vue";
import ProjectContainer from "@parts/ProjectContainer.vue";
import { useMainStore } from "@store/Main";
import { reactive, ref } from "vue";

const presentationText =
    "Bienvenue sur mon site perso. Je m'appelle Alexandre, j'ai la vingtaine et je me suis pris de passion pour le développement en commençant par le web. Ce site me sert et me servira de portfolio ainsi que de support pour tout mes projets. J'ai appelé ce projet TryHard but SlowRun, un nom qui correspond bien à ma manière de jouer aux jeux vidéos généralement, ce qui m'inspire fortement pour mes projets. Je vous laisse naviguer librement ou jouer à ce petit mastermind.";

const randomizer = (max) => {
    return Math.trunc(Math.random() * max);
};

const mysteryNumber = [
    "",
    randomizer(10),
    randomizer(10),
    randomizer(10),
    randomizer(10),
];

let goodNumberGoodPlace = ref(0);
let goodNumberBadPlace = ref(0);
let wrongNumber = ref(0);

const testingSolution = () => {
    document.querySelector(".test-result").classList.add("hidden");
    goodNumberGoodPlace.value = 0;
    goodNumberBadPlace.value = 0;
    wrongNumber.value = 0;
    const matchingPlayerNumber = ["", false, false, false, false];
    const matchingMysteryNumber = ["", false, false, false, false];

    for (let i = 1; i < 5; i++) {
        if (mysteryNumber[i] === playerNumber[i]) {
            goodNumberGoodPlace.value += 1;
            matchingMysteryNumber[i] = true;
            matchingPlayerNumber[i] = true;
        }
        for (let y = 1; y < 5; y++) {
            if (
                matchingMysteryNumber[i] === false &&
                matchingPlayerNumber[y] === false &&
                mysteryNumber[i] === playerNumber[y]
            ) {
                goodNumberBadPlace.value += 1;
                matchingPlayerNumber[y] = true;
                matchingMysteryNumber[i] = true;
            }
        }
        if (matchingMysteryNumber[i] === false) {
            wrongNumber.value += 1;
        }
    }
    setTimeout(() => {
        document.querySelector(".test-result").classList.remove("hidden");
    }, 50);
};

const playerNumber = reactive(["", 0, 0, 0, 0]);
const changeNumber = (position, direction) => {
    if (direction === "up") {
        if (playerNumber[position] !== 9) {
            playerNumber[position] += 1;
        } else {
            playerNumber[position] = 0;
        }
    } else if (direction === "down") {
        if (playerNumber[position] !== 0) {
            playerNumber[position] -= 1;
        } else {
            playerNumber[position] = 9;
        }
    }
};

const MainStore = useMainStore();
const { contactList } = MainStore;

const age = Math.floor(
    (Date.now() - new Date(1999, 5, 24).getTime()) / 1000 / 60 / 60 / 24 / 365
);
</script>

<template>
    <div class="home-page">
        <p class="presentation-text">{{ presentationText }}</p>
        <div class="mastermind">
            <div class="number-box">
                <div class="mastermind-line">
                    <div
                        v-for="n in 4"
                        :key="n"
                        class="arrow arrow-up"
                        @click="changeNumber(n, 'up')"
                    >
                        <p>▶</p>
                    </div>
                </div>
                <div class="mastermind-line">
                    <div v-for="n in 4" :key="n" class="number">
                        {{ playerNumber[n] }}
                    </div>
                </div>
                <div class="mastermind-line">
                    <div
                        v-for="n in 4"
                        :key="n"
                        class="arrow arrow-down"
                        @click="changeNumber(n, 'down')"
                    >
                        <p>▶</p>
                    </div>
                </div>
            </div>
            <button class="testing-button" @click="testingSolution">
                Tester cette solution
            </button>
            <div class="test-result hidden">
                <p v-if="goodNumberGoodPlace === 1" class="green">
                    {{ goodNumberGoodPlace }} chiffre est bon et à sa place
                </p>
                <p v-if="goodNumberGoodPlace > 1" class="green">
                    {{ goodNumberGoodPlace }} chiffres sont bons et à la bonne
                    place
                </p>

                <p v-if="goodNumberBadPlace === 1" class="orange">
                    {{ goodNumberBadPlace }} chiffre est bon mais à la mauvaise
                    place
                </p>
                <p v-if="goodNumberBadPlace > 1" class="orange">
                    {{ goodNumberBadPlace }} chiffres sont bons mais à la
                    mauvaise place
                </p>

                <p v-if="wrongNumber === 1" class="red">
                    {{ wrongNumber }} n'est pas corrects
                </p>
                <p v-if="wrongNumber > 1" class="red">
                    {{ wrongNumber }} ne sont pas corrects
                </p>
            </div>
        </div>
    </div>
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
                :to="{ name: 'Curriculum' }"
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
            :to="{ name: 'Project' }"
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
            :to="{ name: 'Contact' }"
        >
            Me retrouver partout
        </router-link>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.home-page {
    background-color: var(--backgroundColor);
    display: flex;
    flex-direction: column;
    align-items: center;

    .presentation-text {
        background-color: var(--backgroundColor);
        color: var(--titleColor);
        text-align: justify;
    }
    .mastermind {
        background-color: var(--backgroundColor);
        display: flex;
        flex-direction: column;
        align-items: center;

        .number-box {
            color: var(--backgroundColor);
            background-color: var(--titleColor);
            margin: 50px;
            overflow: hidden;

            .mastermind-line {
                display: flex;
                background-color: var(--backgroundColor);

                .arrow,
                .number {
                    color: var(--backgroundColor);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 3px solid var(--smoothBackgroundColor);
                }

                .arrow {
                    color: var(--backgroundColor);
                    width: 75px;
                    height: 50px;
                    cursor: pointer;
                    user-select: none;

                    p {
                        font-size: 35px;
                    }

                    &-up {
                        background-color: var(--buttonColorOne);
                        p {
                            color: var(--backgroundColor);
                            background-color: var(--buttonColorOne);
                            transform: rotate(-90deg);
                        }

                        &:first-child {
                            border-top-left-radius: 30px;
                        }
                        &:last-child {
                            border-top-right-radius: 30px;
                        }
                    }

                    &-down {
                        background-color: var(--buttonColorTwo);
                        p {
                            color: var(--backgroundColor);
                            background-color: var(--buttonColorTwo);
                            transform: rotate(90deg);
                        }

                        &:first-child {
                            border-bottom-left-radius: 30px;
                        }
                        &:last-child {
                            border-bottom-right-radius: 30px;
                        }
                    }

                    &:hover {
                        background-color: var(--textColor);

                        p {
                            background-color: var(--textColor);
                        }
                    }
                }

                .number {
                    background-color: var(--titleColor);
                    color: var(--backgroundColor);
                    width: 75px;
                    height: 75px;
                    font-weight: 500;
                    font-size: 50px;
                    cursor: ns-resize;
                }
            }
        }

        .testing-button {
            background-color: var(--titleColor);
            color: var(--backgroundColor);
            padding: 9px;
            border-radius: 20px;
            font-weight: 500;
            line-height: 26px;
            font-size: 18px;
            transition: all 0.1s;

            &:active {
                border-radius: 10px;
                transform: scale(0.9);
                box-shadow: 0px 0px 8px 2px var(--titleColor);
            }
        }

        .test-result {
            background-color: var(--textColor);
            color: var(--backgroundColor);
            padding: 8px;
            border-radius: 10px;
            animation: testResultSlide ease 1 0.6s forwards;

            p {
                background-color: var(--textColor);
                color: var(--backgroundColor);
                animation: sentanceGrow ease 1 0.6s forwards;

                &.green {
                    border-left: solid green;
                    border-bottom: solid green;
                }

                &.orange {
                    border-left: solid orange;
                    border-bottom: solid orange;
                }

                &.red {
                    border-left: solid red;
                    border-bottom: solid red;
                }
            }

            &.hidden {
                display: none;
            }
        }

        @keyframes testResultSlide {
            0% {
                margin-top: -30px;
            }

            100% {
                margin-top: 20px;
            }
        }

        @keyframes sentanceGrow {
            0% {
                border-width: 0px;
                margin: 0;
                padding: 0;
                font-size: 0;
            }

            80% {
                border-width: 0px;
                margin: 0;
                padding: 0;
                font-size: 16px;
            }

            95% {
                border-width: 0px;
            }

            100% {
                padding: 2px;
                margin: 5px;
                border-width: 2px;
            }
        }
    }
}

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
