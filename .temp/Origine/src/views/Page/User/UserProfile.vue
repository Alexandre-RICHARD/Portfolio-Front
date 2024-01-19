<script setup>
import AccountInput from "@parts/AccountInput.vue";
import { ref, reactive } from "vue";
import { useMainStore } from "@store/Main";
const API_URL = process.env.API_URL;
const MainStore = useMainStore();
const { account, modalData } = MainStore;

const accountInformations = reactive({
    newMail: "",
    newMailConfirmation: "",
    newMailPassword: "",
    oldPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
    deleteAccountPassword: "",
});

let deleteInputDisplayed = ref(false);

let errorDataNewMail = reactive([[], [], [], []]);
let errorDataNewPassword = reactive([[], [], [], []]);
let errorDeleteAccount = reactive([[], []]);

const regexTest = {
    cleanError: () => {
        errorDataNewMail.forEach((element) => {
            element.length = 0;
        });
        errorDataNewPassword.forEach((element) => {
            element.length = 0;
        });
        errorDeleteAccount.forEach((element) => {
            element.length = 0;
        });
    },

    newMail: (mail) => {
        const testGlobal = mail.match(
            /.+@.+\..+/gm
        );
        if (testGlobal === null) {
            errorDataNewMail[0].push(
                "Le format de l'adresse-mail ne correspond pas aux prérequis"
            );
        }

        if (errorDataNewMail[0].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    newMailConfirmation: (mailConfirmation) => {
        if (mailConfirmation !== accountInformations.newMail) {
            errorDataNewMail[1].push("Les adresses ne sont pas identiques");
        }

        if (errorDataNewMail[1].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    newMailPassword: (password) => {
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
            errorDataNewMail[2].push(
                "Le format du mot de passe ne correspond pas aux prérequis"
            );
        }

        if (errorDataNewMail[2].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    oldPassword: (password) => {
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
            errorDataNewPassword[0].push(
                "Le format du mot de passe ne correspond pas aux prérequis"
            );
        }

        if (errorDataNewPassword[0].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    newPassword: (password) => {
        // Même test qu'en login mais les erreurs sont reportées individuellement
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
            errorDataNewPassword[1].push("...contenir au moins 2 minuscules");
        }

        // Majuscule
        const testMax = password.match(/([A-Z])/g);
        if (testMax !== null) {
            testResult.uppercase = testMax.join("").length;
        }
        if (testResult.uppercase < 2) {
            errorDataNewPassword[1].push("...contenir au moins 2 majuscules");
        }

        // Nombre
        const testNum = password.match(/([0-9])/g);
        if (testNum !== null) {
            testResult.numero = testNum.join("").length;
        }
        if (testResult.numero < 2) {
            errorDataNewPassword[1].push("...contenir au moins 2 chiffres");
        }

        // Caractères spéciaux autorisés
        const testSpe = password.match(/([~!@#$%^&*()\-_=+[\]{};:,.<>/?\\|])/g);
        if (testSpe !== null) {
            testResult.special = testSpe.join("").length;
        }
        if (testResult.special < 1) {
            errorDataNewPassword[1].push(
                "...contenir au moins 1 caractère spécial"
            );
        }

        // Espace et autre
        const testSpace = password.match(/[\s\b\n\t]/g);
        if (testSpace !== null) {
            testResult.space = testSpace.join("").length;
        }
        if (testResult.space > 0) {
            errorDataNewPassword[1].push("...être sans espace");
        }

        // Longueur
        testResult.length = password.length;
        if (testResult.length < 8 || testResult.length > 60) {
            errorDataNewPassword[1].push("...faire entre 8 et 60 caractères");
        }

        if (errorDataNewPassword[1].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    newPasswordConfirmation: (newPasswordConfirmation) => {
        if (newPasswordConfirmation !== accountInformations.newPassword) {
            errorDataNewPassword[2].push(
                "Les mots de passe ne sont pas identiques"
            );
        }

        if (errorDataNewPassword[2].length === 0) {
            return true;
        } else {
            return false;
        }
    },

    deleteAccountPassword: (password) => {
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
            errorDeleteAccount[0].push(
                "Le format du mot de passe ne correspond pas aux prérequis"
            );
        }

        if (errorDeleteAccount[0].length === 0) {
            return true;
        } else {
            return false;
        }
    },
};

const submitNewMailForm = (event) => {
    event.preventDefault();
    const newMailData = {
        currentMail: account.mail,
        newMail: accountInformations.newMail,
        newMailConfirmation: accountInformations.newMailConfirmation,
        password: accountInformations.newMailPassword,
    };
    regexTest.cleanError();
    regexTest.newMail(newMailData.newMail);
    regexTest.newMailConfirmation(newMailData.newMailConfirmation);
    regexTest.newMailPassword(newMailData.password);
    if (errorDataNewMail.every((element) => element.length === 0)) {
        sendNewMail(newMailData);
    }
};

const sendNewMail = async (newMailData) => {
    modalData.loading = true;
    try {
        const response = await fetch(API_URL + "/account/change/mail", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(newMailData),
        });
        newMailResult(await response.json(), response.status);
    } catch (error) {
        console.trace(error);
    }
    modalData.loading = false;
};

const newMailResult = (data, status) => {
    data.forEach((element) => {
        switch (element) {
        case "change-mail-success":
            account.mail = data[1].mail;
            break;
        case "format-mail":
            errorDataNewMail[0].push(
                "Le serveur n'accepte pas ce format d'adresse-mail"
            );
            break;
        case "match-mail":
            errorDataNewMail[1].push(
                "Les deux adresses-mail ne correspondent pas"
            );
            break;
        case "format-password":
            errorDataNewMail[2].push(
                "Le serveur n'accepte pas ce format de mot de passe"
            );
            break;
        case "mail-error":
            errorDataNewMail[3].push(
                "Il semble que le compte avec l'adresse-mail actuelle n'ait pas été trouvé"
            );
            break;
        case "account-already-exist":
            errorDataNewMail[3].push(
                "Un compte avec la nouvelle adresse-mail existe déjà"
            );
            break;
        case "wrong-password":
            errorDataNewMail[3].push("Le mot de passe n'est pas correct");
            break;
        }
    });
    if (status === 500) {
        errorDataNewMail[2].push(
            "Une erreur serveur est survenue. Veuillez réessayer"
        );
    }
};

const submitNewPasswordForm = (event) => {
    event.preventDefault();
    const newPasswordData = {
        mail: account.mail,
        oldPassword: accountInformations.oldPassword,
        newPassword: accountInformations.newPassword,
        newPasswordConfirmation: accountInformations.newPasswordConfirmation,
    };
    regexTest.cleanError();
    regexTest.oldPassword(newPasswordData.oldPassword);
    regexTest.newPassword(newPasswordData.newPassword);
    regexTest.newPasswordConfirmation(newPasswordData.newPasswordConfirmation);

    if (errorDataNewPassword.every((element) => element.length === 0)) {
        sendNewPassword(newPasswordData);
    }
};

const sendNewPassword = async (newPasswordData) => {
    modalData.loading = true;
    try {
        const response = await fetch(API_URL + "/account/change/password", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(newPasswordData),
        });
        newPasswordResult(await response.json(), response.status);
    } catch (error) {
        console.trace(error);
    }
    modalData.loading = false;
};

const newPasswordResult = (data, status) => {
    if (data) {
        data.forEach((element) => {
            switch (element) {
            case "change-password-success":
                break;
            case "format-password-one":
                errorDataNewPassword[0].push(
                    "Le serveur n'accepte pas ce format de mot de passe"
                );
                break;
            case "format-password-two":
                errorDataNewPassword[1].push(
                    "Le serveur n'accepte pas ce format de mot de passe"
                );
                break;
            case "match-password":
                errorDataNewPassword[2].push(
                    "Les deux mots de passe ne concordent pas"
                );
                break;
            case "mail-error":
                errorDataNewPassword[3].push(
                    "Il semble que le compte avec l'adresse-mail actuelle n'ait pas été trouvé"
                );
                break;
            case "wrong-password":
                errorDataNewPassword[3].push(
                    "Le mot de passe n'est pas correct"
                );
                break;
            }
        });
    }
    if (status === 500) {
        errorDataNewPassword[2].push(
            "Une erreur serveur est survenue. Veuillez réessayer"
        );
    }
};

const submitDeleteAccount = (event) => {
    event.preventDefault();
    if (!deleteInputDisplayed.value) {
        deleteInputDisplayed.value = true;
    } else {
        const deleteAccountData = {
            mail: account.mail,
            deleteAccountPassword: accountInformations.deleteAccountPassword,
        };
        regexTest.cleanError();
        regexTest.deleteAccountPassword(
            deleteAccountData.deleteAccountPassword
        );

        if (errorDeleteAccount.every((element) => element.length === 0)) {
            sendDeleteAccount(deleteAccountData);
        }
    }
};

const sendDeleteAccount = async (deleteAccountData) => {
    modalData.loading = true;
    try {
        const response = await fetch(API_URL + "/account/delete", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "DELETE",
            body: JSON.stringify(deleteAccountData),
        });
        deleteAccountResult(await response.json(), response.status);
    } catch (error) {
        console.trace(error);
    }
    modalData.loading = false;
};

const deleteAccountResult = (data, status) => {
    if (data) {
        data.forEach((element) => {
            switch (element) {
            case "delete-account-success":
                break;
            case "format-password":
                errorDeleteAccount[0].push(
                    "Le serveur n'accepte pas ce format de mot de passe"
                );
                break;
            case "mail-error":
                errorDeleteAccount[1].push(
                    "Il semble que le compte avec l'adresse-mail actuelle n'ait pas été trouvé"
                );
                break;
            case "wrong-password":
                errorDeleteAccount[1].push(
                    "Le mot de passe n'est pas correct"
                );
                break;
            }
        });
    }
    if (status === 500) {
        errorDataNewPassword[1].push(
            "Une erreur serveur est survenue. Veuillez réessayer"
        );
    }
};

const changeInputValue = (value, valuename) => {
    accountInformations[valuename] = value;
};

// Lors de la perte de focus sur un input, si la valeur de l'input n'est pas null, alors on appelle la fonction test lié à l'input qui renvoi une valeur bool de test. On vient ajouter une classe good ou error qui colorera la bordure de l'input en fonction du test
const inputLosingFocus = (target) => {
    if (accountInformations[target.id].length > 0) {
        regexTest.cleanError();
        const testOk = regexTest[target.id](accountInformations[target.id]);
        if (testOk === true) {
            target.classList.add("good");
            target.classList.remove("error");
        } else {
            target.classList.add("error");
            target.classList.remove("good");
        }
    }
};
</script>

<template>
    <div class="user-profile">
        <p class="account-parameters">Paramètres du compte</p>
        <div class="parameters-container">
            <form class="new-mail-form">
                <div v-if="errorDataNewMail[3].length !== 0" class="error-box">
                    <p class="error">
                        {{ errorDataNewMail[3][0] }}
                    </p>
                </div>
                <AccountInput
                    title="Nouvelle adresse mail : "
                    name="newMail"
                    type="email"
                    autocomplete="email"
                    valuename="newMail"
                    :value="accountInformations.newMail"
                    :errordata="errorDataNewMail[0]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
                <AccountInput
                    title="Confirmez la nouvelle adresse : "
                    name="newMailConfirmation"
                    type="email"
                    autocomplete="email"
                    valuename="newMailConfirmation"
                    :value="accountInformations.newMailConfirmation"
                    :errordata="errorDataNewMail[1]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
                <AccountInput
                    title="Confirmez avec le mot de passe : "
                    name="newMailPassword"
                    type="password"
                    autocomplete="current-password"
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
                    @click="submitNewMailForm"
                >
            </form>
            <form class="new-password-form">
                <div
                    v-if="errorDataNewPassword[3].length !== 0"
                    class="error-box"
                >
                    <p class="error">
                        {{ errorDataNewPassword[3][0] }}
                    </p>
                </div>
                <AccountInput
                    title="Mot de passe actuel : "
                    name="oldPassword"
                    type="password"
                    autocomplete="current-password"
                    valuename="oldPassword"
                    :value="accountInformations.oldPassword"
                    :errordata="errorDataNewPassword[0]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
                <AccountInput
                    title="Nouveau mot de passe : "
                    name="newPassword"
                    type="password"
                    autocomplete="new-password"
                    valuename="newPassword"
                    :value="accountInformations.newPassword"
                    :errordata="errorDataNewPassword[1]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
                <AccountInput
                    title="Confirmez le nouveau mot de passe : "
                    name="newPasswordConfirmation"
                    type="password"
                    autocomplete="new-password"
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
                    @click="submitNewPasswordForm"
                >
            </form>
            <form class="delete-account-form">
                <div
                    v-if="errorDeleteAccount[1].length !== 0"
                    class="error-box"
                >
                    <p class="error">
                        {{ errorDeleteAccount[1][0] }}
                    </p>
                </div>
                <input
                    class="submit-button"
                    type="submit"
                    value="Supprimer le compte"
                    @click="submitDeleteAccount"
                >
                <AccountInput
                    v-if="deleteInputDisplayed"
                    title="Mot de passe pour confirmer la suppression : "
                    name="deleteAccountPassword"
                    type="password"
                    autocomplete="current-password"
                    valuename="deleteAccountPassword"
                    :value="accountInformations.deleteAccountPassword"
                    :errordata="errorDeleteAccount[0]"
                    @change-input-value="changeInputValue"
                    @input-losing-focus="inputLosingFocus"
                />
            </form>
        </div>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.user-profile {

    .account-parameters {
        background-color: $color0;
        color: $color7;
        font-weight: 500;
        font-size: 25px;
        text-align: center;
    }

    .parameters-container {
        background-color: $color0;
        display: flex;
        gap: 50px;
        justify-content: space-between;
        flex-wrap: wrap;
        max-width: 1000px;
        margin: 0 auto;
        padding: 25px;

        .new-mail-form,
        .new-password-form,
        .delete-account-form {
            min-width: 400px;
        }

        .delete-account-form {
            .submit-button {
                z-index: $z-index-two;
            }

            #deleteAccountPassword {
                animation: 0.6s ease-out 1 displayInput;
                z-index: $z-index-one;

                @keyframes displayInput {
                    0% {
                        transform: translateY(-75px) scale(0);
                    }

                    100% {
                        transform: translateY(0px) scale(1);
                    }
                }
            }
        }
    }
}
</style>
