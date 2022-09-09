<script setup>
import HeaderLink from "./HeaderLink.vue";
import HeaderMenuIcon from "../SVG/HeaderMenuIcon.vue";
import { useMainStore } from "../../store/Main";

const MainStore = useMainStore();
const { theme, headerLinks, headerModals, modalData } = MainStore;

const changeTheme = (SelectedTheme) => {
    document
        .querySelectorAll(".theme-choice-button")
        .forEach((element) => element.classList.remove("selected"));
    theme.selected = SelectedTheme;
    document.querySelector(`.${SelectedTheme}`).classList.toggle("selected");
    const root = document.documentElement;
    for (const [variable, value] of Object.entries(theme[theme.selected])) {
        root.style.setProperty(`--${variable}`, value);
    }
};

const sectionChanger = (newSection) => {
    headerLinks.currentSection = newSection;
};

const accountModal = (open, type) => {
    modalData.open = open;
    modalData.type = type;
};

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
            document.removeEventListener(
                "click",
                outsideMenuClickHandler,
                false
            );
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
    <header class="header-background">
        <div class="header-container">
            <div class="left-header-container">
                <div class="theme-pallet">
                    <button
                        class="theme-choice-button classic selected"
                        @click="changeTheme('classic')"
                    />
                    <button
                        class="theme-choice-button modern"
                        @click="changeTheme('modern')"
                    />
                    <button
                        class="theme-choice-button light"
                        @click="changeTheme('light')"
                    />
                    <button
                        class="theme-choice-button dark"
                        @click="changeTheme('dark')"
                    />
                </div>

                <router-link
                    class="header-logo"
                    :to="{ name: 'Home' }"
                    @click="sectionChanger('Home')"
                >
                    <span class="header-logo-bracket">{</span>
                    <div class="header-logo-name">
                        <h1 class="header-logo-firstname">Alexandre</h1>
                        <h1 class="header-logo-lastname">Richard</h1>
                    </div>
                    <span class="header-logo-bracket">}</span>
                </router-link>
            </div>
            <div class="link-header-container">
                <HeaderLink
                    v-for="link in headerLinks[headerLinks.currentSection]"
                    :key="link.id"
                    :type="link.type"
                    :title="link.content"
                    :link="link.link"
                    class="header-nav-link"
                    @click="sectionChanger(link.section)"
                />
            </div>
            <div class="account-header-container">
                <HeaderLink
                    v-for="modal in headerModals"
                    :key="modal.id"
                    :type="modal.type"
                    :title="modal.content"
                    class="header-nav-link"
                    @click="accountModal(true, modal.link)"
                />
            </div>

            <button
                class="reponsive-header-button"
                :to="{ name: 'Home' }"
                @click="openAndHandleModalMenu"
            >
                <HeaderMenuIcon class="reponsive-header-icon" />
            </button>

            <div v-if="modalData.type === 'menu'" class="menu-modal">
                <HeaderLink
                    v-if="headerLinks.currentSection !== 'Home'"
                    type="link"
                    title="Retour à l'accueil"
                    link="Home"
                    class="menu-nav-link"
                    @click="sectionChanger('Home')"
                />
                <HeaderLink
                    v-for="link in headerLinks[headerLinks.currentSection]"
                    :key="link.id"
                    :type="link.type"
                    :title="link.content"
                    :link="link.link"
                    class="menu-nav-link"
                    @click="sectionChanger(link.section)"
                />
            </div>
        </div>
    </header>
</template>
