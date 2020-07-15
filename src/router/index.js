import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@v/login.vue'
import index from '@v/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { 
      alive: true
    }
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/',
    name: 'index',
    redirect: "/index",
    meta: { 
      alive: true
    }
  },
  {
    path: "*",
    redirect: "/404", // 404 page must be placed at the end !!!
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404.vue"),
    meta: {
      title: "404",
      isLogin: false,
      alive: true
    },
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
