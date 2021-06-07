<template>
  <div class="verify">
    <el-button @click="send_email">重新发送邮件</el-button>
  </div>
</template>

<script>
export default {
  name: "verify",
  data() {
    return {
      email: '',
      username: '',
    }
  },
  methods: {
    send_email() {
      this.$axios({
        method: 'GET',
        url: '/unverified_email/',
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('验证邮件发送成功！');
            this.username = res.data.username;
            this.email = res.data.email;
            break;
          case '4001':
            this.$message.warning('用户未登录！');
            break;
          case '4002':
            this.$message.warning('用户已验证，无需重新验证！');
            setTimeout(()=> {
              this.$router.push('/');
            }, 1500)
            break;
          case '4003':
            this.$message.error('邮件地址错误，请重新注册！');
            break;
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  },

}
</script>

<style scoped>

</style>