<script setup>
import AccountModal from "@parts/AccountModal.vue";
import FooterContainer from "@parts/FooterContainer.vue";
import LoadingLogo from "@parts/LoadingLogo.vue";
import ScrollEmergence from "@parts/ScrollEmergence.vue";
import HeaderContainer from "@parts/HeaderContainer.vue";

import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { account, modalData } = MainStore;
const { cookieHandler } = require("@middlewares/cookieHandler.js");

cookieHandler.handleVisitCookie(365);
cookieHandler.handleAccountSessionCookie(
    "collect",
    function (getIt, nickname, mail) {
        if (getIt) {
            account.connected = true;
            account.nickname = nickname;
            account.mail = mail;
        }
    }
);
</script>

<template>
    <AccountModal v-if="modalData.open === true" />
    <LoadingLogo v-if="modalData.loading === true" />
    <ScrollEmergence />
    <HeaderContainer />
    <main>
        <p class="info-temp">Je suis en train de retravailler le design global du site, il est normal que certaines choses ne soient pas encore cohérentes vis-à-vis du reste.</p>
        <router-view name="mainRouter" />
    </main>
    <FooterContainer />
</template>

<style lang="scss">
@import "@styles/variables.scss";

body {
    overflow: hidden;
}
#app {
    position: relative;
    transition: 333ms;
    font-family: $kanit;
    background-color: $color0;
    width: 100%;
    min-width: 200px;
    min-height: 100vh;
    
    main {
        padding: $total-header-height 30px $footer-height 30px;
        margin: auto;
        max-width: 1300px;

        .info-temp {
            width: 100%;
            background-color: #c96b6b;
            color: #000000;
            font-weight: 500;
            font-size: 20px;
            letter-spacing: 0.5px;
            padding: 12px;
        }
        // padding-top: $total-header-height;
        // padding-bottom: $footer-height;
    }
}
</style>
