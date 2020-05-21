import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Memory from "../views/Memory";
import SlidePuzzle from "../views/SlidePuzzle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Memory",
    name: "Memory",
    component: Memory,
  },
  {
    path: "/SlidePuzzle",
    name: "SlidePuzzle",
    component: SlidePuzzle,
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
