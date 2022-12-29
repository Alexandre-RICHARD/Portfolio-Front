<script setup>
import { ref } from "vue";
const { data } = require("../../../middlewares/satisfactoryData.js");

const isAddRessorcesOpen = ref(false);
</script>

<template>
    <div class="addRessorcesMenu">
        <input class="searchInput" placeholder="Chercher ou sélectionner une ressources" @click="isAddRessorcesOpen = !isAddRessorcesOpen">
        <ul class="menu" :class="{ 'menu-open': isAddRessorcesOpen }">
            <li v-for="resources in data.resources" :key="resources.id">
                {{ resources.frenchName }}
            </li>
        </ul>
    </div>
</template>


<style>
.menu {
  display: none;
}

.menu-open .menu {
  display: block;
}
</style>