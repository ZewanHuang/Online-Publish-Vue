<template>
    <div class="reader_manage">
      <div class="left">
        <el-button type="" @click="dialogFormVisible = true">添加读者</el-button>
      </div>

      <el-dialog title="添加读者" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off" show-password></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addReader">确 定</el-button>
        </div>
      </el-dialog>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="200">
      </el-table-column>

      <el-table-column
        prop="email"
        label="邮箱"
        width="250">
      </el-table-column>
      <el-table-column
        prop="time"
        label="注册时间"
        width="200">
      </el-table-column>
      <el-table-column
          prop="hasConfirmed"
          align="center"
          label="是否已验证"
          width="120">
      </el-table-column>
      <el-table-column label="操作" width="150px" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="opencenter(scope.row.username)">访问</el-button>
          <el-button
            size="mini"
            @click="deleteReader(scope.row.username)">删除</el-button>
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
  name: "reader_manage",
  data() {
    return {
      input: '',
      tableData: [],

      dialogFormVisible: false,
      form: {
        username: '',
        email: '',
        password: '',
      },
      formLabelWidth: '120px',
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/editor/get_readers/',
    })
    .then(res => {
      this.tableData = JSON.parse(res.data.readers);
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods:{
    opencenter(index) {
      this.$router.push('/' + index +'/info')
    },
    addReader() {
      const formData = new FormData();
      formData.append('username', this.form.username);
      formData.append('email', this.form.email);
      formData.append('password', this.form.password);

      this.$axios({
        method: 'post',
        url: '/editor/add_reader/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('添加成功！');
            this.dialogFormVisible = false;
            setTimeout(()=> {
              location.reload();
            },1500);
            break;
          case '4001':
            this.$message.error('用户名重复！');
            break;
          case '4002':
            this.$message.error('邮箱已注册！');
            break;
          case '4003':
            this.$message.error('密码须为8-18个字符，且同时包含英文字母与数字！');
            break;
          case '3001':
            this.$message.error('请检查填写的信息！');
            break;
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    deleteReader(index) {
      this.$confirm('此操作将永远删除该读者, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const formData = new FormData();
        formData.append('username', index);
        this.$axios({
          method: 'post',
          url: '/editor/del_user/',
          data: formData,
        })
        .then(res => {
          switch (res.data.status_code) {
            case '2000':
              this.$message.success('删除成功！');
              setTimeout(() => {
                location.reload();
              }, 1500);
              break;
            case '4001':
              this.$message.error('用户不存在！');
              break;
            case '4002':
              this.$message.error('删除失败！');
              break;
          }
        })
        .catch(err => {
          console.log(err);
        })
      }).catch(() => {
        this.$message('已取消删除');
      });
    },
  }
}

</script>

<style>
.reader_manage .left {
  text-align: left;
}
.el-dialog {
  width: 35%;
  height: 380px;
}
.reader_manage .el-form-item__label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
  width: 70px !important;
}

.box {
  margin: 20px;
}
</style>