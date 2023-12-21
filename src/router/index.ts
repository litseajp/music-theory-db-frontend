import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/01_views/Home.vue'
import Scales from '@/components/01_views/Scales.vue'
import Scale from '@/components/01_views/Scale.vue'
import Chords from '@/components/01_views/Chords.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/scales',
      children: [
        {
          path: '',
          component: Scales
        },
        {
          path: ':scale',
          component: Scale
        }
      ]
    },
    {
      path: '/chords',
      component: Chords
    },
  ],
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
