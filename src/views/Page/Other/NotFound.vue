<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

// Cette fonction est appelée quand le clic est fait sur la Dolorean
// Elle applique les classes animate à deux éléments qui comportent une animation
// A la fin de cette animation, on utilise router.push pour faire revenir l'utilisateur à la page d'accueil
const returnToHome = () => {
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
            src="@static/images/Dolorean.png"
            @click="returnToHome"
        >
        <div class="fire" />
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.page404page {
    background-color: $color0;
    padding: 10px;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    .page404title {
        background-color: $color0;
        font-size: 60px;
        font-weight: 700;
        letter-spacing: 15px;
        color: $color14;
    }
    .page404text {
        background-color: $color0;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 1px;
        color: $color14;
    }

    .dolorean {
        background-color: $color0;
        padding-top: 24vh;
        cursor: pointer;

        &.animate {
            animation: backToTheFutur 1 2.5s ease;
        }
    }

    .fire {
        background-color: $color0;
        margin-left: 57px;
        align-self: flex-start;
        position: relative;
        top: -18px;
        width: 0px;
        height: 15px;
        background: url("@static/images/fire.png") repeat-x left;
        background-size: auto 15px;

        &.animate {
            animation: backToTheFuturFire 1 2.5s ease;
        }
    }

    // Les deux animations, avec des valeurs précises qui correspondent à toutes tailles d'écran
    @keyframes backToTheFutur {
        0% {
        }

        30% {
            transform: translateX(calc(-50vw + 115px));
        }

        100% {
            transform: translateX(245vw);
        }
    }

    @keyframes backToTheFuturFire {
        0% {
            width: 0;
        }

        30% {
            width: 0;
        }

        100% {
            width: 282vw;
        }
    }
}
</style>
