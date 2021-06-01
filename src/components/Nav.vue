<template>
  <div id="nav">
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/guide">说明</router-link></li>
<<<<<<< HEAD
        <li><router-link to="/:username/info">个人中心</router-link></li>
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/register">注册</router-link></li>
        <img src="../assets/logo.png"  alt="logo">
=======
        <li><router-link to="/person">个人中心</router-link></li>
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/register">注册</router-link></li>
        <img src="../assets/logo.png" >
>>>>>>> gr
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
<<<<<<< HEAD
  box-shadow:0 1px 2px 1px lightgray;
=======
  box-shadow:0px 1px 2px 1px lightgray;
>>>>>>> gr
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
<<<<<<< HEAD
  font-weight: bold;
=======
  font-weight: 900;
>>>>>>> gr
  color: #0090cc;
  border-bottom: solid;
}

#nav img {
<<<<<<< HEAD
  margin: 0 0 0 10px;
=======
  margin: 0;
  margin-left: 10px;
>>>>>>> gr
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