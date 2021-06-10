<template>
    <div>
        <!-- <p>人员信息管理界面</p> -->
    <input v-model="input" placeholder="请输入内容"/>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button circle icon="el-icon-plus"></el-button>

    <el-table
      :data="tableData"
      style="width: 100%"
      @row-click="opencenter">
      <el-table-column
        prop="id"
        label="用户名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="250">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="350">
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
      input: ''
    }
  },
  data() {
        return {
          tableData: [{
            id: '19373000',
            name: '王小虎',
            password: 'abcwxh',
            email: '1141415388@126.com'
          }, {
            id: '19373100',
            name: '王中虎',
            password: 'abcwzh',
            email: '1141415388@163.com'
          },{
            id: '19373200',
            name: '王大虎',
            password: 'abcwdh',
            email: '1141415388@qq.com'
          },{
            id: '19373000',
            name: '王小虎',
            password: 'abcwxh',
            email: '1141415388@126.com'
          }, {
            id: '19373100',
            name: '王中虎',
            password: 'abcwzh',
            email: '1141415388@163.com'
          },{
            id: '19373200',
            name: '王大虎',
            password: 'abcwdh',
            email: '1141415388@qq.com'
          },]
        }
      },
    methods:{
        opencenter() {
            this.$router.push({path: '/center'})
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