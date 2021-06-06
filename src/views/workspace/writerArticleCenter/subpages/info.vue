<template>
  <div class="article-info">
    <article-detail :article="article"></article-detail>
    <hr/>
    <div class="button">
      <el-row>
        <el-col :span=5 :offset="7">
          <el-button type="primary" icon="el-icon-view" @click="read">在线阅读</el-button>
        </el-col>
        <el-col :span=5>
          <el-button type="default" icon="el-icon-download" @click="download">下载文章</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import articleDetail from "../../../../components/common/article_detail";

export default {
  name: "info",
  components: {
    articleDetail
  },
  data() {
    return {
      article: {
        title: "图谱建模基础下海量网络流量的数据挖掘",
        author: "易灿 刘彦姝",
        abstract: "随着移动网络流量数据在无线通信网络流量中的比例大幅增长,使其在语音通信业务逐渐饱和的趋势下," +
            "必须通过良好的互联网业务流量来进行网络端口的运营。文章首先对网络流量数据挖掘的重要意义进行说明;" +
            "其次,通过分析用户网页浏览过程。创建出请求依赖图;" +
            "最后,提出网络流量数据挖掘的有效识别算法,为流量挖掘提供图谱建模基础。",
        keywords: "移动互联网 网络流量",
        type: "科学杂志",
      },
    }
  },
  methods: {
    read: function () {
      alert("跳转至《" + this.article.title + "》的链接")
    },
    download: function () {
      alert("下载《" + this.article.title + "》")
    }
  }
}
</script>

<style>
.article-info {
  padding: 0 100px;
  text-align: center;
}

.article-info .button {
  margin: 40px;
}

.article-info .el-button {
  font-size: 16px;
}

.article-info .el-button--primary {
  color: #FFF;
  background-color: #5cc0de;
  border-color: #5cc0de;
}

.article-info .el-button--primary:hover {
  background-color: #7acdea;
  border-color: #7acdea;
}

.article-info .el-button--default {
  color: #5cc0de;
  background-color: white;
  border-color: #5cc0de;
}

.article-info .el-button--default:hover {
  background-color: #eafaff;
}
</style>