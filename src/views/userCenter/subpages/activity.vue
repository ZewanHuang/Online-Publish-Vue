<template>
  <div class="news">
    <ul class="news-list" v-model="newsList">
      <li v-for="news in newsList">
        <i v-if="news.status === 2" class="el-icon-upload2"></i>
        <i v-else-if="news.status === 1" class="el-icon-star-on"></i>
        <i v-else class="el-icon-star-off"></i>
        <span v-if="news.status === 2" class="status"> 发布了文章</span>
        <span v-else-if="news.status === 1" class="status"> 收藏了文章</span>
        <span v-else class="status"> 取消收藏了文章</span>
        <br><br>
        <span class="title" @click="openArticle(news.title)">{{ news.title }}</span>
        <hr/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  props: ['username'],
  data() {
    return {
      newsList: [
          // 0代表取消收藏，1代表收藏，2代表发布
        { status: 0, title: "图谱建模基础下海量网络流量的数据挖掘"},
        { status: 1, title: "“互联网+”时代混合式金课教学设计"},
        { status: 0, title: "HTML5技术在融媒体平台建设中的运用"},
        { status: 1, title: "Web系统前端框架和库的相关技术分析"},
        { status: 2, title: "基于Java与HTML5的宁夏数字博物馆系统的设计与实现"},
      ]
    }
  },
  methods: {
    openArticle: function (name) {
      alert('打开： ' + name)
      //this.newsList.unshift({status:1, title: "tw"});
    },
    addNewNews: function(statusNum, name) {
      console.log({status: 1, title: name});
    },
  },
}
</script>

<style>
.news {
  margin: 10px;
  padding: 0 30px;
  height: auto;
  text-align: left;
}

.news .news-list {
  padding-left: 0;
  list-style-type: none;
}

.news .news-list li {
  padding: 15px;
}

.news .status {
  color: grey;
  font-size: large;
}

.news .title {
  color: black;
  font-weight: normal;
  font-size: large;
}

.news .title:hover {
  font-weight: bold;
  color: #00b0ff;
  cursor: pointer;
}

</style>