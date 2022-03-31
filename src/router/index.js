import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// import Layout from '@/layout'
import Login from '@/views/login/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    rediect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
    // component: Layout,
    // children: [{
    //   path: 'login',
    //   name: 'login',
    //   component: Login
    // }]
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
    // component: Layout,
    // children: [{
    //   path: 'home',
    //   name: 'home',
    //   component: Home
    // }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = localStorage.getItem('Authorization')
    if (token === null || token === '') {
      next('/login')
    } else {
      next()
    }
  }
})
export default router
