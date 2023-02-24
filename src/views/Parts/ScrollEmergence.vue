<script setup>
import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { modalData } = MainStore;

let lastScrollValue = 0;

document.addEventListener("scroll", () => {
    let currentScrollValue = window.scrollY;
    if (currentScrollValue > 200) {
        if (lastScrollValue < currentScrollValue) {
            modalData.headerVisibility = false;
        } else {
            modalData.headerVisibility = true;
        }
        lastScrollValue = currentScrollValue;
    }

    document.querySelectorAll(".appear").forEach((el) => {
        const info = el.getBoundingClientRect();
        if ((info.y || info.top) + 200 < window.innerHeight) {
            el.classList.add("appear-animation");
            el.classList.remove("appear");
        }
    });
});
</script>

<template>
    <div />
</template>

<style lang="scss">
@import "@styles/variables.scss";

.appear {
    opacity: 0;
}

.appear-animation {
    animation: scrollEmergence 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes scrollEmergence {
    0% {
        transform: translateZ(700px) translateY(300px) translateX(-400px);
        opacity: 0;
    }
    100% {
        transform: translateZ(0) translateY(0) translateX(0);
        opacity: 1;
    }
}
</style>
