<template>
  <div id="nav">
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/guide">说明</router-link></li>
        <li><router-link to="/:username/info">个人中心</router-link></li>
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/register">注册</router-link></li>
        <img src="../assets/logo.png"  alt="logo">
        <span>网络出版系统</span>
      </ul>
    </div>
</template>

<script>
	export default {
    name: 'navBar',
  }
</script>

<style>
#nav {
  border: none;
  box-shadow:0 1px 2px 1px lightgray;
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
  font-weight: bold;
  color: #0090cc;
  border-bottom: solid;
}

#nav img {
  margin: 0 0 0 10px;
  padding: 5px;
  width: 50px;
  height: 50px;
  vertical-align:-20px;
}

#nav span {
  font-size: 30px;
  text-align: center;
}
</style>