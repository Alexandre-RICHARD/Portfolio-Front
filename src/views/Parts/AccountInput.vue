<script setup>
import { ref } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    valuename: {
        type: String,
        required: true,
    },
    autocomplete: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    errordata: {
        type: Array,
        required: true,
    },
});

// Fonction emits pour renvoyer le changement de valeur dans le composant parents
const emit = defineEmits(["changeInputValue", "inputLosingFocus"]);
const handleChange = (event) => {
    emit("changeInputValue", event.target.value, props.valuename);
    // Lors de la capture de l'événement change, on vérifie aussi que s'il s'agit du password de register, on vérifiera la solidité de celui-ci.
    if (["registerPassword", "newPassword"].indexOf(props.name) >= 0) {
        updateStrengthPassword();
    }
};

// Fonction emits pour renvoyer la perte de focus
const losingFocus = (event) => {
    emit("inputLosingFocus", event.target);
};

// Fonction de vérification de solidité du mot de passe.
// On en profite pour importer ici uniquement le package zxcvbn afin d'éviter de surcharger le bundle
let passwordStrength = ref(0);
const updateStrengthPassword = () => {
    return import("zxcvbn").then(({ default: zxcvbn }) => {
        passwordStrength.value = zxcvbn(props.value).guesses_log10;
    });
};

const toggleShowPassword = (event) => {
    event.preventDefault();
    const closestForm = event.target.closest("form");
    const allButtonShowPassword = document.querySelectorAll(`.${closestForm.classList[0]} .toggle-show-password`);
    allButtonShowPassword.forEach(element => {
        const password = element.closest("div").querySelector("input");
        const img = document.createElement("img");
        element.innerHTML = "";
        if (element.showed) {
            element.showed = false;
            password.type = "password";
            img.src = require("../../images/show-password.svg");
        } else {
            element.showed = true;
            password.type = "text";
            img.src = require("../../images/unshow-password.svg");
        }
        element.appendChild(img);
    });
};
</script>

<template>
    <div :id="props.name" :class="props.type === 'password' ? 'input password' : 'input'">
        <label :for="name">{{ title }}</label>
        <input
            :id="name"
            :name="name"
            :type="type"
            required
            :autocomplete="autocomplete"
            :value="value"
            @input="handleChange"
            @blur="losingFocus"
        >
        <button v-if="props.type === 'password'" class="toggle-show-password" showed="false" @click="toggleShowPassword">
            <img src="../../images/show-password.svg">
        </button>
    </div>
    <div
        v-if="
            ['registerPassword', 'newPassword'].indexOf(props.name) >= 0 &&
                props.value.length > 0
        "
        class="strong-password-box"
    >
        <progress class="strong-password" max="18" :value="passwordStrength" />
    </div>

    <div v-if="errordata.length !== 0" class="error-box">
        <p v-for="error in errordata" :key="error" class="error">
            {{ error }}
        </p>
    </div>
</template>
