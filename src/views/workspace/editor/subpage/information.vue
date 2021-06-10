<template>
    <div id="box">
        <el-row>
        <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
            <img src="../../../../assets/reader.png" class="image" alt="reader">
            <div style="padding: 14px;">
                <span>读者</span><br>
                <span class="num">{{ user.reader }}</span>
                <span>人</span>
                <div class="bottom clearfix">
                <el-button type="text" class="button" @click="goReader">查看详情</el-button>
                </div>
            </div>
            </el-card>
        </el-col>

        <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
            <img src="../../../../assets/writer.jpg" class="image" alt="writer">
            <div style="padding: 14px;">
                <span>作者</span><br>
                <span class="num">{{ user.writer }}</span>
                <span>人</span>
                <div class="bottom clearfix">
                <el-button type="text" class="button" @click="goWriter">查看详情</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
            <img src="../../../../assets/taster.png" class="image" alt="taster">
            <div style="padding: 14px;">
                <span>审稿人</span><br>
                <span class="num">{{ user.review }}</span>
                <span>人</span>
                <div class="bottom clearfix">
                <el-button type="text" class="button" @click="goReview">查看详情</el-button>
                </div>
            </div>
            </el-card>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
            <img src="../../../../assets/reviews.png" class="image" alt="reviews">
            <div style="padding: 14px;">
                <span>评论</span><br>
                <span class="num">{{ remarkCount }}</span>
                <span>条</span>
                <div class="bottom clearfix">
                <!-- <el-button type="text" class="button" @click="goComment">查看详情</el-button> -->
                </div>
            </div>
            </el-card>
        </el-col>


        <el-col :span="8">
            <el-card :body-style="{ padding: '0px' }">
            <img src="../../../../assets/art.jpg" class="image" alt="art">
            <div style="padding: 14px;">
                <span>文章</span><br>
                <span class="num">{{ articleCount }}</span>
                <span>篇</span>
                <div class="bottom clearfix">
                </div>
            </div>
            </el-card>
        </el-col>

        <el-row :gutter="12" width="25%">
          <el-col :span="8" class="item">
            <el-card shadow="always" class="item">
              <span>待审核文章 </span>
              <a href="toJudge_art" class="num2">{{ article.testing }}</a>
              <span> 篇</span>
            </el-card>
          </el-col>
          <el-col :span="8" class="item">
            <el-card shadow="always" class="item">
              <span>已分配文章 </span>
              <a href="judged_art" class="num2">{{ article.contribute }}</a>
              <span> 篇</span>
            </el-card>
          </el-col>
          <el-col :span="8" class="item">
            <el-card shadow="always" class="item">
              <span>待处理文章 </span>
              <a href="toDeal_art" class="num2">{{ article.toDeal }}</a>
              <span> 篇</span>
            </el-card>
          </el-col>
          <el-col :span="8" class="item">
            <el-card shadow="always" class="item">
              <span>已发布文章 </span>
              <a href="published_art" class="num2">{{ article.done }}</a>
              <span> 篇</span>
            </el-card>
          </el-col>
        </el-row>

    </el-row>
    </div>
</template>

<style>
#box{
  margin: 10px;
}

.num{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 40px;
}

.num2{
  color: rgb(34, 141, 241);
}
.item{
  margin:1%;
}

.el-col-8 {
    margin: 1% 3% 1% 3%;
    width: 25%;
    /* height: 30%; */
}

  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),

      user: {},
      article: {},
      remarkCount: 0,
      articleCount: 0,
    };
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/editor/count/',
    })
    .then(res => {
      this.user = JSON.parse(res.data.user)
      this.article = JSON.parse(res.data.article)
      this.remarkCount = res.data.remarkCount
      this.articleCount = res.data.articleCount
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods:{
    goReader(){
      this.$router.push("/editor/reader_manage");
    },
    goWriter(){
      this.$router.push("/editor/writer_manage");
    },
    goReview(){
      this.$router.push("/editor/review_manage");
    },

  }
}
</script>