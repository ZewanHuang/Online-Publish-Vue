<template>
  <div class="article">
    <article-detail :article="article"></article-detail>
    <hr/>
    <div class="button">
      <el-row>
        <el-col :span=5 :offset="4">
          <el-button type="primary" icon="el-icon-view" @click="read">在线阅读</el-button>
        </el-col>
        <el-col :span=5>
          <el-button type="default" icon="el-icon-download" @click="download">下载文章</el-button>
        </el-col>
        <el-col :span=5>
          <el-button type="primary" plain icon="el-icon-s-comment" @click="toReview">编写评论</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import articleDetail from "../../../../../components/common/article_detail";
export default {
  name: "reviewArticleCenter-Article",
  props: ['rid'],
  components: {
    articleDetail
  },
  data() {
    return {
      article: {},
      url: '',
    }
  },
  created() {
    const formData = new FormData();
    formData.append('remark_id', this.rid);
    this.$axios({
      method: 'post',
      url: '/search_exact/',
      data: formData,
    })
    .then(res => {
      if (res.data.status_code === '2000') {
        this.article = JSON.parse(res.data.article);
        this.url = '/api' + this.article.article_address;
      }
    })
    .catch(err => {
      this.$router.replace('/PageNotFound');
    })
  },
  methods: {
    read: function () {
      let url_read = this.url;
      if (this.url.endsWith('pdf')) {
        url_read = this.url;
      } else {
        // available just to deploy online
        url_read = 'https://view.officeapps.live.com/op/view.aspx?src=' + 'https://zewan.top' + this.url;
      }
      window.open(url_read, '_blank');
    },
    download: function () {
      this.$message.success('下载成功!');
    },
    toReview:function (){
      this.$router.replace({name:'reviewArticleCenter-ReviewEdit'})
    }
  }

}
</script>

<style>
.article {
  padding: 0 80px;
}
.button{
  padding-top: 20px;
}

</style>