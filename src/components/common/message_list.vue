<template>
  <div class="msg-list">

      <el-timeline>
        <el-timeline-item
            class="msg"
            v-for="(msg, index) in msgList"
            :key="index"
            :timestamp="msg.time"
            placement="top">
          <el-card class="msg-card">

            <div slot="header" class="clearfix">
              <span class="header-text">{{ msg.title }}</span>
              <el-button icon="el-icon-delete" class="msg-header-button del" type="text"
                         @click="delMsg(index)"></el-button>
              <el-button icon="el-icon-star-off" class="msg-header-button like" type="text"
                         @click="likeMsg(index)"></el-button>
              <el-button icon="el-icon-bell" class="msg-header-button bell" type="text"
                         @click="alertMsg(index)"></el-button>
              <el-button icon="el-icon-finished" class="msg-header-button check" type="text"
                         @click="checkMsg(index)"></el-button>
            </div>

            <div class="msg-content">
              {{ msg.content }}
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>

  </div>
</template>

<script>
export default {
  name: "message_list",
  props: {
    msgList: Array,
    activeNum: Number,
  },
  methods: {
    checkMsg: function (index) {
      this.msgList[index].state = '2';
    },
    alertMsg: function (index) {
      this.msgList[index].state = '1';
    },
    likeMsg: function (index) {
      this.msgList[index].state = '3';
    },
    delMsg: function(index) {
      let arr = this.msgList;
      arr.splice(arr.indexOf(index),1);
    }
  }
}
</script>

<style>
.msg-list .msg-card {
  margin: 10px;
}

.msg-list .el-card__header {
  padding: 8px 15px;
  border-bottom: 1px solid #EBEEF5;
  box-sizing: border-box;
}

.msg-list .el-card__body {
  padding: 15px 15px;
}

.msg-list .clearfix {
  padding: 0;
}

.msg-list .msg-header-button {
  float: right;
  font-size: 22px;
  margin: -2px 0 -1px 14px;
  padding: 0;
}

.msg-list .header-text {
  font-weight: bold;
}

.msg-list .del {
  color: crimson;
}
.msg-list .bell {
  color: #faaf21;
}
.msg-list .del {
  color: crimson;
}
.msg-list .check {
  color: #01bf01;
}

</style>