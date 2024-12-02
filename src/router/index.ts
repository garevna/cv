import { createRouter, createWebHistory } from 'vue-router'
import Skills from '../views/Skills.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue'),
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: () => import('../views/Reviews.vue'),
    },
  ],
})

export default router
