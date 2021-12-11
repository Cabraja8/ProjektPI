import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Onama from "../views/Onama.vue";
import Narudzbe from "../views/Narudzbe.vue";
import prijavise from "../views/Prijavise.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
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
    component: Narudzbe,
  },
  {
    path: "/Login",
    name: "Prijavise",
    component: prijavise,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
