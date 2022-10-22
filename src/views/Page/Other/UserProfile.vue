<script setup>
import AccountModalInput from "../../Parts/AccountModalInput.vue";
import { reactive } from "vue";
import { useMainStore } from "../../../store/Main";
const API_URL = process.env.API_URL;
const MainStore = useMainStore();
const { account, modalData } = MainStore;

const accountInformations = reactive({
    newMail: "lanouvelleadresse@gmail.com",
    newMailConfirmation: "lanouvelleadresse@gmail.com",
    newMailPassword: "bzq_*47KiloMaz3b,",
    oldPassword: "bzq_*47KiloMaz3b,",
    newPassword: "ad4FK_-Y*18tyran",
    newPasswordConfirmation: "ad4FK_-Y*18tyran",
});

let errorDataNewMail = reactive([[], [], [], []]);
let errorDataNewPassword = reactive([[], [], [], []]);

const regexTest = {
    cleanError: () => {
        errorDataNewMail.forEach((element) => {
            element.length = 0;
        });
        errorDataNewPassword.forEach((element) => {
            element.length = 0;
        });
    },

    newMail: (mail) => {

    },
    newMailConfirmation: (mailConfirmation) => {

    },
    password: (password) => {

    },
    newPasswordConfirmation: (newPasswordConfirmation) => {

    },
};

const submitRegisterForm = (event) => {
    event.preventDefault();
    // const registrationData = {
    //     nickname: accountInformations.registerNickname,
    //     mail: accountInformations.registerMail,
    //     password: accountInformations.registerPassword,
    //     passwordConfirmation: accountInformations.registerPasswordConfirmation,
    // };
    // regexTest.cleanError();
    // regexTest.registerNickname(registrationData.nickname);
    // regexTest.registerMail(registrationData.mail);
    // regexTest.registerPassword(registrationData.password);
    // regexTest.registerPasswordConfirmation(
    //     registrationData.passwordConfirmation
    // );
    // if (errorDataRegister.every((element) => element.length === 0)) {
    //     registration(registrationData);
    // }
};

const registration = async (registrationData) => {
    // try {
    //     const response = await fetch(API_URL + "/registration", {
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         method: "POST",
    //         body: JSON.stringify(registrationData),
    //     });
    //     registrationResult(await response.json(), response.status);
    // } catch (error) {
    //     console.trace(error);
    // }
};

const registrationResult = (data, status) => {
    // data.forEach((element) => {
    //     switch (element) {
    //     case "register-success":
    //         account.connected = true;
    //         account.nickname = data[1].nickname;
    //         account.mail = data[1].mail;
    //         errorDataRegister[4].push(
    //             "Inscription réussie mais ça sert à rien pour l'instant"
    //         );
    //         break;
    //     case "account-already-exist":
    //         errorDataRegister[4].push(
    //             "Un compte avec cette adresse-mail existe déjà"
    //         );
    //         break;
    //     case "format-mail":
    //         errorDataRegister[0].push(
    //             "Le serveur n'accepte pas ce format d'adresse-mail"
    //         );
    //         break;
    //     case "format-nickname":
    //         errorDataRegister[1].push(
    //             "Le serveur n'accepte pas ce format de pseudo"
    //         );
    //         break;
    //     case "format-password":
    //         errorDataRegister[2].push(
    //             "Le serveur n'accepte pas ce format de mot de passe"
    //         );
    //         break;
    //     case "match-password":
    //         errorDataRegister[3].push(
    //             "Les deux mots de passe entrés ne correspondent pas"
    //         );
    //         break;
    //     }
    // });
    // if (status === 500) {
    //     errorDataRegister[4].push(
    //         "Une erreur serveur est survenue. Veuillez réessayer"
    //     );
    // }
};

const submitLoginForm = (event) => {
    event.preventDefault();
    // const connectionData = {
    //     mail: accountInformations.loginMail,
    //     password: accountInformations.loginPassword,
    // };

    // regexTest.cleanError();
    // regexTest.loginMail(connectionData.mail);
    // regexTest.loginPassword(connectionData.password);

    // if (errorDataLogin.every((element) => element.length === 0)) {
    //     connection(connectionData);
    // }
};

