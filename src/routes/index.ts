import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw
} from "vue-router";

import Layout from "../Layout.vue";

const routes: RouteRecordRaw []= [
  { path: "/login", component: () => import('../page/login/index.vue') },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: '/home',
        component: () => import('../page/home/index.vue')
      }
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
