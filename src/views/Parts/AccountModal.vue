<script setup>
import { reactive } from "vue";
import { useMainStore } from "../../store/Main";
const MainStore = useMainStore();
const { modalData } = MainStore;

const clickOutsideAccountModal = (event) => {
    if (event.target.className === "account-modal-cache") {
        changeOnModal(false, null);
    }
};

const changeOnModal = (opened, type) => {
    modalData.open = opened;
    modalData.type = type;
};

const accountInformations = reactive({
    loginMail: "",
    loginPassword: "",
    registerNickname: "",
    registerMail: "",
    registerPassword: "",
    registerPasswordConfirmation: "",
});

let errorDataRegister = reactive([[], [], [], []]);
let errorDataLogin = reactive([[], []]);

const regexTest = {
    loginMail: (mail) => {
        const testGlobal = mail.match(/^(^([a-z])+([a-z0-9]+)[.\-_]?)+[a-z0-9]+@(([a-z\-0-9])+([.]{1})?(([a-z\-0-9])+([.]{1})+[a-z]{2,}))$/gm);
        if (testGlobal === null) {
            errorDataLogin[0].push("Le format de l'adresse-mail ne correspond pas");
        }
    },

    loginPassword: (password) => {
        const testResult = {
            lowercase: 0,
            uppercase: 0,
            numero: 0,
            special: 0,
            space: 0,
            length: 0,
        };

        // Minuscule
        const testMin = password.match(/([a-z])/g);
        if (testMin !== null) {
            testResult.lowercase = testMin.join("").length;
        }

        // Majuscule
        const testMax = password.match(/([A-Z])/g);
        if (testMax !== null) {
            testResult.uppercase = testMax.join("").length;
        }

        // Nombre
        const testNum = password.match(/([0-9])/g);
        if (testNum !== null) {
            testResult.numero = testNum.join("").length;
        }

        // Caractères spéciaux autorisés
        const testSpe = password.match(/([~!@#$%^&*()\-_=+[\]{};:,.<>/?\\|])/g);
        if (testSpe !== null) {
            testResult.special = testSpe.join("").length;
        }

        // Espace et autre
        const testSpace = password.match(/[\s\b\n\t]/g);
        if (testSpace !== null) {
            testResult.space = testSpace.join("").length;
        }

        // Longueur
        testResult.length = password.length;

        if (
            testResult.lowercase < 2 ||
            testResult.uppercase < 2 ||
            testResult.numero < 2 ||
            testResult.special < 1 ||
            testResult.space > 0 ||
            testResult.length < 8 ||
            testResult.length > 60
        ) {
            errorDataLogin[1].push("Le format du mot de passe ne correspond pas aux prérequis");
        }
    },

    registerNickname: (nickname) => {
        const testGlobal = nickname.match(/[^0-9a-zA-Z-_]/gm);
        if (testGlobal !== null) {
            errorDataRegister[0].push("Seuls les lettres a/A, chiffres et \"_\" et \"-\" sont autorisés pour le pseudo");
        }

        if (nickname.length < 3 || nickname.length > 25) {
            errorDataRegister[0].push("Le pseudo doit comprendre entre 3 et 25 caractères");
        }
    },

    registerMail: (mail) => {
        const testGlobal = mail.match(/^(^([a-z])+([a-z0-9]+)[.\-_]?)+[a-z0-9]+@(([a-z\-0-9])+([.]{1})?(([a-z\-0-9])+([.]{1})+[a-z]{2,}))$/gm);
        if (testGlobal === null) {
            errorDataRegister[1].push("Le format de l'adresse-mail ne correspond pas");
        }
    },

    registerPassword: (password) => {
        const testResult = {
            lowercase: 0,
            uppercase: 0,
            numero: 0,
            special: 0,
            space: 0,
            length: 0,
        };

        // Minuscule
        const testMin = password.match(/([a-z])/g);
        if (testMin !== null) {
            testResult.lowercase = testMin.join("").length;
        }
        if (testResult.lowercase < 2) {
            errorDataRegister[2].push("...contenir au moins 2 minuscules");
        }

        // Majuscule
        const testMax = password.match(/([A-Z])/g);
        if (testMax !== null) {
            testResult.uppercase = testMax.join("").length;
        }
        if (testResult.uppercase < 2) {
            errorDataRegister[2].push("...contenir au moins 2 majuscules");
        }

        // Nombre
        const testNum = password.match(/([0-9])/g);
        if (testNum !== null) {
            testResult.numero = testNum.join("").length;
        }
        if (testResult.numero < 2) {
            errorDataRegister[2].push("...contenir au moins 2 chiffres");
        }

        // Caractères spéciaux autorisés
        const testSpe = password.match(/([~!@#$%^&*()\-_=+[\]{};:,.<>/?\\|])/g);
        if (testSpe !== null) {
            testResult.special = testSpe.join("").length;
        }
        if (testResult.special < 1) {
            errorDataRegister[2].push("...contenir au moins 1 caractère spécial");
        }

        // Espace et autre
        const testSpace = password.match(/[\s\b\n\t]/g);
        if (testSpace !== null) {
            testResult.space = testSpace.join("").length;
        }
        if (testResult.space > 0) {
            errorDataRegister[2].push("...être sans espace");
        }

        // Longueur
        testResult.length = password.length;
        if (testResult.length < 8 || testResult.length > 60) {
            errorDataRegister[2].push("...faire entre 8 et 60 caractères");
        }
    },

    registerPasswordConfirmation: (password, passwordConfirmation) => {
        if (password !== passwordConfirmation) {
            errorDataRegister[3].push("Les mots de passe ne sont pas identiques");
        }
    }
};

const submitLoginForm = (event) => {
    event.preventDefault();
    errorDataLogin.length = 0;
    for (let i = 0; i < 2; i++) {
        errorDataLogin.push([]);
    }
    const mailTest = accountInformations.loginMail;
    const passwordTest = accountInformations.loginPassword;

    regexTest.loginMail(mailTest);
    regexTest.loginPassword(passwordTest);

    console.log("Longueur : " + errorDataLogin.join().replaceAll(",", "").length);
    if (errorDataLogin.join().replaceAll(",", "").length === 0) {
        console.log("Tout va bien - Login");
    } else {
        console.log("Erreur");
    }
};

const submitRegisterForm = (event) => {
    event.preventDefault();
    errorDataRegister.length = 0;
    for (let i = 0; i < 4; i++) {
        errorDataRegister.push([]);
    }
    const nicknameTest = accountInformations.registerNickname;
    const mailTest = accountInformations.registerMail;
    const passwordTest = accountInformations.registerPassword;
    const passwordConfirmationTest = accountInformations.registerPasswordConfirmation;

    regexTest.registerNickname(nicknameTest);
    regexTest.registerMail(mailTest);
    regexTest.registerPassword(passwordTest);
    regexTest.registerPasswordConfirmation(passwordTest, passwordConfirmationTest);
    console.log("Longueur : " + errorDataRegister.join().replaceAll(",", "").length);
    if (errorDataRegister.join().replaceAll(",", "").length === 0) {
        console.log("Tout va bien - Register");
    } else {
        console.log("Erreur");
    }
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
                                (accountInformations.loginMail =
                                    event.target.value)
                        "
                    >
                </div>
                <div
                    v-if="errorDataLogin[0].length !== 0"
                    class="password-error-box"
                >
                    <p
                        v-for="error in errorDataLogin[0]"
                        :key="error"
                        class="error"
                    >
                        {{ error }}
                    </p>
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
                                (accountInformations.loginPassword =
                                    event.target.value)
                        "
                    >
                </div>
                <div
                    v-if="errorDataLogin[1].length !== 0"
                    class="password-error-box"
                >
                    <p
                        v-for="error in errorDataLogin[1]"
                        :key="error"
                        class="error"
                    >
                        {{ error }}
                    </p>
                </div>
                <input
                    class="submit-button"
                    type="submit"
                    value="Se connecter"
                    @click="submitLoginForm"
                >
                <p class="not-concerned">
                    Pas encore de compte ?
                    <span
                        class="not-concerned-button"
                        @click="changeOnModal(true, 'register')"
                    >Inscrivez-vous</span>
                </p>
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
                                (accountInformations.registerNickname =
                                    event.target.value)
                        "
                    >
                </div>
                <div
                    v-if="errorDataRegister[0].length !== 0"
                    class="password-error-box"
                >
                    <p
                        v-for="error in errorDataRegister[0]"
                        :key="error"
                        class="error"
                    >
                        {{ error }}
                    </p>
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
                                (accountInformations.registerMail =
                                    event.target.value)
                        "
                    >
                </div>
                <div
                    v-if="errorDataRegister[1].length !== 0"
                    class="password-error-box"
                >
                    <p
                        v-for="error in errorDataRegister[1]"
                        :key="error"
                        class="error"
                    >
                        {{ error }}
                    </p>
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
                                (accountInformations.registerPassword =
                                    event.target.value)
                        "
                    >
                </div>
                <div
                    v-if="errorDataRegister[2].length !== 0"
                    class="password-error-box"
                >
                    <p class="title">Le mot de passe doit...</p>
                    <p
                        v-for="error in errorDataRegister[2]"
                        :key="error"
                        class="error"
                    >
                        {{ error }}
                    </p>
                </div>
                <div class="input">
                    <label for="registerPasswordConfirmation">Confirmez le mot de passe :
                    </label>
                    <input
                        id="registerPasswordConfirmation"
                        name="registerPasswordConfirmation"
                        type="password"
                        required
                        autocomplete="off"
                        :value="
                            accountInformations.registerPasswordConfirmation
                        "
                        @input="
                            (event) =>
                                (accountInformations.registerPasswordConfirmation =
                                    event.target.value)
                        "
                    >
                </div>
                <div
                    v-if="errorDataRegister[3].length !== 0"
                    class="password-error-box"
                >
                    <p
                        v-for="error in errorDataRegister[3]"
                        :key="error"
                        class="error"
                    >
                        {{ error }}
                    </p>
                </div>
                <input
                    class="submit-button"
                    type="submit"
                    value="S'inscrire"
                    @click="submitRegisterForm"
                >
                <p class="not-concerned">
                    Vous avez déjà un compte ?
                    <span
                        class="not-concerned-button"
                        @click="changeOnModal(true, 'login')"
                    >Connectez-vous</span>
                </p>
            </form>
        </div>
    </div>
</template>
