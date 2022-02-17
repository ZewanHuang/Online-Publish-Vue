<template>
 <div class="article">
   <el-row class="search">
     <el-col span="6">
       <el-select v-model="value">
         <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
         </el-option>
       </el-select>
     </el-col>
     <el-col span="12">
       <el-form ref="form" :model="form">
         <el-form-item label="">
           <el-input
               v-model="form.title"
               @keyup.enter.native="searchArticle"
           ></el-input>
         </el-form-item>
       </el-form>
     </el-col>
     <el-col span="3">
       <el-button type="primary" icon="el-icon-search" @click="searchArticle">搜索文章</el-button>
     </el-col>
     <el-col span="3">
       <el-button type="success" icon="el-icon-circle-plus-outline" @click="addArticle">添加文章</el-button>
     </el-col>
   </el-row>
<!--   <hr/>-->

   <div v-if="hasArticles">
     <ArticleList :articles="articles"/>
   </div>
   <div v-else>
     <p>未查询到已发布文章</p>
   </div>
 </div>
</template>

<script>
import ArticleList from "../../../../../components/common/article_list";

export default {
  name: "Article",
  components: {
    ArticleList,
  },
  data() {
    return {
      hasArticles: false,
      form: {
        title: '',
      },
      value: '选项0',
      options: [
        {
          value: '选项0',
          label: '按标题搜索'
        },
        {
          value: '选项1',
          label: '按类别搜索'
        },
        {
          value: '选项2',
          label: '按关键词搜索'
        },
      ],
      articles: [],
    }
  },
  created() {
    this.$axios({
      method: 'post',
      url: '/get_article/',
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.hasArticles = true;
          this.articles = JSON.parse(res.data.articles);
          break;
        case '4002':
          this.hasArticles = false;
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    addArticle: function() {
      window.location.href = '/new-article/edit'
    },
    searchArticle() {
      const formData = new FormData();
      switch (this.value) {
        case '选项0': //按标题搜索
          formData.append('title', this.form.title)
          break;
        case '选项1': //按类别搜索
          formData.append('category', this.form.title)
          break;
        case '选项2': //按关键词搜索
          formData.append('key', this.form.title)
          break;
      }
      this.$axios({
        method: 'post',
        url: '/get_article/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.hasArticles = true;
            this.articles = JSON.parse(res.data.articles);
            break;
          case '4002':
            this.hasArticles = false;
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
.article {
  text-align: center;
  padding: 30px;
}

.article .search {
  text-align: center;
}
</style>