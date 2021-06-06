<template>
  <div class="newsList">
    <el-row class="new" v-for="(news, index) in newsList">
      <el-col span="3" style="text-align: center">
        <i style="font-size: 15px; color:grey" class="el-icon-edit" v-if="news.status === 0"><br><br>修改了文档</i>
        <i style="font-size: 15px; color:grey" class="el-icon-finished" v-if="news.status === 1"><br><br>成功修改了文档</i>
        <i style="font-size: 15px; color:grey" class="el-icon-document" v-if="news.status === 2"><br><br>提交了文档</i>
        <i style="font-size: 15px; color:#01bf01" class="el-icon-upload2" v-if="news.status === 3"><br><br>成功发布文章</i>
        <i style="font-size: 15px; color:#01bf01" class="el-icon-document-checked" v-if="news.status === 4"><br><br>审核了文章</i>
        <i style="font-size: 15px; color:orangered" class="el-icon-document-delete" v-if="news.status === 5"><br><br>删除了文章</i>
      </el-col>
      <el-col span="12" class="content">
        <span class="text" @click="openArticle(index)">
          {{ news.title }}
        </span>
      </el-col>
      <el-col span="8" class="time">
        时间：{{ news.date }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NewsOverview",
  props: {
    newsList: Array
  },
  methods: {
    openArticle: function(index) {
      alert("open_" + this.newsList[index].title);
    }
  },
}
</script>

<style scoped>
.el-col{
  height: 50px;
}
.newsList {
  margin-top: 20px;
}
.newsList .new{
  padding-bottom: 70px;
  margin: 0;
  height: 50px;
}
.newsList .time{
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: right;
}
.newsList .content{
  margin: 0 auto;
  font-size: large;
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
}
.newsList .content .text:hover {
  font-weight: bold;
  cursor: pointer;
}
</style>