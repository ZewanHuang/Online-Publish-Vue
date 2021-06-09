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
        <el-input id="search" v-model="input" placeholder="请输入要查找的书籍..." @focus="changeStyle"></el-input>
      </el-col>
    </el-row>
    <div class="hotArticle" v-if="isSearching">
      <el-row style="text-align: left">
        <span><h3>文章热搜：</h3></span>
      </el-row>
      <el-row class="article-list" v-for="(article,index) in articles">
        <el-card class="card">
          <div slot="header" class="clearfix" style="text-align: left">
            <span  class="card-title">{{article.title}}</span>
            <el-button class="card-button" @click="openArticle" type="text">查看文章</el-button>
          </div>

          <div slot="default" class="card-body">
            <div class="card-body-el">
              <span class="card-body-el-title">作者：</span>
              <span>{{article.author}}</span>
            </div>

            <div class="card-body-el">
              <span class="card-body-el-title">关键字：</span>
              <span v-for="word in article.keywords">{{word}} </span>
            </div>

            <div class="card-body-el">
              <span class="card-body-el-title" style="color: grey">摘要：</span>
              <span style="color: grey">{{getAbstract(index)}}</span>
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
      isSearching:false,
      input: '',
      imgStyle: {
        position: 'relative',
        margin: '20px',
        height: '400px',
        transition: 'height 1s',
      },
      searchOptions: ["按文章名","按作者","按关键字"],
      articles: [
        {
          title: '图谱建模基础下海量网络流量的数据挖掘',
          author:'易灿',
          keywords: [	'图谱建模','流量识别','数据挖掘'],
          abstract: '随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下,必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;其次,......'
        },
        {
          title: '“互联网+”时代混合式金课教学设计',
          author:	'章明珠',
          keywords: ['混合式教学','金课','教学设计','建构主义','联通主义'],
          abstract: '混合式教学正如火如荼地开展着,然而,如何开展高质量的混合式课程以达到培养学生高阶思维能力的目标？从目前高校混合式教学的现状出发,界定"互联网+"时代,学生能力的培养目标,从建构主义和联通主义学习理论的视角,阐述了......'
        },
        { title: "HTML5技术在融媒体平台建设中的运用", author: "", abstract: "", keywords:[]},
        { title: "Web系统前端框架和库的相关技术分析", author: "", abstract: "", keywords:[]},
        { title: "基于Java与HTML5的宁夏数字博物馆系统的设计与实现", author: "", abstract: "", keywords:[]},
      ],
      value:""
    }
  },
  methods: {
    changeStyle: function() {
      this.imgStyle.height = '120px';
      this.isSearching=true;
    },
      openArticle: function() {
        this.$message('打开了某文章');
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

