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

<style>
.home-container {
    background-color: #232946;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.home-button {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.home-icon {
    transform: scale(0.8);
}

#home-icon-path {
    fill: #ffffff;
}

.home-button-title {
    font-size: 40px;
    font-weight: 500;
    font-style: italic;
    color: #ffffff;
}

.FirstNavTop {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.FirstNavTop-link {
    background-color: #b8c1ec;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
    white-space: pre-line;
    font-weight: 500;
    font-size: 20px;
}

@media screen and (min-width: 600px) {
    .FirstNavTop {
        flex-direction: row;
    }

    .FirstNavTop-link-box {
        margin: 8%;
    }
}
</style>
