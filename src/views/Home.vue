<template>
  <div class="home">
    <img v-bind:style="imgStyle" src="../assets/logo.png">
    <h1>Welcome to Online Publish !</h1>
    <input
        id="search"
        placeholder="请输入要查找的书籍..."
        v-model="input"
        @focus="changeStyle"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      imgStyle: {
        position: 'relative',
        margin: '20px',
        height: '450px',
        transition: 'height 1s',
      },
      
    }
  },
  methods: {
    changeStyle: function() {
      this.imgStyle.height = '120px'
    },
  }
}
</script>

<style>
#search{
  width: 400px;
  padding: 12px 20px;
  margin: 0 0;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #c9c9c9;
}
</style>

