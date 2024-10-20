import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/home/HomePage.vue";
import MainPage from "@/main/MainPage.vue";
import AuthPage from "@/auth/AuthPage.vue";
import AboutUsPage from "@/otherpages/AboutUs.vue";
import ContactPage from "@/otherpages/ContactPage.vue";
import FAQPage from "@/otherpages/FAQPage.vue";

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
  {
    path: "/auth",
    name: "Auth",
    component: AuthPage,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutUsPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;