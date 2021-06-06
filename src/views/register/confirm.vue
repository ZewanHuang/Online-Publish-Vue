<template>
  <div class="confirm">
    <h3 v-if="success">恭喜邮箱验证成功，开始你的旅程吧</h3>
    <h3 v-else>验证失败，请检查验证链接，或链接已失效</h3>
  </div>
</template>

<script>
export default {
  name: "confirm",
  data(){
    return {
      success: false,
    }
  },
  mounted() {
    const codeForm = new FormData();
    codeForm.append("code", this.$route.query.code);  // this.$route.query.code获取url中?code=后的参数
    this.$axios({
      method: 'post',
      url: '/confirm/',
      data: codeForm,
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.success = true;
          break;
        case '4001':
          this.$message.error('无效的确认请求');
          break;
        case '4002':
          this.$message.error('验证码已过期，请重新注册');
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>

</style>