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

<style lang="scss">
@import "@styles/variables.scss";

@import "../Base/variables";

.header-background {
    .header-container {
        .left-header-container {
            .theme-pallet {
                background-color: transparent;
                display: none;
                width: calc($header-theme-choice-size * 2 + 3px);
                animation: rotate-pallet 60s infinite linear;
                gap: 3px;
                flex-flow: row wrap;
                margin: 0 7px;

                .theme-choice-button {
                    animation: rotate-pallet 60s infinite linear reverse;
                }
            }
        }
        .menu-modal {
            .theme-pallet {
                display: flex;
                justify-content: space-around;
                background-color: var(--headerColor);
                padding: 13px;
                border: 1px solid var(--titleColor);
                border-top: none;
            }
        }
    }
}

.theme-pallet {
    .theme-choice-button {
        background-color: transparent;
        color: var(--titleColor);
        width: $header-theme-choice-size;
        height: $header-theme-choice-size;
        border-radius: calc($header-theme-choice-size / 2);
        border: 2px solid var(--titleColor);

        &.classic {
            background: linear-gradient(
                145deg,
                #f25f4c 0%,
                #f25f4c 40%,
                #0f0e17 60%,
                #0f0e17 100%
            );
        }

        &.modern {
            background: linear-gradient(
                145deg,
                #5a8ef0 0%,
                #5a8ef0 40%,
                #16161a 60%,
                #16161a 100%
            );
        }

        &.light {
            background: linear-gradient(
                145deg,
                #ff5470 0%,
                #ff5470 40%,
                #fffffe 60%,
                #fffffe 100%
            );
        }

        &.dark {
            background: linear-gradient(
                145deg,
                #7f5af0 0%,
                #7f5af0 40%,
                #16161a 60%,
                #16161a 100%
            );
        }

        &:hover {
            border-color: var(--backgroundColor);
        }

        &.selected {
            transform: scale(1.1);
            border-color: #d8ba0d;
        }

        @keyframes rotate-pallet {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
}

// Au delà de 820 pixels
@media screen and (min-width: 820px) {
    .header-background {
        .header-container {
            .left-header-container {
                .theme-pallet {
                    display: flex;
                }
            }
        }
    }
}
</style>