<template>
  <div id="app">
    <b-head></b-head>
    <router-view/>
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
html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f2f2f2;
}
</style>
