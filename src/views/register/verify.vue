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
      resend: '',
    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/unverified_email/',
    })
        .then(res => {
          if (res.data.status_code === '4002') {
            this.$router.push('/');
          }
        })
        .catch(err => {
          console.log(err);
        })
  },
  methods: {
    send_email() {
      const self = this;
      const formData = new FormData();
      formData.append('resend', '1');

      self.$axios({
        method: 'POST',
        url: '/unverified_email/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            alert('邮件发送成功！');
            break;
          case '4001':
            alert('用户未登录！');
            break;
          case '4002':
            alert('用户已验证，无需重新验证！');
            break;
          case '4003':
            alert('邮件发送失败！');
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