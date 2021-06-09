<template>
  <div id="app">
    <nav-bar v-if="is_login && !$route.meta.showNav"/>
    <nav-bar-non-login v-if="!is_login && !$route.meta.showNav"/>
    
    <div id="v-content" v-bind:style="{minHeight: Height+'px'}">
      <router-view/>
    </div>
    <foot-nav v-if="!$route.meta.showNav"/>
  </div>
</template>

<script>
import user from "./store/user";
import NavBarNonLogin from "./components/header/headUnlog";

export default {
  components: {NavBarNonLogin},
  data() {
    return {
      is_login: false,
      Height: 0,
    }
  },
  created() {
    const userInfo = user.getters.getUser(user.state())
    if (userInfo) {
      this.is_login = true
    }
  },
  mounted(){
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - 100;  
　　//监听浏览器窗口变化　
    window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
