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
  {
    name: "OrderDetail",
    path: "/detail",
    component: () => import("@/view/orderDetail"),
  },
  {
    name: "AddOrders",
    path: "/addorders",
    component: () => import("@/view/addOrders"),
  },
  {
    name: "CreateOrders",
    path: "/createorders",
    component: () => import("@/view/createOrders"),
  },
  {
    name: "AdminPanel",
    path: "/menu",
    component: () => import("@/view/adminPanel"),
  },
];
export default createRouter({
  routes,
  history: createWebHashHistory(),
});
