<script setup>
import { useRoute } from "vue-router";
import { useMainStore } from "../../store/Main";

const route = useRoute();
const MainStore = useMainStore();
const { headerLinks } = MainStore;

// On utilise le useRoute pour venir récupérer l'ininéraire de notre URl et venir le recréer en traçant une série de liens cliquables
//! CHANGE lorsqu'on refera la nav, le breadcrumb y passera
if (route.matched[1]) {
    headerLinks.currentSection = route.matched[1].name;
} else {
    headerLinks.currentSection = "Home";
}

const sectionChanger = (newSection) => {
    headerLinks.currentSection = newSection;
};
</script>

<template>
    <div class="bread-crumb">
        <div
            v-for="partPath in route.matched"
            :key="partPath.name"
            class="one-path-box"
        >
            <span class="guillemet">></span>
            <router-link
                class="link"
                :to="{ name: partPath.name }"
                @click="sectionChanger(partPath.meta.section)"
            >
                {{ partPath.meta.path }}
            </router-link>
        </div>
    </div>
</template>
