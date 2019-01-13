<template>
  <header>
    <nav>
      <el-row :gutter="20" type="flex" align="middle" justify="space-between">
        <el-col :xs="16" :sm="18" :md="2">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/logo.png" alt>
            </router-link>
            网站标题
          </div>
        </el-col>
        <el-col class="hidden-sm-and-down" :md="17" >
          <el-menu active-text-color='#007fff' mode="horizontal">
            <el-menu-item index="0">首页</el-menu-item>
            <el-menu-item index="1">HTML</el-menu-item>
            <el-menu-item index="2">CSS</el-menu-item>
            <el-menu-item index="3">JavaScript</el-menu-item>
            <el-menu-item index="4">Vue</el-menu-item>
            <el-menu-item index="5">NodeJs</el-menu-item>
          </el-menu>
        </el-col>
        <el-col class="hidden-sm-and-down fa-btn" :md="3">
          <el-button>发布文章</el-button>
        </el-col>
        <!-- <el-col class="hidden-sm-and-down" :md="7">
          <el-input size="medium" placeholder="请输入搜索内容" v-model="searchTxt">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col> -->
        <el-col :xs="2" :sm="2" class="login">
          <div class="login-box">
            <el-button>登录</el-button>
            <el-button>注册</el-button>
          </div>
          <router-link v-if="false" to='/' class="has-login">
            <span class="ellipsis">昵称昵称昵称昵称昵称昵称</span>
            <img src="http://img5.imgtn.bdimg.com/it/u=865854342,1000008731&fm=26&gp=0.jpg" alt="">
          </router-link>
        </el-col>
        <el-col class="hidden-md-and-up" :span="2">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img src="../assets/menu.png" class="el-icon--right" alt>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>首页</el-dropdown-item>
              <el-dropdown-item>HTML</el-dropdown-item>
              <el-dropdown-item>CSS</el-dropdown-item>
              <el-dropdown-item>JavaScript</el-dropdown-item>
              <el-dropdown-item>Vue</el-dropdown-item>
              <el-dropdown-item>NodeJs</el-dropdown-item>
              <div class="down-search">
                <el-button>发布文章</el-button>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </nav>
  </header>
</template>
<script>
export default {
  data () {
    return {
      searchTxt: '' // 搜索内容
    }
  },
  methods: {}
}
</script>
<style lang='less' scoped>
nav {
  max-width: 960px;
  margin: 0 auto;
}
.el-menu.el-menu--horizontal {
  border-bottom-color: transparent;
}
.logo {
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
    margin-left: 10px;
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
  min-width: 175px;
  .has-login {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      padding: 10px;
      box-sizing: border-box;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
}
.el-col {
  text-align: center;
}
// .fa-btn {
//   min-width: 200px;
// }
.hidden-md-and-up {
  min-width: 100px;
}
.el-dropdown-menu {
  width: 100%;
}
.el-icon--right {
  width: 60px;
  height: 60px;
  padding: 20px;
  box-sizing: border-box;
}
.el-dropdown-menu {
  top: 48px !important;
  left: 0 !important;
  border: none;
  border-top: 2px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  box-shadow: none;
  .el-dropdown-menu__item {
    padding: 0 30px;
  }
}
.popper__arrow {
  display: none !important;
}
.down-search {
  padding: 10px 20px;
  box-sizing: border-box;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #007fff
}
</style>
