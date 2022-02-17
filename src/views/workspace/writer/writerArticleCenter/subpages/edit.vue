<template>
  <div class="edit">

    <div class="article-form">
      <el-form ref="form" :model="form" :label-position="labelPosition" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="form.name" placeholder="文章标题不超过50字"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="form.author" placeholder="填写真实姓名，多名作者请用英文半角逗号隔开"></el-input>
        </el-form-item>
        <el-form-item label="摘要">
          <el-input type="textarea" v-model="form.abstract" placeholder="摘要不超过500字"></el-input>
        </el-form-item>
        <el-form-item label="关键词">
          <el-input v-model="form.keywords" placeholder="多个关键词请用英语半角逗号隔开"></el-input>
        </el-form-item>
        <el-form-item label="主题">
          <el-input v-model="form.content" placeholder="描述文章的主题"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-select v-model="form.type" placeholder="请选择文章类别">
            <el-option label="历史散文" value="历史散文"></el-option>
            <el-option label="历史小说" value="历史小说"></el-option>
            <el-option label="历史自传" value="历史自传"></el-option>
            <el-option label="史实阐释" value="史实阐释"></el-option>
            <el-option label="古籍研读" value="古籍研读"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>

    <div class="upload">
      <el-upload
          class="upload-demo"
          drag
          :action="upload_url"
          :data="{ articleID: this.aid }">
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
  props: ['aid'],
  data() {
    return {
      upload_url: this.GLOBAL.baseurl + '/api/upload_article',
      labelPosition: 'left',
      form: {
        name: '',
        author: '',
        abstract: '',
        keywords: '',
        type: '',
        content: '',
      }
    }
  },
  created() {
    const formData = new FormData();
    formData.append('article_id', this.aid);
    this.$axios({
      method: 'post',
      url: '/search_exact/',
      data: formData,
    })
    .then(res => {
      if (res.data.status_code === '2000') {
        const article = JSON.parse(res.data.article);
        this.form.name = article.title;
        this.form.author = article.writer;
        this.form.content = article.content;
        this.form.abstract = article.abstract;
        this.form.keywords = article.key;
        this.form.type = article.category;
      }
    })
    .catch(err => {
      this.$router.replace('/PageNotFound');
    })
  },
  methods: {
    submit(form) {
      const formData = new FormData();
      formData.append('aid', this.aid)
      formData.append('title', this.form.name)
      formData.append('writers', this.form.author)
      formData.append('abstract', this.form.abstract)
      formData.append('key', this.form.keywords)
      formData.append('category', this.form.type)
      formData.append('content', this.form.content)

      this.$axios({
        method: 'post',
        url: '/edit_article/',
        data:　formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('保存成功!');
            const url = '/article/center/'+this.aid+'/info';
            setTimeout(()=> {
              this.$router.replace(url);
            }, 1000);
            break;
          case '4001':
            this.$message.error('请先登录!');
            setTimeout(()=> {
              this.$router.replace('/login');
            }, 1000);
            break;
          case '3001':
            this.$message.error('信息填写不合法!');
            break;
          case '4002':
            this.$message.error('作者不存在，请填写已注册作者的真实姓名!');
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

<style>
.edit .article-form {
  padding: 0 100px;
}

.edit .button {
  margin-top: 20px;
}

.edit .el-select {
  width: 400px;
}

.edit .el-upload-dragger {
  margin-top: 20px;
  width: 870px;
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