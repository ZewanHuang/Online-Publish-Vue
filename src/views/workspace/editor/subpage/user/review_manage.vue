<template>
    <div>
    <input v-model="input" placeholder="请输入内容"/>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button circle icon="el-icon-plus" @click="addPerson"></el-button>

    <el-table
      :data="tableData"
      style="width: 100%"
      @row-click="opencenter">
      <el-table-column
        prop="username"
        label="用户名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="realName"
        label="姓名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="350">
      </el-table-column>
      <el-table-column label="操作" width="150px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="opencenter(scope.row.username)">访问</el-button>
          <el-button
            size="mini"
            @click="openform">管理</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="margin: 20px">
    </el-pagination>
    </div> 
   
</template>

<script>
export default {
  name: "review_manage",
  data() {
    return {
      input: '',

      tableData: []
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/editor/get_reviews/',
    })
    .then(res => {
      this.tableData = JSON.parse(res.data.reviews);
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods:{
    opencenter(index) {
      this.$router.push('/' + index +'/info')
    },
    addPerson(){
      alert("打开添加人员表单");
    },
    openform(){
      alert("打开人员表单");
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
</style>