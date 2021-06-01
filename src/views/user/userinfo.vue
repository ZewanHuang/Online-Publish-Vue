<template>
  <div class="info">
    <div class="portrait"></div>
    <el-container>
      <div class="header">
        <div class="header-bg"></div>
        <div class="header-info">
          <div class="header-info-text">
            <el-row class="username">
              <span>{{ userinfo.username }}</span>
            </el-row>
            <el-row>
              <el-col span="12" class="introduction">个人简介：{{ userinfo.description }}</el-col>
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
          <nav-bar-info/>
        </div>
        <div class="info-body-content">
          <router-view/>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: ['username'],
  data() {
    return {
      userinfo: {},
    }
  },
  created() {
    const formData = new FormData();
    formData.append("username", this.username);
    this.$axios({
      method: 'post',
      url: '/userinfo/',
      data: formData
    })
      .then(res => {
        if (res.data.status_code === '2000') {
          this.userinfo = JSON.parse(res.data.user);
        }
      })
      .catch(err => {
        this.$router.push({name: 'PageNotFound'});
      })
  },
  methods: {

  },
}
</script>

<style vars="{ avatar }">
.info {
  height: auto;
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
  background: white url("../../assets/shelf.png") no-repeat 400px;
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