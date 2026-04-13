import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";

const pinia = createPinia();

// 새로고침해도 스토어에 담겨진 값이 사라지지 않게 고정하기
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).mount("#app");
