<script setup>
import AccountModal from "./Parts/AccountModal.vue";
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
        <div class="page-container">
            <router-view name="notFoundRouter" />
            <router-view name="mainRouter" />
        </div>
    </div>
</template>
