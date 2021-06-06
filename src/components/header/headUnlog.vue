<template>
  <div id="nav">
    <el-row>
      <el-col :span=10 class="left">
        <router-link to="/">
          <img src="../../assets/logo.png" alt="logo">
          <span class="brand-name"> 网上出版系统</span>
        </router-link>
      </el-col>
      <el-col :span=5 :offset=5 class="right">
        <label>
          <input enter-button placeholder="Search..."></input>
        </label>
      </el-col>
      <el-col :span=2 class="right">
        <el-button type="text" @click="register" class="btn">注册</el-button>
      </el-col>
      <el-col :span=2 class="right">
        <el-button type="primary" @click="login" class="btn">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'navBarNonLogin',
  methods: {
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');

.left {
  text-align: left;
  padding: 5px;
}
.right {
  text-align: right;
  padding: 5px;
}

#nav .btn {
  margin-top: 5px;
}
a {
  text-decoration: none;
}
#nav .logo {
  margin-top: 4px;
}
#nav .brand-name {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 23px;
  color: #0090cc;
  margin-top: 4px;
}
#nav {
  border: none;
  padding: 0 5% 0 5%;
  text-align: left;
  box-shadow: 0 0 0 1px lightgray;
  height: 60px;
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
  margin-left: 13px;
  margin-right: 13px;
}
#nav li a {
  display: block;
  text-align: center;
  padding: 15px 20px 15px 20px;
  text-decoration: none;
  color: black;
  width: 50%;
  height: 50%;
}
#nav li a.router-link-exact-active {
  font-weight: 500;
  color: #0090cc;
  border-bottom: solid;
}
#nav img {
  padding: 5px;
  width: 40px;
  height: 40px;
  vertical-align:-20px;
}
#nav span {
  font-size: 17px;
  text-align: center;
}
#nav input {
  font-size: 15px;
  width: 250px;
  height: 16px;
  margin-top: 7px;
  border: 1.5px solid #9c9ea0;
  border-radius: 10px;
  outline: none;
  padding: 10px;
}

</style>