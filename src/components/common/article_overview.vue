<template>
  <el-row class="article-overview">
    <el-carousel :interval="8000" type="card" height="200px">
      <el-carousel-item v-for="(article, index) in articles" :key="index">
        <div class="card-content">
          <h3 class="medium" @click="openArticle(index)">{{ article.title }}</h3>
          <el-divider></el-divider>
          <el-row class="author"><span style="font-weight: bold">作者：</span>{{ article.writer }}</el-row>
          <br>
          <el-row class="keywords">
            <span style="font-weight: bold">关键字：</span>
            <span>{{ article.key }}</span>
          </el-row>
        </div>
      </el-carousel-item>
    </el-carousel>
  </el-row>
</template>

<script>
import user from "@/store/user";

export default {
  name: "ArticleOverview",
  data() {
    return {
      isAuthor: false,
    }
  },
  created() {
    const userInfo = user.getters.getUser(user.state());
    if (userInfo.user.usertype === '作者') {
      this.isAuthor = true;
    }
  },
  props: {
    articles: Array
  },
  methods: {
    openArticle: function(index) {
      if (this.isAuthor) {
        this.$router.push('/article/center/' + this.articles[index].aid + '/info');
      } else {
        this.$router.push('/article/' + this.articles[index].aid);
      }
    }
  }
}
</script>

<style scoped>
.article-overview .card-content {
  padding:0 20px;
}

.article-overview .card-content .medium {
  color: #409eff;
}

.article-overview .card-content .medium:hover {
  color: #007dff;
}

.el-carousel__item {
  box-shadow: 0 3px 3px 1px lightgray;
}

.el-carousel__item:nth-child(2n) {
  background-color: #eff8ff;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #f0f0f0;
}
</style>