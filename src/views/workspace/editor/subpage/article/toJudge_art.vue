<template>
  <div>
    <input v-model="input" placeholder="请输入内容"/>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button circle icon="el-icon-plus" @click="addArt"></el-button>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="作者">
              <span>{{ props.row.realName }}</span>
            </el-form-item>
            <el-form-item label="分类">
              <span>{{ props.row.type }}</span>
            </el-form-item>
            <el-form-item label="文章名">
              <span>{{ props.row.title }}</span>
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
        width="80px">
      </el-table-column>
      <el-table-column
        label="文章名"
        prop="title"
        width="300px">
      </el-table-column>
      <el-table-column
        label="关键词"
        prop="key"
        width="250px">
      </el-table-column>
      <el-table-column
        label="提交时间"
        prop="time"
        width="100px">
      </el-table-column>
      <el-table-column label="操作" width="300px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="openArt(scope.row.aid)">查看文章</el-button>

          <el-dropdown @command="handleCommand">
              <el-button type="primary" size="mini" style="margin: 10px">
                分配<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command="王大明">王大明</el-dropdown-item>
              <el-dropdown-item command="王二明">王二明</el-dropdown-item>
              <el-dropdown-item command="王三明">王三明</el-dropdown-item>
            </el-dropdown-menu>

          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="50"
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

      tableData: [],
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/editor/get_articles_0/',
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
      this.$router.push('/article/' + index);
    },
    addArt(){
      alert("打开添加文章表单" );
    },
      handleCommand(command) {
        this.$message('设置'+ command+'为审稿人');
      }
  }
}

</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
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