import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Yama from "@/components/Yama.vue";
import Hell from "@/components/Hell.vue";
import YanWangDian from "@/components/阎王殿.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    props: true,
    children: [
      {
        path: "yama",
        name: "Yama",
        component: Yama,
        children: [
          {
            path: "YanWangDian",
            name: "YanWangDian",
            component: YanWangDian,
            props($route) {
              return {
                id: $route.query.id,
                name: $route.query.name,
                run: $route.query.run,
              };
            },
          },
        ],
      },
      {
        path: "hell",
        name: "Hell",
        component: Hell,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
