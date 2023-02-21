<script setup>
import AccountModal from "@parts/AccountModal.vue";
import LoadingLogo from "@parts/LoadingLogo.vue";
import ProjectVersionning from "@parts/ProjectVersionning.vue";
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
    <ProjectVersionning />
    <HeaderContainer />
    <main>
        <router-view name="mainRouter" />
    </main>
</template>

<style lang="scss">
@import "@styles/variables.scss";

#app {
    transition: 333ms;
    font-family: $kanit;
    background-color: $color0;
    width: 100%;
    min-width: 200px;
    min-height: 100vh;

    main {
        padding-top: 135px;
    }
}
</style>
