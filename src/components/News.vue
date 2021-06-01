<template>
  <div class="news">
    <el-row class="new" v-for="n in news">
      <el-col span="3" style="text-align: center">
        <img height="49" width="49" src="../assets/news-audit.png">
      </el-col>
      <el-col span="12"  class="content"><span>{{n.content}}</span></el-col>
      <el-col span="8" class="time"><span>时间：{{n.date}}</span></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news:[
        {
          content:'成功审核文章：基于物联网的恒温恒湿箱的远程监控系统设计',
          date:'2021/05/26'
        },
        {
          content:'成功审核文章：企业智慧移动办公平台创新型研究',
          date:'2021/05/01'
        },
        {
          content:'成功审核文章：智能信息采集器软件开发实践',
          date:'2021/04/01'
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-col{
  height: 50px;

}
.news .new{
  padding: 0;
  margin: 0;
  height: 50px;
}
.news .time{
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 10px;
  text-align: right;
}
.news .content{
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 10px;
  text-align: left;
}
</style>