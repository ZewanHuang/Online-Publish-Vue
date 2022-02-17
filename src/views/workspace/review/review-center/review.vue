<template>
  <div class="audit">
    <el-container>
      <el-aside class="user-msg" style="width: 25%">
        <img class="photo" :src="userinfo.avatar" alt="portrait">
        <el-row style="height: 30px;margin-top: 10px"><span class="username">{{ userinfo.username }}</span></el-row>
        <el-row><span class="real-name">{{ userinfo.real_name }}</span></el-row>
        <el-row><el-button class="button" @click="editInfo">编辑个人信息</el-button></el-row>
      </el-aside>
      <el-main>
        <el-row>
          <div class="nav-son">
            <ul>
              <li><router-link :to="{name: 'Review-Overview'}" >概览</router-link></li>
              <li><router-link :to="{name: 'To-Review'}" >待审核</router-link></li>
              <li><router-link :to="{name: 'Reviewed'}" >已审核</router-link></li>
            </ul>
          </div>
        </el-row>
        <el-row class="main">
          <router-view></router-view>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.audit .el-aside{
  height: 100%;
}
.audit .el-container{
  width: 100%;
  height: auto;
  padding: 30px 50px 50px;
}

.audit .el-main{
  padding: 0;
  margin: 0;
}

.audit .el-aside{
  padding-top: 60px;
}

.audit .photo{
  border-radius: 50%;
  width: 60%;
}

.audit .username{
  height: 50px;
  margin-bottom: 70px;
  font-size: large;
  font-weight: bold;
}
.audit .real-name{
  margin-top: 10px;
  font-size: medium;
  color: #c9c9c9;
}
.audit .user-msg .button{
  margin: 30px;
  width: 150px;
}


.audit .nav-son {
  height: 60px;
  border: none;
  text-align: center;
  box-shadow:0 1px 0 1px lightgray;
}

.audit .nav-son ul{
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.audit .nav-son li {
  float:left;
}

.audit .nav-son li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  width: 70px;
  height: 30px;
}

.audit .nav-son li a.router-link-exact-active {
  font-weight: 900;
  color: #0090cc;
  border-bottom: solid;
}
</style>

<script>
import user from "../../../../store/user";

export default {
  name: "Writing",
  data() {
    return {
      userinfo: {},
    }
  },
  created() {
    const formData = new FormData();
    formData.append("username", user.getters.getUser(user.state()).user.username);
    this.$axios({
      method: 'post',
      url: '/review/',
      data: formData
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.userinfo = JSON.parse(res.data.user);
          break;
        case '4001':
          this.$message.warning('用户未登录');
          break;
        case '4002':
          this.$message.warning('您不是审稿人');
          break;
      }
    })
    .catch(err => {
      this.$router.push({real_name: 'PageNotFound'});
    })
  },
  methods: {
    editInfo() {
      this.$router.push('/edit');
    }
  },
  compute: {

  },
}
</script>
