import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import navBar from './components/header/head.vue'
import navBarInfo from './views/userCenter/subpages/user_center.vue'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import user from "./store/user";
import footnav from"./components/footer/foot";
import News from "./views/userCenter/subpages/activity";

import global_ from "./global/global";//全局变量

Vue.prototype.GLOBAL = global_ //全局变量信息挂载在Vue实例上

Vue.component("foot-nav",footnav);

Vue.use(ElementUI);

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api/'

Vue.component("nav-bar", navBar);
Vue.component("nav-bar-info", navBarInfo);
Vue.component("news", News);

Vue.config.productionTip = false


// 全局路由导航钩子
router.beforeEach((to, from, next) => {
  //此处获取登陆的用户信息，参考 store/index.js and user.js
  const userInfo = user.getters.getUser(user.state())
  // let userInfo = {}
  // this.$axios({
  //   method: 'get',
  //   url: '/get-session/',
  // })
  // .then(res => {
  //     userInfo = JSON.parse(res.data.user);
  //     console.log(userInfo);
  // })
  //     .catch(err=> {
  //       console.log(err);
  //       this.$router.push({name: 'PageNotFound'});
  //     })

  //要求登录后不能访问的页面
  if (userInfo && to.meta.requireNotAuth) {
    next({
      name: 'Home',
    })
  }
  //邮箱验证后不能访问的页面 如再次验证邮箱
  if (userInfo && userInfo.user.confirmed && to.meta.requireAuthNotConfirmed) {
    next({
      name: 'Home',
    })
  }
  //不登录时 或者登录但邮箱没验证时 不能访问 比如在线阅读和下载文章
  // if (!userInfo && to.meta.requireAuth) {
  //   next({
  //     name: 'Login',
  //     query: {
  //       redirect: to.fullPath//当前页面的地址
  //     }
  //   })
  // }

  //登录且身份为作者才能访问
  if ((!userInfo || userInfo.user.usertype === "读者" || userInfo.user.usertype === "审稿人") && to.meta.requireAuthor) {
    next({
      name: 'Home',
    })
  }

  //登录且身份为审稿人才能访问
  if ((!userInfo || userInfo.user.usertype === "读者" || userInfo.user.usertype === "作者") && to.meta.requireReview) {
    next({
      name: 'Home',
    })
  }

  //登录且身份为编辑才能访问
  if ((!userInfo || userInfo.user.usertype !== '编辑') && to.meta.requireEditor) {
    next({
      name: 'Home',
    })
  }

  //其它情况不拦截
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

