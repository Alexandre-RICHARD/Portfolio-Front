<script setup>
import { useGlobalStore } from "../../store/Global";
const GlobalStore = useGlobalStore();
const { modalData } = GlobalStore;

const clickOutsideAccountModal = (event) => {
    if (event.target.className === "account-modal-cache") {
        closingModal();
    }
};

const closingModal = () => {
    console.log("Fermeture de la modal " + modalData.type);
    modalData.open = false;
    modalData.type = null;
};
</script>

<template>
    <div
        v-if="['login', 'register'].indexOf(modalData.type) >= 0"
        class="account-modal-cache"
        @click="clickOutsideAccountModal"
    >
        <div class="account-modal">
            <p>Login ou register</p>
        </div>
    </div>
</template>
