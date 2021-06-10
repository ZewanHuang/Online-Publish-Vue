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
        path: 'activity',
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
        name: 'Writing-Review',
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
    path: '/:article_id/center',
    name: 'writerArticleCenter',
    component: () => import( '../views/workspace/writerArticleCenter/writerArticleCenter'),
    meta: {
      requireAuth: true,
      requireAuthor: true
    },
    children:[
      {
        path: 'info',
        name: 'Article-Info',
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writerArticleCenter/subpages/info')
      },
      {
        path: 'overview',
        name: 'Article-Review',
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writerArticleCenter/subpages/review')
      },
      {
        path: 'edit',
        name: 'Article-Edit',
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writerArticleCenter/subpages/edit')
      },
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
    path: '/review',
    name: 'Review',
    component: () => import( '../views/workspace/review/review.vue'),
    meta: {
      requireAuth: true,
      requireReview: true,
    },
    children:[
      {
        path: 'overview',
        name: 'Review-Overview',
        component: () => import( '../views/workspace/review/subpages/Overview'),
        meta: {
          requireAuth: true,
          requireReview: true,
        },
      },
      {
        path: 'reviewed',
        name: 'Reviewed',
        component: () => import( '../views/workspace/review/subpages/reviewed'),
        meta: {
          requireAuth: true,
          requireReview: true,
        },
      },
      {
        path: 'to-review',
        name: 'To-Review',
        component: () => import( '../views/workspace/review/subpages/toReview'),
        meta: {
          requireAuth: true,
          requireReview: true,
        },
      }
    ]
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import( '../views/workspace/edit/Editor.vue'),
    children:[
      {
        path: 'reader_manage',
        name: 'reader_manage',
        component: () => import( '../views/workspace/edit/subpage/reader_manage.vue')
      },
      {
        path: 'writer_manage',
        name: 'writer_manage',
        component: () => import( '../views/workspace/edit/subpage/writer_manage.vue')
      },
      {
        path: 'review_manage',
        name: 'review_manage',
        component: () => import( '../views/workspace/edit/subpage/review_manage.vue')
      },
      {
        path: 'published_art',
        name: 'published_art',
        component: () => import( '../views/workspace/edit/subpage/Published_art.vue')
      },
      {
        path: 'toJudge_art',
        name: 'toJudge_art',
        component: () => import( '../views/workspace/edit/subpage/toJudge_art.vue')
      },
      {
        path: 'judged_art',
        name: 'judged_art',
        component: () => import( '../views/workspace/edit/subpage/judged_art.vue')
      },
      {
        path: 'toDeal_art',
        name: 'toDeal_art',
        component: () => import( '../views/workspace/edit/subpage/toDeal_art.vue')
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import( '../views/workspace/edit/subpage/comment.vue')
      },
      {
        path: 'editMessage',
        name: 'editMessage',
        component: () => import( '../views/workspace/edit/subpage/editMessage.vue')
      },
    ]
  },
  {
    path: '/reviewArticleCenter',
    name: 'reviewArticleCenter',
    component: () => import('../views/workspace/reviewArticleCenter/reviewArticleCenter'),
    children:[
      {
        path: 'ReviewEdit',
        name: 'reviewArticleCenter-ReviewEdit',
        component: () => import( '../views/workspace/reviewArticleCenter/subpages/ReviewEdit')
      },
      {
        path: 'AllReview',
        name: 'reviewArticleCenter-AllReview',
        component: () => import( '../views/workspace/reviewArticleCenter/subpages/AllReview')
      },
      {
        path: 'Article',
        name: 'reviewArticleCenter-Article',
        component: () => import( '../views/workspace/reviewArticleCenter/subpages/Article')
      }
    ]
  },
  {
    path: '/*',
    name: 'PageNotFound',
    component: () => import('../views/error/PageNotFound'),
  },
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
