<template>
  <div class="edit">
    <div class="steps">
      <el-steps :active=active finish-status="success">
        <el-step title="文章信息" icon="el-icon-edit"></el-step>
        <el-step title="上传文件" icon="el-icon-upload"></el-step>
        <el-step title="提交成功" icon="el-icon-success"></el-step>
      </el-steps>
    </div>
    <div class="article-form" v-if="active===0">
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
            <div v-for="category in category_list">
              <el-option
                  :label=category.category
                  :value=category.category
              ></el-option>
            </div>
          </el-select>
        </el-form-item>
      </el-form>

      <div class="button">
        <el-button type="primary" @click="submit('form')">保存信息</el-button>
      </div>
    </div>

    <div class="upload" v-if="active===1">
      <el-upload
          class="upload-demo"
          drag
          action="http://localhost:8080/api/upload_article/"
          :data="{ articleID: this.article_id }">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖至此处，或<em>点击上传</em></div>
      </el-upload>

      <div class="button">
        <el-button type="primary" @click="next_exit">完成提交</el-button>
      </div>
    </div>

    <div v-if="active===2">
      <p>您已提交文章，请耐心等待审核！</p>
      <p @click="toOverview">3s后自动跳转</p>
    </div>


  </div>
</template>

<script>
export default {
  name: "new-article",
  data() {
    return {
      active: 0,

      article_id: 0,

      labelPosition: 'left',
      form: {
        name: '',
        author: '',
        abstract: '',
        keywords: '',
        type: '',
        content: '',
      },

      category_list: [],
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/editor/get_category/',
    })
    .then(res => {
      this.category_list = JSON.parse(res.data.info);
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    toOverview() {
      window.location.href = '/writing/overview';
    },
    next() {
      if (this.active++ > 2)
        this.active = 0;
    },
    submit(form) {
      const formData = new FormData();
      formData.append('title', this.form.name)
      formData.append('writers', this.form.author)
      formData.append('abstract', this.form.abstract)
      formData.append('key', this.form.keywords)
      formData.append('category', this.form.type)
      formData.append('content', this.form.content)

      this.$axios({
        method: 'post',
        url: '/upload/',
        data:　formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('保存成功!');
            this.article_id = res.data.articleID;
            setTimeout(()=> {
              this.next()
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
    },
    next_exit() {
      const formData = new FormData();
      formData.append('articleID', this.article_id);
      this.$axios({
        method: 'post',
        url: '/confirm_article/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.next();
            setTimeout(()=> {
              window.location.href = '/writing/article';
            },3000);
            break;
          case '4001':
            this.$message.error('未查询到此文章，请重新填写文章信息！');
            setTimeout(() => {
              this.$router.push('/new-article/edit');
            }, 1500);
            break;
          case '4002':
            this.$message.warning('请上传文章文件！');
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
.edit {
  margin: 40px 13% 30px;
}
.edit .article-form {
  padding: 0 100px;
}

.edit .button {
  margin-top: 30px;
}

.edit .el-select {
  width: 400px;
}

.edit .el-upload-dragger {
  margin-top: 20px;
  width: 980px;
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

.edit .el-step__main {
  white-space: normal;
  text-align: left;
}

.edit .el-step__head {
  position: relative;
  width: 100%;
  text-align: left;
}

.steps {
  margin-top: 30px;
  margin-bottom: 40px;
}

</style>