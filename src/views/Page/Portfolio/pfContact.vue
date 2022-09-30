<script setup>
import { reactive } from "vue";
import ContactButton from "../../Parts/ContactButton.vue";
import { useMainStore } from "../../../store/Main";
import { base_Url } from "../../../baseUrl.js";
const MainStore = useMainStore();
const { contactList } = MainStore;

const contactByMailValues = reactive({
    name: null,
    mail: null,
    subject: null,
    message: null,
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
            action="mailto:info@w3docs.com"
            method="get"
            enctype="text/plain"
        >
            <div class="input">
                <label for="name">Nom : </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    :value="contactByMailValues.name"
                    @input="
                        (event) =>
                            (contactByMailValues.name = event.target.value)
                    "
                >
            </div>

            <div class="input">
                <label for="mail">Votre adresse mail : </label>
                <input
                    id="mail"
                    name="email"
                    type="email"
                    required
                    :value="contactByMailValues.mail"
                    @input="
                        (event) =>
                            (contactByMailValues.mail = event.target.value)
                    "
                >
            </div>

            <div class="input">
                <label for="subject">Objet du message : </label>
                <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    :value="contactByMailValues.subject"
                    @input="
                        (event) =>
                            (contactByMailValues.subject = event.target.value)
                    "
                >
            </div>

            <div class="input">
                <label for="message">Message : </label>
                <textarea
                    id="message"
                    name="message"
                    type="textarea"
                    required
                    :value="contactByMailValues.message"
                    @input="
                        (event) =>
                            (contactByMailValues.message = event.target.value)
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
