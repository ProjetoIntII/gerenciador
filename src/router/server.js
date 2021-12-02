import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Login from '../views/Login.vue'
import registrar from '../views/registrar.vue'
import pagamento from '../views/Pagamento.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
  path: '/login',
  name: 'Login',
  component: Login
},
{
path: '/registrar',
  name: 'registrar',
  component: registrar
},
{
path: '/pagamento',
  name: 'pagamento',
  component: pagamento
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
