<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

// Cette fonction est appelée quand le clic est fait sur la Dolorean
// Elle applique les classes animate à deux éléments qui comportent une animation
// A la fin de cette animation, on utilise router.push pour faire revenir l'utilisateur à la page d'accueil
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
