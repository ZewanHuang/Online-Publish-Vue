<template>
  <div id="foot">
    <ul>
      <li>
        <p>Copyright 2021 zewan.top</p>
      </li>   
      <li>
        <router-link to="/team">团队</router-link>
      </li>
      <li>
        <router-link to="/aboutus">关于我们</router-link>
      </li>
      <li>
        <img src="../../assets/logo.png" alt="logo" height="50px" width="50px">
      </li>
      <li>
        <router-link to="/contactus">联系我们</router-link>
      </li>
      <li>
        <p><a href="https://beian.miit.gov.cn/" target="_blank">备案号：粤ICP备2021021248号-1</a></p>
      </li>
    </ul>

    
  </div>
</template>

<script>
import user from "@/store/user";

export default {
  name: 'navBar',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');

a {
  text-decoration: none;
}

#foot p{
  float: right;
  /* display:inline; */
}

#foot ul{
  border-top:1px solid rgb(192, 187, 187);
  list-style-type: none;
  overflow: hidden;
  margin: 20px;
  padding: 10px;
  /* padding: 20px,30px,10px,30px; */
  background-color:white;
  bottom: 0;
  font-size: 12px;
  height: 40px;
  
  /* display:inline; */
}

#foot li {
  float:left;
  display: block;
  text-align: center;
  /* padding: 17px 16px 3px 16px; */
  /* margin: 0px,30px,0px,30px; */
  text-decoration: none;
  color: black;
  width: 180px;
  height: 35px;
}

#foot li a {
  display: block;
  text-align: center;
  padding: 17px 10px 3px 10px;
  /* margin: 0px,30px,0px,30px; */
  text-decoration: none;
  color: black;
  width: 180px;
  height: 35px;

}

</style>