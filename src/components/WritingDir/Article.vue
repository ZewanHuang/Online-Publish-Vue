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

   <el-row class="article-list" v-for="(article,index) in articleList">
     <el-card class="card">
       <div slot="header" class="clearfix" style="text-align: left">
         <span style="font-weight: bold; color: #409eff">{{article.title}}</span>
         <el-button style="float: right; padding: 3px 0" type="text">查看文章</el-button>
       </div>
       <div slot="default" class="card-body" style="text-align: left">
         <span style="font-weight: bold">作者：</span>
         <span>{{article.author}}</span>
         <br>
         <br>
         <span style="font-weight: bold">关键字：</span>
         <span v-for="word in article.keywords">{{word}} </span>
       </div>
     </el-card>
   </el-row>

   <el-row class="page">

   </el-row>

   <el-row>
     <el-pagination
         background
         layout="prev, pager, next"
         :total="100">
     </el-pagination>
   </el-row>
 </div>
</template>

<script>
export default {
  name: "Article",
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
      articleList: [
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
        { title: "“互联网+”时代混合式金课教学设计", author: "", abstract: "", keywords:[]},
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

.article .article-list .card {
  margin: 10px;
}
</style>