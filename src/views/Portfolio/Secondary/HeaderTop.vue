<script setup>
import topLinks from "../../Parts/PortfolioHeaderLink.vue";
import { usePortfolioStore } from "../../../store/Portfolio";
const PortfolioStore = usePortfolioStore();
const { headerLinks } = PortfolioStore;
</script>

<template>
    <header class="header">
        <div class="nav-list-box">
            <topLinks
                v-for="link in headerLinks"
                :key="link.id"
                :title="link.content"
                :link="link.link"
            />
        </div>
    </header>
</template>
