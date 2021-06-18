<template>
  <div class="editor-article">
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

<!--    <el-divider/>-->
    <div class="comment">
      <div v-for="(item,i) in comments" :key="i" class="author-title reply-father">
        <el-avatar class="header-img" :size="40" :src="item.avatar"></el-avatar>
        <div class="author-info">
          <span class="author-name" @click="contact(item.email)">{{ item.reviewer }}</span>
          <span class="author-time">{{ item.time }}</span>
        </div>
        <div class="talk-box">
          <p>
            <span class="reply">{{ item.content }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleDetail from "../../../../../../components/common/article_detail";

export default {
  name: "comment",
  props: ['aid'],
  components: {
    articleDetail
  },
  data() {
    return {
      article: {},
      url: '',
      comments:[],
    }
  },
  mounted() {
    const formData = new FormData();
    formData.append('article_id', this.aid);
    this.$axios({
      method: 'post',
      url: '/editor/get_article_detail/',
      data: formData,
    })
    .then(res => {
      if (res.data.status_code === '2000') {
        this.article = JSON.parse(res.data.article);
        this.comments = JSON.parse(res.data.remarks);
        this.url = '/api' + this.article.article_address;
      }
    })
    .catch(err => {
      this.$router.replace('/PageNotFound');
    })
  },
  methods: {
    contact(index) {
      location.href = 'mailto:' + index;
    },
    read: function () {
      let url_read = this.url;
      if (this.url.endsWith('pdf')) {
        url_read = this.url;
      } else {
        // available just to deploy online
        url_read = 'https://view.officeapps.live.com/op/view.aspx?src=' + this.GLOBAL.baseurl + this.url;
      }
      window.open(url_read, '_blank');
      // const formData = new FormData();
      // formData.append('aid', this.aid);
      // this.$axios({
      //   method: 'post',
      //   url: '/add_read_times/',
      //   data: formData,
      // })
      // .catch(err => {
      //   console.log(err);
      // })
    },
    download: function () {
      this.$message.success('下载成功!');
      // const formData = new FormData();
      // formData.append('aid', this.aid);
      // this.$axios({
      //   method: 'post',
      //   url: '/add_download_times/',
      //   data: formData,
      // })
      // .catch(err => {
      //   console.log(err);
      // })
    }
  }
}
</script>

<style scoped>
.editor-article{
  width: 60%;
  margin-top: 30px;
}

.editor-article .button{
  width: 100%;
  padding-top: 60px;
}
.editor-article .author-title {
  border-bottom: 1px solid rgba(178,186,194,.3)
}
.editor-article .header-img {
  display: inline-block;
  vertical-align: top;
}
.editor-article .author-info {
  display: inline-block;
  margin-left: 5px;
  width: 60%;
  height: 40px;
  line-height: 20px;
}
.editor-article .author-name {
  color: #000;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.editor-article .author-time {
  font-size: 14px;
}
.editor-article span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.editor-article .reply {

}
.comment {
  margin-top: 20px;
  text-align: left;
}

</style>