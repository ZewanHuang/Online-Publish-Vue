<template>
  <div class="user-info">
    <h3>用户名：{{ userinfo.username }}</h3>
    <h3>头像地址：{{ userinfo.avatar }}</h3>
    <div class="demo-fit" v-if="userinfo.avatar">
      <div class="block">
        <el-avatar shape="square" :size="100" :src=userinfo.avatar></el-avatar>
      </div>
    </div>
    <h3>邮箱：{{ userinfo.email }}</h3>
    <h3>身份：{{ userinfo.type }}</h3>
  </div>
</template>

<script>
export default {
  name: "userinfo",
  props: ['username'],
  data() {
    return {
      userinfo: {}
    }
  },
  mounted() {
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
}
</script>

<style scoped>

</style>