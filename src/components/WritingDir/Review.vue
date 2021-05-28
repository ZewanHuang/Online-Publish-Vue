<template>
  <div class="review">
    <el-row class="search">
      <el-col span="6">
        <el-select v-model="value">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col span="14">
        <el-form ref="form" :model="form">
          <el-form-item label="">
            <el-input v-model="form.title" ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col span="4">
        <el-button type="primary" icon="el-icon-search" @click="printMode">搜索文章</el-button>
      </el-col>
    </el-row>
    <hr/>

    <el-row class="review-list" v-for="(review, index) in reviewList">
      <el-row>
        <el-col span="16">
        <span class="review-title">
        对文章《{{review.title}}》的评论
        </span>
          <br><br>
          <span style="font-weight: bold">审稿人：</span>
          <span>{{review.author}}</span>
          <br><br>
          <span style="font-weight: bold">关键词：</span>
          <span v-for="word in review.keywords">{{word}} </span>
        </el-col>

        <el-col span="8" class="button">
          <el-button style="margin-top:35px">联系审稿人</el-button>
          <el-button type="success">查看评论</el-button>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Review",
  data() {
    return {
      form: {
        title: '',
      },
      value: '选项0',
      options: [
        {
          value: '选项0',
          label: '搜索全部'
        },
        {
          value: '选项1',
          label: '按标题搜索'
        },
        {
          value: '选项2',
          label: '按作者搜索'
        },
      ],
      reviewList:[
        {
          title: '智能信息采集器软件开发实践',
          author: '傅骏',
          keywords: ['爬虫技术', '信息采集', 'python', '二次开发', 'xpath'],
        },
        {
          title: '企业智慧移动办公平台创新型研究',
          author: '黄刚',
          keywords: ['信息科技', '经济与管理科学'],
        },
        {
          title: '远程监控系统设计',
          author: '吕俊蓉',
          keywords: ['物联网技术', '远程控制', '恒温恒湿箱', 'web端', 'NB-IoT无线传输模块'],
        },
        {
          title: '企业智慧移动办公平台创新型研究',
          author: '黄刚',
          keywords: ['信息科技', '经济与管理科学'],
        },
      ],
    }
  },
  methods: {
    printMode: function() {
      console.log(this.value)
    }
  },
}
</script>

<style>
.review {
  text-align: center;
  padding: 30px;
}

.review .review-list {
  text-align: left;
}

.review .review-list .review-title {
  font-size: large;
  font-weight: bold;
  color: #409eff;
}
</style>