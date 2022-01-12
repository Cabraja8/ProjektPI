import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Onama from "@/views/Onama.vue";
import Jelovnik from "@/views/Jelovnik.vue";
import prijavise from "@/views/Prijavise.vue";
import upravljaj from "@/views/Upravljaj.vue";
import store from "@/store.js";

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
    path: "/Jelovnik",
    name: "Jelovnik",
    component: Jelovnik,
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/Upravljaj",
    name: "upravljaj",
    component: upravljaj,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/Login",
    name: "Prijavise",
    component: prijavise,
    meta: {
      needsUser: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const noUser = store.currentUser === null;
  if (noUser && to.meta.needsUser) {
    console.error("Ne dopušta!");
    next("Login");
  } else {
    next();
  }
});

export default router;
