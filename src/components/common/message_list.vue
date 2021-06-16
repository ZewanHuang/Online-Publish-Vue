<template>
  <div class="msg-list">

    <el-timeline>
      <el-timeline-item
          class="msg"
          v-for="(msg, index) in msgList"
          v-if="msg.state===activeNum"
          :key="index"
          :timestamp="msg.time"
          placement="top">
        <el-card class="msg-card">

          <div slot="header" class="clearfix">
            <span class="header-text">{{ msg.tag }}</span>
            <el-button icon="el-icon-delete" class="msg-header-button del" type="text"
                       @click="delMsg(index)"></el-button>
            <el-button icon="el-icon-star-off" class="msg-header-button like" type="text" v-if="msg.state!=='3'"
                       @click="likeMsg(index)"></el-button>
            <el-button icon="el-icon-bell" class="msg-header-button bell" type="text" v-if="msg.state==='2'"
                       @click="alertMsg(index)"></el-button>
            <el-button icon="el-icon-finished" class="msg-header-button check" type="text" v-if="msg.state==='1'"
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
      const formData = new FormData();
      formData.append('mid', this.msgList[index].mid);
      this.$axios({
        method: 'post',
        url: '/message/finish/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('消息已读成功！');
            setTimeout(() => {
              location.reload();
            }, 1000);
            // this.msgList[index].state = '2';
            break;
          case '4001':
            this.$message.error('消息不存在！');
            break;
        }
      })
      .catch(err => {
        console.log(err);
      });
    },

    alertMsg: function (index) {
      const formData = new FormData();
      formData.append('mid', this.msgList[index].mid);
      this.$axios({
        method: 'post',
        url: '/message/unfinish/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('成功将消息设置为未读！');
            setTimeout(() => {
              location.reload();
            }, 1000);
            // this.msgList[index].state = '1';
            break;
          case '4001':
            this.$message.error('消息不存在！');
            break;
        }
      })
      .catch(err => {
        console.log(err);
      });
    },

    likeMsg: function (index) {
      const formData = new FormData();
      formData.append('mid', this.msgList[index].mid);
      this.$axios({
        method: 'post',
        url: '/message/save/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('收藏成功！');
            setTimeout(() => {
              location.reload();
            }, 1000);
            // this.msgList[index].state = '3';
            break;
          case '4001':
            this.$message.error('消息不存在！');
            break;
        }
      })
      .catch(err => {
        console.log(err);
      });
    },

    delMsg: function(index) {
      const formData = new FormData();
      formData.append('mid', this.msgList[index].mid);
      this.$axios({
        method: 'post',
        url: '/message/delete/',
        data: formData,
      })
      .then(res => {
        switch (res.data.status_code) {
          case '2000':
            this.$message.success('删除成功！');
            setTimeout(() => {
              location.reload();
            }, 1000);
            break;
          case '4001':
            this.$message.error('消息不存在！');
            break;
        }
      })
      .catch(err => {
        console.log(err);
      });

      // let arr = this.msgList;
      // arr.splice(arr.indexOf(index),1);
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