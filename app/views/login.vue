<template>
  <div id="login">

    <div style="float:left;" class="imagediv">
      
    </div>

    <div style="float:center;">
      <header class="logo">
        <h3 class="title">Predictive Dialer</h3>
        <p></p>
        <p></p>
        <h1 class="heading">Sign in as Administrator</h1>
      </header>

      <main class="container">
        <el-alert :title="error" :description="message" v-show="error" class="alert" type="warning" show-icon/>
        <el-form :model="model" :rules="rules" class="login-form" ref="login-form" auto-complete="off" label-position="top">
          <el-form-item label="USERNAME" prop="username" style="color: rgb(158,190,250);">
            <el-input type="text" v-model="model.username" placeholder="Please enter user name."/>
          </el-form-item>
          <el-form-item label="PASSWORD" prop="password" style="color: rgb(158,190,250);">
            <el-input type="password" v-model="model.password"Placeholder="Please enter a password."/>
          </el-form-item>
          <el-button class="form-button" type="primary" native-type="submit" @click.prevent="submit">Sign in</el-button>
        </el-form>
        <div class="footer"><a href="/" style="color: white; padding: 20px">Forget your password?</a></div>
      </main>
    </div>
  </div>
</template>

<script>
  import storage from '../libraries/storage'

  export default {
    name: 'login',
    data () {
      return {
        error: '',
        message: '',
        model: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: 'Please enter user name.' },
            { min: 2, max: 16, message: 'The length is between 2 and 16 characters.' }
          ],
          password: [
            { required: true, message: 'Please enter a password.' },
            { min: 6, max: 16, message: 'The length is between 6 and 16 characters.' }
          ]
        }
      }
    },
    methods: {
      submit () {
        this.$refs['login-form'].validate(valid => {
          if (!valid) return false
          this.$store.dispatch('createToken', {
            username: this.model.username,
            password: this.model.password
          })
          .then(token => {
            storage.set('toooken', token)
            this.$router.replace({ path: this.$route.query.redirect })
          })
          .catch(err => {
            this.message = err.message
            this.error = 'An error occurred.'
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  #login {
    height: 70%;
    background: #3064c3;
    color: #fff;
    font: normal 0.875rem 'RobotoDraft', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .logo {
    padding: 4.5rem 0 3.5rem;
    text-align: center;
    letter-spacing: .125rem;

    h1 {
      margin-top: 40px;
      font-weight: normal;
    }

    .title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 300;
      color: rgb(157,189,247);

      &:hover {
        color: #555;
        text-decoration: none;
        text-shadow: 0 0 1rem #e0e0e0;
      }

      .heading {
        margin: 20 0 0 0;
        font-weight: 3rem;
        font-size: 40pt;
        color: rgb(255,255,255);
        font-weight: normal;
      }
    }
  }

  .container {
    max-width: 100rem;
    margin: 0 auto;
  }

  .alert {
    margin-bottom: 1rem;
  }

  .login-form {
    padding: 1.5rem 1.25rem;
    margin: 0 auto;
    overflow: hidden;
    background-color: #3064c3;
    // border: .0625rem solid #eee;
    box-shadow: 0 .125rem .375rem rgba(100, 100, 100, .2);

    > .form-group {
      // margin-bottom: 1.25rem;
    }

    > .form-button {
      width: 30%;
    }

  }
  .el-button--primary {
    color: #000;
    background-color: #fff;
    border-color: rgb(255, 255, 255, .2);
  }
  .el-form--label-top {

  }
  .el-form-item__label {
    float: left;
    display: inline-block;
    padding: 0 0 10px;
    color: rgb(158,190,250);
  }
  .footer {
    margin: 1.5rem auto;
    padding: 1rem;
    // border: .0625rem solid #e9e9e9;
    text-align: left;
  }
</style>
