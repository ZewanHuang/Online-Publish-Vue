<template>
  <div class="article-detail">

    <div class="title">
      {{article.title}}
    </div>

    <div class="author">
      {{article.author}}
    </div>

    <div class="content">
      <el-row class="content-item">
        <el-col :span="2" class="item-title">
          摘要：
        </el-col>
        <el-col :span="22" class="item-text">
          {{ article.abstract }}
        </el-col>
      </el-row>

      <el-row class="content-item">
        <el-col :span="2" class="item-title">
          关键词：
        </el-col>
        <el-col :span="22" class="item-text">
          {{ article.keywords }}
        </el-col>
      </el-row>

      <el-row class="content-item">
        <el-col :span="2" class="item-title">
          类别：
        </el-col>
        <el-col :span="22" class="item-text">
          {{ article.type }}
        </el-col>
      </el-row>
    </div>

    <div class="copyright">
      <i class="el-icon-s-promotion">云端出版系统网络首发。未经许可，禁止转载、摘编。</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "article_detail",
  props: {
    article: Object
  },
}
</script>

<style>
.article-detail .title {
  padding-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
  color: #606266;
}

.article-detail .author {
  padding-bottom: 30px;
  font-size: 20px;
}

.article-detail .content {
  text-align: left;
}

.article-detail .content-item {
  padding-bottom: 20px;
}

.article-detail .item-title {
  font-size: 18px;
  font-weight: bold;
}
.article-detail .item-text {
  line-height: 28px;
  font-size: 18px;
}

.article-detail .copyright {
  width: 100%;
  padding-bottom: 20px;
  text-align: right;
  font-size: 14px;
  color: darkgray;
}
</style>