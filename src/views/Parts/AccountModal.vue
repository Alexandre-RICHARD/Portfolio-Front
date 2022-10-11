<script setup>
import AccountModalInput from "./AccountModalInput.vue";
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

let errorDataLogin = reactive([[], []]);
let errorDataRegister = reactive([[], [], [], []]);

const regexTest = {
    loginMail: (mail) => {
        errorDataLogin[0].length = 0;
        const testGlobal = mail.match(
            /^(^([a-z])+([a-z0-9]+)[.\-_]?)+[a-z0-9]+@(([a-z\-0-9])+([.]{1})?(([a-z\-0-9])+([.]{1})+[a-z]{2,}))$/gm
        );
        if (testGlobal === null) {
            errorDataLogin[0].push(
                "Le format de l'adresse-mail ne correspond pas"
            );
        }

        if (errorDataLogin[0].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    loginPassword: (password) => {
        errorDataLogin[1].length = 0;
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
            errorDataLogin[1].push(
                "Le format du mot de passe ne correspond pas aux prérequis"
            );
        }

        if (errorDataLogin[1].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    registerNickname: (nickname) => {
        errorDataRegister[0].length = 0;
        const testGlobal = nickname.match(/[^0-9a-zA-Z-_]/gm);
        if (testGlobal !== null) {
            errorDataRegister[0].push(
                "Seuls les lettres a/A, chiffres et \"_\" et \"-\" sont autorisés pour le pseudo"
            );
        }

        if (nickname.length < 3 || nickname.length > 25) {
            errorDataRegister[0].push(
                "Le pseudo doit comprendre entre 3 et 25 caractères"
            );
        }

        if (errorDataRegister[0].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    registerMail: (mail) => {
        errorDataRegister[1].length = 0;
        const testGlobal = mail.match(
            /^(^([a-z])+([a-z0-9]+)[.\-_]?)+[a-z0-9]+@(([a-z\-0-9])+([.]{1})?(([a-z\-0-9])+([.]{1})+[a-z]{2,}))$/gm
        );
        if (testGlobal === null) {
            errorDataRegister[1].push(
                "Le format de l'adresse-mail ne correspond pas"
            );
        }

        if (errorDataRegister[1].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    registerPassword: (password) => {
        errorDataRegister[2].length = 0;
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
            errorDataRegister[2].push(
                "...contenir au moins 1 caractère spécial"
            );
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

        if (errorDataRegister[2].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    registerPasswordConfirmation: (passwordConfirmation) => {
        errorDataRegister[3].length = 0;
        if (passwordConfirmation !== accountInformations.registerPassword) {
            errorDataRegister[3].push(
                "Les mots de passe ne sont pas identiques"
            );
        }

        if (errorDataRegister[3].length === 0) {
            return true;
        } else {
            return false;
        }
    },
};

const submitLoginForm = (event) => {
    event.preventDefault();
    const mailTest = accountInformations.loginMail;
    const passwordTest = accountInformations.loginPassword;

    regexTest.loginMail(mailTest);
    regexTest.loginPassword(passwordTest);

    if (errorDataLogin.join().replaceAll(",", "").length === 0) {
        console.log("Tout va bien - Login");
    }
};

const submitRegisterForm = (event) => {
    event.preventDefault();
    const nicknameTest = accountInformations.registerNickname;
    const mailTest = accountInformations.registerMail;
    const passwordTest = accountInformations.registerPassword;
    const passwordConfirmationTest =
        accountInformations.registerPasswordConfirmation;

    regexTest.registerNickname(nicknameTest);
    regexTest.registerMail(mailTest);
    regexTest.registerPassword(passwordTest);
    regexTest.registerPasswordConfirmation(
        passwordConfirmationTest
    );
    if (errorDataRegister.join().replaceAll(",", "").length === 0) {
        console.log("Tout va bien - Register");
    }
};

const changeInputValue = (value, valuename) => {
    accountInformations[valuename] = value;
};

const inputLosingFocus = (target) => {
    if (accountInformations[target.id].length > 0) {
        const testOk = regexTest[target.id](accountInformations[target.id]);
        const className = testOk === true ? "good" : "error";
        document.querySelector(`#${target.id}`).className = (className);
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
                <AccountModalInput
                    title="Adresse mail : "
                    name="loginMail"
                    type="email"
                    autocomplete="on"
                    valuename="loginMail"
                    :value="accountInformations.loginMail"
                    :errordata="errorDataLogin[0]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
                <AccountModalInput
                    title="Mot de passe : "
                    name="loginPassword"
                    type="password"
                    autocomplete="on"
                    valuename="loginPassword"
                    :value="accountInformations.loginPassword"
                    :errordata="errorDataLogin[1]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
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
                <AccountModalInput
                    title="Pseudo : "
                    name="registerNickname"
                    type="text"
                    autocomplete="off"
                    valuename="registerNickname"
                    :value="accountInformations.registerNickname"
                    :errordata="errorDataRegister[0]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
                <AccountModalInput
                    title="Adresse mail : "
                    name="registerMail"
                    type="email"
                    autocomplete="on"
                    valuename="registerMail"
                    :value="accountInformations.registerMail"
                    :errordata="errorDataRegister[1]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
                <AccountModalInput
                    title="Mot de passe : "
                    name="registerPassword"
                    type="password"
                    autocomplete="off"
                    valuename="registerPassword"
                    :value="accountInformations.registerPassword"
                    :errordata="errorDataRegister[2]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
                <AccountModalInput
                    title="Confirmez le mot de passe : "
                    name="registerPasswordConfirmation"
                    type="password"
                    autocomplete="off"
                    valuename="registerPasswordConfirmation"
                    :value="accountInformations.registerPasswordConfirmation"
                    :errordata="errorDataRegister[3]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
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
