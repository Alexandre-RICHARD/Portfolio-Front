<script setup>
import { reactive } from "vue";
import ContactButton from "@parts/ContactButton.vue";
import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { contactList } = MainStore;
const API_URL = process.env.API_URL;

// À l'aide de Reactive, on créé cet objet qui seront affichés en temps réel dès qu'elles changeront
const contactByMailValues = reactive({
    contactFormName: "",
    contactFormMail: "",
    contactFormSubject: "",
    contactFormMessage: "",
});

// Rien n'est fonctionnel dans cet envoi de mail et aucune vérification n'est faite au niveau des valeurs, mais ça viendra un jour
const submitContactForm = (event) => {
    event.preventDefault();
    sendMail();
};

const sendMail = () => {
    try {
        fetch(API_URL + "/contact", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(contactByMailValues),
        });
    } catch (error) {
        console.trace(error);
    }
};
</script>

<template>
    <div class="contact-box">
        <!-- On rentre ici les contacts "pro", filtrés à l'aide de la données section contenu dans notre tableau de contact -->
        <div class="contact-sub-box pro">
            <h2 class="contact-box-title">Contact professionnel</h2>
            <ContactButton
                v-for="contact in contactList.filter(
                    (el) => el.section === 'pro'
                )"
                :key="contact.id"
                :copyid="contact.copyId"
                :type="contact.type"
                :title="contact.title"
                :content="contact.content"
                :section="contact.section"
                :link="contact.link"
            />
        </div>
        <!-- On rentre ici les pseudos "games", filtrés à l'aide de la données section contenu dans notre tableau de contact -->
        <div class="contact-sub-box games">
            <h2 class="contact-box-title">
                J'aime aussi les jeux vidéo
            </h2>
            <ContactButton
                v-for="contact in contactList.filter(
                    (el) => el.section === 'games'
                )"
                :key="contact.id"
                :copyid="contact.copyId"
                :type="contact.type"
                :title="contact.title"
                :content="contact.content"
                :section="contact.section"
            />
        </div>
    </div>
    <div class="contact-me">
        <h1 class="categories">
            Me contacter directement (fonctionnel mais désactiver car pas encore empêcher le spam)
        </h1>
        <form class="contact-me-form">
            <div class="input">
                <label for="contactFormName">Nom : </label>
                <input
                    id="contactFormName"
                    name="contactFormName"
                    type="text"
                    required
                    :value="contactByMailValues.contactFormName"
                    @input="
                        (event) =>
                            (contactByMailValues.contactFormName =
                                event.target.value)
                    "
                >
            </div>

            <div class="input">
                <label for="contactFormMail">Votre adresse mail : </label>
                <input
                    id="contactFormMail"
                    name="contactFormMail"
                    type="email"
                    required
                    :value="contactByMailValues.contactFormMail"
                    @input="
                        (event) =>
                            (contactByMailValues.contactFormMail =
                                event.target.value)
                    "
                >
            </div>

            <div class="input">
                <label for="contactFormSubject">Objet du message : </label>
                <input
                    id="contactFormSubject"
                    name="contactFormSubject"
                    type="text"
                    required
                    :value="contactByMailValues.contactFormSubject"
                    @input="
                        (event) =>
                            (contactByMailValues.contactFormSubject =
                                event.target.value)
                    "
                >
            </div>

            <div class="input">
                <label for="contactFormMessage">Message : </label>
                <textarea
                    id="contactFormMessage"
                    name="contactFormMessage"
                    type="textarea"
                    required
                    :value="contactByMailValues.contactFormMessage"
                    @input="
                        (event) =>
                            (contactByMailValues.contactFormMessage =
                                event.target.value)
                    "
                />
            </div>
            <input
                class="submit-button"
                type="submit"
                value="Envoyer"
                @click="submitContactForm"
            >
        </form>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.contact-box {
    margin: 5px;
    background-color: $color0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .contact-sub-box {
        background-color: $color14;
        padding: 10px;
        border-radius: 8px;
        height: fit-content;
        margin: 30px 0;

        .contact-box-title {
            color: $color0;
            font-weight: 500;
            font-size: 16px;
            margin-bottom: 7px;
        }
    }
}

.contact-me {
    background-color: $color0;
    color: $color14;
    margin: auto;
    height: fit-content;
    margin: 0 5px;
    max-width: 900px;

    &-form {
        background-color: $color0;
        color: $color14;
        display: flex;
        flex-direction: column;
        width: 100%;

        .input {
            background-color: $color0;
            color: $color14;
            width: 100%;
            display: flex;
            flex-direction: column;
            margin: 10px 0;

            label {
                background-color: $color0;
                color: $color14;
                padding: 4px;
            }

            input {
                background-color: $color14;
                color: $color0;
                padding: 4px;
                width: 100%;
            }

            textarea {
                transition: all 0.4s, width 0s, height 0s;
                background-color: $color14;
                color: $color0;
                padding: 4px;
                width: 100%;
                min-height: 50px;
                resize: vertical;
            }
        }
        .submit-button {
            background-color: $color6;
            width: 200px;
            margin: auto;
            font-weight: 500;
            font-size: 20px;
            cursor: pointer;
        }
    }
}

@media only screen and (min-width: 500px) {
    .contact-box {
        .contact-sub-box {
            margin: 30px 10px;
            .contact-box-title {
                font-size: 20px;
            }
        }
    }
    .contact-me {
        padding: 15px;
        margin: 0 auto;
    }
}
</style>
