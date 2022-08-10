import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import PastOrders from "../views/PastOrders.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/past-orders",
    name: "PastOrders",
    component: PastOrders,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
