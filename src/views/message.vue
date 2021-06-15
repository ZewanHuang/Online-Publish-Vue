<template>
  <el-container class="message">

    <el-aside class="side-nav">
      <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="white"
          text-color="#000"
          active-text-color="#147fd9"
          @select="handleSelect"
      >
        <el-menu-item index="1">
          <i class="el-icon-warning"></i>
          <span slot="title">未读消息</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-warning-outline"></i>
          <span slot="title">已读消息</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-star-off"></i>
          <span slot="title">收藏消息</span>
        </el-menu-item>
      </el-menu>

    </el-aside>


    <el-main class="message-list">
      <message-list :msg-list="msgList" :active-num="activeNum"></message-list>
    </el-main>

  </el-container>
</template>

<script>
import messageList from "../components/common/message_list";

export default {
  name: "message",
  components: {
    messageList,
  },
  data() {
    return {
      flag: true,
      activeNum: 1,
      msgList: [],
    }
  },
  methods: {
    handleSelect: function (key) {
      this.activeNum=key;
    },
    openHint: function () {
      this.$notify.info({
        title: '按钮提示',
        dangerouslyUseHTMLString: true,
        message: '<el-row style="text-align: center">\n' +
            '            <div>\n' +
            '              <i class="el-icon-finished" style="font-size: 14px;\n' +
            '  padding: 12px 16px; margin-top: 5px; margin-left: 55px"> : 标记已读</i>\n' +
            '            </div>\n' +
            '            <div>\n' +
            '              <i class="el-icon-bell" style="font-size: 14px;\n' +
            '  padding: 12px 16px; margin-left: 55px"> : 标记未读</i>\n' +
            '            </div>\n' +
            '            <div>\n' +
            '              <i class="el-icon-star-off" style="font-size: 14px;\n' +
            '  padding: 12px 16px; margin-left: 55px"> : 收藏消息</i>\n' +
            '            </div>\n' +
            '            <div>\n' +
            '              <i class="el-icon-delete" style="font-size: 14px;\n' +
            '  padding: 12px 16px; margin-left: 55px"> : 删除消息</i>\n' +
            '            </div>\n' +
            '          </el-row>',
        position: 'bottom-left',
        offset: 160,
        customClass: 'hint-box'
      });
    },
  },
  mounted() {
    this.openHint();

    this.$axios({
      method: 'get',
      url: '/message/getAll/',
    })
    .then(res => {
      switch (res.data.status_code) {
        case '2000':
          this.msgList = JSON.parse(res.data.messages);
          break;
        case '4001':
          this.$router.push('/');
          break;
      }
    })
    .catch(err => {
      console.log(err);
    })
  },
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
