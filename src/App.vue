<template>
  <div id="app">
    <nav-bar v-if="is_login"></nav-bar>
    <nav-bar-non-login v-else></nav-bar-non-login>
    <router-view/>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import user from "@/store/user";
import NavBarNonLogin from "@/components/header/headUnlog";

export default {
  components: {NavBarNonLogin},
  data() {
    return {
      is_login: false,
    }
  },
  created() {
    const userInfo = user.getters.getUser(user.state())
    if (userInfo) {
      this.is_login = true
    }
  }
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
