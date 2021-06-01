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
    path: '/guide',
    name: 'Guide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/Guide.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/Register.vue')
  },
  {
    path: '/:username/info',
    name: 'Info',
    component: () => import( '../views/Info.vue'),
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
    component: () => import( '../views/Writing'),
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
    component: () => import( '../views/Welcome.vue')
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import( '../views/Apply.vue')
  },
  {
    path: '/person',
    name: 'Person',
    component: () => import( '../views/Person.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import( '../views/Welcome.vue')
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import( '../views/Apply.vue')
  },
  {
    path: '/register/success',
    name: 'Register-success',
    component: () => import( '../views/Register-success.vue')
  },
  {
    path: '/audit',
    name: 'Audit',
    component: () => import( '../views/Audit.vue'),
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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
