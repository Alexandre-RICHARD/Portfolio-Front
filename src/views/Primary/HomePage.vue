<script setup>
import BreadCrumb from "../Parts/BreadCrumb.vue";
</script>

<template>
    <div class="page-background">
        <main class="page-container">
            <BreadCrumb />
            <router-view name="portfolioRouter" />
            <router-view name="tryHardSlowRunRouter" />
        </main>
    </div>
</template>
