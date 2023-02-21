<script setup>
import ProjectContainer from "@parts/ProjectContainer.vue";
// Composant très simple puisqu'il ne fait qu'appeler le sous-composant ProjectContainer en précisant qu'on les veut tous
</script>

<template>
    <ProjectContainer :number="0" />
</template>

<style lang="scss">
@import "@styles/variables.scss";

.detailled-project {
    &-illustration {
        background-color: var(--backgroundColor);
        position: absolute;
        top: $header-height;
        left: 0;
        height: 300px;
        width: 100%;
        object-fit: cover;
        opacity: 0.6;
    }

    &-link-access {
        background-color: var(--titleColor);
        color: var(--backgroundColor);
        font-weight: 500;
        font-size: 16px;
        padding: 2px 5px;
        border-radius: 5px;
        position: absolute;
        top: calc($header-height + 250px);
        right: 30px;
    }

    &-details {
        background-color: var(--backgroundColor);
        margin-top: 250px;
    }

    &-title {
        background-color: var(--backgroundColor);
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 5px;
        color: var(--buttonColorOne);
    }

    &-description {
        background-color: var(--backgroundColor);
        font-size: 18px;
        color: var(--titleColor);
        text-align: justify;
    }

    &-features {
        margin: 20px 0 8px 0;
        background-color: var(--backgroundColor);
        font-size: 20px;
        color: var(--buttonColorTwo);
        text-shadow: 1px 1px 1px var(--textShadowColor);
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    &-list-features {
        background-color: var(--backgroundColor);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .feature {
            background-color: var(--smoothBackgroundColor);
            padding: 6px;
            border-radius: 5px;
            margin: 6px 0;
            width: 100%;
            text-align: justify;
            color: var(--titleColor);

            &::before {
                content: "> ";
                font-weight: 700;
                color: var(--buttonColorTwo);
            }
        }
    }
}

@media only screen and (min-width: 600px) {
    .detailled-project {
        &-list-features {
            .feature {
                width: 47%;
            }
        }
    }
}
</style>
