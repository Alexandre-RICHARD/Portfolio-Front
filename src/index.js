import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/mainRouter.js";
import App from "./components/App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");