<script setup>
import HeaderTop from "./Secondary/HeaderTop.vue";
import ProjectVersionning from "./Parts/ProjectVersionning.vue";
</script>

<template>
    <ProjectVersionning />
    <HeaderTop />
    <router-view name="mainRouter" />
</template>
