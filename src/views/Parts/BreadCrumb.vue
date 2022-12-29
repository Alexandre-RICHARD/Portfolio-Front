<script setup>
import { ref, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import { useMainStore } from "../../store/Main";
const MainStore = useMainStore();
const { projectList } = MainStore;
const route = useRoute();
let matched = reactive([]);
let lastLinkTitle = ref();

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
        switch (param[0]) {
        case "projectName":
            projectList.forEach((element) => {
                if (element.link === param[1]) {
                    lastLinkTitle.value = element.title;
                }
            });
            break;
        default :
            break;
        }
    }
);
</script>

<template>
    <div class="bread-crumb">
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
