<template>
  <div class="finish-audit">
    <div v-for="article in articles" :key="article.title" class="article-box">
      <el-row class="title">{{ article.title }}</el-row>
      <el-row class="author"><span style="font-weight: 650">作者：</span>{{ article.author }}</el-row>
      <el-row class="keywords">
        <span style="font-weight: 650">关键字：</span>
        <span v-for="word in article.keywords">{{ word }}；</span>
      </el-row>
      <el-row class="abstract">
        <span style="font-weight: 650">摘要：</span>{{ article.abstract }}
      </el-row>
      <el-row class="button">
        <el-button type="primary" >查看</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Finish-audit",
  data() {
    return {
      articles: [
        {
          title: '智能信息采集器软件开发实践',
          author:'傅骏',
          keywords: ['爬虫技术','信息采集','python','二次开发','xpath'],
          abstract: '应用爬虫技术开发的智能信息采集器,可以帮助用户及时获得工程学院、铸造院校、焊接行业、军事网站的最新消息。论文选用tkinter进行界面设计,应用python爬虫技术对xpath、抓取到的日期、网址进行了处理,顺利实现抓取消息并获得......'
        },
        {
          title: '企业智慧移动办公平台创新型研究',
          author:	'黄刚',
          keywords: ['信息科技', '经济与管理科学'],
          abstract: '当今社会,计算机技术的发展和互联网的普及让网络化办公已经成为常态。而移动互联网技术更是改变了传统的办公方式,让企业开始建立移动办公平台,在现有信息化办公状态下进行延伸。然而,传统办公系统和移动办公系统的有机融合成为了移动......'
        },
        {
          title: '基于物联网的恒温恒湿箱的远程监控系统设计',
          author:	'吕俊蓉',
          keywords: [	'物联网技术','远程控制','恒温恒湿箱','web端','NB-IoT无线传输模块'],
          abstract: '当今社会,计算机技术的发展和互联网的普及让网络化办公已经成为常态。而移动互联网技术更是改变了传统的办公方式,让企业开始建立移动办公平台,在现有信息化办公状态下进行延伸。然而,传统办公系统和移动办公系统的有机融合成为了移动......'
        }
      ]
    }
  }
}
</script>

<style>

.finish-audit .article-box{
  margin-top: 30px;
  margin-bottom: 1px;
  text-align: left;
  width: 100%;
  height: auto;
  border: none;
}
.finish-audit .article-box .title{
  color: #45c8f5;
  font-size: large;
  font-weight: bold;
  height: 30px;
}
.finish-audit .article-box .keywords{
  height: 30px;
}
.finish-audit .article-box .author{
  height: 30px;
}
.finish-audit .article-box .abstract{
  color: #c9c9c9;
  height: 50px;
}
.finish-audit .article-box .button{
  text-align: right;
  height: 40px;
}
.finish-audit .article-box .button .el-button{
  height: 35px;
}
</style>