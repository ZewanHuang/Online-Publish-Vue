<template>
  <div class="collection">
    <el-collapse accordion>
      <el-collapse-item v-for="(collection, index) in collectionList" :title=collection.title :name=index>
        <span class="item-title">作者：</span>
        <span class="item-content">{{collection.author}}</span>
        <br>
        <span class="item-title">摘要：</span>
        <span class="item-content">{{collection.abstract}}</span>
        <div class="item-delete">
          <el-button type="success" icon="el-icon-search" circle @click="openArticle(index)"></el-button>
          <el-button type="primary" icon="el-icon-message" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteCollection(index)"></el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import News from "./News.vue";

export default {
  name: "Collection",
  data() {
    return {
      collectionList: [
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
      ]
    }
  },
  methods: {
    openArticle: function(index) {
      alert("打开：" + this.collectionList[index].title);
    },
    deleteCollection: function(index) {
      console.log(index);
      News.methods.addNewNews(0, this.collectionList[index].title);
      this.collectionList.splice(index, 1);
    }
  },
  compute: {
  },
}
</script>

<style>
.collection {
  margin: 10px;
  padding: 0 30px;
  text-align: left;
}

.collection .item-title{
  font-weight: bold;
  font-size: large;
}

.collection .item-content{
  font-size: large;
}

.collection .el-collapse-item__header {
  height: 80px;
  font-size: large;
}

.collection .item-delete {
  text-align: right;
  font-size: large;
  font-weight: bold;
}

</style>