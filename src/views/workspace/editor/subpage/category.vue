<template>
  <div class="article_category">
    <div class="left">
      <el-button type="" @click="dialogFormVisible = true">添加类目</el-button>
    </div>

    <el-dialog title="添加读者" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input
              v-model="form.category"
              autocomplete="off"
              placeholder="类别字数不超过10个字符"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类描述" :label-width="formLabelWidth">
          <el-input
              v-model="form.description"
              autocomplete="off"
              placeholder="描述字数不超过20个字符"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCategory">确 定</el-button>
      </div>
    </el-dialog>

    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="类别ID"
          width="200">
      </el-table-column>

      <el-table-column
          prop="category"
          label="文章类别"
          width="200">
      </el-table-column>

      <el-table-column
          prop="description"
          label="描述"
          width="400">
      </el-table-column>

      <el-table-column label="操作" width="100px">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="deleteCategory(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      tableData: [],

      dialogFormVisible: false,
      form: {
        category: '',
        description: '',
      },
      formLabelWidth: '120px',
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: '/editor/get_category/',
    })
    .then(res => {
      this.tableData = JSON.parse(res.data.info);
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    addCategory() {
      const formData = new FormData();
      formData.append('category', this.form.category);
      formData.append('description', this.form.description);

      this.$axios({
        method: 'post',
        url: '/editor/add_category/',
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
            this.$message.error('类别名重复！');
            break;
          case '4002':
            this.$message.error('类别名不得超过10个字符！');
            break;
          case '4003':
            this.$message.error('类别描述不得超过20个字符！');
            break;
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    deleteCategory(index) {
      this.$confirm('此操作将可能会影响已发布文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const formData = new FormData();
        formData.append('id', index);
        this.$axios({
          method: 'post',
          url: '/editor/del_category/',
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
              this.$message.error('类别不存在！');
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

<style scoped>

</style>