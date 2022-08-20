<script setup>
import BreadCrumb from "../Parts/BreadCrumb.vue";
</script>

<template>
    <div class="page-container">
        <BreadCrumb />
        <router-view name="portfolioRouter" />
        <router-view name="tryHardSlowRunRouter" />
    </div>
</template>
