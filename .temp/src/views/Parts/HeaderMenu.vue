<script setup>
import HeaderLink from "@parts/HeaderLink.vue";
import { useMainStore } from "@store/Main";
import { useRouter } from "vue-router";
import { ref } from "vue";
import CurriculumVitae from "@static/pdf/CurriculumVitae.pdf";
const MainStore = useMainStore();
const { account, modalData } = MainStore;
const { dataObject: {headerLinks, headerModals}} = require("@middlewares/data.js");
const router = useRouter();
const { cookieHandler } = require("@middlewares/cookieHandler.js");

const openingorClosingMenu = ref(false);
const handleMenuModal = (entryMode) => {
    // Ouverture du menu latéral
    if (entryMode === true) {
        document.addEventListener("click", outsideMenuClickHandler, false);
        modalData.menu = !modalData.menu;
        setTimeout(() => {
            openingorClosingMenu.value = true;
        }, 0);
    }
    // Fermeture du menu latéral
    if (entryMode === false) {
        document.removeEventListener("click", outsideMenuClickHandler, false);
        openingorClosingMenu.value = false;
        setTimeout(() => {
            modalData.menu = !modalData.menu;
        }, 300); //? A calquer sur la variables SCSS $transition-header-menu-duration
    }
};
const outsideMenuClickHandler = (event) => {
    if (event.target.attributes.getNamedItem("menu-closer")) {
        handleMenuModal(false);
    }
};

addEventListener("resize", () => {
    if (modalData.menu === true && window.innerWidth >= 750) {
        handleMenuModal(false);
    }
});

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
    <div>
        <!-- LE BOUTON DU MENU -->
        <button
            href="#"
            class="header-button-menu"
            :class="{
                open: modalData.menu,
                'opening-closing-transition': openingorClosingMenu,
            }"
            @click="handleMenuModal(!modalData.menu)"
        >
            <span />
            <span />
            <span />
        </button>

        <!-- LE MENU LATERAL -->
        <div
            menu-closer
            class="header-menu-blur"
            :class="{
                open: modalData.menu,
                'opening-closing-transition': openingorClosingMenu,
            }"
        >
            <div
                class="header-menu"
                :class="{
                    open: modalData.menu,
                    'opening-closing-transition': openingorClosingMenu,
                }"
            >
                <!-- LINK DE ACCOUNT SI PAS CONNECTE -->
                <div v-if="account.connected === false" class="menu-nav">
                    <HeaderLink
                        v-for="modal in headerModals"
                        :key="modal.id"
                        :type="modal.type"
                        :title="modal.content"
                        class="menu-nav-account"
                        menu-closer
                        @click="handleAccountModal(true, modal.link)"
                    />
                </div>

                <!-- LINK DE ACCOUNT SI CONNECTE -->
                <div v-if="account.connected === true" class="menu-nav">
                    <router-link
                        class="menu-nav menu-nav-account"
                        :to="{ name: 'UserProfile' }"
                        menu-closer
                    >
                        {{ account.nickname }}
                    </router-link>
                    <button class="menu-nav-account" menu-closer @click="disconnect">
                        Déconnexion
                    </button>
                </div>

                <!-- LES 4 LIENS -->
                <div class="menu-nav">
                    <HeaderLink
                        v-for="link in headerLinks"
                        :key="link.id"
                        :type="link.type"
                        :title="link.content"
                        :link="link.link"
                        class="menu-nav-link"
                        menu-closer
                    />
                    <a
                        :href="CurriculumVitae"
                        class="menu-nav-link"
                        target="_blank"
                        menu-closer
                    >Mon CV</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.header-button-menu {
    position: fixed;
    top: 20px;
    right: 9px;
    z-index: $z-index-header-menu-button;
    width: 50px;
    height: 50px;
    border: 1px solid transparent;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 5px;

    span {
        width: 30px;
        height: 4px;
        border-radius: 2px;
        background: $color13;
        pointer-events: none;
        transition: $transition-header-menu-duration;
    }

    &.open {
        border: 1px solid $color13;

        &.opening-closing-transition {
            span {
                &:nth-child(1) {
                    transform: translateY(9px) rotate(-45deg);
                }

                &:nth-child(2) {
                    transform: rotate(-45deg);
                    opacity: 0;
                }

                &:nth-child(3) {
                    transform: translateY(-9px) rotate(-135deg);
                }
            }
        }
    }

    &:hover {
        row-gap: 7px;
        span {
            width: 32px;
            height: 6px;
        }
    }

    &.open.opening-closing-transition:hover {
        span {
            &:nth-child(1) {
                transform: translateY(13px) rotate(-45deg);
            }

            &:nth-child(2) {
                transform: rotate(-45deg);
                opacity: 0;
            }

            &:nth-child(3) {
                transform: translateY(-13px) rotate(-135deg);
            }
        }
    }
}

.header-menu-blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $transparent-white;
    z-index: $z-index-header-menu;
    display: none;
    justify-content: end;
    backdrop-filter: blur(1.2px);
    transition: $transition-header-menu-duration;

    &.open {
        display: flex;
        opacity: 0;

        &.opening-closing-transition {
            opacity: 1;
        }
    }

    .header-menu {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            165deg,
            $color14 0%,
            $color15 23%,
            $color15 62%,
            $color14 100%
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 100px;

        &.open {
            display: flex;
            transform: translateX(320px);

            &.opening-closing-transition {
                transform: translateX(0);
            }
        }

        .menu-nav {
            width: 100%;
            font-weight: 500;
            margin-bottom: 30px;
            letter-spacing: 2px;
            font-size: $extra-large;
            display: flex;
            flex-direction: column;
            align-items: center;

            &-account,
            &-link {
                text-align: center;
                margin: 2px 0;
                padding: 25px 0;
                width: 100%;
                background-color: $color14;
                color: $color8;
            }

            &-link {
                &.router-link-exact-active {
                    text-underline-offset: 3px;
                    text-decoration: underline 3px;
                }

                &:hover {
                    color: $color11;
                }
            }

            &-account {
                width: 80%;
                margin: 10px 0;
                padding: 13px 0;
                border-radius: 15px;

                &:hover {
                    transform: scale(1.08);
                    color: $color11;
                }
            }
        }
    }
}

// Au dessus de 380 pixels
@media only screen and (min-width: 380px) {
    .header-menu-blur {
        .header-menu {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 300px;
            padding-top: 175px;
        }
    }
}

// Au dessus de 750 pixels
@media only screen and (min-width: 750px) {
    .header-button-menu,
    .header-menu-blur {
        display: none;
    }
}

// Au dessus de 380 pixels
@media only screen and (min-width: 380px) {
    .header-button-menu {
        right: 25px;
    }
}
</style>
