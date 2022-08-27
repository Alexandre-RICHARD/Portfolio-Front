<script setup>
import HeaderTop from "./Parts/HeaderTop.vue";
import ProjectVersionning from "./Parts/ProjectVersionning.vue";
</script>

<template>
    <ProjectVersionning />
    <HeaderTop />
    <router-view name="mainRouter" />
</template>
