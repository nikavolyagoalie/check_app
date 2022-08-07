import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/',
    name: 'StartView',
    meta: {layout: 'start'},
    component: StartView
  },
  {
    path: '/checks',
    name: 'ChecksView',
    meta: {layout: 'main'},
    component: () => import('@/views/ChecksView.vue')
  },
  {
    path: '/templates',
    name: 'TemplatesView',
    meta: {layout: 'main'},
    component: () => import('@/views/TemplatesView.vue')
  },
  {
    path: '/checkers',
    name: 'CheckersView',
    meta: {layout: 'main'},
    component: () => import('@/views/CheckersView.vue')
  },
  {
    path: '/employers',
    name: 'EmployersView',
    meta: {layout: 'main'},
    component: () => import('@/views/EmployersView.vue')
  },
  {
    path: '/statistics',
    name: 'StatisticsView',
    meta: {layout: 'main'},
    component: () => import('@/views/StatisticsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
