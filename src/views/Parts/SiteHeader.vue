<script setup>
import HeaderLink from "./HeaderLink.vue";
import HeaderMenuIcon from "../SVG/HeaderMenuIcon.vue";
import ThemePallet from "../Parts/ThemePallet.vue";
import { useMainStore } from "../../store/Main";
import { useRouter } from "vue-router";
const router = useRouter();

const MainStore = useMainStore();
const { account, headerLinks, headerModals, modalData } = MainStore;

// Fonction servant à modifier le state contenant les deux données de ModalOuverte et si oui, laquelle.
const handleChangeModal = (open, type) => {
    modalData.open = open;
    modalData.type = type;
};

// Cette fonction sert à détecter le clic hors du menu quand il est ouvert. Ainsi le menu se ferme si on reclique sur son icon, sur l'un de ses liens ou en dehors.
const openAndHandleModalMenu = () => {
    // Elle n'est appelé que lors du clic sur l'icone du Menu affiché que en petite largeur. En fonction des variables en store modalData, cela entraine différents comportements
    const outsideMenuClickHandler = (event) => {
        const menuButton = document.querySelector(".reponsive-header-button");
        const menuModal = document.querySelector(".menu-modal");

        // Si la modal existe, on vérifie l'origine de l'event, si l'élément cliqué n'est ni le bouton ni la modal. Si c'est le cas, alors on ferme la modal
        if (menuModal) {
            if (
                !menuButton.contains(event.target) &&
                !menuModal.contains(event.target)
            ) {
                handleChangeModal(false, null);
                eventListenerHandler(0);
            }
        }
    };

    // Ajout d'event listener sur le document entier afin que tout clic soit testé si appelé avec 1. Sinon, on le retire
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

    // Appelé lors du clic sur l'icone. Si la variable dit que le menu est ouvert, alors on le ferme avec la fonction de changement de modal, handleChangeModal.
    // Sinon, on l'ouvre et on appelle le gestionnaire d'event qui va venir
    if (modalData.type === "menu") {
        handleChangeModal(false, null);
        eventListenerHandler(0);
    } else {
        handleChangeModal(true, "menu");
        eventListenerHandler(1);
    }
};

const disconnect = () => {
    account.connected = false;
    account.nickname = null;
    account.mail = null;
    handleChangeModal(false, null);
    router.push({ name: "Home" });
};
</script>

<template>
    <header class="header-background">
        <div class="header-container">
            <div class="left-header-container">
                <ThemePallet />

                <router-link class="header-logo" :to="{ name: 'Home' }">
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
                    v-for="link in headerLinks"
                    :key="link.id"
                    :type="link.type"
                    :title="link.content"
                    :link="link.link"
                    class="header-nav-link"
                />
            </div>
            <div
                v-if="account.connected === false"
                class="account-header-container"
            >
                <HeaderLink
                    v-for="modal in headerModals"
                    :key="modal.id"
                    :type="modal.type"
                    :title="modal.content"
                    class="header-nav-link"
                    @click="handleChangeModal(true, modal.link)"
                />
            </div>
            <div
                v-if="account.connected === true"
                class="account-header-container"
            >
                <router-link
                    class="header-nav-link"
                    :to="{ name: 'UserProfile' }"
                >
                    {{ account.nickname }}
                </router-link>
                <button class="header-nav-link" @click="disconnect">Déconnexion</button>
            </div>

            <button
                class="reponsive-header-button"
                :to="{ name: 'Home' }"
                @click="openAndHandleModalMenu"
            >
                <HeaderMenuIcon class="reponsive-header-icon" />
            </button>

            <div v-if="modalData.type === 'menu'" class="menu-modal">
                <ThemePallet />
                <HeaderLink
                    type="link"
                    title="&#8617; Retour à l'accueil"
                    link="Home"
                    class="menu-nav-link backHome"
                />
                <HeaderLink
                    v-for="link in headerLinks"
                    :key="link.id"
                    :type="link.type"
                    :title="link.content"
                    :link="link.link"
                    class="menu-nav-link"
                />
            </div>
        </div>
    </header>
</template>
