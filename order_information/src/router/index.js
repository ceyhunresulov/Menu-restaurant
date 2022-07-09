import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/view/homePage"),
  },
  {
    name: "Orders",
    path: "/orders",
    component: () => import("@/view/ordersPage"),
  },
];
export default createRouter({
  routes,
  history: createWebHashHistory(),
});
