<template>
  <div>
    <div>
      <input v-model="username"/>
      <input v-model="password"/>
      <button @click="show">click</button>
    </div>
    <div>
      <input type="text" v-model="loginForm.username" placeholder="用户名"/>
      <input type="text" v-model="loginForm.password" placeholder="密码"/>
      <button @click="login">登录</button>
    </div>
    <div>
      <input type="text" v-model="regist.username" placeholder="用户名"/>
      <input type="text" v-model="regist.password" placeholder="密码"/>
      <input type="text" v-model="regist.email" placeholder="email"/>
      <button @click="register">注册</button>
    </div>
  </div>
</template>
<script>
// import getAll from '.'
const axios = require('axios')
export default {
  data () {
    return {
      username: '',
      password: '',
      loginForm: {
        username: '',
        password: ''
      },
      regist: {
        username: '',
        password: ''
      },
      userToken: ''
    }
  },
  methods: {
    register () {
      var that = this
      axios.post('http://localhost:8080/user/register', {
        // 请求注册接口
        username: this.regist.username,
        password: this.regist.password,
        email: this.regist.email
      }).then(function (response) {
        that.response = response.data
        // that.$emit('lisentcurrent', [that.response])
      }).catch(function (error) {
        console.log(error)
      })
    },
    login () {
      var that = this
      axios.post('http://localhost:8080/user/login', {
        // 请求登录接口
        username: this.loginForm.username,
        password: this.loginForm.password
      }).then(function (response) {
        // console.log(response.data);
        that.response = response.data
        // that.$emit('lisentcurrent', [that.response])
      }).catch(function (error) {
        console.log(error)
      })
      console.log('pass', that.response)
      console.log('click me')
    },
    show () {
      console.log('登录中')
    }
  }
}
</script>
