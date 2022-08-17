<script setup>
import HeaderMenuIcon from "../Parts/HeaderMenuIcon.vue";
import LoginIcon from "../Parts/LoginIcon.vue";
import RegisterIcon from "../Parts/RegisterIcon.vue";
import topLinks from "../Parts/PortfolioHeaderLink.vue";
import { usePortfolioStore } from "../../store/Portfolio";
const PortfolioStore = usePortfolioStore();
const { headerLinks } = PortfolioStore;
</script>

<template>
    <header class="header-container">
        <div class="header-logo">
            <router-link class="header-fullname" :to="{ name: 'Home' }">
                <h1 class="header-fullname-bracket">{</h1>
                <div class="header-fullname-name">
                    <h1 class="header-fullname-firstname">Alexandre</h1>
                    <h1 class="header-fullname-lastname">Richard</h1>
                </div>
                <h1 class="header-fullname-bracket">}</h1>
            </router-link>
        </div>

        <div class="header-sub-container">
            <topLinks
                v-for="link in headerLinks"
                :key="link.id"
                :title="link.content"
                :link="link.link"
                class="header-link"
            />
        </div>
        <div class="header-sub-container">
            <router-link :to="{ name: 'Home' }">
                <p class="header-link">Se connecter</p>
            </router-link>
            <router-link :to="{ name: 'Home' }">
                <p class="header-link">S'inscrire</p>
            </router-link>
        </div>

        <div class="responsive-icon-link">
            <router-link class="reponsive-header-button" :to="{ name: 'Home' }">
                <HeaderMenuIcon class="reponsive-header-icon" />
            </router-link>

            <router-link class="reponsive-header-button" :to="{ name: 'Home' }">
                <LoginIcon class="reponsive-header-icon" />
            </router-link>

            <router-link class="reponsive-header-button" :to="{ name: 'Home' }">
                <RegisterIcon class="reponsive-header-icon" />
            </router-link>
        </div>
    </header>
</template>
