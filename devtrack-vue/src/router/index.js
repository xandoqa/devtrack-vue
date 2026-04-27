import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Studies from '../views/Studies.vue'
import Projects from '../views/Projects.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/studies', component: Studies },
  { path: '/projects', component: Projects }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
