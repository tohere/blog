<template>
  <!-- 组件：侧边栏部分 -->
  <div class="card-box">
    <el-card>
      <h2>欢迎光临我的博客</h2>
      <el-form>
        <el-form-item>
          <el-input placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="密码 (不少于 6 位)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="reg-btn">立即注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="currently">
      <h2>最新发布</h2>
      <div class="articles">
        <router-link to="/" class="ellipsis">主题1主题1</router-link>
        <router-link to="/" class="ellipsis">主题1</router-link>
        <router-link to="/" class="ellipsis">主题1主题1主题1主题1</router-link>
        <router-link to="/" class="ellipsis">主题1</router-link>
        <router-link to="/" class="ellipsis">主题1</router-link>
        <router-link to="/" class="ellipsis">主题1</router-link>
        <router-link to="/" class="ellipsis">主题1</router-link>
        <router-link to="/" class="ellipsis">主题1</router-link>
      </div>
    </el-card>
  </div>
</template>
<style lang="less" scoped>
h2 {
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 10px;
}
.el-card {
  margin-bottom: 10px;
}
.reg-btn {
  width: 100%;
}
.currently {
  .articles {
    overflow: hidden;
  }
  a{
    display: inline-block;
    line-height: 30px;
    padding: 0 15px;
    background: rgb(221, 221, 221);
    color: #333;
    border-radius: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      background: rgb(16, 77, 243);
      color: #fff;
    }
  }
}
</style>
