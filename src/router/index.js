import { createRouter, createWebHistory } from 'vue-router'
import StartView from '@/views/StartView.vue'
import firebase from 'firebase/app'

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'auth'},
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    meta: {layout: 'auth'},
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
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/ChecksView.vue')
  },
  {
    path: '/templates',
    name: 'TemplatesView',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/TemplatesView.vue')
  },
  {
    path: '/checkers',
    name: 'CheckersView',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/CheckersView.vue')
  },
  {
    path: '/employers',
    name: 'EmployersView',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/EmployersView.vue')
  },
  {
    path: '/statistics',
    name: 'StatisticsView',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/StatisticsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  //смотрим вошел ли пользователь в систему
  const currentUser = firebase.auth().currentUser
  //проверка на требование авторизации
  const requireAuth = to.matched.some(record => record.meta.auth)

  //проверка -> если текущий роут требует авторизации и нет пользлвателя в систему то отправляем на страницу логина
  if (requireAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
