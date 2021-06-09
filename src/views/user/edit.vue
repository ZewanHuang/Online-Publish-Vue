<template>
  <div>
    <h1>Edit</h1>
    <h2>头像</h2>
    <el-upload
        class="avatar-uploader"
        action="http://localhost:8080/api/upload_image/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <h2>用户名 {{ userinfo.username }}</h2>
    <p>下面是表单</p>

    <div class="form">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="真实姓名" prop="name">
          <el-input v-model="ruleForm.real_name"></el-input>
        </el-form-item>
        <el-form-item label="教育经历" prop="education">
          <el-input type="textarea" v-model="ruleForm.education"></el-input>
        </el-form-item>
        <el-form-item label="职业经历" prop="job">
          <el-input type="textarea" v-model="ruleForm.job"></el-input>
        </el-form-item>
        <el-form-item label="个人简介" prop="desc">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">保存更改</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>

export default {
  name: "edit",
  data() {
    return {
      imageUrl: '',
      userinfo: {},

      ruleForm: {
        real_name: '',
        education: '',
        job: '',
        description: ''
      },
      rules: {
        name: [
          { required: false, message: '请输入您的真实姓名', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        education: [
          { min: 1, max: 200, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        job: [
          { min: 1, max: 200, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        desc: [
          { min: 10, max: 200, message: '长度在 10 到 200 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/get_session/',
    })
    .then(res => {
        this.userinfo = JSON.parse(res.data.user);
    })
    .catch(err => {
      console.log(err);
      this.$router.push('PageNotFound');
    })
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formData = new FormData();
          formData.append("real_name", this.ruleForm.real_name)
          formData.append("education", this.ruleForm.education)
          formData.append("job", this.ruleForm.job)
          formData.append("description", this.ruleForm.description)

          this.$axios({
            method: 'post',
            url: '/edit/',
            data: formData,
          })
          .then(res => {
            switch (res.data.status_code) {
              case "2000":
                this.$message.success("保存成功！");
                this.$router.push("/" + this.userinfo.username + "/info/activity");
                break;
              case "4001":
                this.$message.error("用户未登录！");
                break;
              case "4002":
                console.log("发生错误！");
                break;
            }
          })
          .catch(err => {
            console.log(err);
            this.$router.push("/PageNotFound/");
          })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.$message.success('更换头像成功！');
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

<style scoped>
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
.form {
  margin-top: 50px;
  width: 60%;
  height: 700px;
  position: relative;
  display: inline-block;
}
.login-btn {
  margin-top: 25px;
  text-align: center;
}
.login-btn button{
  height: 38px;
}
</style>