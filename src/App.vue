<template>
  <div id="app">
    <div v-if="!$route.meta.admin">
      <div class="head">
        <b-head class="b-head"></b-head>
      </div>
      <main>
        <router-view/>
      </main>
    </div>
    <div v-else class="admin-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BHead from './components/Head'
export default {
  name: 'App',
  data () {
    return {
      aa: ''
    }
  },
  components: {
    BHead
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
  max-width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-top: 70px;
  box-sizing: border-box;
  overflow: auto;
}
.admin-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
