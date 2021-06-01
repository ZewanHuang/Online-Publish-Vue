<template>
  <div class="writing">
    <el-container>
      <el-aside class="user-msg" style="width: 25%">
        <img class="photo" src="../../assets/portrait.png" alt="portrait">
        <el-row style="height: 30px; margin-top: 10px"><span class="username">Username</span></el-row>
        <el-row><span class="real-name">{{username}}</span></el-row>
        <el-row><el-button class="button">编辑个人信息</el-button></el-row>
      </el-aside>
      <el-main>
        <el-row>
          <div class="nav-son">
            <ul>
              <li><router-link :to="{name: 'Overview'}" >概览</router-link></li>
              <li><router-link :to="{name: 'WriteArticle'}" >文章</router-link></li>
              <li><router-link :to="{name: 'Review'}" >评论</router-link></li>
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

<script>
export default {
  name: "Writing",
  data() {
    return {
      username: "Zuo_zhou",
      introduction: "北航大二学生，软件学院在读",
    }
  },
  methods: {

  },
  compute: {

  },
}
</script>

<style>
.writing .el-aside{
  height: 100%;
}

.writing .el-container{
  width: 100%;
  height: auto;
  padding: 30px 50px 50px;
}

.writing .el-main{
  padding: 0;
  margin: 0;
}

.writing .el-aside{
  padding-top: 60px;
}

.writing .photo{
  border-radius: 50%;
  width: 60%;
}

.writing .username{
  height: 50px;
  margin-bottom: 70px;
  font-size: large;
  font-weight: bold;
}
.writing .real-name{
  margin-top: 10px;
  font-size: medium;
  color: #c9c9c9;
}
.writing .user-msg .button{
  margin: 30px;
  width: 150px;
}

.writing .nav-son {
  height: 60px;
  border: none;
  text-align: center;
  box-shadow:0 1px 0 1px lightgray;
}

.writing .nav-son ul{
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.writing .nav-son li {
  float:left;
}

.writing .nav-son li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  width: 70px;
  height: 30px;
}

.writing .nav-son li a.router-link-exact-active {
  font-weight: 900;
  color: #0090cc;
  border-bottom: solid;
}
</style>
