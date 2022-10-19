<script setup>
import AccountModalInput from "./AccountModalInput.vue";
import { reactive } from "vue";
import { useMainStore } from "../../store/Main";
const API_URL = process.env.API_URL;
const MainStore = useMainStore();
const { modalData } = MainStore;

// Utilisé pour détecter un clic en dehors de la modal, mais pas sur le header. En effet, le clic n'est détecté que sur le cache.
const clickOutsideAccountModal = (event) => {
    if (event.target.className === "account-modal-cache") {
        changeOnModal(false, null);
    }
};

// Utilisé sur le bouton not-concerned afin de passer d'une modal à l'autre
const changeOnModal = (opened, type) => {
    modalData.open = opened;
    modalData.type = type;
};

// Nos valeurs de nos différents inputs sont stockées ici en reactive
const accountInformations = reactive({
    loginMail: "",
    loginPassword: "",
    registerNickname: "",
    registerMail: "",
    registerPassword: "",
    registerPasswordConfirmation: "",
});

// On créé un tableau d'erreur ici, un pour le login et un pour le register. Chaque sous-tableau contiendra les erreurs des tests s'il y en a pour chaque input
let errorDataLogin = reactive([[], []]);
let errorDataRegister = reactive([[], [], [], []]);

// Nos différentes fonctions de test de validité
const regexTest = {
    // Test regex du mail, regex complexe prise sur internet qui vérifie normalement tous les formats d'adresse-mail, sauf la longueur de celle-ci. Une erreur est inscrite si ça ne correspond pas
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

    // Test du password du login, un seul message d'erreur sera transmit si ça ne match pas, contrairement à register, mais les mêmes tests sont effectués
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
        // Test du pseudo, on ne vérifie que la composition et la longueur. Ainsi, si le regex.match trouve autre chose que 0-9a-zA-Z, une erreur est donnée
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
        // Même test, même erreur qu'en login
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
        // Même test qu'en login mais les erreurs sont reportées individuellement
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
        // Test entre les deux mots de passe pour leur similarité
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

// Appelé lors du clic sur le bouton S'enregister
// On appelle donc les fonction vues plus haut et on vient ensuite tester le tableau d'erreur correspondant. S'il ne contient aucune erreur, on tente l'inscription
const submitRegisterForm = (event) => {
    event.preventDefault();
    const registrationData = {
        nickname: accountInformations.registerNickname,
        mail: accountInformations.registerMail,
        password: accountInformations.registerPassword,
        passwordConfirmation: accountInformations.registerPasswordConfirmation,
    };

    regexTest.registerNickname(registrationData.nickname);
    regexTest.registerMail(registrationData.mail);
    regexTest.registerPassword(registrationData.password);
    regexTest.registerPasswordConfirmation(
        registrationData.passwordConfirmation
    );
    if (errorDataRegister.join().replaceAll(",", "").length === 0) {
        registration(registrationData);
    }
};

const registration = async (registrationData) => {
    try {
        const response = await fetch(API_URL + "/registration", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(registrationData),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.trace(error);
    }
};

// Appelé lors du clic sur le bouton Se connecter
// On appelle donc les fonction vues plus haut et on vient ensuite tester le tableau d'erreur correspondant. S'il ne contient aucune erreur, on tente la connexion
const submitLoginForm = (event) => {
    event.preventDefault();
    const connectionData = {
        mail: accountInformations.loginMail,
        password: accountInformations.loginPassword,
    };

    regexTest.loginMail(connectionData.mail);
    regexTest.loginPassword(connectionData.password);

    if (errorDataLogin.join().replaceAll(",", "").length === 0) {
        connection(connectionData);
    }
};

const connection = (connectionData) => {
    console.log(connectionData);
    // try {
    //     fetch(API_URL + "/connection", {
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         method: "POST",
    //         body: JSON.stringify(connectionData),
    //     });
    // } catch (error) {
    //     console.trace(error);
    // }
};

// Fonction appelé à chaque changement dans la valeur des inputs pour changer la valeur dans l'objet reactive
const changeInputValue = (value, valuename) => {
    accountInformations[valuename] = value;
};

// Lors de la perte de focus sur un input, si la valeur de l'input n'est pas null, alors on appelle la fonction test lié à l'input qui renvoi une valeur bool de test. On vient ajouter une classe good ou error qui colorera la bordure de l'input en fonction du test
const inputLosingFocus = (target) => {
    if (accountInformations[target.id].length > 0) {
        const testOk = regexTest[target.id](accountInformations[target.id]);
        const className = testOk === true ? "good" : "error";
        document.querySelector(`#${target.id}`).className = className;
    }
};
</script>

<template>
    <!-- Si la modal est input ou register, on affiche tout ça -->
    <div
        v-if="['login', 'register'].indexOf(modalData.type) >= 0"
        class="account-modal-cache"
        @click="clickOutsideAccountModal"
    >
        <!-- On affiche 2 ou 4 inputs en fonction du type de modal. Tout est factorisé en appelant un sous-composant -->
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
