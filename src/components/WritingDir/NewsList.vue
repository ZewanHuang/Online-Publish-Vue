<template>
  <div class="newsList">
    <el-row class="new" v-for="(news, index) in newsList">
      <el-col span="3" style="text-align: center">
        <i style="font-size: 15px; color:grey" class="el-icon-edit" v-if="news.status === 0"><br><br>修改了文档</i>
        <i style="font-size: 15px; color:grey" class="el-icon-finished" v-if="news.status === 1"><br><br>成功修改了文档</i>
        <i style="font-size: 15px; color:grey" class="el-icon-s-claim" v-if="news.status === 2"><br><br>提交了文档</i>
        <i style="font-size: 15px; color:#01bf01" class="el-icon-upload2" v-if="news.status === 3"><br><br>成功发布文章</i>
      </el-col>
      <el-col span="12" class="content"><span class="text" @click="openArticle(index)">{{news.title}}</span></el-col>
      <el-col span="8" class="time"><span>时间：{{news.date}}</span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "newsList",
  data() {
    return {
      newsList: [
          //0:修改了文章;1:成功修改;2:提交了文章;3:成功发布
        {
          status: 0,
          title: '基于物联网的恒温恒湿箱的远程监控系统设计',
          date:'2021/05/26'
        },
        {
          status: 1,
          title: '企业智慧移动办公平台创新型研究',
          date:'2021/05/01'
        },
        {
          status: 2,
          title: '远程监控系统设计',
          date:'2021/05/01'
        },
        {
          status: 3,
          title: '互联网营销战略概论',
          date:'2021/05/02'
        },
      ]
    }
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