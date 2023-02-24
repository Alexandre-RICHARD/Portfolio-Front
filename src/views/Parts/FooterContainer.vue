<script setup>
import pjson from "@root/package.json";
</script>

<template>
    <footer class="footer">
        <p>Site designé et créé par Alexandre Richard</p>
        <a
            href="https://github.com/Alexandre-RICHARD/Portfolio-Front"
            target="blank"
        >&gt; Répertoire Github du portfolio &lt;</a>
        <p>Hébergé chez O2 Switch</p>
        <p class="versionning">{{ pjson.version }}</p>
    </footer>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.footer {
    color: $color14;
    font-size: $tiny;
    text-align: center;
    font-weight: 500;
    margin: 20px 0 8px 0;

    a {
        text-decoration: underline;
    }
}
</style>
