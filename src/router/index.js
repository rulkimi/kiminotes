import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/list-transition', component: () => import('../views/ListTransition.vue') },
  { path: '/scroll-animation', component: () => import('../views/ScrollAnimation.vue') },
  { path: '/form-elements', component: () => import('../views/FormElements.vue') },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router