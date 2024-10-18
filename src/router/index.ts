import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'project',
      component:() => import('@/views/ProjectView.vue') 
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('@/views/SignUp.vue')
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: () => import('@/views/SignIn.vue')
    }
  ]
})

export default router
