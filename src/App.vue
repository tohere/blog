<template>
  <div id="app">
    <div v-if="!$route.meta.admin">
      <div class="head">
        <b-head class="b-head" @changeTab='changeTab' :classifies='classifies'></b-head>
      </div>
      <main>
        <router-view />
      </main>
    </div>
    <div v-else class="admin-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BHead from './components/Head'
import { getCate, getArticlesByClassify } from '@/api/getData'
export default {
  name: 'App',
  data () {
    return {
      classifies: [] // 分类集合
    }
  },
  created () {
    this.getClassify()
  },
  components: {
    BHead
  },
  methods: {
    /**
     * @Desc 获取分类列表
     */
    async getClassify () {
      const { data: {classifies} } = await getCate()
      this.classifies = classifies
    },
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-20 21:59:19
     * @Desc: 切换主体部分内容
     */
    async changeTab (cate) {
      const { data: { articles } } = await getArticlesByClassify(cate)
      this.articles = articles
    }
  }
}
</script>

<style lang='less'>
@import url('./assets/css/reset');
@import url('./assets/css/common');
html, body, #app {
  background: #f2f2f2;
  width: 100%;
  height: 100%;
}
.head {
  position: fixed;
  height: 60px;
  width: 100%;
  background: #fff;
  z-index: 1000;
  .b-head {
    height: 60px;
  }
}
main {
  max-width: 1170px;
  height: 100%;
  margin: 0 auto;
  padding-top: 70px;
  box-sizing: border-box;
  overflow: auto;
  position: relative;
  z-index: 10;
}
.admin-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
