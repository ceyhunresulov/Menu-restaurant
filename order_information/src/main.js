import { createApp } from "vue";
import App from "./App.vue";
import appHeader from "@/components/appHeader";
import "@/assets/css/main.css";
import router from "./router";

const app = createApp(App);
app.component("appHeader", appHeader);
app.use(router);

app.mount("#app");
