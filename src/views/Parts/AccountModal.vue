<script setup>
import { useMainStore } from "../../store/Main";
const MainStore = useMainStore();
const { modalData } = MainStore;

const clickOutsideAccountModal = (event) => {
    if (event.target.className === "account-modal-cache") {
        closingModal();
    }
};

const closingModal = () => {
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
