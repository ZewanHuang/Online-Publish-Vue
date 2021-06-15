<template>
  <div>
    <input v-model="input" placeholder="请输入内容"/>
    <el-button icon="el-icon-search" circle></el-button>

    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="文章名">
              <span>{{ props.row.title }}</span>
            </el-form-item>
            <el-form-item label="作者">
              <span>{{ props.row.writer }}</span>
            </el-form-item>
            <el-form-item label="审稿人">
              <span>{{ props.row.review }}</span>
            </el-form-item>
            <el-form-item label="评论">
              <span>{{ props.row.content }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
          label="审稿人"
          prop="review"
          width="100px">
      </el-table-column>
      <el-table-column
          label="文章名"
          prop="title"
          width="300px">
      </el-table-column>
      <el-table-column
          label="作者"
          prop="writer"
          width="160px">
      </el-table-column>
      <el-table-column
          label="提交时间"
          prop="time"
          width="160px">
      </el-table-column>
      <el-table-column label="操作" width="250px" align="center">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="openArt(scope.row.aid)">查看文章</el-button>
          <el-button
              size="mini"
              @click="contact(scope.row.email)">联系审核</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "comment_done",
  data() {
    return {
      input: '',
      tableData: [],
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/editor/get_remarks_done/',
    })
    .then(res => {
      this.tableData = JSON.parse(res.data.remarks);
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods:{
    openArt(index){
      this.$router.push('/editor/article/' + index);
    },
    contact(index) {
      location.href = 'mailto:' + index;
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
  margin-bottom: 10px;
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