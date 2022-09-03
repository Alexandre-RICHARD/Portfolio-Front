<script setup>
import HeaderMenuIcon from "../Parts/HeaderMenuIcon.vue";
import PortfolioHeaderLink from "../Parts/PortfolioHeaderLink.vue";
import MenuModal from "../Parts/MenuModal.vue";

import { usePortfolioStore } from "../../store/Portfolio";
import { useGlobalStore } from "../../store/Global";

const PortfolioStore = usePortfolioStore();
const { headerLinks, headerModals } = PortfolioStore;

const GlobalStore = useGlobalStore();
const { modalData } = GlobalStore;

const accountModal = (open, type) => {
    modalData.open = open;
    modalData.type = type;
};

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1) {
        document
            .querySelector(".header-container")
            .classList.add("header-container-shrink");
    } else {
        document
            .querySelector(".header-container")
            .classList.remove("header-container-shrink");
    }
});

const openAndHandleModalMenu = () => {
    const outsideMenuClickHandler = (event) => {
        const menuButton = document.querySelector(".reponsive-header-button");
        const menuModal = document.querySelector(".menu-modal");

        if (menuModal) {
            if (
                !menuButton.contains(event.target) &&
                !menuModal.contains(event.target)
            ) {
                accountModal(false, null);
                eventListenerHandler(0);
            }
        }
    };

    const eventListenerHandler = (type) => {
        if (type === 1) {
            document.addEventListener("click", outsideMenuClickHandler, false);
        } else if (type === 0) {
            document.removeEventListener("click", outsideMenuClickHandler, false);
        }
    };

    if (modalData.type === "menu") {
        accountModal(false, null);
        eventListenerHandler(0);
    } else {
        accountModal(true, "menu");
        eventListenerHandler(1);
    }
};
</script>

<template>
    <header class="header-container">
        <!-- Zone avec le nom -->
        <router-link class="header-logo" :to="{ name: 'Home' }">
            <span class="header-logo-bracket">{</span>
            <div class="header-logo-name">
                <h1 class="header-logo-firstname">Alexandre</h1>
                <h1 class="header-logo-lastname">Richard</h1>
            </div>
            <span class="header-logo-bracket">}</span>
        </router-link>

        <!-- Zone avec les différents liens de navigation -->
        <div class="header-nav-container responsive-hide-700">
            <PortfolioHeaderLink
                v-for="link in headerLinks"
                :key="link.id"
                :type="link.type"
                :title="link.content"
                :link="link.link"
                class="header-nav header-nav-link"
            />
        </div>
        <div class="header-nav-container login-register-button">
            <PortfolioHeaderLink
                v-for="modal in headerModals"
                :key="modal.id"
                :type="modal.type"
                :title="modal.content"
                class="header-nav header-nav-modal"
                @click="accountModal(true, modal.link)"
            />
        </div>

        <!-- L'icone de menu qui apparait en responsive -->
        <button
            class="reponsive-header-button"
            :to="{ name: 'Home' }"
            @click="openAndHandleModalMenu"
        >
            <HeaderMenuIcon class="reponsive-header-icon" />
        </button>

        <MenuModal />
    </header>
</template>
