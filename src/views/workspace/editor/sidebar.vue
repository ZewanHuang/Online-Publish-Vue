<template>
  <div class="audit">
    <el-container>
        <el-aside class="side" width="350px">
        <el-row class="tac" width="250px">
            <el-col :span="12" width="250px">
            <h3>编辑管理系统</h3>
            <el-menu
                width="250px"
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router>
                <router-link :to="{name:'information'}">
                    <el-menu-item >
                    <i class="el-icon-s-data"></i>
                    <span slot="title">信息统计</span>
                    </el-menu-item>
                </router-link>
                <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span>人员管理</span>
                </template>
                <el-menu-item-group>
                    <router-link :to="{name:'reader_manage'}">
                      <el-menu-item>读者管理</el-menu-item>
                    </router-link>
                    <router-link :to="{name:'writer_manage'}">
                      <el-menu-item>作者管理</el-menu-item>
                    </router-link>
                    <router-link :to="{name:'review_manage'}">
                      <el-menu-item>审稿人管理</el-menu-item>
                    </router-link>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-reading"></i>
                    <span>文章管理</span>
                </template>
                <el-menu-item-group>
                  <router-link :to="{name: 'toJudge_art'}">
                    <el-menu-item >待审核文章</el-menu-item>
                  </router-link>
                  <router-link :to="{name:'judged_art'}">
                    <el-menu-item >已分配文章</el-menu-item>
                  </router-link>
                  <router-link :to="{name:'toDeal_art'}">
                    <el-menu-item >待处理文章</el-menu-item>
                  </router-link>
                  <router-link :to="{name:'published_art'}">
                    <el-menu-item >已发布文章</el-menu-item>
                  </router-link>
                </el-menu-item-group>
                </el-submenu>

                <router-link :to="{name:'comment'}">
                    <el-menu-item >
                    <i class="el-icon-menu"></i>
                    <span slot="title">评论管理</span>
                    </el-menu-item>
                </router-link>
<!--                <router-link :to="{name:'editMessage'}">-->
<!--                  <el-menu-item >-->
<!--                  <i class="el-icon-chat-dot-round"></i>-->
<!--                  <span slot="title">消息</span>-->
<!--                  </el-menu-item>-->
<!--                </router-link>-->
                <!-- <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
                </el-menu-item> -->
            </el-menu>
            </el-col>
        </el-row>
        </el-aside>
    </el-container>

  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
/* .aduit el-container .side{
  border: rgba(0,0,0,0) !important;
  margin: 0 !important;
} */

/* .audit el-container el-aside el-row el-col el-menu router-link l-menu-item span{
  text-decoration:none !important;
} */

a {
  text-decoration: none;
}

.el-col-12{
  width: 250px;
}

</style>