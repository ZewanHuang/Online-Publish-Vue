<template>
    <div class="wm">
        <!-- <p>人员信息管理界面</p> -->
      <input v-model="input" placeholder="请输入内容"/>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button circle icon="el-icon-plus" @click="addPerson"></el-button>

      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="username"
          label="用户名"
          width="120px">
        </el-table-column>
        <el-table-column
          prop="realName"
          label="姓名"
          width="120px">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="220px">
        </el-table-column>
        <el-table-column
          prop="education"
          label="教育经历"
          width="150px">
        </el-table-column>
        <el-table-column
          prop="job"
          label="工作单位"
          width="120px">
        </el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="opencenter(scope.row.username)">访问</el-button>
            <el-button
            size="mini"
            @click="deleteWriter(scope.row.username)">删除</el-button>
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
  name: "writer_manage",
  data() {
    return {
      input: '',
      tableData: [],
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/editor/get_authors/',
    })
    .then(res => {
      this.tableData = JSON.parse(res.data.authors);
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods:{
    opencenter(index) {
      this.$router.push('/' + index +'/info')
    },
    deleteWriter(index) {

    },
  }
}

</script>

<style>
  .wm input{
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