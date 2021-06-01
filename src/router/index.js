import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import( '../views/home/Guide.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue'),
    meta: {
      requireNotAuth: true
    }

  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/register/register.vue')
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
    path: '/confirm',
    name: 'Confirm',
    component: () => import('../views/register/confirm'),
  },
  {
    path: '/:username/info',
    name: 'UserInfo',
    props: true,
    component: () => import( '../views/user/userinfo'),
    children:[
      {
        path: 'article',
        name: 'Article',
        component: () => import( '../components/InfoDir/Article')
      },
      {
        path: 'collection',
        name: 'Collection',
        component: () => import( '../components/InfoDir/Collection')
      },
      {
        path: '',
        name: 'News',
        component: () => import( '../components/InfoDir/News')
      }
    ]
  },
  {
    path: '/writing',
    name: 'Writing',
    component: () => import( '../views/writer/Writing'),
    children:[
      {
        path: 'article',
        name: 'WriteArticle',
        component: () => import( '../components/WritingDir/Article')
      },
      {
        path: 'review',
        name: 'Review',
        component: () => import( '../components/WritingDir/Review')
      },
      {
        path: '',
        name: 'Overview',
        component: () => import( '../components/WritingDir/Overview')
      }
    ]
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import( '../views/home/Welcome.vue')
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import( '../views/user/Apply.vue')
  },
  {
    path: '/register/success',
    name: 'Register-success',
    component: () => import( '../views/register/Register-success.vue')
  },
  {
    path: '/audit',
    name: 'Audit',
    component: () => import( '../views/review/Audit.vue'),
    children:[
      {
        path: '',
        name: 'Overview',
        component: () => import( '../components/Overview')
      },
      {
        path: 'finish-audit',
        name: 'Finish-audit',
        component: () => import( '../components/Finish-audit')
      },
      {
        path: 'to-audit',
        name: 'To-audit',
        component: () => import( '../components/To-audit')
      }
    ]
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
