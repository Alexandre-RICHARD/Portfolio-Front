<script setup>
import CopyIcon from "@svgs/CopyIcon.vue";
// Cette fonction est appelé lors du clic sur un bouton de contact qui n'est pas un lien direct
// On récupère l'indicateur de copie effectuée identifié grace à son ID unique correspondant à son bouton, on l'affiche, et il possède une animation qu'il effectue avant d'être retiré
// Entre temps, on a récupéré la valeur de notre bouton et on l'a placé dans le presse-papiers
const copy = (content, copyid) => {
    const copyAlert = document.querySelector(`#${copyid}`);
    navigator.clipboard.writeText(content);
    copyAlert.classList.toggle("displayed");
    setTimeout(() => {
        copyAlert.classList.toggle("displayed");
    }, 2000);
};

defineProps({
    copyid: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: false,
        default: "pro",
    },
    link: {
        type: String,
        required: false,
        default: "1",
    },
});
</script>

<template>
    <div class="one-contact-container">
        <img
            class="contact-icon"
            alt="logo représentant le launcher cité"
            :src="require(`@static/images/contactLogo/${copyid}.png`)"
        >
        <a
            v-if="type === 'link'"
            :href="link"
            target="_blank"
            class="contact-title contact-title-link"
        >{{ title }}</a>
        <button
            v-if="type === 'copy'"
            class="contact-title"
            @click="copy(content, copyid)"
        >
            {{ title }}
        </button>
        <CopyIcon class="copy-icon" @click="copy(content, copyid)" />
        <span :id="copyid" class="copy-confirm-alert">Copié !</span>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.one-contact-container {
    background-color: $color1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 15px 20px;
    padding: 6px 10px;
    border-radius: 4px;

    .contact-icon {
        width: 26px;
        height: 26px;
        margin-right: 10px;
    }

    .contact-title {
        font-weight: 400;
        font-size: $large;

        &-link {
            text-underline-offset: 3px;
            text-decoration: underline 2px;

            &:hover {
                font-weight: 500;
            }
        }
    }

    .copy-icon {
        color: $color14;
        margin-left: 8px;
        width: 25px;
        height: 25px;
        cursor: pointer;

        &:hover {
            stroke-width: 1.7;
        }
    }

    .copy-confirm-alert {
        position: absolute;
        top: -15px;
        left: calc(50% - 65px / 2);
        width: 65px;
        text-align: center;
        background-color: $color11;
        padding: 3px 8px;
        border-radius: 4px;
        display: none;

        &.displayed {
            display: block;
            animation: showQuickMessage 2s ease normal;
        }

        @keyframes showQuickMessage {
            0% {
                opacity: 0;
                transform: translateX(-40px);
            }

            20% {
                opacity: 1;
            }

            50% {
                opacity: 1;
                transform: translateX(0px);
            }

            100% {
                opacity: 0;
                transform: translateX(40px);
            }
        }
    }
}
</style>
