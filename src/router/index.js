import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import DirkPage from '../components/DirkPage.vue'
import AlanaPage from '../components/AlanaPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/dirk', component: DirkPage },
  { path: '/alana', component: AlanaPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
