import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
  
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/home',
    name: 'Home',
 
    component: () => import('../views/Home.vue')
  },
  {
    path: '/technology',
    name: 'Technology',

    component: () => import('../views/Technology.vue')
  },
  {
    path: '/project',
    name: 'project',

    component: () => import('../views/project.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
