<script setup>
import { ref, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { useMainStore } from "@store/Main";
const MainStore = useMainStore();
const { projectList } = MainStore;
const route = useRoute();
let matched = reactive([]);
let lastLinkTitle = ref();

defineProps({
    visibility: {
        type: Boolean,
        required: true,
    },
});

// On utilise le useRoute pour venir récupérer l'ininéraire de notre URl et venir le recréer en traçant une série de liens cliquables
// On surveille route.watched afin de changer le breadCrumb automatiquement
watch(
    () => route.matched,
    (ourRoute) => {
        matched[0] = ourRoute[ourRoute.length - 1].meta.breadCrumb;
    }
);

watch(
    () => route.params,
    (params) => {
        const param = Object.entries(params)[0];
        if (Object.entries(params).length > 0) {
            switch (param[0]) {
            case "projectName":
                projectList.forEach((element) => {
                    if (element.link === param[1]) {
                        lastLinkTitle.value = element.title;
                    }
                });
                break;
            default:
                break;
            }
        }
    }
);

const breadCrumbData = reactive([]);

watch(
    () => route.matched,
    (ourRoute) => {
        for (let i = 0; i < ourRoute.length; i++) {
            console.log(ourRoute[i].path.split("/"));
            console.log(ourRoute[i].path);
            console.log(ourRoute[i].meta);
            breadCrumbData.map(element => {
            });
        }
        matched[0] = ourRoute[ourRoute.length - 1].meta.breadCrumb;
    }
);

</script>

<template>
    <div class="bread-crumb" :class="{ hidden: !visibility }">
        <div
            v-for="partPath in matched[0]"
            :key="partPath.name"
            class="one-path-box"
        >
            <span class="guillemet">></span>
            <router-link class="link" :to="{ name: partPath.link }">
                {{ !partPath.params ? partPath.title : lastLinkTitle }}
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.bread-crumb {
    position: absolute;
    top: $header-height;
    left: 10px;
    background-color: $color12;
    color: $color8;
    width: fit-content;
    border-radius: 25px;
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    z-index: $z-index-bread-crumb;
    transform: translateY(0) translateX(0);
    opacity: 1;

    &.hidden {
        transform: translateX(-250px);
        opacity: 0;
    }

    .one-path-box {
        .guillemet {
            font-size: $medium;
            font-weight: 400;
        }

        .link {
            padding: 0 8px;
            font-size: $medium;
            font-weight: 300;

            &:hover {
                text-underline-offset: 3px;
                text-decoration: underline 2px;
            }
        }
    }
}
</style>
