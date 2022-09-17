<script setup>
import { reactive, ref } from "vue";

const presentationText =
    "Voici mon texte de présentation qui sera à faire plus tard, vous pouvez visiter mon petit site tranquillement ou bien essayer ce petit jeu ma foi bien sympatoche.";

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
</script>

<template>
    <div class="home-page">
        <p class="presentation-text">{{ presentationText }}</p>
        <div class="mastermind">
            <div class="number-box">
                <div
                    v-for="n in 4"
                    :key="n"
                    class="arrow arrow-up"
                    @click="changeNumber(n, 'up')"
                >
                    <p>▶</p>
                </div>
                <div v-for="n in 4" :key="n" class="number">
                    {{ playerNumber[n] }}
                </div>
                <div
                    v-for="n in 4"
                    :key="n"
                    class="arrow arrow-down"
                    @click="changeNumber(n, 'down')"
                >
                    <p>▶</p>
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
</template>
