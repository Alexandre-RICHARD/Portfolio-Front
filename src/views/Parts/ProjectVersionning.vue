<script setup>
const pjson = require("../../../package.json");
</script>

<template>
    <p class="versionning">{{ pjson.version }}</p>
</template>
