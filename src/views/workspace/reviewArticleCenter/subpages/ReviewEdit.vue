<template>
  <div class="review-edit">
    <el-form v-model="reviewForm">
      <el-form-item label="评论" >
        <el-input type="textarea" v-model="reviewForm.review"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "reviewArticleCenter-ReviewEdit",
  data(){
    return{
      reviewForm:{
        review:"",
      }
    }
  },
  methods: {
    submitForm() {
      this.$message({
        message: '提交成功',
        type: 'success'
      });
    },
    resetForm() {
      this.reviewForm.review="";
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