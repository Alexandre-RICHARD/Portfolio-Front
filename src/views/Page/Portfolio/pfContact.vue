<script setup>
import ContactButton from "../../Parts/ContactButton.vue";
import { useMainStore } from "../../../store/Main";
const MainStore = useMainStore();
const { contactList } = MainStore;
</script>

<template>
    <div class="contact-box">
        <div class="contact-sub-box pro">
            <h2 class="contact-box-title">Contact professionnel</h2>
            <ContactButton
                v-for="contact in contactList.filter(el => el.section === 'pro')"
                :key="contact.id"
                :copyid="contact.copyId"
                :type="contact.type"
                :title="contact.title"
                :content="contact.content"
                :section="contact.section"
            />
        </div>
        <div class="contact-sub-box games">
            <h2 class="contact-box-title">J'ai dit que j'aimais les jeux vidéos ?</h2>
            <ContactButton
                v-for="contact in contactList.filter(el => el.section === 'games')"
                :key="contact.id"
                :copyid="contact.copyId"
                :type="contact.type"
                :title="contact.title"
                :content="contact.content"
                :section="contact.section"
            />
        </div>
    </div>

    <div class="contact-me-form">
        <h1 class="categories">Me contacter directement</h1>
    </div>
</template>
