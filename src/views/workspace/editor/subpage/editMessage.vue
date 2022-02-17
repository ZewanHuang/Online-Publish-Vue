<template>
  <div>
    <input v-model="input" placeholder="请输入内容"/>
    <el-button icon="el-icon-search" circle></el-button>
    <messageList :submessages="submessages"/>
  </div>
</template>

<script>
import messageList from "../../../../components/common/message_list.vue";

export default {
  name: "editmessage",
  components: {
    messageList,
  },
  data() {
    return {
      submessages: [
        {
          author:'易灿',
          time:'2021/6/10',
          context:'修改信息申请'
        },
        {
          author:'易灿',
          time:'2021/6/10',
          context:'新文章'
        },
        {
          author:'山火',
          time:'2021/6/10',
          context:'新评论'
        },
      ]
    }
}
}
</script>

<style>

  input{
  font-size: 12px;
  width: 650px;
  height: 15px;
  border: 1px solid black;
  border-radius: 20px;
  outline: none;
  padding: 10px;
  left: 0;
  }
.to-audit .article-box{
  margin-top: 30px;
  margin-bottom: 1px;
  text-align: left;
  width: 100%;
  height: auto;
  border: none;
}
.to-audit .article-box .title{
  color: #45c8f5;
  font-size: large;
  font-weight: bold;
  height: 30px;

}
.to-audit .article-box .keywords{
  height: 30px;
}
.to-audit .article-box .author{
  height: 30px;
}
.to-audit .article-box .abstract{
  color: #c9c9c9;
  height: 50px;
}
.to-audit .article-box .button{
  text-align: right;
  height: 40px;
}
.to-audit .article-box .button .el-button{
  height: 35px;
}

</style>