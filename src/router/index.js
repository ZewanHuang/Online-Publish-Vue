import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import( '../views/home/Welcome.vue'),
    meta: {
      requireNotAuth: true,
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import( '../views/home/Guide.vue')
  },
  {
    path: '/article/:aid',
    name: 'article:aid',
    props: true,
    component: () => import( '../views/reader/article')
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
    name: 'userinfo_edit',
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
        props: true,
        component: () => import( '../views/userCenter/subpages/article')
      },
      {
        path: 'collection',
        name: 'Collection',
        props: true,
        component: () => import( '../views/userCenter/subpages/collection')
      },
      {
        path: 'activity',
        name: 'News',
        props: true,
        component: () => import( '../views/userCenter/subpages/activity')
      }
    ]
  },
  {
    path: '/writing',
    name: 'Writing',
    component: () => import( '../views/workspace/writer/writer-center/writer'),
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
        component: () => import( '../views/workspace/writer/writer-center/subpages/Article')
      },
      {
        path: 'review',
        name: 'Writing-Review',
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writer/writer-center/subpages/Review')
      },
      {
        path: 'overview',
        name: 'Writer-Overview',
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writer/writer-center/subpages/Overview')
      }
    ]
  },
  {
    path: '/new-article',
    name: 'newArticle',
    component: () => import('../views/workspace/writer/new-article/new-article'),
    meta: {
      requireAuth: true,
      requireAuthor: true,
    },
    children: [
      {
        path: 'edit',
        name: 'Article-info',
        meta: {
          requireAuth: true,
          requireAuthor: true,
        },
        component: () => import('../views/workspace/writer/new-article/new-article')
      },
    ]
  },
  {
    path: '/article/center/:aid',
    name: 'writerArticleCenter',
    props: true,
    component: () => import( '../views/workspace/writer/writerArticleCenter/writerArticleCenter'),
    meta: {
      requireAuth: true,
      requireAuthor: true
    },
    children:[
      {
        path: 'info',
        name: 'Article-Info',
        props: true,
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writer/writerArticleCenter/subpages/info')
      },
      {
        path: 'overview',
        name: 'Article-Review',
        props: true,
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writer/writerArticleCenter/subpages/review')
      },
      {
        path: 'edit',
        name: 'Article-Edit',
        props: true,
        meta: {
          requireAuth: true,
          requireAuthor: true
        },
        component: () => import( '../views/workspace/writer/writerArticleCenter/subpages/edit')
      },
    ]
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import( '../views/user/Apply.vue')
  },
  {
    path: '/review',
    name: 'Review',
    component: () => import( '../views/workspace/review/review-center/review.vue'),
    meta: {
      requireAuth: true,
      requireReview: true,
    },
    children:[
      {
        path: 'overview',
        name: 'Review-Overview',
        component: () => import( '../views/workspace/review/review-center/subpages/Overview'),
        meta: {
          requireAuth: true,
          requireReview: true,
        },
      },
      {
        path: 'reviewed',
        name: 'Reviewed',
        component: () => import( '../views/workspace/review/review-center/subpages/reviewed'),
        meta: {
          requireAuth: true,
          requireReview: true,
        },
      },
      {
        path: 'to-review',
        name: 'To-Review',
        component: () => import( '../views/workspace/review/review-center/subpages/toReview'),
        meta: {
          requireAuth: true,
          requireReview: true,
        },
      }
    ]
  },
  {
    path: '/message',
    name: 'Message',
    meta: {
      requireAuth: true,
    },
    component: () => import('../views/message'),
  },
  {
    path: '/editor',
    name: 'Editor',
    meta: {
      requireAuth: true,
      requireEditor: true,
    },
    component: () => import( '../views/workspace/editor/Editor.vue'),
    children:[
      {
        path: 'article/:aid',
        name: 'article',
        props: true,
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import('../views/workspace/editor/subpage/remark/comment/comment')
      },
      {
        path: 'article_category',
        name: 'article_category',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import('../views/workspace/editor/subpage/category')
      },
      {
        path: 'reader_manage',
        name: 'reader_manage',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/user/reader_manage.vue')
      },
      {
        path: 'writer_manage',
        name: 'writer_manage',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/user/writer_manage.vue')
      },
      {
        path: 'review_manage',
        name: 'review_manage',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/user/review_manage.vue')
      },
      {
        path: 'published_art',
        name: 'published_art',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/article/Published_art.vue')
      },
      {
        path: 'toJudge_art',
        name: 'toJudge_art',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/article/toJudge_art.vue'),
      },
      {
        path: 'judged_art',
        name: 'judged_art',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/article/judged_art.vue')
      },
      {
        path: 'toDeal_art',
        name: 'toDeal_art',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/article/toDeal_art.vue')
      },
      {
        path: 'comment_undo',
        name: 'comment_undo',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/remark/comment_undo.vue')
      },
      {
        path: 'comment_done',
        name: 'comment_done',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/remark/comment_done.vue')
      },
      {
        path: 'editMessage',
        name: 'editMessage',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/editMessage.vue')
      },
      {
        path: 'information',
        name: 'information',
        meta: {
          requireAuth: true,
          requireEditor: true,
        },
        component: () => import( '../views/workspace/editor/subpage/information.vue')
      },
    ]
  },
  {
    path: '/review/center/:rid',
    name: 'reviewArticleCenter',
    props: true,
    meta: {
      requireAuth: true,
      requireReview: true,
    },
    component: () => import('../views/workspace/review/reviewArticleCenter/reviewArticleCenter'),

    children:[
      {
        path: 'ReviewEdit',
        name: 'reviewArticleCenter-ReviewEdit',
        meta: {
          requireAuth: true,
          requireReview: true,
        },
        props: true,
        component: () => import( '../views/workspace/review/reviewArticleCenter/subpages/ReviewEdit'),
      },
      {
        path: 'AllReview',
        name: 'reviewArticleCenter-AllReview',
        meta: {
          requireAuth: true,
          requireReview: true,
        },
        props: true,
        component: () => import( '../views/workspace/review/reviewArticleCenter/subpages/AllReview'),
      },
      {
        path: 'article',
        name: 'reviewArticleCenter-Article',
        meta: {
          requireAuth: true,
          requireReview: true,
        },
        props: true,
        component: () => import( '../views/workspace/review/reviewArticleCenter/subpages/Article'),
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
