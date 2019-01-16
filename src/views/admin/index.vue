<template>
  <!-- 管理员页面 -->
  <div class="admin">
    <el-row class="menu-box" type="flex">
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item class="my" index="/admin/home">
            <img src="https://ps.ssl.qhimg.com/sdmt/135_135_100/t0179bb161a3e622abd.png" alt="">
          </el-menu-item>
          <el-menu-item index="/admin/home">
            <b>&nbsp;🏠&nbsp;&nbsp;</b>
            <span slot="title">个人主页</span>
          </el-menu-item>
          <el-menu-item index="/admin/edit">
            <i class="el-icon-edit"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
          <el-menu-item index="/admin/manage">
            <i class="el-icon-setting"></i>
            <span slot="title">文章管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col class="right">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.admin, .menu-box {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
.el-col, .el-menu {
  height: 100%;
  width: 170px;
}
.my {
  height: 100px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 10px;
  }
}
.right {
  width: 100%;
  position: relative;
}
</style>
