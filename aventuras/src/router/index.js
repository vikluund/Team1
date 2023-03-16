import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView
    },

    {
      path: '/product',
      name: 'Product',
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/:username',
      name: 'User',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
