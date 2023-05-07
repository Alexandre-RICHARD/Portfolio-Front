<script setup>
import BreadCrumb from "@parts/BreadCrumb.vue";
import HeaderMenu from "@parts/HeaderMenu.vue";
import HeaderLogo from "@parts/HeaderLogo.vue";
import HeaderLink from "@parts/HeaderLink.vue";
import DownloadIcon from "@svgs/DownloadIcon.vue";
import CurriculumVitae from "@static/pdf/CurriculumVitae.pdf";
import { useMainStore } from "@store/Main";
import { useRouter } from "vue-router";
const router = useRouter();
const MainStore = useMainStore();
const { account, headerLinks, headerModals, modalData } = MainStore;
const { cookieHandler } = require("@middlewares/cookieHandler.js");

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

</script>

<template>
    <header :class="{ hidden: !modalData.headerVisibility }" class="header">
        <!-- LOGO -->
        <router-link class="header-logo" :to="{ name: 'HomePage' }">
            <HeaderLogo />
        </router-link>

        <div />

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
            <!-- LE CV -->
            <a
                :href="CurriculumVitae"
                target="_blank"
                class="resume"
                title="Mon CV à télécharger"
            >
                <DownloadIcon class="resume-download-icon" />
            </a>
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

        <!-- LE MENU LATERAL -->

        <BreadCrumb :visibility="modalData.headerVisibility" />
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
    .account-header-container {
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

    .link-header-container {
        position: relative;
        .menu-nav {
            &:nth-child(2) {
                margin-right: 25px;
            }
        }

        .resume {
            position: absolute;
            display: flex;
            align-items: center;
            width: 18px;
            height: 18px;
            left: 188px;
            top: 12px;
            background-color: transparent;
            border-radius: 7px;
            transition: 100ms;

            .resume-download-icon {
                color: $color14;
                width: 18px;
                height: 18px;
            }

            &:hover {
                border: 1px solid $color14;
                transform: scale(1.2);
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

@media only screen and (min-width: 750px) {
    .header {
        .separator {
            display: flex;
        }
    }
}

// Au dessus de 1100 pixels
@media only screen and (min-width: 1100px) {
    .header {
        .separator {
            display: flex;
            opacity: 0;
        }
    }
}

// Au dessus de 750 pixels
@media only screen and (min-width: 750px) {
    .header {
        .link-header-container,
        .account-header-container {
            display: flex;
        }
    }
}
</style>
