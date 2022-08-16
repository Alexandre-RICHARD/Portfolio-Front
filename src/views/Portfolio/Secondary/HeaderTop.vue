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

<style>
.header {
    height: 100px;
    width: 100%;
}

.nav-list-box {
    height: 100px;
    width: 100%;
    background-color: #2e2b27;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
}
</style>
