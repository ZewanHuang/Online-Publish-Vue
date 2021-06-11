<template>
  <div id="nav">
    <el-menu class="el-menu-demo" mode="horizontal">
      <router-link to="/">
        <img src="../../assets/logo.png" alt="logo">
      </router-link>
      <label>
        <input type="text" name="search" placeholder="Search or jump to…"/>
      </label>
<!--      <router-link to="/help" class="help">Help</router-link>-->
      <el-submenu index="1">
        <template slot="title" id="mine">个人中心</template>
        <el-menu-item index="1-1" @click="myhome">我的主页</el-menu-item>
        <el-menu-item index="1-4" @click="setting">设置</el-menu-item>
        <el-menu-item index="1-5" @click="logout">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item index="2" @click="workspace">工作空间</el-menu-item>
      <el-menu-item index="3" @click="message">消息</el-menu-item>
      <el-menu-item index="4" @click="guide">引导</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import user from "../../store/user";

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
                this.$message.success('退出成功！');
                setTimeout(()=> {
                  location.reload();
                }, 1500);
                // 登出成功后清空前端存储内容，并自动跳转 /login
                this.$store.dispatch('clear');
                break;
              case "4001":
                this.$message.error("用户未登录！");
                break;
            }
          })
          .catch(err => {
            console.log(err);
          })
    },
    setting(){
      window.location.href="/setting";
    },
    myhome(){
      window.location.href="/" + this.username + "/info/collection";
    },
    message(){
      window.location.href="/message";
    },
    guide() {

    },
    workspace(){
      const userInfo = user.getters.getUser(user.state())
      switch (userInfo.user.usertype) {
        case '审稿人':
          window.location.href="/review/overview";
          break;
        case '作者':
          window.location.href="/writing/overview";
          break;
        case '编辑':
          window.location.href="/editor/information";
          break;
        default:
          this.$message.warning("请到个人中心申请成为作者！");
          break;
      }
    },
  }
}
</script>

<style>
#nav .el-submenu__title {
  font-size: 15px;
}
#nav .el-menu-item {
  font-size: 15px;
}
#mine{
  position: absolute;
  right:10%;
}
.help{
  color: rgb(128, 123, 123);
  margin: 25px;
}
img {
  margin-right: 8px;
}
#nav .el-menu.el-menu--horizontal {
  border-bottom: solid 0 #e6e6e6;
}
</style>