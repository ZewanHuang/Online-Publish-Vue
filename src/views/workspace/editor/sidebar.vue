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
                <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>人员管理</span>
                </template>
                <el-menu-item-group>
                    <router-link to="/editor/reader_manage">
                      <el-menu-item index="1-1">读者管理</el-menu-item>
                    </router-link>
                    <router-link to="/editor/writer_manage">
                      <el-menu-item index="1-2">作者管理</el-menu-item>
                    </router-link>
                    <router-link to="/editor/review_manage">
                      <el-menu-item index="1-2">审稿人管理</el-menu-item>
                    </router-link>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>文章管理</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/editor/toJudge_art">
                    <el-menu-item index="2-1">待审核文章</el-menu-item>
                  </router-link>
                  <router-link to="/editor/judged_art">
                    <el-menu-item index="2-2">已分配文章</el-menu-item>
                  </router-link>
                  <router-link to="/editor/toDeal_art">
                    <el-menu-item index="2-3">待处理文章</el-menu-item>
                  </router-link>
                  <router-link to="/editor/published_art">
                    <el-menu-item index="2-4">已发布文章</el-menu-item>
                  </router-link>
                </el-menu-item-group>
                </el-submenu>

                <router-link to="/editor/comment">
                    <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">评论管理</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/editor/editMessage">
                  <el-menu-item index="4">
                  <i class="el-icon-location"></i>
                  <span slot="title">消息</span>
                  </el-menu-item>
                </router-link>
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