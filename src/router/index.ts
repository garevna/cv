import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/Skills.vue'),
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
