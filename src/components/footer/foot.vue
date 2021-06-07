<template>
  <div id="foot" >
    <el-menu class="el-menu-demo" mode="horizontal" >
      <p class="copyright">Copyright 2021 zewan.top</p>
      <router-link to="/team" class="team">团队</router-link>
      <router-link to="/aboutus" class="aboutus">关于我们</router-link>
      <router-link to="/">
        <img class="logo" src="../../assets/logo_foot.png" alt="logo" height="40px" width="40px">
      </router-link>
      <p><a href="https://beian.miit.gov.cn/" target="_blank" class="beian">备案号：粤ICP备2021021248号-1</a></p>
      <router-link to="/contactus" class="contactus">联系我们</router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'navBar',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
  .copyright{
    text-align: center;
    float: left;
    font-size: 12px;
    padding: 10px;
  }

  .team{
    position: absolute;
    left: 12%;
    text-align: center;
    float: left;
    font-size: 12px;
    padding: 20px;
    margin-left: 10%;
    color: black;
  }
  .aboutus{
    position: absolute;
    left: 30%;
    text-align: center;
    float: left;
    font-size: 12px;
    padding: 20px;
    margin-left: 4%;
    color: black;
  }
  img.logo{
    position: absolute;
    left: 50%;
    float: left;
    margin-left: 0;
    margin-top: 8px;
  }
  .beian{
    position: absolute;
    right: 0;
    text-align: center;
    float: right;
    font-size: 12px;
    padding-top: 5px;
    margin-right: 4%;
    color: black;
  }
  .contactus{
    position: absolute;
    right: 30%;
    text-align: center;
    float:right;
    font-size: 12px;
    padding-top: 5px;
    margin-right: 4%;
    color: black;
  }

  #foot{
    margin-top: 50px;
    bottom: 0;
  }
</style>
