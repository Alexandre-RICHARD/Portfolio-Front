<script setup>
import homeIcon from "../Parts/homeIcon.vue";
</script>

<template>
    <div class="home-container">
        <router-link class="home-button" :to="{ name: 'Home' }">
            <homeIcon class="home-icon" />
            <h1 class="home-button-title">
                Alexandre Richard
            </h1>
        </router-link>
        <div class="FirstNavTop primary-container">
            <router-link class="FirstNavTop-link" :to="{ name: 'Portfolio' }">
                Portfolio
            </router-link>
            <router-link
                class="FirstNavTop-link"
                :to="{ name: 'TryHardSlowRunHome' }"
            >
                Try Hard but Slow Run
            </router-link>
        </div>
    </div>
</template>
