<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const returnonSite = () => {
    setTimeout(() => {
        console.log("hihi");
        router.push({ name: "Home" });
    }, 2000);
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
            @click="returnonSite"
        >
        <div class="fire" />
    </div>
</template>
