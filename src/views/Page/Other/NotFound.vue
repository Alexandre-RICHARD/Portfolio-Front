<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const returnOnSite = () => {
    const dolorean = document.querySelector(".dolorean");
    const fire = document.querySelector(".fire");
    dolorean.classList.toggle("animate");
    fire.classList.toggle("animate");
    setTimeout(() => {
        dolorean.classList.toggle("animate");
        fire.classList.toggle("animate");
        router.push({ name: "Home" });
    }, 1250);
};
</script>

<template>
    <div class="page404page">
        <span class="page404title">404</span>
        <p class="page404text">
            Cette partie du site n'existe pas, mais on peut toujours revenir en
            arrière
        </p>
        <img
            class="dolorean"
            alt="Une dolorean de retour vers le futur pour retourner en arrière"
            src="../../../images/Dolorean.png"
            @click="returnOnSite"
        >
        <div class="fire" />
    </div>
</template>
