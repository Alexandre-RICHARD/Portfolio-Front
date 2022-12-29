<script setup>
import AccountModal from "./Parts/AccountModal.vue";
import BreadCrumb from "./Parts/BreadCrumb.vue";
import CookieHandler from "./Parts/CookieHandler.vue";
import ProjectVersionning from "./Parts/ProjectVersionning.vue";
import SiteHeader from "./Parts/SiteHeader.vue";

import { useMainStore } from "./../store/Main";
const MainStore = useMainStore();
const { modalData } = MainStore;
</script>

<template>
    <CookieHandler />
    <AccountModal v-if="modalData.open === true" />
    <ProjectVersionning />
    <SiteHeader />
    <div class="page-background">
        <div class="page-container">
            <BreadCrumb />
            <router-view name="mainRouter" />
        </div>
    </div>
</template>
