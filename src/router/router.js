import Vue from "vue";
import Router from "vue-router";
import AppIndex from "../views/Index.vue";

//Dynamic routes load - Lazy loading
import {
  Company,
  CompanyPanel,
  Schedules,
  Rooms,
  SignUps,
  Departments,
  Totem
} from "./CompanyRoutes";

const User = resolve => {
  require.ensure(
    ["../views/user/Index.vue"],
    () => {
      resolve(require("../views/user/Index.vue"));
    },
    "User"
  );
};

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
      redirect: "/company/home",
      component: Company,
      children: [
        {
          path: "home",
          name: "Instituição",
          component: CompanyPanel,
          meta: {
            modalTitle: "Instituição",
            modalComponent: "AppModalNewCompany",
            action: {
              text: "Adicionar Instituição",
              event: "createCompany",
              icon: "plus"
            },
            icon: "far fa-calendar"
          }
        },
        {
          path: "schedules",
          name: "Agendamentos",
          component: Schedules,
          meta: {
            modalTitle: "Criar Agendamento",
            modalComponent: "AppModalNewAppointment",
            action: {
              text: "Novo",
              event: "createAppointment",
              icon: "plus"
            },
            icon: "far fa-calendar"
          }
        },
        {
          path: "rooms",
          name: "Salas",
          component: Rooms,
          meta: {
            modalTitle: "Criar Salas",
            modalComponent: "AppModalNewRoom",
            action: {
              text: "Novo",
              event: "createRoom",
              icon: "plus"
            },
            icon: "fas fa-door-open"
          }
        },
        {
          path: "signUps",
          name: "Cadastros",
          component: SignUps,
          meta: {
            modalTitle: "Novo Cadastro",
            modalComponent: "AppModalNewSignUps",
            action: {
              text: "Novo Cadastro",
              event: "createUser",
              icon: "plus"
            },
            icon: "far fa-user"
          }
        },
        {
          path: "departments",
          name: "Setor",
          component: Departments,
          meta: {
            modalTitle: "Novo Setor",
            modalComponent: "AppModalNewDep",
            action: {
              text: "Cadastrar Setor",
              event: "createDeprt",
              icon: "plus"
            },
            icon: "fas fa-cubes"
          }
        },
        {
          path: "totem",
          name: "Totem",
          component: Totem,
          meta: {
            modalTitle: "Gerenciar Totem",
            modalComponent: "AppModalNewTotem",
            action: {
              text: "Novo",
              event: "createTotem",
              icon: "plus"
            },
            icon: "fas fa-th-large"
          }
        }
      ]
    },
    {
      path: "/user",
      name: "User",
      component: User
    },
    { path: "*", redirect: "/" }
  ]
});

//Simulate fetching data for routes
router.beforeEach((to, from, next) => {
  setTimeout(() => {
    next();
  }, 100);
});

export default router;
