<script setup>
defineProps({
    type: {
        type: String,
        required: true,
    },
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
    <router-link v-if="type === 'link'" :to="{ name: link }">
        {{ title }}
    </router-link>
    <button v-else-if="type === 'modal'" @click="link">
        {{ title }}
    </button>
</template>
