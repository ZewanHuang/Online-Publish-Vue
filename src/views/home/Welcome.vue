<template>
  <div class="welcome" >
    <el-container >
      <el-main>
        <div class="msg-box">
          <el-col class="msg">
            <el-row class="title">
              <h1>网上出版平台</h1>
            </el-row>
            <el-row class="msg-row">
            <span>
              帮助作者更方便地投稿，促进作者与审稿人的交流，提供编辑统一管理的一体化平台。
            </span>
            </el-row>
            <el-row class="button-row">
              <el-button type="primary" @click="gotoregister">注册</el-button>
              <el-button @click="gotohome">进入</el-button>
            </el-row>
            <el-row class="data-row">
              <el-col span=5 offset=2>
                <el-row>
                  用户
                </el-row>
                <el-row>
                  <span style="font-weight: bold;font-size: 30px">{{ readers }}</span>+
                </el-row>
              </el-col>
              <el-col span=5>
                <el-row>
                  作者
                </el-row>
                <el-row>
                  <span style="font-weight: bold;font-size: 30px">{{ writers }}</span>+
                </el-row>
              </el-col>
              <el-col span=5>
                <el-row>
                  审稿人
                </el-row>
                <el-row>
                  <span style="font-weight: bold;font-size: 30px">{{ reviews }}</span>+
                </el-row>
              </el-col>
              <el-col span=5>
                <el-row>
                  文章
                </el-row>
                <el-row>
                  <span style="font-weight: bold;font-size: 30px">{{ articles }}</span>+
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </div>

      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name:'welcome',
  data() {
    return {
      readers: 0,
      writers: 0,
      reviews: 0,
      articles: 0,
    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/statistic/',
    })
    .then(res => {
      this.readers = res.data.readers;
      this.writers = res.data.writers;
      this.reviews = res.data.reviews;
      this.articles = res.data.articles;
    })
  },
  methods: {
    gotoregister() {
      this.$router.replace('/register')
    },
    gotohome() {
      this.$router.replace('/home')
    },
  }
}
</script>

<style>
.welcome{
  background: url("../../assets/vl.png") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
}
.welcome .msg-box{
  text-align: center;
  margin-top: 100px;
  margin-left: 120px;
  height: 400px;
  width: 40%;
}
.welcome .msg{
  background-color: rgba(255, 255, 255, 0.88);
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .12), 0 5px 10px rgba(0, 0, 0, .04);
  border-radius: 100px;
}

.welcome .msg-row{
  margin-left: 100px;
  margin-right: 100px;
  text-align: left;
}

.welcome .title{
  font-size: xx-large;
}

.welcome .button-row{
  margin-top: 40px;
  margin-bottom: 20px;
}

.welcome .button-row button{
  width: 200px;
  height: 50px;
  margin: 10px 20px;
}
@font-face {
  font-family: test;
  src: url('../../font/hanyixingkai.ttf');
}
</style>