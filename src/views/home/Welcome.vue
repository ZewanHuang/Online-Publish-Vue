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
              <el-col span="5" offset="2">
                <el-row>
                  用户
                </el-row>
                <el-row>
                  <span style="font-weight: bold;font-size: 30px">600</span>万+
                </el-row>
              </el-col>
              <el-col span="5">
                <el-row>
                  作者
                </el-row>
                <el-row>
                  <span style="font-weight: bold;font-size: 30px">200</span>万+
                </el-row>
              </el-col>
              <el-col span="5">
                <el-row>
                  审稿人
                </el-row>
                <el-row>
                  <span style="font-weight: bold;font-size: 30px">10</span>万+
                </el-row>
              </el-col>
              <el-col span="5">
                <el-row>
                  文章
                </el-row>
                <el-row>
                  <span style="font-weight: bold;font-size: 30px">1000</span>万+
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
  methods: {
    gotoregister() {
      this.$router.replace('/register')
    },
    gotohome() {
      this.$router.replace('/')
    },
  }
}
</script>

<style>
.welcome{
  background: url("../../assets/welcome-book.png") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
}
.welcome .msg-box{
  text-align: center;
  margin-top: 100px;
  margin-left: 50px;
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
</style>