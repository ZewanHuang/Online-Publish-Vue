<template>
  <div class="login">
    <div>
      <img class="logo-name" src="../../assets/publish_logo.png" alt="logo" @click="handleToHome"/>
    </div>
    <div class="login-wrap">
      <h1 class="title">登录</h1>
      <el-form :model="form" ref="form" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input placeholder="用户名" type="username" v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item id="password" prop="pass">
          <el-input
              placeholder="密码"
              type="password"
              v-model="form.password"
              autocomplete="off"
              @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="login">登 录</el-button>
        </el-form-item>
      </el-form>
      <div class="register-text">
        <p @click="handleCommand">注册帐号</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.logo-name {
  margin-top: 30px;
  width: 300px;
  height: 150px;
  cursor: pointer;
  overflow: hidden;
}
.login {
  width: 100%;
  height: 740px;
  background: url("../../assets/welcome-book.png") no-repeat;
  background-size: cover;
}
.login-wrap {
  width: 350px;
  height: 300px;
  padding: 30px 25px 0 25px;
  line-height: 40px;
  position: relative;
  display: inline-block;
  background-color: rgb(255, 255, 255,0.8);
  border-radius: 20px;
}
h3 {
  color: #0babeab8;
  font-size: 24px;
}
hr {
  background-color: #444;
  margin: 20px auto;
}
a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}
a:hover {
  color: coral;
}
.login-btn {
  margin-top: 25px;
  text-align: center;
}
.login-btn button{
  width:100%;
  height:38px;
}
.register-text {
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}
.title{
  text-align: center;
  margin-top: 0;
}
</style>

<script>
export default {
  name: "login",
  data() {
    return {
      is_login: true,
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const self = this;
      const formData = new FormData();
      formData.append("username", self.form.username);
      formData.append("password", self.form.password);

      self.$axios({
        method: 'post',
        url: '/login/',
        data: formData,
      })
          .then(res => {
            switch (res.data.status_code) {
              case "2000":
                // 前端保存用户信息
                this.$store.dispatch('saveUserInfo', {user: {
                  'username': this.form.username,
                  'confirmed': true,
                  'usertype': res.data.user_type,
                }});
                // 登录成功后自动跳转上一个页面
                // const redirect = this.$route.query.redirect
                // console.log(redirect);
                // if (redirect) {
                //   //如果redirect存在说明当前用户是进入某页面后未登陆自动跳转到登陆页面来的，所以登陆完成后得再次回跳到该地址
                //   this.$router.push(redirect)
                // } else {
                //   this.$router.push('/' + this.form.username + '/info')
                this.$router.go(0);
                // }
                break;
              case "3001":
                this.$message.error('请检查填写的内容！');
                break;
              case "4001":
                this.$message.warning('用户已登录！');
                break;
              case "4002":
                this.$message.error('用户名不存在！');
                break;
              case "4003":
                this.$message.error('用户名或密码错误！');
                break;
              case "4004":
                this.$message.warning('用户未通过邮件确认，请及时确认！');
                this.$store.dispatch('saveUserInfo', {user: {
                  'username': this.form.username,
                  'confirmed': false,
                }});
                break;
            }
          })
          .catch(err => {
            console.log(err);
          })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCommand() {
      this.$router.push("/register");
    },
    handleToHome() {
      this.$router.push('/');
    },
  }
}
</script>
