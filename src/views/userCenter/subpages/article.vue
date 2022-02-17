<template>
  <div class="article">
    <div class="article-isAuthor" v-if="showArticle">
      <el-card v-for="(article, index) in articleList" class="box-card" v-if="hasArticles">
        <div slot="header" class="clearfix">
          <el-row>
            <el-col span=12>{{article.title}}</el-col>
            <el-col span=12 class="button">
              <el-button type="primary" icon="el-icon-search" circle @click="openArticle(index)"></el-button>
            </el-col>
          </el-row>
        </div>
        <div slot="default" class="card-body">
          <span class="item-title">作者：</span>
          <span class="item-content">{{article.writer}}</span>
          <br>
          <span class="item-title">摘要：</span>
          <span class="item-content">{{article.abstract}}</span>
        </div>
      </el-card>
      <div v-if="!hasArticles" class="non-article-text">
        <p>
          作者未发布文章
        </p>
      </div>
    </div>

    <div class="article-isNotAuthor" v-else-if="!isReview && !isEditor">
      <i class="el-icon-edit"></i>
      <br>
      <el-button class="el-button" type="primary" @click="applyToAuthor">点击成为作者</el-button>
    </div>
    <div v-else-if="isReview" class="non-article-text">
      <p>
        身份为审稿人，无权申请成为作者。有需求请<a :href="sendEmail">联系编辑</a>！
      </p>
    </div>
    <div v-else-if="isEditor" class="non-article-text">
      <p>
        身份为编辑，无权申请成为作者！
      </p>
    </div>
  </div>
</template>

<script>
import user from "../../../store/user";

export default {
  name: "Article",
  props: ['username'],
  data() {
    return {
      sendEmail: 'mailto:' + this.GLOBAL.email,

      is_self: false,
      isAuthor: false,
      isReview: false,
      isEditor: false,
      showArticle: false,
      hasArticles: false,
      articleList: [],
    }
  },
  created() {
    const userInfo = user.getters.getUser(user.state());
    if (userInfo && userInfo.user.usertype === '作者') {
      this.isAuthor = true;
    }
    if (userInfo && userInfo.user.usertype === '审稿人') {
      this.isReview = true;
    }
    if (userInfo && userInfo.user.usertype === '编辑') {
      this.isEditor = true;
    }

    const formData = new FormData();
    formData.append('username', this.username);
    this.$axios({
      method: 'post',
      url: '/userinfo/',
      data: formData,
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2001':
          this.is_self = true;
          this.showArticle = this.isAuthor;
          break;
        default:
          this.is_self = false;
          this.showArticle = true;
          break;
      }
    })
    .catch(err => {
      this.$router.replace('/PageNotFound');
    })
  },
  mounted() {
    const form_data = new FormData();
    form_data.append('username', this.username);
    // get articles
    this.$axios({
      method: 'post',
      url: '/search_list/',
      data: form_data,
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.hasArticles = true;
          this.articleList = JSON.parse(res.data.articles);
          break;
        case '4002':
          this.hasArticles = false;
          break;
        case '4005':
          this.isAuthor = false;
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    openArticle: function(index) {
      this.$router.push('/article/' + this.articleList[index].article_id);
    },
    applyToAuthor() {
      this.$axios({
        method: 'GET',
        url: '/apply/',
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('申请成功！');
            this.$store.dispatch('saveUserInfo', {user: {
                'usertype': '作者',
                'username': user.getters.getUser(user.state()).user.username,
                'confirmed': user.getters.getUser(user.state()).user.confirmed,
              }});
            window.location.href = '/' + user.getters.getUser(user.state()).user.username + '/info/article';
            break;
          case '4001':
            this.$message.warning('请先完成邮箱验证！');
            setTimeout(()=> {
              this.$router.push('/unverified_email');
            },1500);
            break;
          case '4002':
            this.$message.warning('请完善个人资料！');
            setTimeout(()=> {
              this.$router.push('/edit');
            },1500);
            break;
          case '4003':
            this.$message.warning('您已是作者，请勿重复申请！');
            break;
          default:
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
}
</script>

<style>
.article {
  margin: 10px;
  padding: 0 30px;
  height: auto;
}

.article-isAuthor {
  text-align: center;
}

.article-isAuthor .clearfix {
  text-align: left;
  font-size: large;
  font-weight: bold;
}

.article-isAuthor .box-card {
  margin: 10px 0;
  width: 100%;
  height: auto;
}

.article-isAuthor .card-body {
  text-align: left;
}

.article-isAuthor .item-title{
  font-weight: bold;
  font-size: large;
}

.article-isAuthor .item-content{
  font-size: large;
}

.article-isNotAuthor {
  text-align: center;
  font-size: 100px;
}

.article-isNotAuthor .el-button {
  width: 150px;
}

.non-article-text {
  padding-top: 50px;
}
</style>