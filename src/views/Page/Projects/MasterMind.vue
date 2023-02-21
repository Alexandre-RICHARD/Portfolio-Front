<script setup>
import { reactive, ref } from "vue";

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
                {{ goodNumberGoodPlace }} chiffres sont bons et à la bonne place
            </p>

            <p v-if="goodNumberBadPlace === 1" class="orange">
                {{ goodNumberBadPlace }} chiffre est bon mais à la mauvaise
                place
            </p>
            <p v-if="goodNumberBadPlace > 1" class="orange">
                {{ goodNumberBadPlace }} chiffres sont bons mais à la mauvaise
                place
            </p>

            <p v-if="wrongNumber === 1" class="red">
                {{ wrongNumber }} n'est pas corrects
            </p>
            <p v-if="wrongNumber > 1" class="red">
                {{ wrongNumber }} ne sont pas corrects
            </p>
        </div>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.mastermind {
    background-color: $color0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .number-box {
        color: $color0;
        background-color: $color14;
        margin: 50px;
        overflow: hidden;

        .mastermind-line {
            display: flex;
            background-color: $color0;

            .arrow,
            .number {
                color: $color0;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 3px solid $color9;
            }

            .arrow {
                color: $color0;
                width: 75px;
                height: 50px;
                cursor: pointer;
                user-select: none;

                p {
                    font-size: 35px;
                }

                &-up {
                    background-color: $color4;
                    p {
                        color: $color0;
                        background-color: $color4;
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
                    background-color: $color6;
                    p {
                        color: $color0;
                        background-color: $color6;
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
                    background-color: $color14;

                    p {
                        background-color: $color14;
                    }
                }
            }

            .number {
                background-color: $color14;
                color: $color0;
                width: 75px;
                height: 75px;
                font-weight: 500;
                font-size: 50px;
                cursor: ns-resize;
            }
        }
    }

    .testing-button {
        background-color: $color14;
        color: $color0;
        padding: 9px;
        border-radius: 20px;
        font-weight: 500;
        line-height: 26px;
        font-size: 18px;
        transition: all 0.1s;

        &:active {
            border-radius: 10px;
            transform: scale(0.9);
            box-shadow: 0px 0px 8px 2px $color14;
        }
    }

    .test-result {
        background-color: $color14;
        color: $color0;
        padding: 8px;
        border-radius: 10px;
        animation: testResultSlide ease 1 0.6s forwards;

        p {
            background-color: $color14;
            color: $color0;
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
</style>
