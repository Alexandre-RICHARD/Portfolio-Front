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
    return import("zxcvbn")
        .then(({default: zxcvbn}) => {
            passwordStrength.value = zxcvbn(props.value).guesses_log10;
        });
};
</script>

<template>
    <div class="input">
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
    </div>
    <div class="strong-password-box">
        <progress
            v-if="['registerPassword', 'newPassword'].indexOf(props.name) >= 0 && props.value.length > 0"
            class="strong-password"
            max="18"
            :value="passwordStrength"
        />
    </div>

    <div v-if="errordata.length !== 0" class="error-box">
        <p v-for="error in errordata" :key="error" class="error">
            {{ error }}
        </p>
    </div>
</template>
