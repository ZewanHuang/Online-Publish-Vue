<template>
  <div class="collection">
    <el-collapse accordion v-if="hasCollection">
      <el-collapse-item v-for="(collection, index) in collectionList" :title=collection.title :name=index>
        <span class="item-title">作者：</span>
        <span class="item-content">{{　collection.writer　}}</span>
        <br>
        <span class="item-title">摘要：</span>
        <span class="item-content">{{　collection.abstract　}}</span>
        <div class="item-delete">
          <el-button type="success" icon="el-icon-search" circle @click="openArticle(collection.article_id)"></el-button>
          <el-button type="primary" icon="el-icon-message" circle @click="sendEmail(collection.writer_email)"></el-button>

<!--          <el-button type="danger" icon="el-icon-delete" circle @click="deleteCollection(index)"></el-button>-->
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="non-collections" v-if="!hasCollection">
      <p>
        用户未收藏文章
      </p>
    </div>
  </div>
</template>

<script>
import News from "./activity.vue";

export default {
  name: "Collection",
  props:　['username'],
  data() {
    return {
      hasCollection: false,
      collectionList: []
    }
  },
  created() {
    const formData = new FormData();
    formData.append('username', this.username);
    this.$axios({
      method: 'post',
      url: '/collections/',
      data: formData
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.hasCollection = true;
          this.collectionList = JSON.parse(res.data.articles);
          break;
        case '4002':
          this.hasCollection = false;
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods: {
    openArticle: function(index) {
      this.$router.push('/article/'+index)
    },
    deleteCollection: function(index) {
      News.methods.addNewNews(0, this.collectionList[index].title);
      this.collectionList.splice(index, 1);
    },
    sendEmail: function (index) {
      location.href = 'mailto:' + index;
    }
  },
  compute: {
  },
}
</script>

<style>
.collection {
  margin: 10px;
  padding: 0 30px;
  text-align: left;
}

.collection .item-title{
  font-weight: bold;
  font-size: large;
}

.collection .item-content{
  font-size: large;
}

.collection .el-collapse-item__header {
  height: 80px;
  font-size: large;
}

.collection .item-delete {
  text-align: right;
  font-size: large;
  font-weight: bold;
}

.non-collections {
  text-align: center;
  padding-top: 50px;
}

</style>