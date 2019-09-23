<template>
  <div>
    <div class="login-all">
      <!--      <img src="../../assets/jpg/login-logo.png" class="login-logo" alt>-->
      <!--      <img src="../../assets/jpg/logofinal.png" style="width: 10%;height: 18%;" class="login-logo" alt>-->
      <!--      <img src="../../assets/jpg/zhongke.png" style="width: 10%;height: 18%;padding-left: 7%" class="login-logo" alt>-->
      <!--      <img src="../../assets/jpg/login_b_t.jpg" class="login-bg" alt>-->
      <img :src="require('./img/logofinal.png')" style="width: 10%;height: 18%;" class="login-logo" alt>
      <img :src="require('./img/zhongke.png')" style="width: 20%;height: 18%;padding-left: 7%" class="login-logo" alt>
      <img :src="require('./img/login_b_t.jpg')" class="login-bg" alt>
      <div class="login-input" style="opacity: .9;">
        <div class="loginTitle">用户登录</div>
        <div class="login-center">
          <el-input
            v-model="loginForm.username"
            class="input_ input1"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          />
          <el-input
            v-model="loginForm.password"
            class="input_ input2"
            placeholder="请输入密码"
            prefix-icon="el-icon-attract"
          />
        </div>
        <div class="forget">忘记密码？</div>
        <el-button type="primary" class="subBtn" @click="handleLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
