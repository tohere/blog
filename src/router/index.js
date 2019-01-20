import Vue from 'vue'
import Router from 'vue-router'

// 首页
const Home = () => import('../views/home')
const Main = () => import('../views/main')
// 文章详情页
const Article = () => import('../views/article')

const Admin = () => import('../views/admin')
const AdminHome = () => import('../views/admin/home')
const Edit = () => import('../views/admin/edit')
const BManage = () => import('../views/admin/manage') // 此处不能用manage命名，可能和系统的关键字重了...
const ClassManage = () => import('../views/admin/classManage')

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
          path: '/',
          name: 'main',
          component: Main
        },
        {
          path: '/:classify',
          name: 'main',
          component: Main
        },
        {
          path: '/article/:id',
          name: 'article',
          component: Article
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        admin: true
      },
      children: [
        {
          path: 'home',
          name: 'adminHome',
          component: AdminHome,
          meta: {
            admin: true
          }
        },
        {
          path: 'edit',
          name: 'edit',
          component: Edit,
          meta: {
            admin: true
          }
        },
        {
          path: 'manage',
          name: 'manage',
          component: BManage,
          meta: {
            admin: true
          }
        },
        {
          path: 'classmanage',
          name: 'classmanage',
          component: ClassManage,
          meta: {
            admin: true
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
