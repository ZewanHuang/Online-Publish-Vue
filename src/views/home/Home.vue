<template>
  <div class="home">
    <img v-bind:style="imgStyle" src="../../assets/logo.png">
    <h1>欢迎进入网上出版系统</h1>
    <el-row class="searchArea">
      <el-col :span="3" :offset="7">
        <el-select v-model="value" placeholder="请选择" id="op">
          <el-option
              v-for="item in searchOptions"
              :key="item"
              :label="item"
              :value="item">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="7" >
        <el-input
            id="search"
            v-model="input"
            placeholder="请输入要查找的书籍..."
            @focus="changeStyle"
            @keyup.enter="searchArticle"
        ></el-input>
      </el-col>
      <el-col :span="1">
        <el-button type="primary" icon="el-icon-search" @click="searchArticle" >搜索</el-button>
      </el-col>
    </el-row>
    <div class="hotArticle" v-if="isSearching">
      <el-row style="text-align: left">
        <span><h3>{{ head_title }}</h3></span>
      </el-row>
      <el-row class="article-list" v-for="(article,index) in articles">
        <el-card class="card">
          <div slot="header" class="clearfix" style="text-align: left">
            <span  class="card-title">{{ article.title }}</span>
            <el-button class="card-button" @click="openArticle(index)" type="text">查看文章</el-button>
          </div>

          <div slot="default" class="card-body">
            <div class="card-body-el">
              <span class="card-body-el-title">作者：</span>
              <span>{{ article.writer }}</span>
            </div>

            <div class="card-body-el">
              <span class="card-body-el-title">关键字：</span>
              <span>{{ article.key }} </span>
            </div>

            <div class="card-body-el">
              <span class="card-body-el-title" style="color: grey">摘要：</span>
              <span style="color: grey">{{ adjustAbstract(article.abstract) }}</span>
            </div>
          </div>
        </el-card>
      </el-row>
    </div>
  </div>
</template>

<script>
import ArticleList from "../../components/common/article_list";
export default {
  components: {
    ArticleList,
  },
  data() {
    return {
      head_title: '热搜文章：',
      isSearching: false,
      input: '',
      imgStyle: {
        position: 'relative',
        margin: '20px',
        height: '400px',
        transition: 'height 1s',
      },
      searchOptions: ["按文章名","按作者","按关键字"],

      articles: [],

      value: '',
      hasArticles: false,
    }
  },
  mounted() {
    this.head_title = '热搜文章：';
    this.$axios({
      method: 'get',
      url: '/most_popular/',
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
    searchArticle:function () {
      this.head_title = '搜索结果：';
      this.articles = [];

      if (this.value === '')
        this.$message.warning('请选择搜索条件');
      else if (this.input === '')
        this.$message.warning('请输入搜索内容');
      else {
        const formData = new FormData();
        switch (this.value) {
          case '按文章名':
            formData.append('title', this.input);
            break;
          case '按作者':
            formData.append('realName', this.input);
            break;
          case '按关键字':
            formData.append('key', this.input);
            break;
        }
        this.$axios({
          method: 'post',
          url: '/search_list/',
          data: formData,
        })
        .then(res => {
          switch (res.data.status_code) {
            case '2000':
              this.hasArticles = true;
              this.articles = JSON.parse(res.data.articles);
              console.log(this.articles);
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
    changeStyle: function() {
      this.imgStyle.height = '120px';
      this.isSearching=true;
    },
    openArticle: function(index) {
      this.$router.push('/article/' + this.articles[index].aid);
    },
    getAbstract: function(index) {
      const str = this.articles[index].abstract
      const length = str.length;
      const lenToShow = 100;
      if (length < lenToShow) {
        return str;
      } else {
        return str.substring(0, lenToShow) + "...";
      }
    },
    adjustAbstract: function (index) {
      const str = index
      const length = str.length;
      const lenToShow = 100;
      if (length < lenToShow) {
        return str;
      } else {
        return str.substring(0, lenToShow) + "...";
      }
    },
  }
}
</script>

<style>
.home{
  background: url("../../assets/1.png") ;
}

#search{

  width: 400px;
  margin: 0 0;
}

#op{
  margin: 0 0;
}

.searchArea{
  padding-top: 20px;
  padding-bottom: 10px;
}

.hotArticle{
  width: 60%;
  margin: auto;
}
.hotArticle .article-list .card {
  margin: 10px;
}

.hotArticle .card-body {
  text-align: left;
}

.hotArticle .card-button {
  float: right;
  padding: 3px 0;
  font-size: medium;
}

.hotArticle .card-title {
  font-weight: bold;
  color: #409eff;
  font-size: large;
}

.hotArticle .card-body-el {
  padding-bottom: 10px;
}

.hotArticle .card-body-el-title {
  font-weight: bold;
}


</style>

