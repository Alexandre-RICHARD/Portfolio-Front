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
    position: absolute;
    color: $color14;
    font-size: $small;
    text-align: center;
    font-weight: 500;
    bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        text-decoration: underline;

        &:hover {
            letter-spacing: 0.5px;
        }
    }
}
</style>
