<template>
  <div class="overview">
    <el-container>
      <el-main>
        <div class="last-article">
          <el-row><h2>受欢迎的文章</h2></el-row>
          <el-row>
            <el-carousel :interval="8000" type="card" height="200px">
              <el-carousel-item v-for="(article, index) in articles" :key="index">
                <div class="article-card-content">
                  <h3 class="medium" @click="openArticle(index)">{{article.title}}</h3>
                  <el-divider></el-divider>
                  <el-row class="author"><span style="font-weight: bold">作者：</span>{{article.author}}</el-row>
                  <br>
                  <el-row class="keywords">
                    <span style="font-weight: bold">关键字：</span>
                    <span v-for="word in article.keywords">{{word}}；</span>
                  </el-row>
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-row>
        </div>

        <div class="news">
          <el-row><h2>创作动态</h2></el-row>
          <news-list></news-list>
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "Writer-Overview",
  data() {
    return {
      articles: [
        {
          title: '智能信息采集器软件开发实践',
          author: '傅骏',
          keywords: ['爬虫技术', '信息采集', 'python', '二次开发', 'xpath'],
          abstract: '应用爬虫技术开发的智能信息采集器,可以帮助用户及时获得工程学院、铸造院校、焊接行业、军事网站的最新消息。论文选用tkinter进行界面设计,应用python爬虫技术对xpath、抓取到的日期、网址进行了处理,顺利实现抓取消息并获得......'
        },
        {
          title: '企业智慧移动办公平台创新型研究',
          author: '黄刚',
          keywords: ['信息科技', '经济与管理科学'],
          abstract: '当今社会,计算机技术的发展和互联网的普及让网络化办公已经成为常态。而移动互联网技术更是改变了传统的办公方式,让企业开始建立移动办公平台,在现有信息化办公状态下进行延伸。然而,传统办公系统和移动办公系统的有机融合成为了移动......'
        },
        {
          title: '远程监控系统设计',
          author: '吕俊蓉',
          keywords: ['物联网技术', '远程控制', '恒温恒湿箱', 'web端', 'NB-IoT无线传输模块'],
          abstract: '当今社会,计算机技术的发展和互联网的普及让网络化办公已经成为常态。而移动互联网技术更是改变了传统的办公方式,让企业开始建立移动办公平台,在现有信息化办公状态下进行延伸。然而,传统办公系统和移动办公系统的有机融合成为了移动......'
        },
        {
          title: '企业智慧移动办公平台创新型研究',
          author: '黄刚',
          keywords: ['信息科技', '经济与管理科学'],
          abstract: '当今社会,计算机技术的发展和互联网的普及让网络化办公已经成为常态。而移动互联网技术更是改变了传统的办公方式,让企业开始建立移动办公平台,在现有信息化办公状态下进行延伸。然而,传统办公系统和移动办公系统的有机融合成为了移动......'
        },
      ]
    }
  },
  methods: {
    openArticle: function(index) {
      alert("打开：" + this.articles[index].title);
    }
  },
}
</script>

<style>
.overview .el-main{
  padding-top: 10px;
  width: 100%;
}

.overview .el-container{
  width: 100%;
  height: auto;
  text-align: left;
}

.overview .article-card-content {
  padding:0 20px;
}

.overview .article-card-content .medium {
  color: #409eff;
}


.overview .article-card-content .medium:hover {
  color: #007dff;
}

.el-carousel__item {
  box-shadow: 0 3px 3px 1px lightgray;
}

.el-carousel__item:nth-child(2n) {
  background-color: #eff8ff;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #fafafa;
}
</style>