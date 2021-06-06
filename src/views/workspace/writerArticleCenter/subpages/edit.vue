<template>
  <div class="edit">

    <div class="article-form">
      <el-form ref="form" :model="form" :label-position="labelPosition" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="摘要">
          <el-input type="textarea" v-model="form.abstract"></el-input>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="form.keywords"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-select v-model="form.type" placeholder="请选择文章类别">
            <el-option label="类别一" value="type1"></el-option>
            <el-option label="类别二" value="type2"></el-option>
            <el-option label="类别三" value="type3"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>

    <div class="upload">
      <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖至此处，或<em>点击上传</em></div>
      </el-upload>
    </div>

    <div class="button">
      <el-button type="primary" @click="submit('form')">保存更改</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      labelPosition: 'left',
      form: {
        name: '',
        author: '',
        abstract: '',
        keywords: '',
        type: '',
      }
    }
  },
  methods: {
    submit(form) {
      alert('保存成功');
    }
  },
}
</script>

<style>
.edit .article-form {
  padding: 0 100px;
}

.edit .button {
  margin-top: 20px;
  margin-left: 100px;
}

.edit .el-select {
  width: 400px;
}

.edit .el-upload-dragger {
  margin-left: 100px;
  width: 800px;
}

.edit .el-form-item__label {
  font-size: 16px;
  font-weight: bold;
}

.edit .el-form-item__content {
  text-align: left;
}

.edit .el-textarea__inner {
  min-height: 200px !important;
}

.edit textarea {
  font: 400 14px Arial !important;
}

.edit .el-button {
  font-size: 16px;
}
</style>