<template>
  <div class="review-edit">
    <el-form v-model="reviewForm">
      <el-form-item label="评论" >
        <el-input type="textarea" v-model="reviewForm.review"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "reviewArticleCenter-ReviewEdit",
  props: ['rid'],
  data(){
    return{
      reviewForm:{
        review: "",
      }
    }
  },
  methods: {
    submitForm() {
      const formData = new FormData();
      formData.append('content', this.reviewForm.review);
      formData.append('rid', this.rid);
      this.$axios({
        method: 'post',
        url: '/author_review/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('提交评论成功！');
            setTimeout(() => {
              this.$router.push('/review/center/' + this.rid + '/article');
            }, 1500);
            break;
          case '4001':
            this.$message.warning('请勿重复提交评论！');
            setTimeout(() => {
              this.$router.push('/review/overview');
            }, 1500);
            break;
          case '4002':
            this.$message.warning('您无权提交该文章的评论！');
            setTimeout(() => {
              this.$router.push('/review/overview');
            }, 1500);
            break;
          case '4003':
            this.$message.warning('该文章发生错误！');
            setTimeout(() => {
              this.$router.push('/review/overview');
            }, 1500);
            break;
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    resetForm() {
      this.reviewForm.review = "";
    }
  }
}
</script>

<style>
.el-textarea__inner{
  min-height: 300px !important;
}

.el-textarea{
  margin-top: 20px !important;
}

.el-form-item__label{
  font:18px bold !important;
}

#textarea-l{
  font-size: 50px;
}
</style>