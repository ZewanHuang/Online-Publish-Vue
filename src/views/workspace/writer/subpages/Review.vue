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
      <el-col :span="4">
        <el-button type="primary" icon="el-icon-search" @click="printMode">搜索文章</el-button>
      </el-col>
    </el-row>

    <hr/><br/>

    <el-row class="review-list" v-for="(review, index) in reviewList">
      <el-row>
        <el-col :span="18">

          <span class="review-title">对文章《{{review.title}}》的评论</span>

          <div class="review-list-el" style="padding-top: 20px">
            <span class="review-list-el-title">审稿人：</span>
            <span>{{review.author}}</span>
          </div>

          <div class="review-list-el">
            <span class="review-list-el-title">关键字：</span>
            <span v-for="word in review.keywords">{{word}} </span>
          </div>

          <div class="review-list-el">
            <span class="review-list-el-title" style="color: grey">评论摘要：</span>
            <span style="color: grey">{{getAbstract(index)}}</span>
          </div>
        </el-col>

        <el-col :span="6" class="button">
          <el-button type="default" icon="el-icon-notebook-2" @click="openArticle(index)">原文</el-button>
          <el-button type="primary" icon="el-icon-chat-dot-square" @click="openReview(index)">评论</el-button>
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
          author: '傅骏 XXX XX',
          keywords: ['爬虫技术', '信息采集', 'python', '二次开发', 'xpath'],
          abstract: "阅读广泛，积累了很多的词句因而在描述人物的动作，神情时，能用贴切的词形象地表达出来。" +
              "我为有这样的文章高兴，只要继续努力你的作家梦定会圆。"
        },
        {
          title: '企业智慧移动办公平台创新型研究',
          author: '黄刚',
          keywords: ['信息科技', '经济与管理科学'],
          abstract: "能过合理的想象，反映出意味深长的哲理，行文流畅，简洁，充分发挥了自我的想象力，是一篇不错的文章。" +
              "清逸婉丽，流畅连贯，尤其人物语言幽默风趣，再加上一些精妙词语的使用，无形中为文章增添了不少情趣。"
        },
        {
          title: '远程监控系统设计',
          author: '吕俊蓉',
          keywords: ['物联网技术', '远程控制', '恒温恒湿箱', 'web端', 'NB-IoT无线传输模块'],
          abstract: "这个很不错"
        },
        {
          title: '企业智慧移动办公平台创新型研究',
          author: '黄刚',
          keywords: ['信息科技', '经济与管理科学'],
          abstract: "楼上写的是啥？"
        },
      ],
    }
  },
  methods: {
    printMode: function() {
      console.log(this.value)
    },
    openArticle: function(index) {
      alert("打开：" + this.reviewList[index].title);
    },
    openReview: function(index) {
      alert("打开：《" + this.reviewList[index].title + "》的评论");
    },
    getAbstract: function(index) {
      const str = this.reviewList[index].abstract
      const length = str.length;
      const lenToShow = 80;
      if (length < lenToShow) {
        return str;
      } else {
        return str.substring(0, lenToShow) + "...";
      }
    },
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

.review .button {
  text-align: right;
  margin-top: 50px;
}

.review .review-list .review-title {
  font-size: large;
  font-weight: bold;
  color: #2641b3;
}

.review .review-list-el {
  padding-bottom: 10px;
}

.review .review-list-el-title {
  font-weight: bold;
}
</style>