<template>
  <div>
    <div class="box">
      <sidebar></sidebar>
      <router-view /> 
    </div>
  </div>
</template>
<script>
import sidebar from './sidebar'
export default {
  components:{
    sidebar
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.box {
  display: flex;
  margin-top: 20px;
}

</style>
