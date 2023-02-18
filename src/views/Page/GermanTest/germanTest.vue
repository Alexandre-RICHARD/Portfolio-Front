<script setup>
import { ref, reactive } from "vue";
import { useMainStore } from "./../../../store/Main";
const MainStore = useMainStore();
const { modalData } = MainStore;
const API_URL = process.env.API_URL;
const { data } = require("../../../middlewares/verbData.js");

const activate = ref(true);
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
    modalData.loading = true;
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
    modalData.loading = false;
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

    for (let i = testInfo.testStart; i < testInfo.testEnd + 1; i++) {
        verbSelection.push({
            verb: i,
            showed: randomizer(5) + 1,
            inputAnswerValue: ["", "", "", "", ""],
            wrongAnswer: [false, false, false, false, false],
        });
    }

    verbSelection.forEach((element) => {
        element.inputAnswerValue[element.showed - 1] =
            data.verbList[element.verb][typeArray[element.showed]];
    });

    currentTest.value = testInfo.number;
    if (document.querySelector(".test-result")) {
        document.querySelector(".test-result").textContent =
            "Le score s'affichera ici";
    }
};

const submitGermanTest = (event) => {
    event.preventDefault();
    unhighlightWrongAnswer();

    const dataAnswer = [];
    const userAnswer = [];

    verbSelection.forEach((element) => {
        element.inputAnswerValue.forEach((answer) => {
            userAnswer.push(answer);
            element.wrongAnswer = [false, false, false, false, false];
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
                if (
                    dataAnswer[verificationCounter] ===
                    userAnswer[verificationCounter]
                ) {
                    score += 1;
                } else {
                    highlightWrongAnswer(y, i);
                    verbSelection[i].wrongAnswer[y] = true;
                }
            } else if (y === 4) {
                if (
                    dataAnswer[verificationCounter].includes(
                        userAnswer[verificationCounter]
                    ) &&
                    userAnswer[verificationCounter].length >= 3
                ) {
                    score += 1;
                } else {
                    highlightWrongAnswer(y, i);
                    verbSelection[i].wrongAnswer[y] = true;
                }
            }
            verificationCounter += 1;
        }
    }

    document.querySelector(".test-result").textContent = `${
        score - data.dateTest[currentTest.value - 1].testLength
    } / ${data.dateTest[currentTest.value - 1].testLength * 4}`;
};

const highlightWrongAnswer = (x, y) => {
    const input = document.querySelector(`[x='${x + 1}'][y='${y + 1}']`);
    input.classList.add("wrong");
};

const unhighlightWrongAnswer = () => {
    const verb = document.querySelectorAll("[x][y]");
    verb.forEach((element) => {
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
                                    {{
                                        data.verbList[element.verb][
                                            typeArray[n]
                                        ]
                                    }}
                                </p>
                                <input
                                    v-if="n !== element.showed"
                                    type="text"
                                    :value="element.inputAnswerValue[n - 1]"
                                    @input="
                                        (event) =>
                                            (verbSelection[
                                                index
                                            ].inputAnswerValue[n - 1] =
                                                event.target.value)
                                    "
                                >
                                <p
                                    v-if="
                                        verbSelection[index].wrongAnswer[n - 1]
                                    "
                                    class="correction"
                                >
                                    {{
                                        data.verbList[element.verb][
                                            typeArray[n]
                                        ]
                                    }}
                                </p>
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
                <button
                    class="unhighlight-button"
                    @click="unhighlightWrongAnswer"
                >
                    Enlever le surlignage rouge
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.german-test-container {
    background-color: var(--backgroundColor);
    overflow: auto;

    .german-test-sub-container {
        background-color: var(--backgroundColor);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 15px;

        .activating-password {
            background-color: var(--backgroundColor);
            color: var(--textColor);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            #german-password {
                background-color: var(--textColor);
                color: var(--backgroundColor);
                padding: 7px;
                margin: 4px;
                border-radius: 5px;
            }

            .submit-button {
                font-size: 18px;
                font-weight: 400;
                cursor: pointer;
            }
        }

        .testList-container {
            background-color: var(--backgroundColor);
            color: var(--textColor);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            button {
                padding: 1.5px;
            }
        }

        .verb-test {
            margin: 10px;
            padding: 10px;
            background-color: var(--textColor);
            display: flex;
            flex-direction: column;
            align-items: center;

            table {
                border: 1px solid black;
                thead {
                    border: 1px solid black;
                    tr {
                        th {
                            background-color: #b47070;
                            border: 1px solid black;
                        }
                    }
                }

                tbody {
                    border: 1px solid black;
                    font-size: 14px;

                    tr:nth-child(2n) {
                        background-color: #919191;
                        td {
                            background-color: #c7c7c7;
                            border: 1px solid #000000;
                            padding: 3.5px;

                            &.wrong {
                                background-color: #c7a1a1;
                            }
                        }
                    }
                    tr:nth-child(2n + 1) {
                        background-color: #f0ffff;
                        td {
                            background-color: #f0ffff;
                            border: 1px solid #000000;
                            padding: 3.5px;

                            &.wrong {
                                background-color: #fad5d5;
                            }
                        }
                    }

                    .correction {
                        text-align: center;
                        font-style: oblique;
                        color: #920707;
                        font-weight: 500;
                    }
                }
            }

            .validate-test-button {
                margin-top: 10px;
                font-weight: 500;
                font-size: 22px;
                padding: 3px 15px;
                border-radius: 4px;
                cursor: pointer;

                &:hover {
                    background-color: #b47070;
                }
            }

            .unhighlight-button {
                font-size: 18px;
                padding-top: 10px;
            }
        }
    }
}
</style>
