<template>
  <div>
<!--    <input v-model="input" placeholder="请输入内容"/>-->
<!--    <el-button icon="el-icon-search" circle></el-button>-->
<!--    <el-button circle icon="el-icon-plus" @click="addArt"></el-button>-->

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
              <span>{{ props.row.realName }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.type }}</span>
            </el-form-item>
            <el-form-item label="关键词">
              <span>{{ props.row.key }}</span>
            </el-form-item>
            <el-form-item label="摘要">
              <span>{{ props.row.abstract }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
          label="作者"
          prop="realName"
          width="100px">
      </el-table-column>
      <el-table-column
          label="文章名"
          prop="title"
          width="350px">
      </el-table-column>
      <el-table-column
          label="分类"
          prop="type"
          width="100px">
      </el-table-column>
      <el-table-column
          label="提交时间"
          prop="time"
          width="200px">
      </el-table-column>
      <el-table-column label="操作" width="180px" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="openArt(scope.row.aid)">查看</el-button>
          <el-button
            size="mini"
            @click="delArt(scope.row.aid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="10"
      style="margin: 20px">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Published_art",
  data() {
    return {
      input: '',

      tableData: []
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/editor/get_articles_4/',
    })
    .then(res => {
      this.tableData = JSON.parse(res.data.info);
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods:{
    openArt(index){
      this.$router.push('/editor/article/' + index);
    },
    delArt(index) {
      const formData = new FormData();
      formData.append('article_id', index);
      this.$axios({
        method: 'post',
        url: '/editor/delete/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('删除成功！');
            setTimeout(()=> {
              location.reload();
            }, 1500);
            break;
          case '4002':
            this.$message.error('文章不存在！');
            break;
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>