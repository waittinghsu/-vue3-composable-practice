// src/router/index.ts
import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Payment from '../views/Payment.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Home,
    meta: { title: "/" , hidden: true },
    redirect: "/payment",
    children: [],
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: "/" },
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    meta: { title: "/" },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router
