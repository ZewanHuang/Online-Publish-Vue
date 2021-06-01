<template>
  <div class="login">
    <div class="form">
      <el-form :model="form" ref="form" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名">
          <el-input type="username" v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

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
                alert('登录成功！');
                // 前端保存用户信息
                this.$store.dispatch('saveUserInfo', {user: {
                  'username': this.form.username,
                  'confirmed': true,
                }});
                // 登录成功后自动跳转上一个页面
                // const redirect = this.$route.query.redirect
                // console.log(redirect);
                // if (redirect) {
                //   //如果redirect存在说明当前用户是进入某页面后未登陆自动跳转到登陆页面来的，所以登陆完成后得再次回跳到该地址
                //   this.$router.push(redirect)
                // } else {
                  this.$router.push('/')
                // }
                // this.$router.go(-1)
                break;
              case "3001":
                alert('请检查填写的内容！');
                break;
              case "4001":
                alert('用户已登录！');
                break;
              case "4002":
                alert('用户名不存在！');
                break;
              case "4003":
                alert('用户名或密码错误！');
                break;
              case "4004":
                alert('用户未通过邮件确认，请及时确认！');
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
    }
  }
}
</script>

<style scoped>
.login {
  margin: 50px 0 0;
  width: 400px;
  position: relative;
  display: inline-block;
}
.form {
  margin-top: 50px;
}
</style>