<script setup>
const contactList = [
    {id: 1, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 2, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 3, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 4, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 5, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 6, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 7, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 8, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 9, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 10, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 11, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
    {id: 12, type: "copy", title: "Adresse mail", content: "alexandre.richard.dev@gmail.com"},
];
</script>
    
<template>
    <div class="contact-box">
        <div v-for="contact in contactList" :key="contact.id" class="one-contact-container">
            <a v-if="contact.type === 'link'">{{ contact.title }}</a>
            <button v-else-if="contact.type === 'copy'">{{ contact.title }}</button>
        </div>
    </div>
    
    <div class="contact-me-form">
        <h1 class="categories">Me contacter directement</h1>
    </div>
</template>
    