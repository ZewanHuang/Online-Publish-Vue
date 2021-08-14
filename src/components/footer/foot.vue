<template>
  <div id="foot" >
    <el-row>
      <el-col :span=5 class="center font-wrap">
        <router-link to="/">
          <a class="font">Copyright 2021 {{ footUrl }}</a>
        </router-link>
      </el-col>
      <el-col :span=5 class="center font-wrap">
        <router-link to="/about-us" class="font">关于我们</router-link>
      </el-col>
      <el-col :span=4 class="center">
        <router-link to="/" class="center">
          <img class="logo" src="../../assets/logo_foot.png" alt="logo" height="40px" width="40px">
        </router-link>
      </el-col>
      <el-col :span=5 class="center font-wrap">
        <a :href="sendEmail" class="font">联系我们</a>
      </el-col>
      <el-col :span=5 class="center font-wrap">
        <a href="https://beian.miit.gov.cn/" target="_blank" class="font">备案号：{{ beianNo }}</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      footUrl: this.GLOBAL.footerWeb,
      sendEmail: 'mailto:' + this.GLOBAL.email,
      beianNo: this.GLOBAL.beianNo
    }
  },
  methods: {
    contactUs() {
      location.href = 'mailto:' + this.GLOBAL.email;
    }
  }
}
</script>

<style>
.center {
  text-align: center;
}
.font {
  color: gray;
}
#foot {
  padding-left: 5%;
  padding-right: 5%;
  text-align: center;
  font-size: 13px;
  height: 70px;
  box-shadow: 0 0 0 0 lightgray;

  /*background-color: rgba(0, 0, 0, 0);*/
}
#foot .el-col {
  margin-top: 10px;
  height: 40px;
}
.logo {
  margin-bottom: 25px;
}
.font-wrap {
  padding-top: 20px;
}
</style>
