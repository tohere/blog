import Vue from 'vue'
import Router from 'vue-router'

// 首页
const Home = () => import('../views/home')
const Main = () => import('../views/main')
// 文章详情页
const Article = () => import('../views/article')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'main',
          component: Main
        },
        {
          path: '/article/:id',
          component: Article
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
