<script setup>
import { ref, reactive } from "vue";
const API_URL = process.env.API_URL;
const { data } = require("../../../middlewares/verbData.js");

const activate = ref(false);
let error = ref("");
let password = ref("");
let currentTest = ref(-1);
const verbSelection = reactive([]);
const typeArray = [
    "",
    "Infinitif",
    "Present",
    "Preterit",
    "Parfait",
    "Traduction",
];

const changeInputValue = (event) => {
    password.value = event.target.value;
};

const submitPassword = async () => {
    const connectionData = {
        password: password.value,
    };
    try {
        const response = await fetch(API_URL + "/germanTest/connect", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(connectionData),
        });
        passwordAccessResult(await response.json(), response.status);
    } catch (error) {
        console.trace(error);
    }
};

const passwordAccessResult = (message, status) => {
    if (message) {
        switch (message) {
        case "login-success":
            activate.value = true;
            break;
        case "login-failed":
            error.value = "Identifiants ou mot de passe incorrect";
            break;
        }
    }
    if (status === 500) {
        error.value = "Une erreur serveur est survenue. Veuillez réessayer";
    }
};

const randomizer = (limit) => {
    return Math.floor(Math.random() * limit);
};

const changeTest = (testInfo) => {
    unhighlightWrongAnswer();
    currentTest.value = -1;
    verbSelection.length = 0;

    const numberSelection = [];

    for (let i = 0; i < testInfo.testLength - 6; i++) {
        let randomNumber = randomizer((testInfo.number - 1) * 6);
        while (numberSelection.indexOf(randomNumber) !== -1) {
            randomNumber = randomizer((testInfo.number - 1) * 6);
        }
        numberSelection.push(randomNumber);
    }
    for (let i = 1; i < 7; i++) {
        numberSelection.push((testInfo.number - 1) * 6 + i - 1);
    }
    numberSelection.sort(function (a, b) {
        return a - b;
    });

    numberSelection.forEach(element => {
        verbSelection.push({
            verb: element,
            showed: randomizer(5) + 1,
            inputAnswerValue: ["", "", "", "", ""],
        });
    });

    verbSelection.forEach(element => {
        element.inputAnswerValue[element.showed - 1] = data.verbList[element.verb][typeArray[element.showed]];
    });

    currentTest.value = testInfo.number;
    document.querySelector(".test-result").textContent = "Le score s'affichera ici";
};

const submitGermanTest = (event) => {
    event.preventDefault();
    unhighlightWrongAnswer();

    const dataAnswer = [];
    const userAnswer = [];

    verbSelection.forEach(element => {
        element.inputAnswerValue.forEach(answer => {
            userAnswer.push(answer);
        });

        for (let i = 1; i < 6; i++) {
            dataAnswer.push(data.verbList[element.verb][typeArray[i]]);
        }
    });

    let verificationCounter = 0;
    let score = 0;
    for (let i = 0; i < data.dateTest[currentTest.value - 1].testLength; i++) {
        for (let y = 0; y < 5; y++) {
            if (y !== 4) {
                if (dataAnswer[verificationCounter] === userAnswer[verificationCounter]) {
                    score += 1;
                } else {
                    highlightWrongAnswer(y, i);
                }
            } else if (y === 4) {
                if (dataAnswer[verificationCounter].includes(userAnswer[verificationCounter]) && userAnswer[verificationCounter].length >= 3) {
                    score += 1;
                } else {
                    highlightWrongAnswer(y, i);
                }

            }
            verificationCounter += 1;
        }
    }

    document.querySelector(".test-result").textContent = `${score - data.dateTest[currentTest.value - 1].testLength} / ${data.dateTest[currentTest.value - 1].testLength * 4}`;
};

const highlightWrongAnswer = (x, y) => {
    const input = document.querySelector(`[x='${x+1}'][y='${y+1}']`);
    input.classList.add("wrong");
};

const unhighlightWrongAnswer = () => {
    const verb = document.querySelectorAll("[x][y]");
    verb.forEach(element => {
        element.classList.remove("wrong");
    });
};
</script>

<template>
    <div class="german-test-container">
        <div class="german-test-sub-container">
            <form v-if="!activate" class="activating-password">
                <label for="german-password">MOT DE PASSE</label>
                <p v-if="error !== ''">{{ error }}</p>
                <input
                    id="german-password"
                    name="german-password"
                    required
                    :value="password"
                    @input="changeInputValue"
                >
                <input
                    class="submit-button"
                    type="submit"
                    value="Valider"
                    @click.prevent="submitPassword"
                >
            </form>
            <div v-if="activate" class="testList-container">
                <button
                    v-for="test in data.dateTest"
                    :key="test.number"
                    :class="
                        Date.now() >= test.date.getTime()
                            ? 'enable'
                            : 'disabled'
                    "
                    @click="changeTest(test)"
                >
                    {{ test.title }}
                </button>
            </div>
            <div v-if="currentTest > 0" class="verb-test">
                <table>
                    <thead>
                        <tr>
                            <th>Infinitif</th>
                            <th>Present</th>
                            <th>Preterit</th>
                            <th>Parfait</th>
                            <th>Traduction</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(element, index) in verbSelection"
                            :key="element.key"
                        >
                            <td v-for="n in 5" :key="n" :x="n" :y="index + 1">
                                <p v-if="n === element.showed">
                                    {{ data.verbList[element.verb][typeArray[n]] }}
                                </p>
                                <input
                                    v-if="n !== element.showed"
                                    type="text"
                                    :value="element.inputAnswerValue[n - 1]"
                                    @input="
                                        (event) =>
                                            (verbSelection[index].inputAnswerValue[n - 1] = event.target.value)
                                    "
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input
                    class="validate-test-button"
                    type="submit"
                    value="Valider"
                    @click.prevent="submitGermanTest"
                >
                <p class="test-result">Le score s'affichera ici</p>
                <button class="unhighlight-button" @click="unhighlightWrongAnswer">
                    Enlever le surlignage rouge
                </button>
            </div>
        </div>
    </div>
</template>
