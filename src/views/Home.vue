<template>
  <div class="home">
    <h1>登录系统</h1>
    <el-button @click="register">注册</el-button>
    <el-button @click="login">登录</el-button>
    <el-button @click="logout">退出登录</el-button>
    <h1>个人中心</h1>
    <el-button @click="userinfo">个人中心</el-button>
    <h1>头像上传</h1>
    <!-- 记得修改下面 action 的后端路径 -->
    <el-upload
        class="avatar-uploader"
        action="/api/upload_image/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
  </div>
</template>

<script>
// @ is an alias to /src


import user from "@/store/user";

export default {
  name: 'Home',
  data() {
    return {
      imageUrl: ''
    };
  },
  methods: {
    register() {
      this.$router.push('register');
    },
    login() {
      const userInfo = user.getters.getUser(user.state());
      if (!userInfo) {
        this.$router.push('login');
      } else {
        alert('用户已登录');
      }
    },
    logout() {
      const self = this;
      self.$axios({
        method: 'GET',
        url: '/logout/',
        data: {}
      })
      .then(res => {
        switch (res.data.status_code) {
          case "2000":
            alert("登出成功！");
            // 登出成功后清空前端存储内容，并自动跳转 /login
            this.$store.dispatch('clear');
            this.$router.push('/login');
            break;
          case "4001":
            alert("用户未登录！");
            break;
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    userinfo() {
      const userInfo = user.getters.getUser(user.state());
      if (userInfo) {
        const user_url = userInfo.user.username + '/info';
        this.$router.push(user_url);
      } else {
        alert('请先登录');
      }
    },

    handleAvatarSuccess(res, file) {
      // alert('success');
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // 在这里指定格式
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return (isJPG || isPNG) && isLt2M;  //修改格式后不要忘记修改这里了
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: inline-block;
}
</style>
