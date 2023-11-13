import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/01_views/Home.vue'
import Scales from '@/components/01_views/Scales.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/scales',
      component: Scales
    },
  ]
})

export default router
