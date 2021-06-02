<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/login">登录</router-link>
      </li>
      <li>
        <router-link to="/register">注册</router-link>
      </li>
      <li class="searchbox">
        <input type="text" name="search" placeholder="Search"/>
        <el-button icon="el-icon-search" circle></el-button>
      </li>

      <router-link to="/">
        <img src="../../assets/logo.png" alt="logo">
        <span class="brand-name"> 网上出版系统</span>
      </router-link>


      <router-link to="/help" class="help">Help</router-link>
      <router-link to="/guide" class="help">Guide</router-link>
    </ul>

  </div>
</template>

<script>
import user from "@/store/user";

export default {
  name: 'navBarNonLogin',
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');

a {
  text-decoration: none;
}
#nav .brand-name {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 17px;
  color: #0090cc;
}

#nav .searchbox{
  padding: 8px 10px 3px 10px;
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
  padding: 17px 20px 15px 20px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  width: 50%;
  height: 50%;
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


#nav input {
  font-size: 12px;
  width: 200px;
  height: 10px;
  /* margin: 15px auto;  */
  /* display: flex; */
  border: 1px solid black;
  border-radius: 20px;
  outline: none;
  padding: 10px;
}

.help{
  color: rgb(128, 123, 123);
  margin: 10px;
}


</style>