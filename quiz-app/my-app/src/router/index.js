//define our rounting rules //

import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";
import QuizDetails from "../views/QuizDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.Base_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViewVue,
    },
    {
      path: "/quiz/:id",
      name: "details",
      component: QuizDetails,
    },
  ],
});

export default router;
