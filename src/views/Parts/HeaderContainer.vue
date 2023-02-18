<script setup>
import BreadCrumb from "../Parts/BreadCrumb.vue";
import HeaderMenu from "./HeaderMenu.vue";
import HeaderLogo from "./HeaderLogo.vue";
import HeaderLink from "./HeaderLink.vue";
import { ref } from "vue";
import CurriculumVitae from "@static/pdf/CurriculumVitae.pdf";
// import ThemePallet from "../Parts/ThemePallet.vue";
import { useMainStore } from "../../store/Main";
import { useRouter } from "vue-router";
const router = useRouter();
const MainStore = useMainStore();
const { account, headerLinks, headerModals, modalData } = MainStore;
const { cookieHandler } = require("../../middlewares/cookieHandler.js");

const handleAccountModal = (open, type) => {
    modalData.open = open;
    modalData.type = type;
};

const disconnect = () => {
    account.connected = false;
    account.nickname = null;
    account.mail = null;
    handleAccountModal(false, null);
    cookieHandler.handleAccountSessionCookie("erase");
    router.push({ name: "HomePage" });
};

let headerVisibility = ref(true);
let lastScrollValue = 0;

document.addEventListener("scroll", () => {
    let currentScrollValue = window.scrollY;
    if (currentScrollValue > 200) {
        if (lastScrollValue < currentScrollValue) {
            headerVisibility.value = false;
        } else {
            headerVisibility.value = true;
        }
        lastScrollValue = currentScrollValue;
    }
});
</script>

<template>
    <header :class="{ hidden: !headerVisibility }" class="header">
        <!-- LOGO -->
        <router-link class="header-logo" :to="{ name: 'HomePage' }">
            <HeaderLogo />
        </router-link>

        <!-- LES 4 LIENS DANS LE HEADER -->
        <div class="link-header-container">
            <HeaderLink
                v-for="link in headerLinks"
                :key="link.id"
                :type="link.type"
                :title="link.content"
                :link="link.link"
                class="menu-nav"
            />
        </div>

        <span class="separator" />

        <!-- LES ACCOUNT LINK SI PAS CONNECTE -->
        <div
            v-if="account.connected === false"
            class="account-header-container"
        >
            <HeaderLink
                v-for="modal in headerModals"
                :key="modal.id"
                :type="modal.type"
                :title="modal.content"
                class="menu-nav"
                @click="handleAccountModal(true, modal.link)"
            />
        </div>

        <!-- LES ACCOUNT LINK SI CONNECTE -->
        <div v-if="account.connected === true" class="account-header-container">
            <router-link class="menu-nav" :to="{ name: 'UserProfile' }">
                {{ account.nickname }}
            </router-link>
            <button class="menu-nav" @click="disconnect">Déconnexion</button>
        </div>

        <span class="separator" />

        <!-- LE CV -->
        <div class="resume-header-container">
            <a :href="CurriculumVitae" class="menu-nav" target="_blank">Mon CV</a>
        </div>

        <!-- LE MENU LATERAL -->
        
        <BreadCrumb :visibility="headerVisibility" />
    </header>
    <HeaderMenu />
</template>

<style lang="scss">
@import "@styles/variables.scss";

.header {
    width: 100%;
    height: $header-height;
    position: fixed;
    padding: 9px 9px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: $z-index-header;

    &.hidden {
        transform: translateY(-$header-height);
    }

    .link-header-container,
    .account-header-container,
    .resume-header-container {
        display: none;
        justify-content: space-evenly;
        align-items: center;
        margin: 0 4px;

        .menu-nav {
            color: $color14;
            font-weight: 400;
            letter-spacing: 0.2px;
            font-size: $large;
            margin: 0 9px;
            padding: 6px 5px;
            border-radius: 0 0 15px 0;

            &:hover {
                box-shadow: 3px 3px 0px 0px $color14;
            }

            &.router-link-exact-active {
                text-underline-offset: 3px;
                text-decoration: underline 3px;
            }
        }
    }

    .separator {
        display: none;
        border-left: 1px solid $color14;
        height: 70%;
    }
}

// Au dessus de 380 pixels
@media only screen and (min-width: 380px) {
    .header {
        padding: 9px 25px;
    }
}

// Au dessus de 1100 pixels
@media only screen and (min-width: 820px) {
    .header {
        .separator {
            display: flex;
        }
    }
}

@media only screen and (min-width: 1100px) {
    .header {
        .separator {
            display: flex;
            opacity: 0;
        }
    }
}

// Au dessus de 820 pixels
@media only screen and (min-width: 820px) {
    .header {
        .link-header-container,
        .account-header-container,
        .resume-header-container {
            display: flex;
        }
    }
}
</style>
