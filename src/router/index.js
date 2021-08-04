import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/messenger',
    name: 'Messenger',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Messenger.vue')
  },
  {
    path: '/levelUp',
    name: 'LevelUp',
    component: () => import('../views/LevelUp.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
