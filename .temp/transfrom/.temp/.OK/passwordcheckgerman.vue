<script setup>
import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { modalData } = MainStore;
const API_URL = process.env.API_URL;

const activate = ref(false);
let error = ref("");
let password = ref("");

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

</script>



<template>
    <form v-if="!activate" class="activating-password">
        <label for="german-password">MOT DE PASSE</label>
        <p v-if="error !== ''">{{ error }}</p>
        <input
            id="german-password"
            name="german-password"
            required
            :value="password"
            @input="changeInputValue"
        />
        <input
            class="submit-button"
            type="submit"
            value="Valider"
            @click.prevent="submitPassword"
        />
    </form>
</template>
