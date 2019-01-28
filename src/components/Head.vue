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
        <el-col class="hidden-sm-and-down" :md="20" >
          <el-menu active-text-color='#007fff' mode="horizontal" router default-active="/">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item  v-for="item in classifies" :key="item._id" :index="'/' + item.classify">{{ item.classify }}</el-menu-item>
          </el-menu>
        </el-col>
        <!-- <el-col class="hidden-sm-and-down fa-btn" :md="3">
          <el-button>发布文章</el-button>
        </el-col> -->
        <!-- <el-col class="hidden-sm-and-down" :md="7">
          <el-input size="medium" placeholder="请输入搜索内容" v-model="searchTxt">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col> -->
        <el-col :xs="2" :sm="2" class="login">
          <div class="login-box" v-if="false">
            <el-button>登录</el-button>
            <!-- <el-button>注册</el-button> -->
          </div>
          <div v-if="true" class="has-login">
            <!-- <span class="ellipsis">昵称昵称昵称昵称昵称昵称</span> -->
            <img src="https://p.ssl.qhmsg.com/dmsmfl/120_115_/t01464dbaaa2a201a6b.webp?size=590x442" alt="">
          </div>
        </el-col>
        <el-col class="hidden-md-and-up" :span="2">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <img src="../assets/menu.png" class="el-icon--right" alt>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in classifies" :key="item._id">{{ item.classify }}</el-dropdown-item>
              <!-- <div class="down-search">
                <el-button>发布文章</el-button>
              </div> -->
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </nav>
  </header>
</template>
<script>
export default {
  props: {
    classifies: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // searchTxt: '' // 搜索内容
    }
  },
  methods: {
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-20 21:58:18
     * @Desc: 点击分类切换主题部分内容
     */
    changeCate (cate) {
      cate = cate.split('/')[1]
      console.log(cate)
      // eslint-disable-next-line
      eventBus.$emit('getArticlesByClass', cate)
    }
  }
}
</script>
<style lang='less' scoped>
nav {
  max-width: 1170px;
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
  min-width: 100px;
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