// import { login } from '@/api/studentGetData'
export default {
  data() {
    return {
      // username: '',
      // password: '',
      examType: '',
      classGrade: [],
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
      //       this.loading = false
      //       this.$router.push({ path: this.redirect || '/' })
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      console.log('登录登录')
      this.loading = true
      this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
        console.log('登录成功')
        this.loading = false
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        // this.$router.push({ path: this.redirect || '/' })
        console.log('我要跳转页面了')
        this.$router.push({ path: '/' })
        console.log('我好了')
      }).catch(() => {
        this.loading = false
      })
    },
    // 登录
    loginBtn() {
      if (this.username === '') {
        this.$message({
          message: '请输入用户名',
          type: 'warning'
        })
        return
      }
      if (this.password === '') {
        this.$message({
          message: '请输入密码',
          type: 'warning'
        })
        return
      }
      // const prams = {
      //   username: this.username,
      //   password: this.password
      // }
      // login(prams).then(res => {
      //   if (res.data.errno === 200) {
      //     this.id = res.data.id
      //     window.localStorage.setItem('id', this.id) // 把id存入缓存
      //     if (res.data.rolename === '学生') {
      //       window.location.href = './student.html#/fisrtpage'
      //     }
      //     if (res.data.rolename === '任课教师') {
      //       window.location.href = './teacher.html#/fisrtpage'
      //     }
      //     this.$message({
      //       message: '恭喜你，登录成功',
      //       type: 'success',
      //       duration: 5000
      //     })
      //   } else {
      //     if (this.username === '' || this.password === '') {
      //       this.$message({
      //         message: '账号和密码不能为空',
      //         type: 'warning',
      //         duration: 3000
      //       })
      //     } else {
      //       if (res.data.errmsg === '密码错误') {
      //         this.$message({
      //           message: '密码错误',
      //           type: 'warning',
      //           duration: 3000
      //         })
      //       }
      //     }
      //   }
      // })
    }
  }
}
</script>
<style >
  .subBtn{
    width: 80%;
    margin-left: 10%;
  }
  .forget{
    font-size: 13px;
    color: red;
    width: 80%;
    margin: 0px auto;
    text-align: right;
    margin-top: -20px;
    margin-bottom: 30px;
  }
  .loginTitle{
    text-align: center;
    font-size: 18px;
    margin-top: 50px;
  }
  .login-bg{
    width: 100%;
    height: 110%;
  }
  .login-logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 550px;
    height: 100px;
    margin: 20px;
  }
  .Password {
    position: absolute;
    font-size: 14px;
    color: red;
    bottom: 215px;
    right: 60px;
    cursor: pointer;
  }
  body {
    margin: 0;
  }
  .login-all {
    position: relative;
    width: 100%;
    height: 800px;
  }
  .login-center {
    text-align: center;
    width: 80%;
    margin: 40px auto;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  .login-input {
    position: absolute;
    width: 400px;
    height: 360px;
    background: #e1edf8;
    border-radius: 10px;
    bottom: 100px;
    right: 150px;
  }
  .input_ {
    border: none;
  }
  input{
    border: none!important;
  }
  .input1 input{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .input2 input{
    border-top: 1px solid #ccc!important;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>

<!--<template>-->
<!--  <div class="login-container">-->
<!--    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">-->
<!--      <div class="title-container">-->
<!--        <h3 class="title">-->
<!--          {{ $t('login.title') }}-->
<!--        </h3>-->
<!--        <lang-select class="set-language" />-->
<!--      </div>-->

<!--      <el-form-item prop="username">-->
<!--        <span class="svg-container">-->
<!--          <svg-icon icon-class="user" />-->
<!--        </span>-->
<!--        <el-input-->
<!--          ref="username"-->
<!--          v-model="loginForm.username"-->
<!--          :placeholder="$t('login.username')"-->
<!--          name="username"-->
<!--          type="text"-->
<!--          auto-complete="on"-->
<!--        />-->
<!--      </el-form-item>-->

<!--      <el-form-item prop="password">-->
<!--        <span class="svg-container">-->
<!--          <svg-icon icon-class="password" />-->
<!--        </span>-->
<!--        <el-input-->
<!--          ref="password"-->
<!--          v-model="loginForm.password"-->
<!--          :type="passwordType"-->
<!--          :placeholder="$t('login.password')"-->
<!--          name="password"-->
<!--          auto-complete="on"-->
<!--          @keyup.enter.native="handleLogin"-->
<!--        />-->
<!--        <span class="show-pwd" @click="showPwd">-->
<!--          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />-->
<!--        </span>-->
<!--      </el-form-item>-->

<!--      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">-->
<!--        {{ $t('login.logIn') }}-->
<!--      </el-button>-->

<!--      <div style="position:relative">-->
<!--        <div class="tips">-->
<!--          <span>{{ $t('login.username') }} : admin</span>-->
<!--          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>-->
<!--        </div>-->
<!--        <div class="tips">-->
<!--          <span style="margin-right:18px;">-->
<!--            {{ $t('login.username') }} : editor-->
<!--          </span>-->
<!--          <span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>-->
<!--        </div>-->

<!--        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">-->
<!--          {{ $t('login.thirdparty') }}-->
<!--        </el-button>-->
<!--      </div>-->
<!--    </el-form>-->

<!--    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog">-->
<!--      {{ $t('login.thirdpartyTips') }}-->
<!--      <br>-->
<!--      <br>-->
<!--      <br>-->
<!--      <social-sign />-->
<!--    </el-dialog>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { validUsername } from '@/utils/validate'-->
<!--import LangSelect from '@/components/LangSelect'-->
<!--import SocialSign from './socialsignin'-->

<!--export default {-->
<!--  name: 'Login',-->
<!--  components: { LangSelect, SocialSign },-->
<!--  data() {-->
<!--    const validateUsername = (rule, value, callback) => {-->
<!--      if (!validUsername(value)) {-->
<!--        callback(new Error('Please enter the correct user name'))-->
<!--      } else {-->
<!--        callback()-->
<!--      }-->
<!--    }-->
<!--    const validatePassword = (rule, value, callback) => {-->
<!--      if (value.length < 6) {-->
<!--        callback(new Error('The password can not be less than 6 digits'))-->
<!--      } else {-->
<!--        callback()-->
<!--      }-->
<!--    }-->
<!--    return {-->
<!--      loginForm: {-->
<!--        username: 'admin',-->
<!--        password: '111111'-->
<!--      },-->
<!--      loginRules: {-->
<!--        username: [{ required: true, trigger: 'blur', validator: validateUsername }],-->
<!--        password: [{ required: true, trigger: 'blur', validator: validatePassword }]-->
<!--      },-->
<!--      passwordType: 'password',-->
<!--      loading: false,-->
<!--      showDialog: false,-->
<!--      redirect: undefined-->
<!--    }-->
<!--  },-->
<!--  watch: {-->
<!--    $route: {-->
<!--      handler: function(route) {-->
<!--        this.redirect = route.query && route.query.redirect-->
<!--      },-->
<!--      immediate: true-->
<!--    }-->
<!--  },-->
<!--  created() {-->
<!--    // window.addEventListener('hashchange', this.afterQRScan)-->
<!--  },-->
<!--  mounted() {-->
<!--    if (this.loginForm.username === '') {-->
<!--      this.$refs.username.focus()-->
<!--    } else if (this.loginForm.password === '') {-->
<!--      this.$refs.password.focus()-->
<!--    }-->
<!--  },-->
<!--  destroyed() {-->
<!--    // window.removeEventListener('hashchange', this.afterQRScan)-->
<!--  },-->
<!--  methods: {-->
<!--    showPwd() {-->
<!--      if (this.passwordType === 'password') {-->
<!--        this.passwordType = ''-->
<!--      } else {-->
<!--        this.passwordType = 'password'-->
<!--      }-->
<!--      this.$nextTick(() => {-->
<!--        this.$refs.password.focus()-->
<!--      })-->
<!--    },-->
<!--    handleLogin() {-->
<!--      this.$refs.loginForm.validate(valid => {-->
<!--        if (valid) {-->
<!--          this.loading = true-->
<!--          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {-->
<!--            this.loading = false-->
<!--            this.$router.push({ path: this.redirect || '/' })-->
<!--          }).catch(() => {-->
<!--            this.loading = false-->
<!--          })-->
<!--        } else {-->
<!--          console.log('error submit!!')-->
<!--          return false-->
<!--        }-->
<!--      })-->
<!--    },-->
<!--    afterQRScan() {-->
<!--      // const hash = window.location.hash.slice(1)-->
<!--      // const hashObj = getQueryObject(hash)-->
<!--      // const originUrl = window.location.origin-->
<!--      // history.replaceState({}, '', originUrl)-->
<!--      // const codeMap = {-->
<!--      //   wechat: 'code',-->
<!--      //   tencent: 'code'-->
<!--      // }-->
<!--      // const codeName = hashObj[codeMap[this.auth_type]]-->
<!--      // if (!codeName) {-->
<!--      //   alert('第三方登录失败')-->
<!--      // } else {-->
<!--      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {-->
<!--      //     this.$router.push({ path: '/' })-->
<!--      //   })-->
<!--      // }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style rel="stylesheet/scss" lang="scss">-->
<!--  /* 修复input 背景不协调 和光标变色 */-->
<!--  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */-->

<!--  $bg:#283443;-->
<!--  $light_gray:#eee;-->
<!--  $cursor: #fff;-->

<!--  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {-->
<!--    .login-container .el-input input{-->
<!--      color: $cursor;-->
<!--      &::first-line {-->
<!--        color: $light_gray;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--  /* reset element-ui css */-->
<!--  .login-container {-->
<!--    .el-input {-->
<!--      display: inline-block;-->
<!--      height: 47px;-->
<!--      width: 85%;-->
<!--      input {-->
<!--        background: transparent;-->
<!--        border: 0px;-->
<!--        -webkit-appearance: none;-->
<!--        border-radius: 0px;-->
<!--        padding: 12px 5px 12px 15px;-->
<!--        color: $light_gray;-->
<!--        height: 47px;-->
<!--        caret-color: $cursor;-->
<!--        &:-webkit-autofill {-->
<!--          box-shadow: 0 0 0px 1000px $bg inset !important;-->
<!--          -webkit-text-fill-color: $cursor !important;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--    .el-form-item {-->
<!--      border: 1px solid rgba(255, 255, 255, 0.1);-->
<!--      background: rgba(0, 0, 0, 0.1);-->
<!--      border-radius: 5px;-->
<!--      color: #454545;-->
<!--    }-->
<!--  }-->
<!--</style>-->

<!--<style rel="stylesheet/scss" lang="scss" scoped>-->
<!--$bg:#2d3a4b;-->
<!--$dark_gray:#889aa4;-->
<!--$light_gray:#eee;-->

<!--.login-container {-->
<!--  min-height: 100%;-->
<!--  width: 100%;-->
<!--  background-color: $bg;-->
<!--  overflow: hidden;-->
<!--  .login-form {-->
<!--    position: relative;-->
<!--    width: 520px;-->
<!--    max-width: 100%;-->
<!--    padding: 160px 35px 0;-->
<!--    margin: 0 auto;-->
<!--    overflow: hidden;-->
<!--  }-->
<!--  .tips {-->
<!--    font-size: 14px;-->
<!--    color: #fff;-->
<!--    margin-bottom: 10px;-->
<!--    span {-->
<!--      &:first-of-type {-->
<!--        margin-right: 16px;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  .svg-container {-->
<!--    padding: 6px 5px 6px 15px;-->
<!--    color: $dark_gray;-->
<!--    vertical-align: middle;-->
<!--    width: 30px;-->
<!--    display: inline-block;-->
<!--  }-->
<!--  .title-container {-->
<!--    position: relative;-->
<!--    .title {-->
<!--      font-size: 26px;-->
<!--      color: $light_gray;-->
<!--      margin: 0px auto 40px auto;-->
<!--      text-align: center;-->
<!--      font-weight: bold;-->
<!--    }-->
<!--    .set-language {-->
<!--      color: #fff;-->
<!--      position: absolute;-->
<!--      top: 3px;-->
<!--      font-size:18px;-->
<!--      right: 0px;-->
<!--      cursor: pointer;-->
<!--    }-->
<!--  }-->
<!--  .show-pwd {-->
<!--    position: absolute;-->
<!--    right: 10px;-->
<!--    top: 7px;-->
<!--    font-size: 16px;-->
<!--    color: $dark_gray;-->
<!--    cursor: pointer;-->
<!--    user-select: none;-->
<!--  }-->
<!--  .thirdparty-button {-->
<!--    position: absolute;-->
<!--    right: 0;-->
<!--    bottom: 6px;-->
<!--  }-->
<!--}-->
<!--</style>-->
