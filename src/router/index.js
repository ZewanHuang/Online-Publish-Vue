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
      requireNotAuth: true,
      showNav: true,
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/register/register.vue'),
    meta: {
      showNav: true,
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
    path: '/confirm',
    name: 'Confirm',
    component: () => import('../views/register/confirm'),
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/user/edit'),
  },
  {
    path: '/:username/info',
    name: 'UserInfo',
    props: true,
    component: () => import( '../views/userCenter/userinfo'),
    children:[
      {
        path: 'article',
        name: 'Article',
        component: () => import( '../views/userCenter/subpages/article')
      },
      {
        path: 'collection',
        name: 'Collection',
        component: () => import( '../views/userCenter/subpages/collection')
      },
      {
        path: '',
        name: 'News',
        component: () => import( '../views/userCenter/subpages/activity')
      }
    ]
  },
  {
    path: '/writing',
    name: 'Writing',
    component: () => import( '../views/workspace/writer/writer'),
    meta: {
      requireAuth: true,
      requireAuthor: true
    },
    children:[
      {
        path: 'Article',
        name: 'WriteArticle',
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writer/subpages/Article')
      },
      {
        path: 'review',
        name: 'Review',
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writer/subpages/Review')
      },
      {
        path: 'overview',
        name: 'Writer-Overview',
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writer/subpages/Overview')
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
    path: '/review',
    name: 'Review',
    component: () => import( '../views/workspace/review/review.vue'),
    children:[
      {
        path: 'overview',
        name: 'Review-Overview',
        component: () => import( '../views/workspace/review/subpages/Overview')
      },
      {
        path: 'reviewed',
        name: 'Reviewed',
        component: () => import( '../views/workspace/review/subpages/reviewed')
      },
      {
        path: 'to-review',
        name: 'To-Review',
        component: () => import( '../views/workspace/review/subpages/toReview')
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
