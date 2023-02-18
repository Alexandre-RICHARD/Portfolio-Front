<script setup>
import pjson from "@root/package.json";
</script>

<template>
    <p class="versionning">{{ pjson.version }}</p>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.versionning {
    z-index: $z-index-versionning;
    background-color: $color0;
    color: $color14;
    font-size: $tiny;
    padding: 3px;
    position: fixed;
    bottom: 0;
    right: 0;
}
</style>
