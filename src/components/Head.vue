<template>
  <header>
    <nav>
      <el-row type="flex" align='middle'>
        <el-col :xs="16" :sm="18" :md="2" :lg="2">
          <h1>
            <router-link to="/">
              <img src="@/assets/logo.png" alt>
            </router-link>网站标题
          </h1>
        </el-col>
        <el-col class="hidden-sm-and-down" :md="12" :lg="12">
          <el-menu mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">动态</el-menu-item>
            <el-menu-item index="3">活动</el-menu-item>
            <el-menu-item index="4">小册</el-menu-item>
            <el-menu-item index="5">话题</el-menu-item>
          </el-menu>
        </el-col>
        <el-col class="hidden-sm-and-down search" :md="4" :lg="4">
          <el-input size="medium" placeholder="请输入搜索内容" v-model="input4">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :xs="4" :sm="4" class="login">
          <el-button>登录</el-button>
          <el-button>注册</el-button>
        </el-col>
        <el-col :xs='4' :sm="2" class="hidden-md-and-up">
          <img class="icon-menu" src="../assets/menu.png" alt="">
        </el-col>
      </el-row>
    </nav>
  </header>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang='less' scoped>
header {
  background: #fff;
}
nav {
  max-width: 1200px;
  margin: 0 auto;
}
.el-menu.el-menu--horizontal {
  border-bottom-color: transparent;
}
h1 {
  text-indent: -9999px;
  position: relative;
  width: 60px;
  height: 60px;
  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    padding: 10px;
    box-sizing: border-box;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.el-menu-item.is-active {
  border-bottom-color: transparent;
}
.login {
  min-width: 170px;
}
.el-col {
  text-align: center;
}
.icon-menu {
  width: 20px;
  height: 20px;
  padding: 20px;
}
.search {
  width: 200px;
}
</style>
