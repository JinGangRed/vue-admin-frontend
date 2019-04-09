<template>
  <div class="container">
    <div class="login-container">
      <el-form ref="loginForm" class="login-form" :v-model="loginForm" label-width="60px">
        <el-form-item label="用户名:">
          <el-input :v-model="loginForm.userame"></el-input>
        </el-form-item>
        <el-form-item label="密  码:">
          <el-input :v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: [""],
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123"
      }
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang='less'>
/* reset element-ui css */
.login-container {
  .el-form-item {
    padding: 0 2rem;
    :first {
      margin-top: 1rem;
    }
  }
  .el-input {
    margin: 0 auto;
    text-align: center;
    input {
      padding: 12px 5px 12px 15px;
      width: 10rem;
      float: left;
    }
  }
  label {
    color: #ffffff;
  }
  button {
    color: #ffffff;
  }
}
</style>
<style lang="less" scoped>
@bg_color: #2d3a4b;
@bg_url: "../../assets/images/bg.jpg";
/* reset element-ui css */
.container {
  background: ~"url('@{bg_url}')" no-repeat top left;
  background-size: cover;
  overflow: hidden;
  min-height: 100%;
  width: 100%;
}
.login-container {
  min-height: 100%;
  width: 20%;
  overflow: hidden;
  margin: 0 auto;
  padding: 160px 35px;
  .login-form {
    position: relative;
    width: 100%;
    box-shadow: -5px 0px 5px, /*左边阴影*/ 0px -5px 5px,
      /*上边阴影*/ 5px 0px 5px, /*右边阴影*/ 0px 5px 5px; /*下边阴影*/
    margin: 0 auto;
    padding: 1rem 1rem;
  }
}
</style>
