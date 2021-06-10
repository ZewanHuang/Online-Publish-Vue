<template>
  <div class="article-center">

    <div class="nav">
      <ul>
        <li><router-link :to="{name: 'Article-Info'}" >文章信息</router-link></li>
        <li><router-link :to="{name: 'Article-Review'}" >文章评论</router-link></li>
        <li><router-link :to="{name: 'Article-Edit'}" >文章编辑</router-link></li>
      </ul>
    </div>

    <div class="subpage">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: "writerArticleCenter",
  props: ['aid']
}
</script>

<style>
.article-center {
  width: 75%;
  height: auto;
  margin: 10px auto 0;
  text-align: center;
}

.article-center .nav{
  height: 60px;
  border: none;
  text-align: center;
}

.article-center .nav ul{
  list-style-type: none;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.article-center .nav li {
  float:left;
}

.article-center .nav li a {
  display: block;
  font-size: 17px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  width: 70px;
  height: 30px;
}

.article-center .nav li a.router-link-exact-active {
  font-weight: 900;
  color: #0090cc;
  border-bottom: solid;
}

.article-center .subpage {
  padding: 40px 20px;
}
</style>