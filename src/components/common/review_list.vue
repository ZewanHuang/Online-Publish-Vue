<template>
  <div class="review-list">
    <el-row class="review" v-for="(review, index) in reviewList">

      <el-row>
        <el-col :span=2 class="review-portrait">
        </el-col>
        <el-col :span=10 class="review-author">
          {{ review.reviewer }}
        </el-col>
        <el-col :span=4 :offset=8 class="review-button">
          <el-button icon="el-icon-message" @click="contact(index)">
            邮件联系
          </el-button>
        </el-col>
      </el-row>

      <div class="review-card">
        {{ review.content }}
        <br/><br/>
        <div class="review-time">
          更新时间：{{ review.time }}
        </div>
      </div>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "review_list",
  props: {
    reviewList: Array
  },
  data() {
    return {

    }
  },
  methods: {
    contact: function (index) {
      location.href = 'mailto:' + this.reviewList[index].email;
    }
  },
}
</script>

<style>
.review-list {
  text-align: left;
}

.review-list .review {
  margin-bottom: 20px;
}

.review-list .review-portrait {
  background-image: url('../../assets/portrait.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 60px;
  height: 60px;
  vertical-align: middle;
}

.review-list .review-author {
  padding-left: 15px;
  font-size: 20px;
  font-weight: bold;
  line-height: 60px;
}

.review-list .review-button {
  line-height: 60px;
  text-align: right;
}

.review-list .review-card {
  padding: 16px 16px;
  background-color: #ddeff5;
  border-radius: 5px;
  border-left: 5px solid #5cc0de;
  margin: 20px 0;
}

.review-list .review-time {
  font-style: italic;
  color: grey;
}

.review-list .el-button--default {
  color: #5cc0de;
  background-color: white;
  border-color: #5cc0de;
}

.review-list .el-button--default:hover {
  background-color: #eafaff;
}
</style>