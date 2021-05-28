<template>
  <div class="welcome">
    <el-row>
      <div class="msg">
        <h1>恭喜你注册成功！</h1>
      </div>
    </el-row>
    <el-row>
      <el-col span="8" offset="2"><h4 style="color: #808080">身份选择:</h4><br></el-col>

    </el-row>
    <el-row class="identity-choose">
      <el-col :span="6" offset="4">
          <el-card class="box-card" >
            <div slot="header" class="clearfix">
              <h4>读者</h4>
            </div>
            <img class="image" src="../assets/reader.png"><br>
            <span >读者是注册后的默认选项，无需申请</span>
            <div style="color: #808080;margin-top: 10px">这里是关于读者的描述...</div>
          </el-card>
      </el-col>
      <el-col :span="6">
          <el-card class="box-card" @click.native="gotoapply">
            <div slot="header" class="clearfix">
              <h4>成为审稿人</h4>
            </div>
            <img class="image" src="../assets/taster.png"><br>
            <span >点击申请成为审稿人</span>
            <div style="color: #808080;margin-top: 10px">这里是关于审稿人的描述...</div>
          </el-card>
      </el-col>
      <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <h4>成为编辑</h4>
            </div>
            <img class="image" src="../assets/editor.png"><br>
            <span >点击申请成为编辑</span>
            <div style="color: #808080;margin-top: 10px">这里是关于编辑的描述...</div>
          </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'msg',
    methods: {
      gotoapply() {
        this.$router.replace('/apply')
      }
    }
  }

</script>

<style>
.el-card__header {
  padding: 0;
  margin: 0;
}

.identity-choose{
  text-align: center;
}

.box-card:hover{
  margin-top: -5px;
}

.box-card {
  width: 300px;
  transition: all .5s;
  text-align: center;
}

.image {
  width: 100%;
  height: 100%;
  display: block;
  margin: 0;
}
</style>