<script setup>
import { reactive } from "vue";
import ContactButton from "../../Parts/ContactButton.vue";
import { useMainStore } from "../../../store/Main";
import { base_Url } from "../../../baseUrl.js";
const MainStore = useMainStore();
const { contactList } = MainStore;

const contactByMailValues = reactive({
    contactFormName: null,
    contactFormMail: null,
    contactFormSubject: null,
    contactFormMessage: null,
});

const submitContactForm = (event) => {
    event.preventDefault();
    sendMail();
};

const sendMail = async () => {
    try {
        await fetch(base_Url.api_url + "/contact", {
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
            />
        </div>
        <div class="contact-sub-box games">
            <h2 class="contact-box-title">
                J'ai dit que j'aimais les jeux vidéos ?
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
        <h1 class="categories">Me contacter directement (non fonctionnel, en attente de réussir à trouver comment faire)</h1>
        <form
            class="contact-me-form"
        >
            <div class="input">
                <label for="contactFormName">Nom : </label>
                <input
                    id="contactFormName"
                    name="contactFormName"
                    type="text"
                    required
                    autocomplete="on"
                    :value="contactByMailValues.contactFormName"
                    @input="
                        (event) =>
                            (contactByMailValues.contactFormName = event.target.value)
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
                    autocomplete="on"
                    :value="contactByMailValues.contactFormMail"
                    @input="
                        (event) =>
                            (contactByMailValues.contactFormMail = event.target.value)
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
                    autocomplete="off"
                    :value="contactByMailValues.contactFormSubject"
                    @input="
                        (event) =>
                            (contactByMailValues.contactFormSubject = event.target.value)
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
                    autocomplete="off"
                    :value="contactByMailValues.contactFormMessage"
                    @input="
                        (event) =>
                            (contactByMailValues.contactFormMessage = event.target.value)
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
