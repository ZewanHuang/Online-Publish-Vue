<template>
  <div class="overview">
    <el-container>
      <el-main>
        <div class="item">
          <el-row><h2>近期审核</h2></el-row>
          <ArticleOverview :articles="articles"/>
        </div>

        <div class="item">
          <el-row><h2>动态</h2></el-row>
          <NewsOverview :newsList="newsList"/>
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import ArticleOverview from "../../../../../components/common/article_overview";
import ActivityOverview from "../../../../../components/common/activity_overview";

export default {
  name: "Review-Overview",
  components: {
    NewsOverview: ActivityOverview,
    ArticleOverview
  },
  data() {
    return {
      hasArticles: false,
      articles: [],
      newsList: [
        /*
        4-审核了文章
         */
        {
          status: 4,
          title: '基于物联网的恒温恒湿箱的远程监控系统设计',
          date:'2021/05/26'
        },
        {
          status: 4,
          title: '企业智慧移动办公平台创新型研究',
          date:'2021/05/01'
        },
        {
          status: 4,
          title: '远程监控系统设计',
          date:'2021/05/01'
        },
        {
          status: 4,
          title: '互联网营销战略概论',
          date:'2021/05/02'
        },
      ],
    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/self_latest/',
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.hasArticles = true;
          this.articles = JSON.parse(res.data.articles);
          break;
        case '4001':
          this.$message.error('用户未登录！');
          break;
        case '4002':
          this.hasArticles = false;
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
}
</script>

<style>
.overview .el-main{
  width: 100%;
  height: auto;
}

.overview .el-container{
  width: 100%;
  height: auto;
  text-align: left;
}

.overview .item {
  padding: 0;
}
</style>