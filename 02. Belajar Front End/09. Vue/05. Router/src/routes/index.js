import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'),
    meta: {showHeader: true}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue'),
    meta: {showHeader: false}
  },
  {
    path: '/products/:id',
    name: 'Products',
    component: () => import('../views/product.vue'),
    meta: {showHeader: true}
  },
  {
    path: '/:catchall(.*)*',
    name: 'Page not found',
    component: () => import('../views/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;