<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <router-link class="top-link" :to="{ name: link }">
        {{ title }}
    </router-link>
</template>
