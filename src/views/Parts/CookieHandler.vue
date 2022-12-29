<script setup>
import { useMainStore } from "../../store/Main";
const MainStore = useMainStore();
const { account } = MainStore;
const { cookieHandler } = require("../../middlewares/cookieHandler.js");

cookieHandler.handleVisitCookie(365);
cookieHandler.handleAccountSessionCookie("collect", function(getIt, nickname, mail)  {
    if (getIt) {
        account.connected = true;
        account.nickname = nickname;
        account.mail = mail;
    }
});
</script>

<template>
    <span />
</template>