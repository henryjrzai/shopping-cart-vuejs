import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: () => import('../views/product/ProductDetail.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart/Index.vue')
    },
    {
      path: "/*",
      component: () => import('../components/NotFound.vue')
    },
  ]
})

export default router
