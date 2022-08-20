<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
    <div class="bread-crumb">
        <div v-for="partPath in route.matched" :key="partPath.name" class="one-path-box">
            <span class="guillemet">></span>
            <router-link class="link" :to="{ name: partPath.name }">
                {{ partPath.meta.path }}
            </router-link>
        </div>
    </div>
</template>
