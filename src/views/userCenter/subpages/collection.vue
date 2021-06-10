<template>
  <div class="collection">
    <el-collapse accordion v-if="hasCollection">
      <el-collapse-item v-for="(collection, index) in collectionList" :title=collection.title :name=index>
        <span class="item-title">作者：</span>
        <span class="item-content">{{collection.author}}</span>
        <br>
        <span class="item-title">摘要：</span>
        <span class="item-content">{{collection.abstract}}</span>
        <div class="item-delete">
          <el-button type="success" icon="el-icon-search" circle @click="openArticle(index)"></el-button>
          <el-button type="primary" icon="el-icon-message" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteCollection(index)"></el-button>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="non-collections">
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
      url: '/get_collect/',
      data: formData
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.hasCollection = true;
          this.collectionList = JSON.parse(res.data.collections);
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
      alert("打开：" + this.collectionList[index].title);
    },
    deleteCollection: function(index) {
      console.log(index);
      News.methods.addNewNews(0, this.collectionList[index].title);
      this.collectionList.splice(index, 1);
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