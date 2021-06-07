<template>
    <div>
        <!-- <p>人员信息管理界面</p> -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="用户名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="120">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="education"
        label="教育经历"
        width="120">
      </el-table-column>
      <el-table-column
        prop="workplace"
        label="工作单位"
        width="120">
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
  name: "person_manage",
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
      }
}

</script>