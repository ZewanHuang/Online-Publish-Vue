<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <router-link to="/guide">说明</router-link>
      </li>
      <li>
        <router-link to="/person">个人中心</router-link>
      </li>
      <li>
        <router-link to="/login">登录</router-link>
      </li>
      <li>
        <router-link to="/register">注册</router-link>
      </li>
      <router-link to="/">
        <img src="../../assets/logo.png" alt="logo">
        <span class="brand-name"> 网络出版系统</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
import user from "@/store/user";

export default {
  name: 'navBar',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');

a {
  text-decoration: none;
}
#nav .brand-name {
  font-family: 'Noto Sans TC', sans-serif;
}
#nav {
  border: none;
  box-shadow:0 1px 1px 1px lightgray;
  text-align: left;
}

#nav ul{
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color:white;
}

#nav li {
  float:right;
}

#nav li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  width: 70px;
  height: 30px;
}

#nav li a.router-link-exact-active {
  font-weight: 900;
  color: #0090cc;
  border-bottom: solid;
}

#nav img {
  margin: 0 0 0 10px;
  padding: 5px;
  width: 45px;
  height: 45px;
  vertical-align:-20px;
}

#nav span {
  font-size: 25px;
  text-align: center;
}
</style>

