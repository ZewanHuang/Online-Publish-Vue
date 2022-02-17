<template>
  <div class="article-center">
    <el-container>
      <el-main>
        <el-row>
          <div class="nav-son">
            <ul>
              <li><router-link :to="{name: 'reviewArticleCenter-Article'}" >文章信息</router-link></li>
              <li><router-link :to="{name: 'reviewArticleCenter-AllReview'}" >文章评论</router-link></li>
              <li><router-link :to="{name: 'reviewArticleCenter-ReviewEdit'}" >评论编辑</router-link></li>
            </ul>
          </div>
        </el-row>
        <el-row class="main">
          <router-view></router-view>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style>
.article-center .main{
  padding: 20px;
}

.article-center .el-container{
  width: 75%;
  height: auto;
  margin: auto;
}

.article-center .nav-son {
  height: 60px;
  border: none;
  text-align: center;
}

.article-center .nav-son ul{
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.article-center .nav-son li {
  float:left;
}

.article-center .nav-son li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  width: 70px;
  height: 30px;
}

.article-center .nav-son li a.router-link-exact-active {
  font-weight: 900;
  color: #0090cc;
  border-bottom: solid;
}

</style>
