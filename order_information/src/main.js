import { createApp } from "vue";
import App from "./App.vue";
import appHeader from "@/components/appHeader";
import "@/assets/css/main.css";
import router from "./router/index";
import { appAxios } from "@/utils/appAxios";
import store from "./store";

const app = createApp(App);
app.component("appHeader", appHeader);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;

app.mount("#app");
