<template>
  <!-- 后台登录页 -->
  <div class="login-box">
    <div class="login">
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules2"
        ref="loginForm"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/getData'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules2: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.axios
          login(this.loginForm.username, this.loginForm.password)
            .then(res => {
              if (res.data.status === 0) {
                localStorage.setItem('token', res.data.token)
                this.$message.success('登录成功')
                this.$router.push(this.$route.query.redirect)
              } else {
                this.$message.error('登录失败')
              }
            })
        } else {
          this.$message.error('请填写完整信息')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-box {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(#05508adc, #0079d7);
}
.login {
  position: absolute;
  width: 400px;
  height: 260px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .el-button {
    width: 100%;
  }
}
</style>
