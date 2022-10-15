<script setup>
import { useMainStore } from "../../store/Main";

const MainStore = useMainStore();
const { theme } = MainStore;

// Fonction appelé lorsqu'un bouton de la palette de thème est cliqué.
// On enlève le style "selectionné" sur chaque et on l'applique sur celui qui a été appuyé
// Ensuite, on fait une boucle sur les variables root à partir des données de thème récupéré avec la paramètre SelectedTheme
const changeTheme = (SelectedTheme) => {
    document
        .querySelectorAll(".theme-choice-button")
        .forEach((element) => element.classList.remove("selected"));
    theme.selected = SelectedTheme;
    document
        .querySelectorAll(`.${SelectedTheme}`)
        .forEach((element) => element.classList.toggle("selected"));
    const root = document.documentElement;
    for (const [variable, value] of Object.entries(theme[theme.selected])) {
        root.style.setProperty(`--${variable}`, value);
    }
};
</script>

<template>
    <div class="theme-pallet">
        <button
            class="theme-choice-button classic selected"
            @click="changeTheme('classic')"
        />
        <button
            class="theme-choice-button modern"
            @click="changeTheme('modern')"
        />
        <button
            class="theme-choice-button light"
            @click="changeTheme('light')"
        />
        <button class="theme-choice-button dark" @click="changeTheme('dark')" />
    </div>
</template>
