<template>
  <ReviewArticleList :articles="articles"/>
</template>

<script>
import ReviewArticleList from "../../../../../components/common/review_article_list";

export default {
  name: "Reviewed",
  components: {
    ReviewArticleList,
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/self_remarks_done/',
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.articles = JSON.parse(res.data.remarks)
          break;
        case '4001':
          this.$message.error('请先登录！');
          setTimeout(()=> {
            this.$router.push('/login');
          }, 1500);
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
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