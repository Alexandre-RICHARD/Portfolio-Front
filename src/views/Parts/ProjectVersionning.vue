<script setup>
import pjson from "../../../package.json";
// Simple composant affiché tout en bas à droite servant à afficher la version actuelle du site ainsi que le numéro de build, tout deux récupérés dans le package.json
</script>

<template>
    <p class="versionning">{{ pjson.version }}</p>
</template>
