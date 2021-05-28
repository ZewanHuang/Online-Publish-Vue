import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import navBar from './components/Nav.vue'
import navBarInfo from './components/InfoDir/NavInfo.vue'
import newsList from './components/WritingDir/NewsList.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.component("nav-bar", navBar);
Vue.component("nav-bar-info", navBarInfo);
Vue.component("news-list", newsList);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

