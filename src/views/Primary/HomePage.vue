<template>
    <div class="home-container">
        <router-link class="home-button" :to="{ name: 'Home' }">
            <img
                class="home-button-icon"
                src="../../assets/icons/home-icon.svg"
            >
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
    background-color: #1f437a;
}

.home-button-icon {
    width: 40px;
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
    background-color: #d4cbcb;
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
