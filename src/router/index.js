import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/home/HomePage.vue";
import MainPage from "@/main/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/learn",
    name: "Main",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;