<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
let matched = reactive([]);

// On utilise le useRoute pour venir récupérer l'ininéraire de notre URl et venir le recréer en traçant une série de liens cliquables
// On surveille route.watched afin de changer le breadCrumb automatiquement
watch(
    () => route.matched,
    (ourRoute) => {
        matched[0] = ourRoute[ourRoute.length - 1].meta.breadCrumb;
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
                {{ partPath.title }}
            </router-link>
        </div>
    </div>
</template>
