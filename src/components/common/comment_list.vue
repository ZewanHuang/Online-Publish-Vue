<template>
  <div class="component-list">
    <el-row class="article-list" v-for="(article,index) in articles">
      <el-card class="card">

        <div slot="header" class="clearfix" style="text-align: left">
          <span  class="card-title">{{article.title}}</span>
          <el-button class="card-button" @click="lookComment(index)" type="text">查看评论</el-button>
          <el-button class="card-button" @click="openArticle(index)" type="text">查看文章</el-button>
          <!-- <el-button class="card-button" @click="Release(index)" type="text">发布评论</el-button> -->
        </div>

        <div slot="default" class="card-body">
          <div class="card-body-el">
            <span class="card-body-el-title">作者：</span>
            <span>{{article.author}}</span>
          </div>

          <div class="card-body-el">
            <span class="card-body-el-title">审稿人：</span>
            <span>{{article.review}}</span>
          </div>

          <div class="card-body-el">
            <span class="card-body-el-title">关键字：</span>
            <span v-for="word in article.keywords">{{word}} </span>
          </div>

          <div class="card-body-el">
            <span class="card-body-el-title" style="color: grey">评论：</span>
            <span style="color: grey">{{getAbstract(index)}}</span>
          </div>
        </div>

      </el-card>
    </el-row>

    <el-row>
      <el-pagination
          background layout="prev, pager, next"
          :total="100"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data() {
    let page;
    return {
      page,
    }
  },
  props: {
    articles: Array
  },
  methods: {
    openArticle: function(index) {
      alert("打开：" + this.articles[index].title);
    },
    // Release: function(index) {
    //   alert("发布：" + this.articles[index].title);
    // },
    lookComment: function(index) {
      alert("查看评论：" + this.articles[index].title);
    },
    getAbstract: function(index) {
      const str = this.articles[index].comment
      const length = str.length;
      const lenToShow = 100;
      if (length < lenToShow) {
        return str;
      } else {
        return str.substring(0, lenToShow) + "...";
      }
    },
  },
}
</script>

<style scoped>
.component-list .article-list .card {
  margin: 10px 70px 10px 0;
}

.component-list .card-body {
  text-align: left;
}

.component-list .card-button {
  float: right;
  padding: 3px 0;
  font-size: medium;
  margin: 10px;
}


.component-list .card-title {
  font-weight: bold;
  color: #409eff;
  font-size: large;
}

.component-list .card-body-el {
  padding-bottom: 10px;
}

.component-list .card-body-el-title {
  font-weight: bold;
}
</style>