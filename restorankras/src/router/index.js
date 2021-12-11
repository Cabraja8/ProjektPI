import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Onama from "../views/Onama.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/o-nama",
    name: "Onama",
    component: Onama,
  },
  {
    path: "/Narudzbe",
    name: "narudzbe",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Narudzbe.vue"),
  },
  {
    path: "/Login",
    name: "Prijavise",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Prijavise.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
