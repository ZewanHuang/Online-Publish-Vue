<template>
  <div class="register">
    <div class="register-title">
      <img src="../assets/logo.png">
      <span> Online Publish</span><br><br>
      <span id="title-name">注册</span>
    </div>

    <div class="msg">
        <label>用户名      </label>
        <input  :class="{error_input:username_error}" placeholder="您的用户名..." type="text" v-model="form.username" >
        <p><span class="error_msg" v-if="username_error">{{username_error_msg}}</span></p>

        <label>邮箱        </label>
        <input :class="{error_input:email_error}" placeholder="您的邮箱..." type="text" v-model="form.email" >
        <p><span class="error_msg" v-if="email_error">{{email_error_msg}}</span></p>

        <label>密码        </label>
        <input :class="{error_input:password1_error}" placeholder="请输入8-18位含有数字和字母的密码..." type="password" v-model="form.password1" >
        <p><span class="error_msg" v-if="password1_error">{{password1_error_msg}}</span></p>

        <label>再次输入密码  </label>
        <input :class="{error_input:password2_error}" placeholder="请重复输入密码..." type="password" v-model="form.password2"  >
        <p><span class="error_msg" v-if="password2_error">{{password2_error_msg}}</span></p><br><br>

        <button @click="register">提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'msg',
    data(){
      return{
        form:{
          username:'',
          password1:'',
          password2:'',
          email:'',
        },
        username_error:false,
        password1_error:false,
        password2_error:false,
        email_error:false,
        username_error_msg:'',
        password1_error_msg:'',
        password2_error_msg:'',
        email_error_msg:''
      }
    },
    methods:{

      register(){
        this.username_error=false;
        this.password1_error=false;
        this.password2_error=false;
        this.email_error=false;
        if(this.form.username !== "" && this.form.email !== "" && this.form.password1 !== "" && this.form.password2 !== ""){
          this.$router.replace('/welcome')
        }
        else {
          if (this.form.username === ""){
            this.username_error=true;
            this.username_error_msg="*用户名不能为空！";
          }
          if (this.form.email === ""){
            this.email_error=true;
            this.email_error_msg="*邮箱不能为空！";
          }
          if (this.form.password1 === ""){
            this.password1_error=true;
            this.password1_error_msg="*密码不能为空！";
          }
          if (this.form.password2 === ""){
            this.password2_error=true;
            this.password2_error_msg="*密码不能为空！";
          }
        }
      }
    }
  }
</script>

<style>
.register-title img{
  margin: 20px 0px;
  width: 5%;
  height: 5%;
  vertical-align: middle;
}
.register-title span{
  font-size: 50px;
  vertical-align: middle;
}
#title-name{
  font-size:30px;
}

span.error_msg{
  font-size: 10px;
  color: crimson;
}

label{
  display:inline-block;
  width: 110px;
  text-align: left;
}

p{
  margin: 0;
  padding: 0;
  height: 15px;
}
span{
  margin: 0;
  padding: 0;
  height: 15px;
  text-align: center;
}

.msg input{
  width: 270px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #c9c9c9;
}

/*提交按钮*/
.msg button {
  background-color: #007cc0;
  border: none;
  color: white;
  padding: 11px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
}

.msg button:hover{
  background-color: #005e91;
}

.error_input{
  border: 1px solid red;
  box-shadow: rgb(235, 11, 56) 0px 0px 3px inset;
  background-color: rgba(252, 215, 215, 0.18);
}

.error_input:focus{
  background:none;
  outline-color: red;
  background-color: rgba(252, 215, 215, 0.18);
}

</style>

