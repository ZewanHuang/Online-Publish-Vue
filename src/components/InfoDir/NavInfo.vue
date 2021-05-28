<template>
  <div id="navInfo">
      <ul>
        <li><router-link :to="{name: 'News'}">动态</router-link></li>
        <li><router-link :to="{name: 'Collection'}">收藏</router-link></li>
        <li><router-link :to="{name: 'Article'}">文章</router-link></li>
      </ul>
    </div>
</template>

<script>
	export default {
    name: 'navBarInfo'
  }
</script>

<style>
#navInfo {
  width: 100%;
  height: 100%;
  text-align: left;
  background-color: white;
}

#navInfo ul{
  margin: 0;
  padding: 5px 0 0;
  list-style-type: none;
  overflow: hidden;
  background-color: white;
}

#navInfo li {
  float:left;
}

#navInfo li a {
  display: block;
  text-align: center;
  padding: 6px 4px;
  text-decoration: none;
  color: black;
  width: 70px;
  height: 30px;
}

#navInfo li a.router-link-exact-active {
  font-weight: bold;
  color: #00b0ff;
  border-bottom: solid;
}
</style>