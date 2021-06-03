<template>
 <div class="article">
   <el-row class="search">
     <el-col span="12">
       <el-form ref="form" :model="form">
         <el-form-item label="">
           <el-input v-model="form.title" ></el-input>
         </el-form-item>
       </el-form>
     </el-col>
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
     <el-col span="3">
       <el-button type="primary" icon="el-icon-search" @click="printMode">搜索文章</el-button>
     </el-col>
     <el-col span="3">
       <el-button type="success" icon="el-icon-circle-plus-outline" @click="printMode">添加文章</el-button>
     </el-col>
   </el-row>
   <hr/>

   <ArticleList :articles="articles"/>
 </div>
</template>

<script>
import ArticleList from "../../../../components/common/article_list";

export default {
  name: "Article",
  components: {
    ArticleList,
  },
  data() {
    return {
      form: {
        title: '',
      },
      value: '选项0',
      options: [
        {
          value: '选项0',
          label: '搜索全部'
        },
        {
          value: '选项1',
          label: '按标题搜索'
        },
        {
          value: '选项2',
          label: '按作者搜索'
        },
      ],
      articles: [
        {
          title: "图谱建模基础下海量网络流量的数据挖掘",
          author: "易灿 刘彦姝",
          abstract: "随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下," +
              "必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;" +
              "其次,通过分析用户网页浏览过程。创建出请求依赖图;" +
              "最后,提出网络流量数据挖掘的有效识别算法,为流量挖掘提供图谱建模基础。",
          keywords:[
            "移动互联网","网络流量"
          ]
        },
        {
          title: "“互联网+”时代混合式金课教学设计",
          author: "章明珠",
          abstract: "混合式教学正如火如荼地开展着,然而,如何开展高质量的混合式课程以达到培养学生高阶思维能力的目标?" +
              "从目前高校混合式教学的现状出发,界定\"互联网+\"时代,学生能力的培养目标,从建构主义和联通主义学习理论的视角," +
              "阐述了混合式教学的设计方法,以\"网页设计\"课程中的一节为例,阐述了混合式课程的教学设计。" +
              "最后,通过评价说明这种混合式教学设计能够达到较好的教学效果。 ",
          keywords: ["混合式教学", "金课", "教学设计", "建构主义", "联通主义"],
        },
        { title: "HTML5技术在融媒体平台建设中的运用", author: "", abstract: "", keywords:[]},
        { title: "Web系统前端框架和库的相关技术分析", author: "", abstract: "", keywords:[]},
        { title: "基于Java与HTML5的宁夏数字博物馆系统的设计与实现", author: "", abstract: "", keywords:[]},
      ],
    }
  },
  methods: {
    printMode: function() {
      console.log(this.value)
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