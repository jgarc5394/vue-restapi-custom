/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/characters/:id',
    name: 'Characters',
    component: () => import('@/views/CharacterDetails.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
