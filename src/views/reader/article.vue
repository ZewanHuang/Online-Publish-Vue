<template>
  <div class="article-reader">
    <article-detail :article="article"></article-detail>
    <el-row class="button">
      <el-col :span=6 :offset=6>
        <el-button type="primary" icon="el-icon-view" @click="read">在线阅读</el-button>
      </el-col>
      <el-col :span=6>
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
      let url_read = '';
      if (this.url.endsWith('pdf')) {
        url_read = this.url;
      } else {
        // available just to deploy online
        url_read = 'https://view.officeapps.live.com/op/view.aspx?src=' + this.GLOBAL.baseurl + this.url;
      }
      window.open(url_read, '_blank');
      const formData = new FormData();
      formData.append('aid', this.aid);
      this.$axios({
        method: 'post',
        url: '/add_read_times/',
        data: formData,
      })
      .catch(err => {
        console.log(err);
      })
    },
    download: function () {
      this.$message.success('下载成功!');
      const formData = new FormData();
      formData.append('aid', this.aid);
      this.$axios({
        method: 'post',
        url: '/add_download_times/',
        data: formData,
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
  width: 100%;
  padding-top: 60px;
}
</style>