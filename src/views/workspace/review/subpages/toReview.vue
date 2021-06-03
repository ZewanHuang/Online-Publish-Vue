<template>
  <ArticleList :articles="articles"/>
</template>

<script>
import ArticleList from "../../../../components/common/article_list";

export default {
  name: "ToReview",
  components: {
    ArticleList,
  },
  data() {
    return {
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
      ]
    }
  }
}
</script>

<style>
.to-audit .article-box{
  margin-top: 30px;
  margin-bottom: 1px;
  text-align: left;
  width: 100%;
  height: auto;
  border: none;
}
.to-audit .article-box .title{
  color: #45c8f5;
  font-size: large;
  font-weight: bold;
  height: 30px;

}
.to-audit .article-box .keywords{
  height: 30px;
}
.to-audit .article-box .author{
  height: 30px;
}
.to-audit .article-box .abstract{
  color: #c9c9c9;
  height: 50px;
}
.to-audit .article-box .button{
  text-align: right;
  height: 40px;
}
.to-audit .article-box .button .el-button{
  height: 35px;
}
</style>