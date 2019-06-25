import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },
    { path: "*", redirect: "/" }
  ]
});

export default router;
