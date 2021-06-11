<template>
  <div class="article-reader">
    <article-detail :article="article"></article-detail>
    <div class="button">
      <el-row>
        <el-col :span=5 :offset=7>
          <el-button type="primary" icon="el-icon-view" @click="read">在线阅读</el-button>
        </el-col>
        <el-col :span=5>
          <a :href=this.url download>
            <el-button
                type="default"
                icon="el-icon-download"
                @click="download"
            >下载文章</el-button>
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import articleDetail from "../../components/common/article_detail";

export default {
  name: "article",
  props: ['aid'],
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
    formData.append('article_id', this.aid);
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
      window.open(this.url, '_blank');
      this.$axios({
        method: 'post',
        url: '/add_read_times/',
      })
      .catch(err => {
        console.log(err);
      })
    },
    download: function () {
      this.$message.success('下载成功!');
      this.$axios({
        method: 'post',
        url: '/add_download_times/',
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>
.article-reader{
  width: 60%;
  margin-left: 20%;
  margin-top: 30px;
}

.article-reader .button{
  padding-top: 60px;
}
</style>