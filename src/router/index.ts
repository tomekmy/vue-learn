import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      // route level code-splitting
      // this generates a separate chunk (Counter.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CounterView.vue')
    },
    {
      path: '/counterPinia',
      name: 'counterPinia',
      // route level code-splitting
      // this generates a separate chunk (CounterPinia.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CounterPiniaView.vue')
    }
  ]
})

export default router
