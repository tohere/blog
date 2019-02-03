// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入ElementUI中的隐藏类
import 'element-ui/lib/theme-chalk/display.css'
import App from './App'
import router from './router'

// 解决ie11不能兼容问题
/* eslint-disable-next-line */
import "babel-polyfill"

// 全局注册
// import with ES6
// markdown相关
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// 通过eventBus传递数据
window.eventBus = new Vue()

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
