// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

// 引入ElementUI中的隐藏类
import 'element-ui/lib/theme-chalk/display.css'

// 全局注册
// import with ES6
// markdown相关
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(mavonEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