const connection = async (connectionData) => {
    // try {
    //     const response = await fetch(API_URL + "/connection", {
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         method: "POST",
    //         body: JSON.stringify(connectionData),
    //     });
    //     connectionResult(await response.json(), response.status);
    // } catch (error) {
    //     console.trace(error);
    // }
};

const connectionResult = (data, status) => {
    // if (data) {
    //     data.forEach((element) => {
    //         switch (element) {
    //         case "login-success":
    //             account.connected = true;
    //             account.nickname = data[1].nickname;
    //             account.mail = data[1].mail;
    //             errorDataLogin[2].push(
    //                 "Connexion réussi mais ça sert à rien pour l'instant"
    //             );
    //             break;
    //         case "login-failed":
    //             errorDataLogin[2].push(
    //                 "Identifiants ou mot de passe incorrect"
    //             );
    //             break;
    //         case "format-mail":
    //             errorDataLogin[0].push(
    //                 "Le serveur n'accepte pas ce format d'adresse-mail"
    //             );
    //             break;
    //         case "format-nickname":
    //             errorDataLogin[1].push(
    //                 "Le serveur n'accepte pas ce format de mot de passe"
    //             );
    //             break;
    //         }
    //     });
    // }
    // if (status === 500) {
    //     errorDataLogin[2].push(
    //         "Une erreur serveur est survenue. Veuillez réessayer"
    //     );
    // }
};

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
    <p class="account-parameters">Paramètres du compte</p>
    <div class="parameters-container">
        <form class="new-mail-form">
            <AccountModalInput
                title="Nouvelle adresse mail : "
                name="newMail"
                type="email"
                autocomplete="on"
                valuename="newMail"
                :value="accountInformations.newMail"
                :errordata="errorDataNewMail[0]"
                @change-input-value="changeInputValue"
                @input-losing-focus="inputLosingFocus"
            />
            <AccountModalInput
                title="Confirmez la nouvelle adresse : "
                name="newMailConfirmation"
                type="email"
                autocomplete="on"
                valuename="newMailConfirmation"
                :value="accountInformations.newMailConfirmation"
                :errordata="errorDataNewMail[1]"
                @change-input-value="changeInputValue"
                @input-losing-focus="inputLosingFocus"
            />
            <AccountModalInput
                title="Confirmez avec le mot de passe : "
                name="newMailPassword"
                type="password"
                autocomplete="on"
                valuename="newMailPassword"
                :value="accountInformations.newMailPassword"
                :errordata="errorDataNewMail[2]"
                @change-input-value="changeInputValue"
                @input-losing-focus="inputLosingFocus"
            />
            <input
                class="submit-button"
                type="submit"
                value="Changer d'adresse-mail"
                @click="submitLoginForm"
            >
        </form>
        <form class="new-password-form">
            <AccountModalInput
                title="Mot de passe actuel : "
                name="oldPassword"
                type="password"
                autocomplete="on"
                valuename="oldPassword"
                :value="accountInformations.oldPassword"
                :errordata="errorDataNewPassword[0]"
                @change-input-value="changeInputValue"
                @input-losing-focus="inputLosingFocus"
            />
            <AccountModalInput
                title="Nouveau mot de passe : "
                name="newPassword"
                type="password"
                autocomplete="on"
                valuename="newPassword"
                :value="accountInformations.newPassword"
                :errordata="errorDataNewPassword[1]"
                @change-input-value="changeInputValue"
                @input-losing-focus="inputLosingFocus"
            />
            <AccountModalInput
                title="Confirmez le nouveau mot de passe : "
                name="newPasswordConfirmation"
                type="password"
                autocomplete="on"
                valuename="newPasswordConfirmation"
                :value="accountInformations.newPasswordConfirmation"
                :errordata="errorDataNewPassword[2]"
                @change-input-value="changeInputValue"
                @input-losing-focus="inputLosingFocus"
            />
            <input
                class="submit-button"
                type="submit"
                value="Valider le nouveau mot de passe"
                @click="submitLoginForm"
            >
        </form>
    </div>
</template>