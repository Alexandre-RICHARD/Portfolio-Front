<script setup>
import AccountModal from "./Parts/AccountModal.vue";
import BreadCrumb from "./Parts/BreadCrumb.vue";
import ProjectVersionning from "./Parts/ProjectVersionning.vue";
import SiteHeader from "./Parts/SiteHeader.vue";
// import WaveDecoration from "./Parts/WaveDecoration.vue";

import { useMainStore } from "./../store/Main";
const MainStore = useMainStore();
const { modalData } = MainStore;
</script>

<template>
    <AccountModal v-if="modalData.open === true" />
    <ProjectVersionning />
    <SiteHeader />
    <!-- <WaveDecoration class="wave-decoration" /> -->
    <div class="page-background">
        <router-view name="notFoundRouter" />
        <div class="page-container">
            <BreadCrumb />
            <router-view name="mainRouter" />
            <router-view name="portfolioRouter" />
            <router-view name="tryhardRouter" />
        </div>
    </div>
</template>
