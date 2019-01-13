<template>
  <!-- 页面：首页 -->
  <el-row type="flex" justify="space-between">
    <el-col :xs="24" :md="17" class="main">
      <router-view></router-view>
    </el-col>
    <el-col :md="6" class="hidden-sm-and-down aside">
      <b-aside></b-aside>
    </el-col>
  </el-row>
</template>

<script>
import BMain from '../main'
import BAside from '../../components/Aside'
export default {
  components: {
    BMain,
    BAside
  }
}
</script>

<style lang="less" scoped>
.main {
  min-width: 700px;
  height: 100%;
}
</style>
