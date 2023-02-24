<script setup>
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
});
</script>

<template>
    <div class="one-contact-box">
        <a
            v-if="type === 'link'"
            :href="copyid"
            target="_blank"
            class="contact-element"
        >
            <span class="contact-title">{{ title }}</span>
            <span class="contact-content link">{{ content }}</span>
        </a>

        <button
            v-if="type === 'copy'"
            class="contact-element"
            @click="copy(content, copyid)"
        >
            <span class="contact-title">
                <!-- Grosse difficulté surmontée ici de réussir à importer dynamiquement une image depuis l'url SRC de la balise img. En effet, webpack transformait toutes ces images en base64 mais cela ne fonctionnait plus en build -->
                <img
                    v-if="section === 'games'"
                    class="launcher-logo"
                    :src="require(`@static/images/laucherLogo/${copyid}.png`)"
                    alt="logo représentant le launcher cité"
                >
                {{ title }}
            </span>
            <span class="contact-content">{{ content }}</span>
            <div class="copy-icon">
                <!-- Le SVG représentant l'icone de copie. Parti pris de mettre le code du SCG entièrement dans le code -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="{1.5}"
                    stroke="currentColor"
                    className="copy-icon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                    />
                </svg>
            </div>
        </button>
        <span :id="copyid" class="copy-confirm-alert">Copié !</span>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.one-contact-box {
    background-color: transparent;
    position: relative;

    .contact-element {
        background-color: $color111;
        display: flex;
        align-items: stretch;
        height: 35px;
        width: fit-content;
        margin: 10px 0;
        border-radius: 7px;
        border-radius: 8px;
        overflow: hidden;

        .contact-title {
            background-color: $color4;
            color: $color0;
            line-height: 35px;
            text-align: center;
            font-size: 16px;
            padding: 0 4px;
            display: flex;
            align-items: center;

            .launcher-logo {
                background-color: $color4;
                margin-right: 3px;
                height: 20px;
            }
        }

        .contact-content {
            background-color: $color14;
            color: $color0;
            line-height: 35px;
            text-align: center;
            font-size: 15px;
            padding: 0 4px;

            &.link {
                text-underline-offset: 3px;
                text-decoration: underline 1px;
            }
        }

        .copy-icon {
            background-color: $color6;
            color: $color14;
            display: flex;
            align-items: center;
            width: 20px;
            padding: 2px;
        }
    }

    .copy-confirm-alert {
        position: absolute;
        top: -15px;
        left: calc(50% - 65px / 2);
        width: 65px;
        text-align: center;
        background-color: $color6;
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

.pro {
    .one-contact-box {
        .contact-element {
            .contact-title {
                width: 67px;
            }
        }
    }
}

.games {
    .one-contact-box {
        .contact-element {
            .contact-title {
                width: 144px;
            }
        }
    }
}

@media only screen and (min-width: 500px) {
    .one-contact-box {
        .contact-element {
            .contact-title {
                font-size: 18px;

                .launcher-logo {
                    height: 30px;
                }
            }

            .copy-icon {
                width: 30px;
            }
        }
    }

    .pro {
        .one-contact-box {
            .contact-element {
                .contact-title {
                    width: 76px;
                }
            }
        }
    }

    .games {
        .one-contact-box {
            .contact-element {
                .contact-title {
                    width: 168px;
                }
            }
        }
    }
}
</style>
