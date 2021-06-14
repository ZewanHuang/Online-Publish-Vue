<template>
  <el-container class="message">

    <el-aside class="side-nav">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="white"
          text-color="#000"
          active-text-color="#147fd9"
      >
        <el-menu-item index="1" @click="toUnsaved">
          <i class="el-icon-warning"></i>
          <span slot="title">未读消息</span>
        </el-menu-item>
        <el-menu-item index="2" @click="toFinished">
          <i class="el-icon-warning-outline"></i>
          <span slot="title">已读消息</span>
        </el-menu-item>
        <el-menu-item index="3" @click="toSaved">
          <i class="el-icon-star-off"></i>
          <span slot="title">收藏消息</span>
        </el-menu-item>
      </el-menu>

    </el-aside>

    <el-main class="message-list">
      <message-list :msg-list="msgList" :active-num="2"></message-list>
    </el-main>

  </el-container>
</template>

<script>
import messageList from "../../components/common/message_list";

export default {
  name: "messageDone",
  components: {
    messageList,
  },
  data() {
    return {
      flag: true,
      msgList: [
        {
          title: "消息标签",
          content: "消息这个词应用比较广泛，新鲜事就叫消息，还指报道事情的概貌而不讲述详细的经过和细节，" +
              "以简明的文字迅速及时地报道最新事实的短篇新闻宣传文书，也是最常见、最经常采用的新闻体裁",
          state: '1',
          time: "2021/6/10 23:59:59",
        },
        {
          title: "消息标签",
          content: "消息这个词应用比较广泛，新鲜事就叫消息，还指报道事情的概貌而不讲述详细的经过和细节，" +
              "以简明的文字迅速及时地报道最新事实的短篇新闻宣传文书，也是最常见、最经常采用的新闻体裁",
          state: '2',
          time: "2021/6/10 23:59:59",
        },
      ],
    }
  },
  methods: {
    toUnsaved() {
      window.location.href = '/message';
    },
    toFinished() {
      window.location.href = '/message/done';
    },
    toSaved() {
      window.location.href = '/message/save';
    }
  },
  // mounted() {
  //   this.openHint();
  // },
}
</script>

<style scoped>
.message {
  margin: 30px auto ;
  height: auto;
  min-height: 200px;
  width: 90%;
  /*border: solid 2px black;*/
}

.message .side-nav {
  /*border: solid 2px black;*/
}

.message .message-list {
  text-align: left;
  padding: 20px;
  margin: 0 30px ;
}

.message .el-menu-vertical-demo {
  height: 500px;
}

.message .el-menu-item {
  background-color: white !important;
  font-size: 17px;
}

.message .el-menu-item:hover {
  background-color: rgba(20, 127, 217, 0.16) !important;
}
</style>
