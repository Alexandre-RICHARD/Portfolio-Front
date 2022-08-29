<script setup>
import { useGlobalStore } from "../../store/Global";
const GlobalStore = useGlobalStore();
const { modalData } = GlobalStore;

const clickOutsideModal = (event) => {
    console.log(event.target.getAttribute("class"));
    if (event.target.getAttribute("class") === "modal-cache") {
        console.log("Censé se fermer maintenant");
        modalData.open = false;
        modalData.type = null;
    }
};

</script>

<template>
    <div class="modal-cache" @click="clickOutsideModal">
        <div class="modal">
            <p class="content">UN ENCADRE</p>
        </div>
    </div>
</template>