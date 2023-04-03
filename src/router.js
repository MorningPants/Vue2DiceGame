import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Game from './views/Game.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
