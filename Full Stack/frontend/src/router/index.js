import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buscador from '../views/Buscador.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buscador',
    name: 'buscador',
    component: Buscador
    // component: () => import(/* webpackChunkName: "about" */ '../views/Buscador.vue')
  },
  {
    path: '/signininge',
    name: 'signininge',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signininge.vue')
  },
  {
    path: '/signinclient',
    name: 'signinclient',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signinclient.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registerservice.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
