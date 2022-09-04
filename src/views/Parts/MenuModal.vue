<script setup>
import PortfolioHeaderLink from "../Parts/PortfolioHeaderLink.vue";

import { usePortfolioStore } from "../../store/Portfolio";
import { useGlobalStore } from "../../store/Global";

const PortfolioStore = usePortfolioStore();
const { headerLinks } = PortfolioStore;

const GlobalStore = useGlobalStore();
const { modalData } = GlobalStore;
</script>

<template>
    <div v-if="modalData.type === 'menu'" class="menu-modal">
        <PortfolioHeaderLink
            v-for="link in headerLinks"
            :key="link.id"
            :type="link.type"
            :title="link.content"
            :link="link.link"
            class="menu-nav-link"
        />
    </div>
</template>
