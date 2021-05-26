<template>
  <div class="login">
    <div class="login-title">
      <img src="../assets/logo.png" >
      <span> Online Publish</span>
    </div>
    <div class="login-box"> 
      <div class="login-box-title">
        <span class="login_title">登录</span>
      </div>
      <form action="" method="post">
        <div class="login-box-input">
          <span class="user"></span>
          <input class="input" type="text" placeholder="用户名/邮箱" v-model="username_or_email"/>
        </div>
        <div class="login-box-input">
          <span class="password"></span>
          <input class="input" type="password"  placeholder="密码" v-model="password"/>
        </div>
      </form>
      <div>
        <button class="login-box-botton" @click="login">登录</button>
      </div>
      <div class="bottom">
        <span>没有账号？<span class="toLogin" @click="register">点击注册</span></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'msg',
    data(){
      return{
        username_or_email:'',
        password:'',
        ID_isNull:false,
        PWD_isNull:false,
        ID_error_msg:'',
        PWD_error_msg:'',
        status_code:'',
        message:'错误！'
      }
    },
    methods:{
      check_ID:function (){
        if (this.username_or_email===''){
          this.ID_isNull=true;
        }
      },
      check_PWD:function (){
        if (this.password1===''){
          this.PWD_isNull=true;
        }
      },
      login:function (){
        if (this.status_code == 1){
          this.$router.push({path:"/"})
        }
        else{
          window.alert(this.message);
        }
      },
      register:function (){
        this.$router.push({path:"/register"})
      },
    }
  }
</script>

<style>
.login .login-title{
  margin: 0 auto;
  text-align: center;
}

.login .login-title img{
  margin: 20px 0px;
  width: 5%;
  height: 5%;
  vertical-align: middle;
}

.login .login-title span{
  font-size: 50px;
  vertical-align: middle;
}

.login .login-box{
  background-image: url(../assets/title.png);
  background-repeat: repeat-x;
  margin: 0 auto;
  margin-top: 0px;
  width: 30%;
  height: 100%;
  text-align: center;
  border-width: 1px;
  border-color: rgb(230, 230, 230);
  border-style: solid;
  /* border-radius: 15px; */
  box-shadow: 6px 6px 30px lightgray;
}

.login .login-box .login-box-input {
  margin: 25px 20px;
  position: relative;
}

.login .login-box .login-box-title {
  color: white;
  margin-top: 20px;
  margin-bottom: 50px;
  position: relative;
}

.login_title{
  font-size: 40px;
}

.toLogin{
  color: #007cc0;
  text-decoration:underline
}

.toLogin:hover{
  color: #005e91;
  text-decoration:underline;
  cursor: pointer;
}

.input{
  width: 250px;
  height: 40px;
  font-size: medium;
  padding-left: 50px;
}

.input:focus{
  background: rgb(235, 235, 235);
}

.login .login-box .login-box-botton{
  margin: 30px 20px;
  width: 310px;
  height: 40px;
  background-color: #007cc0;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow:2px 2px 2px lightgray;
  border-radius: 5px;
}

.login .login-box .login-box-botton:hover{
  background-color: #005e91;
}


.user{
  background-image: url(../assets/user.png);
  position:absolute;
  top: -2px;
  left: 55px;
  height: 50px;
  width: 50px;
  transform: scale(0.65,0.65);
}

.password{
  background-image: url(../assets/password.png);
  position:absolute;
  top: -2px;
  left: 55px;
  height: 50px;
  width: 50px;
  transform: scale(0.7,0.7);
}

.bottom{
  margin: 3%
}
</style>

