<template>
  <div class="info">
    <div class="portrait"></div>
    <el-container>
      <div class="header">
        <div class="header-bg"></div>
        <div class="header-info">
          <div class="header-info-text">
            <el-row class="username">
              <span>{{username}}</span>
            </el-row>
            <el-row>
              <el-col span="12" class="introduction">个人简介：{{introduction}}</el-col>
              <el-col span="11" class="button">
                <el-button>联系他</el-button>
                <el-button type="primary">编辑个人资料</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </el-container>
    <el-container>
      <div class="info-body">
        <div class="info-body-nav">
          <nav-bar-info></nav-bar-info>
        </div>
        <div class="info-body-content">
          <router-view></router-view>
        </div>
      </div>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "Info",
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
.info {
  height: auto;
}

.info .portrait {
  position: absolute;
  left: 15%;
  top: 15%;
  height: 180px;
  width: 180px;
  box-shadow: 0 0 4px 2px #c9c9c9;
  background: white url("../assets/portrait.png") no-repeat center;
  background-size: 100% 100%;
}

.info .header {
  width: 75%;
  height: auto;
  text-align: center;
  margin: 10px auto;
}

.info .button{
  text-align: right;
  margin-bottom: 10px;
}

.info .introduction{
  text-align: left;
}

.info .header-bg {
  height: 120px;
  background: white url("../assets/shelf.png") no-repeat 400px;
  background-size: 60%;
}

.info .header-info {
  background-color: white;
  border: 2px solid black;
  padding-bottom: 20px;
  height: 100px;
  padding-top: 0;
}

.info .header-info-text {
  padding-top: 10px;
  padding-left: 250px;
  text-align: left;
}

.info .username {
  margin: 0;
  padding: 10px;
  font-size: 30px;
}

.info .introduction{
  padding: 10px;
}

.info .info-body {
  box-sizing: border-box;
  margin: 10px auto 20px;
  background-color: white;
  width: 75%;
  height: auto;
  min-height: 350px;
  text-align: center;
  border: black solid 2px;
}
</style>