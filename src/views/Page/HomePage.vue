<script setup>
import BreadCrumb from "../Parts/BreadCrumb.vue";
</script>

<template>
    <BreadCrumb />
    <router-view name="portfolioRouter" />
    <router-view name="tryhardRouter" />
</template>
