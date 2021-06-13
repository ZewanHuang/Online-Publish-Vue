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
      <el-table-column label="操作" width="100px">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="openArt(scope.row.aid)">查看文章</el-button>


          <el-button type="primary" @click="openBox" size="mini">分配</el-button>
          <el-dialog
              class="abow_dialog"
              title="分配审稿人"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">

            <el-checkbox-group v-model="checkList" v-for="review in reviewList" @change="selectBox">
              <el-checkbox :label=review.name class="choice"></el-checkbox>
            </el-checkbox-group>

            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="handleReview(scope.row.aid)">确 定</el-button>
            </span>
          </el-dialog>

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
      checkList: [],
      reviewList:[],
      dialogVisible: false,

      reviews: '',
    };
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
  methods: {
    openArt(index){
      this.$router.push('/article/' + index);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    openBox() {
      this.$axios({
        method: 'get',
        url: '/editor/get_reviews_name/',
      })
      .then(res => {
        this.reviewList = JSON.parse(res.data.reviews)
      })
      .catch(err => {
        console.log(err);
      })
      this.dialogVisible = true;
    },
    handleReview(index) {
      const formData = new FormData();
      formData.append('reviews', this.reviews);
      formData.append('aid', index);

      this.$axios({
        method: 'post',
        url: '/editor/allot/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('成功为文章分配指定审稿人！');
            location.reload();
            break;
          case '2001':
            this.$message.success('成功为文章随机分配一位审稿人！');
            break;
          case '4005':
            this.$message.error('您指定的审稿人不存在！');
            break;
          default:
            this.$message.error('分配审稿人失败！');
            break;
        }
      })
      .catch(err => {
        console.log(err);
      })
      this.dialogVisible = false;
    },
    selectBox(val) {
      this.reviews = val.toString();
    },
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
  .choice{
    width: 90%;
    height: 40px;
    border: #409EFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin: 5px;
    padding:5px;
  }
  .el-checkbox__label {
    display: inline-block;
    padding-left: 40%;
    padding-top: 10px;
    line-height: 19px;
    font-size: 15px;
}

.el-dialog__body{
    overflow-y: auto;
    height: 400px;
  }


</style>