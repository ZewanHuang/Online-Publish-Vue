<template>
  <div id="nav">
    <ul>
      <li>
        <el-button @click="logout">退出登录</el-button>
      </li>
      <li>
        <router-link :to=getUrl()>个人中心</router-link>
      </li>
      <li>
        <router-link to="/workspace">工作空间</router-link>
      </li>
      <li>
        <router-link to="/message">消息</router-link>
      </li>

      <router-link to="/">
        <img src="../../assets/logo.png" alt="logo">
      </router-link>
      <input type="text" name="search" placeholder="Search or jump to…"/>
      <el-button icon="el-icon-search" circle></el-button>

      <router-link to="/help" class="help">Help</router-link>
      <router-link to="/guide" class="help">Guide</router-link>
    </ul>

    
  </div>
</template>

<script>
import user from "@/store/user";

export default {
  name: 'navBar',
  data() {
    return {
      username: user.getters.getUser(user.state()).user.username
    }
  },
  methods: {
    getUrl() {
      return {
        path: '/' + this.username + '/info'
      }
    },
    logout() {
      const self = this;
      self.$axios({
        method: 'GET',
        url: '/logout/',
        data: {}
      })
          .then(res => {
            switch (res.data.status_code) {
              case "2000":
                alert("登出成功！");
                // 登出成功后清空前端存储内容，并自动跳转 /login
                this.$store.dispatch('clear');
                this.$router.push('/login');
                break;
              case "4001":
                alert("用户未登录！");
                break;
            }
          })
          .catch(err => {
            console.log(err);
          })
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');

a {
  text-decoration: none;
}
#nav .brand-name {
  font-family: "Times New Roman", Times, serif;;
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
  padding: 17px 16px 3px 16px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  width: 80px;
  height: 35px;
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


#nav input {
  font-size: 12px;
  width: 200px;    
  height: 10px;        
  /* margin: px auto;  */
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