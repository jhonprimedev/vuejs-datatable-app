import { createRouter, createWebHistory } from 'vue-router'
import Example1 from '../views/Example-1.vue'

const routes = [
  {
    path: '/',
    name: 'example1',
    component: Example1
  },
  {
    path: '/example-2',
    name: 'example2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Example-2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
