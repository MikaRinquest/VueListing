import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/CardsView.vue"),
  },

  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
  },

  {
    path: "/list/:id",
    name: "SingleCardView",
    component: () => import("../views/SingleCardView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
