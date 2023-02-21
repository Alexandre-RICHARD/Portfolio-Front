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
        background-color: $color0;
        position: absolute;
        top: $header-height;
        left: 0;
        height: 300px;
        width: 100%;
        object-fit: cover;
        opacity: 0.6;
    }

    &-link-access {
        background-color: $color14;
        color: $color0;
        font-weight: 500;
        font-size: 16px;
        padding: 2px 5px;
        border-radius: 5px;
        position: absolute;
        top: calc($header-height + 250px);
        right: 30px;
    }

    &-details {
        background-color: $color0;
        margin-top: 250px;
    }

    &-title {
        background-color: $color0;
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 5px;
        color: $color4;
    }

    &-description {
        background-color: $color0;
        font-size: 18px;
        color: $color14;
        text-align: justify;
    }

    &-features {
        margin: 20px 0 8px 0;
        background-color: $color0;
        font-size: 20px;
        color: $color6;
        text-shadow: 1px 1px 1px $color13;
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    &-list-features {
        background-color: $color0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .feature {
            background-color: $color9;
            padding: 6px;
            border-radius: 5px;
            margin: 6px 0;
            width: 100%;
            text-align: justify;
            color: $color14;

            &::before {
                content: "> ";
                font-weight: 700;
                color: $color6;
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
