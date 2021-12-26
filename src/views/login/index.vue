<template>


  <div class="loginContent">

    <div class='loginLeft'>
      <iframe
        src="http://123.57.240.37/donghua/index.html"
        frameborder="0"
        style="width:100%;height: 855px;margin-top: -9px"
        id="iframeBox"></iframe>

    </div>

    <div class="loginRight">
      <el-card class="login-form-layout" shadow="hover">
        <h2 class="login-title color-main">系统登录</h2>
        <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
          <el-form-item prop="username">
            <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名">
                  <span slot="prefix">
                    <svg-icon icon-class="user" class="color-main"></svg-icon>
                  </span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"
                      autoComplete="on" placeholder="请输入密码">
                  <span slot="prefix">
                    <svg-icon icon-class="password" class="color-main"></svg-icon>
                  </span>
              <span slot="suffix" @click="showPwd">
                    <svg-icon icon-class="eye" class="color-main"></svg-icon>
                  </span>
            </el-input>
          </el-form-item>
          <el-form-item style="margin-bottom: 15px;text-align: center">
            <el-button style="width: 100%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>


    </div>


    <!--    <div class='loginLeft'>-->

    <!--    </div>-->


    <!--    <div class="login-container" :style="{backgroundImage:'url('+bgImg+')'}">-->
    <!--      <el-card class="login-form-layout" shadow="hover">-->
    <!--        <h2 class="login-title color-main">系统登录</h2>-->
    <!--        <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">-->
    <!--          <el-form-item prop="username">-->
    <!--            <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名">-->
    <!--            <span slot="prefix">-->
    <!--              <svg-icon icon-class="user" class="color-main"></svg-icon>-->
    <!--            </span>-->
    <!--            </el-input>-->
    <!--          </el-form-item>-->
    <!--          <el-form-item prop="password">-->
    <!--            <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password"-->
    <!--                      autoComplete="on" placeholder="请输入密码">-->
    <!--            <span slot="prefix">-->
    <!--              <svg-icon icon-class="password" class="color-main"></svg-icon>-->
    <!--            </span>-->
    <!--              <span slot="suffix" @click="showPwd">-->
    <!--              <svg-icon icon-class="eye" class="color-main"></svg-icon>-->
    <!--            </span>-->
    <!--            </el-input>-->
    <!--          </el-form-item>-->
    <!--          <el-form-item style="margin-bottom: 15px;text-align: center">-->
    <!--            <el-button style="width: 100%" type="primary" :loading="loading" @click.native.prevent="handleLogin">-->
    <!--              登录-->
    <!--            </el-button>-->
    <!--          </el-form-item>-->
    <!--        </el-form>-->
    <!--      </el-card>-->
    <!--    </div>-->
  </div>
</template>

<script>
import bgImg from "@/assets/images/bg-img.jpg"

import {
  isvalidUsername
} from '@/utils/validate';
import {
  setSupport,
  getSupport,
  setCookie,
  getCookie
} from '@/utils/support';

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('密码不能小于3位'))
      } else {
        callback()
      }
    };
    return {
      bgImg: bgImg,
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePass
        }]
      },
      loading: false,
      pwdType: 'password',
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false;
            this.$router.push({
              path: '/'
            })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('参数验证不合法！');
          return false
        }
      })
    },
  }
}
</script>

<style scoped>


.loginContent {
  display: flex;
  justify-content: flex-start;
  background-color: #00417e;

}


.loginLeft {
  height: 100vh;
  flex-grow: 2;
  background-size: cover;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}

.loginRight {
  margin-top: 40px;
  height: 100vh;
  margin-right: 50px;
  background-size: 100% 51%;
  background-position: bottom !important;
  display: flex;
  flex-direction: column;
  background: url(data:image/png;base64,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) no-repeat, #f6f6f6;
  background-color: #00417e;
}


.login-form-layout {
  /*position: absolute;*/
  left: 0;
  right: 0;
  width: 360px;
  margin: 150px auto;
}

.login-title {
  text-align: center;
}

.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
}
</style>
