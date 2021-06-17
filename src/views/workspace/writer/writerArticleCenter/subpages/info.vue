<template>
  <div class="article-info">
    <article-detail :article="article"></article-detail>
    <hr/>
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
import articleDetail from "../../../../../components/common/article_detail";

export default {
  name: "info",
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
    }
  }
}
</script>

<style>
.article-info {
  padding: 0 100px;
  text-align: center;
}

.article-info .button {
  margin: 40px;
}

.article-info .el-button {
  font-size: 16px;
}

.article-info .el-button--primary {
  color: #FFF;
  background-color: #5cc0de;
  border-color: #5cc0de;
}

.article-info .el-button--primary:hover {
  background-color: #7acdea;
  border-color: #7acdea;
}

.article-info .el-button--default {
  color: #5cc0de;
  background-color: white;
  border-color: #5cc0de;
}

.article-info .el-button--default:hover {
  background-color: #eafaff;
}
</style>