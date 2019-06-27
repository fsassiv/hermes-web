import Vue from "vue";
import Router from "vue-router";
import AppIndex from "./views/Index.vue";

//Dynamic routes load - Lazy loading
import {
  Company,
  Schedules,
  Rooms,
  SignUps,
  Departments,
  Totem
} from "./CompanyRoutes";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes: [
    {
      path: "/",
      name: "index",
      component: AppIndex
    },
    {
      path: "/company",
      name: "Company",
      component: Company,
      children: [
        {
          path: "schedules",
          name: "Agendamentos",
          component: Schedules,
          meta: {
            icon: "far fa-calendar"
          }
        },
        {
          path: "rooms",
          name: "Salas",
          component: Rooms,
          meta: {
            icon: "fas fa-door-open"
          }
        },
        {
          path: "SignUps",
          name: "Cadastros",
          component: SignUps,
          meta: {
            icon: "far fa-user"
          }
        },
        {
          path: "Departments",
          name: "Departamentos",
          component: Departments,
          meta: {
            icon: "fas fa-cubes"
          }
        },
        {
          path: "Totem",
          name: "Totem",
          component: Totem,
          meta: {
            icon: "fas fa-th-large"
          }
        }
      ]
    },
    { path: "*", redirect: "/" }
  ]
});

//Simulate fetching data for routes
router.beforeEach((to, from, next) => {
  setTimeout(() => {
    next();
  }, 500);
});

export default router;
