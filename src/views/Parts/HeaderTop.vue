<script setup>
import HeaderMenuIcon from "../Parts/HeaderMenuIcon.vue";
import PortfolioHeaderLink from "../Parts/PortfolioHeaderLink.vue";
import { usePortfolioStore } from "../../store/Portfolio";
const PortfolioStore = usePortfolioStore();
const { headerLinks } = PortfolioStore;
const { headerModals } = PortfolioStore;

const accountModal = (test) => {
    console.log("Une modal a été activé : " + test);
};

window.addEventListener("scroll", () => {
    if(window.scrollY >= 1) {
        document.querySelector(".header-container").classList.add("header-container-shrink");
    } else {
        document.querySelector(".header-container").classList.remove("header-container-shrink");
    }
});
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
                @click="accountModal(modal.link)"
            />
        </div>

        <!-- L'icone de menu qui apparait en responsive -->
        <button class="reponsive-header-button" :to="{ name: 'Home' }" @click="accountModal('menuModal')">
            <HeaderMenuIcon class="reponsive-header-icon" />
        </button>
    </header>
</template>
