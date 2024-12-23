import { createWebHashHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/list-transition', component: () => import('../views/ListTransition.vue') },
  { path: '/scroll-animation', component: () => import('../views/ScrollAnimation.vue') },
  { path: '/form-elements', component: () => import('../views/FormElements.vue') },
  { path: '/scroll-offset', component: () => import('../views/ScrollOffset.vue') },
  { path: '/web-history', component: () => import('../views/WebHistory.vue') },
  { path: '/radial-progress-bar', component: () => import('../views/RadialProgressBarComponent.vue') },
  { path: '/path-aliasing', component: () => import('../views/PathAliasing.vue') },
  { path: '/dax-code', component: () => import('../views/DAXCode.vue') },
  { path: '/tooltip', component: () => import('../views/TooltipComponent.vue') },
  { path: '/glowing-card', component: () => import('../views/GlowingCardComponent.vue') },
  { path: '/accordion', component: () => import('../views/AccordionComponent.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;