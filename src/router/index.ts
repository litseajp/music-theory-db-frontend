import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/01_views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
  ]
})

export default router
