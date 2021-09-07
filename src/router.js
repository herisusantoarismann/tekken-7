import { createRouter, createWebHistory } from "vue-router";
import Fighter from "./pages/Fighter.vue";
import Info from "./pages/Info.vue";
import Home from "./pages/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/fighter",
    component: Fighter,
  },
  {
    path: "/info",
    component: Info,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
