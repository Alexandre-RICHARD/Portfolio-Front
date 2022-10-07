<script setup>
import { reactive } from "vue";
import { useMainStore } from "../../store/Main";
const MainStore = useMainStore();
const { modalData } = MainStore;

const clickOutsideAccountModal = (event) => {
    if (event.target.className === "account-modal-cache") {
        closingModal();
    }
};

const closingModal = () => {
    modalData.open = false;
    modalData.type = null;
};

const accountInformations = reactive({
    loginMail: null,
    loginPassword: null,
    registerNickname: null,
    registerMail: null,
    registerPassword: null,
    registerPasswordConfirmation: null,
});

const submitLoginForm = () => {

};

const submitRegisterForm = () => {

};
</script>

<template>
    <div
        v-if="['login', 'register'].indexOf(modalData.type) >= 0"
        class="account-modal-cache"
        @click="clickOutsideAccountModal"
    >
        <div class="account-modal">
            <form v-if="modalData.type === 'login'" class="login-form">
                <div class="input">
                    <label for="loginMail">Adresse mail : </label>
                    <input
                        id="loginMail"
                        name="loginMail"
                        type="email"
                        required
                        autocomplete="on"
                        :value="accountInformations.loginMail"
                        @input="
                            (event) =>
                                (accountInformations.loginMail = event.target.value)
                        "
                    >
                </div>
                <div class="input">
                    <label for="loginPassword">Mot de passe : </label>
                    <input
                        id="loginPassword"
                        name="loginPassword"
                        type="password"
                        required
                        autocomplete="on"
                        :value="accountInformations.loginPassword"
                        @input="
                            (event) =>
                                (accountInformations.loginPassword = event.target.value)
                        "
                    >
                </div>
                <input
                    class="submit-button"
                    type="submit"
                    value="Se connecter"
                    @click="submitLoginForm"
                >
            </form>


            <form v-if="modalData.type === 'register'" class="register-form">
                <div class="input">
                    <label for="registerNickname">Pseudo : </label>
                    <input
                        id="registerNickname"
                        name="registerNickname"
                        type="text"
                        required
                        autocomplete="off"
                        :value="accountInformations.registerNickname"
                        @input="
                            (event) =>
                                (accountInformations.registerNickname = event.target.value)
                        "
                    >
                </div>
                <div class="input">
                    <label for="registerMail">Adresse mail : </label>
                    <input
                        id="registerMail"
                        name="registerMail"
                        type="email"
                        required
                        autocomplete="on"
                        :value="accountInformations.registerMail"
                        @input="
                            (event) =>
                                (accountInformations.registerMail = event.target.value)
                        "
                    >
                </div>
                <div class="input">
                    <label for="registerPassword">Mot de passe : </label>
                    <input
                        id="registerPassword"
                        name="registerPassword"
                        type="password"
                        required
                        autocomplete="off"
                        :value="accountInformations.registerPassword"
                        @input="
                            (event) =>
                                (accountInformations.registerPassword = event.target.value)
                        "
                    >
                </div>
                <div class="input">
                    <label for="registerPasswordConfirmation">Confirmez le mot de passe : </label>
                    <input
                        id="registerPasswordConfirmation"
                        name="registerPasswordConfirmation"
                        type="password"
                        required
                        autocomplete="off"
                        :value="accountInformations.registerPasswordConfirmation"
                        @input="
                            (event) =>
                                (accountInformations.registerPasswordConfirmation = event.target.value)
                        "
                    >
                </div>
                <input
                    class="submit-button"
                    type="submit"
                    value="S'inscrire"
                    @click="submitRegisterForm"
                >
            </form>
        </div>
    </div>
</template>
