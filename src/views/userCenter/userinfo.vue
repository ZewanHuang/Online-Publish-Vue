<template>
  <div class="info">
    <div class="portrait" ref="AVATAR"></div>
    <el-container>
      <div class="header">
        <div class="header-bg"></div>
        <div class="header-info">
          <div class="header-info-text">
            <el-row class="username">
              <span>{{ userinfo.username }}</span>
            </el-row>
            <el-row>
              <el-col span=12 class="introduction">个人简介：{{ userinfo.description }}</el-col>
              <el-col span=11 class="button">
                <router-link to="/edit" v-if="is_self">
                  <el-button type="primary">编辑个人资料</el-button>
                </router-link>
                <a :href="getEmailUrl()" v-else>
                  <el-button type="primary">联系他</el-button>
                </a>
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
      is_self: false,
      userinfo: {},
    }
  },
  mounted() {

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
        this.userinfo = JSON.parse(res.data.user);
        this.setAvatar();
        switch (res.data.status_code) {
          case '2000':
            this.is_self = false;
            break;
          case '2001':
            this.is_self = true;
            break;
        }
      })
      .catch(err => {
        this.$router.push('PageNotFound');
      })
  },
  methods: {
    setAvatar() {
      this.$refs.AVATAR.style.setProperty("--avatar", "white url(" + this.userinfo.avatar + ") no-repeat center");
    },
    getEmailUrl() {
      return 'mailto:' + this.userinfo.email
    }
  },
}
</script>

<style>
a {
  text-decoration: none;
}
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

.info .portrait {
  position: absolute;
  left: 15%;
  top: 11%;
  height: 200px;
  width: 200px;
  border: solid 3px lightgray;
  border-radius: 30px;

  --avatar: white url('../../assets/portrait.png') no-repeat center;
  background: var(--avatar);
  background-size: 100% 100%;
}

.info .header-bg {
  height: 110px;
  background: white url("../../assets/shelf.png") no-repeat 400px;
  background-size: 60%;
}

.info .header-info {
  background-color: white;
  border: none;
  box-shadow: 0 0 5px 0 #646464;
  padding-bottom: 20px;
  height: 100px;
  padding-top: 0;
}

.info .header-info-text {
  padding-top: 10px;
  padding-left: 270px;
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
  border: none;
  box-shadow: 0 0 5px 0 #646464;
}
</style>