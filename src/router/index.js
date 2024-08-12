import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/list-transition', component: () => import('../views/ListTransition.vue') },
  { path: '/scroll-animation', component: () => import('../views/ScrollAnimation.vue') },
  { path: '/form-elements', component: () => import('../views/FormElements.vue') },
  { path: '/scroll-offset', component: () => import('../views/ScrollOffset.vue') },
]

const router = createRouter({
  history: createWebHistory('/ui-playground/'),
  routes,
})

export default router;