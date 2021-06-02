<template>
  <div class="article">
    <div class="article-isAuthor" v-if="isAuthor">
<!--      <el-button-->
<!--          type="success"-->
<!--          icon="el-icon-plus"-->
<!--          circle-->
<!--          @click="writeNewArticle"-->
<!--          style="font-size: 50px; height: 100px; width: 100px">-->
<!--      </el-button>-->
      <el-card v-for="(article, index) in articleList" class="box-card">
        <div slot="header" class="clearfix">
          <el-row>
            <el-col span="12">{{article.title}}</el-col>
            <el-col span="12" class="button">
              <el-button type="primary" icon="el-icon-search" circle @click="openArticle(index)"></el-button>
            </el-col>
          </el-row>
        </div>
        <div slot="default" class="card-body">
          <span class="item-title">作者：</span>
          <span class="item-content">{{article.author}}</span>
          <br>
          <span class="item-title">摘要：</span>
          <span class="item-content">{{article.abstract}}</span>
        </div>
      </el-card>
    </div>

    <div class="article-isNotAuthor" v-else>
      <i class="el-icon-edit"></i>
      <br>
      <el-button class="el-button" type="primary" @click="isAuthor = !isAuthor">点击成为作者</el-button>
    </div>
  </div>
</template>

<script>
import router from "../../../router";

export default {
  name: "Article",
  data() {
    return {
      articleList: [
        {
          title: "图谱建模基础下海量网络流量的数据挖掘",
          author: "易灿 刘彦姝",
          abstract: "随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下," +
              "必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;" +
              "其次,通过分析用户网页浏览过程。创建出请求依赖图;" +
              "最后,提出网络流量数据挖掘的有效识别算法,为流量挖掘提供图谱建模基础。"
        },
        { title: "“互联网+”时代混合式金课教学设计", author: "", abstract: ""},
        { title: "HTML5技术在融媒体平台建设中的运用", author: "", abstract: ""},
        { title: "Web系统前端框架和库的相关技术分析", author: "", abstract: ""},
        { title: "基于Java与HTML5的宁夏数字博物馆系统的设计与实现", author: "", abstract: ""},
      ],
      isAuthor: false,
    }
  },
  methods: {
    openArticle: function(index) {
      alert("打开：" + this.articleList[index].title);
    },
    writeNewArticle: function() {
      alert("let's go")
    }
  },
}
</script>

<style>
.article {
  margin: 10px;
  padding: 0 30px;
  height: auto;
}

.article-isAuthor {
  text-align: center;
}

.article-isAuthor .clearfix {
  text-align: left;
  font-size: large;
  font-weight: bold;
}

.article-isAuthor .box-card {
  margin: 10px 0;
  width: 100%;
  height: auto;
}

.article-isAuthor .card-body {
  text-align: left;
}

.article-isAuthor .item-title{
  font-weight: bold;
  font-size: large;
}

.article-isAuthor .item-content{
  font-size: large;
}

.article-isNotAuthor {
  text-align: center;
  font-size: 100px;
}

.article-isNotAuthor .el-button {
  width: 150px;
}
</style>