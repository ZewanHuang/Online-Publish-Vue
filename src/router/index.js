import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // 路由拦截
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/register')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login'),
    meta: {
      requireNotAuth: true
    }
  },
  {
    path: '/unverified_email',
    name: 'Verify',
    component: () => import('../views/register/verify'),
    meta: {
      requireAuth: true,
      requireAuthNotConfirmed: true
    }
  },
  {
    path: '/:username/info',
    name: 'UserInfo',
    props: true,
    component: () => import('../views/user/userinfo'),
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import('../views/register/confirm'),
  },
  {
    path: '/*',
    name: 'PageNotFound',
    component: () => import('../views/error/PageNotFound'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
