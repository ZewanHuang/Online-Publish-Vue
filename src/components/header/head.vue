<template>
  <div id="nava">
    <el-menu class="el-menu-demo" mode="horizontal">
<!--      <router-link to="/">-->
        <img src="../../assets/banner1.png" alt="banner" @click="toHome" class="cursor">
<!--      </router-link>-->
      <el-submenu index="1">
        <template slot="title" id="mine">个人中心</template>
        <el-menu-item index="1-1" @click="myhome">我的主页</el-menu-item>
        <el-menu-item index="1-4" @click="setting">设置</el-menu-item>
        <el-menu-item index="1-5" @click="logout">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item index="2" @click="workspace">
        工作空间
      </el-menu-item>
      <el-menu-item index="3" @click="message">
        消息
        <el-badge :value="msgCount" class="item" v-if="msgCount!==0">
        </el-badge>
      </el-menu-item>

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
      msgCount: 0,
      username: user.getters.getUser(user.state()).user.username
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/message/getUnread/',
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.msgCount = res.data.msgCount;
          break;
        case '4001':
          this.$message.warning('请先登录！');
          break;
        case '4002':
          this.$message.error('未查询到此用户！');
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    toHome() {
      window.location.href = '/';
    },
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
              window.location.href = '/';
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
      this.$router.push('/setting');
    },
    myhome(){
      this.$router.push("/" + this.username + "/info/collection");
    },
    message(){
      this.$router.push('/message');
    },
    guide() {

    },
    workspace(){
      const userInfo = user.getters.getUser(user.state())
      switch (userInfo.user.usertype) {
        case '审稿人':
          this.$router.push("/review/overview");
          break;
        case '作者':
          this.$router.push("/writing/overview");
          break;
        case '编辑':
          this.$router.push("/editor/information");
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
#nava {
  padding: 0 5% 0 5%;
}
#nava .cursor {
  cursor: pointer;
}
#nava .item {
  /*margin-top: 10px;*/
  /*margin-right: 40px;*/
}
#nava .font {
  color: #007dff;
}
#nava .el-submenu__title {
  float: right;
  font-size: 15px;
}
#nava .el-submenu{
  float: right;
}
#nava .el-menu-item {
  float: right;
  font-size: 15px;
  width: 100px;
}
#nava img{
  float: left;
  margin-top: 2px;
  padding: 5px;
  width: 250px;
  height: 50px;
}
#mine{
  position: absolute;
  right:10%;
}
#nava .el-menu.el-menu--horizontal {
  border-bottom: solid 0 #e6e6e6;
}
</style>