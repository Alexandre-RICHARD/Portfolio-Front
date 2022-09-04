<script setup>
import AccountModal from "../Parts/AccountModal.vue";
import BreadCrumb from "../Parts/BreadCrumb.vue";

import { useGlobalStore } from "../../store/Global";
const GlobalStore = useGlobalStore();
const { modalData } = GlobalStore;
</script>

<template>
    <AccountModal v-if="modalData.open === true" />
    <div class="page-background">
        <main class="page-container">
            <BreadCrumb />
            <router-view name="portfolioRouter" />
            <router-view name="tryHardSlowRunRouter" />
        </main>
    </div>
</template>
