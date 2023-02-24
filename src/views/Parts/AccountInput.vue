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
    const allButtonShowPassword = document.querySelectorAll(
        `.${closestForm.classList[0]} .toggle-show-password`
    );
    allButtonShowPassword.forEach((element) => {
        const password = element.closest("div").querySelector("input");
        const img = document.createElement("img");
        element.innerHTML = "";
        if (element.showed) {
            element.showed = false;
            password.type = "password";
            img.src = require("@static/images/show-password.svg");
        } else {
            element.showed = true;
            password.type = "text";
            img.src = require("@static/images/unshow-password.svg");
        }
        element.appendChild(img);
    });
};
</script>

<template>
    <div
        :id="props.name"
        :class="props.type === 'password' ? 'input password' : 'input'"
    >
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
        <button
            v-if="props.type === 'password'"
            class="toggle-show-password"
            showed="false"
            @click="toggleShowPassword"
        >
            <img src="@static/images/show-password.svg">
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

<style lang="scss">
@import "@styles/variables.scss";

.new-mail-form,
.new-password-form,
.delete-account-form,
.login-form,
.register-form {
    background-color: $color0;
    color: $color14;
    display: flex;
    flex-direction: column;

    .input {
        background-color: $color0;
        color: $color14;
        margin: 10px 0;

        label {
            background-color: $color0;
            color: $color14;
            display: block;
            padding: 3px;
        }

        input {
            background-color: $color14;
            color: $color0;
            width: 100%;
            padding: 4px;
            border: 2px solid transparent;

            &.good {
                border-color: green;
            }

            &.error {
                border-color: red;
            }
        }

        &.password {
            position: relative;

            .toggle-show-password {
                background-color: $color14;
                position: absolute;
                width: 40px;
                height: 32px;
                bottom: 2px;
                right: 2px;
                border-left: 1px solid #b1b1b1;
            }
        }
    }

    .strong-password-box {
        position: relative;

        .strong-password {
            width: 100%;
            position: absolute;
            top: -10px;
        }
    }

    .error-box {
        background-color: $color111;
        color: $color14;
        padding: 5px;
        border-radius: 5px;

        .title {
            background-color: $color111;
            color: $color14;
            font-size: 16px;
        }

        .error {
            background-color: $color111;
            color: $color14;
            font-size: 14px;
        }
    }

    .submit-button {
        background-color: $color6;
        color: $color14;
        font-weight: 600;
        font-size: 16px;
        text-shadow: 1px 1px 1px $color13;
        cursor: pointer;
        letter-spacing: 1px;
        width: fit-content;
        margin: 7px auto;
        padding: 7px;
        border-radius: 9px;
        border: 2px solid transparent;

        &:hover {
            border-color: $color14;
        }
    }

    .not-concerned {
        background-color: $color0;
        color: $color14;
        padding-top: 7px;
        text-align: center;

        &-button {
            background-color: $color0;
            color: $color6;
            font-weight: 500;
            cursor: pointer;
            text-decoration: underline;
            text-underline-offset: 2px;
        }
    }
}
</style>
