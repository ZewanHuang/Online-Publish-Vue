<template>
  <div class="component-list">
    <el-row class="submessage-list" v-for="(submessage,index) in submessages">
        <el-timeline-item  timestamp="2018/4/12" placement="top">
        <el-card>
            <h4  @click="lookMessage">{{submessage.context}}</h4>
            <p>{{submessage.author}} 提交于 {{submessage.time}}</p>
        </el-card>
        </el-timeline-item>
    </el-row>

    <el-row>
      <el-pagination
          background layout="prev, pager, next"
          :total="100"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "message_list",
  data() {
    let page;
    return {
      page,
    }
  },
  props: {
    submessages: Array
  },
  methods: {
    lookMessage: function(index) {
      alert("跳转到消息对应表单");
    },
    getAbstract: function(index) {
      const str = this.articles[index].comment
      const length = str.length;
      const lenToShow = 100;
      if (length < lenToShow) {
        return str;
      } else {
        return str.substring(0, lenToShow) + "...";
      }
    },
  },
}
</script>

<style scoped>
  .el-card {
    width: 700px !important;
  }
</style>