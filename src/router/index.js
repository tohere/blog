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
const Login = () => import('../views/admin/login')

Vue.use(Router)

const router = new Router({
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
      path: '/admin/login',
      name: 'login',
      component: Login,
      meta: {
        admin: true
      }
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

// 设置路由守卫
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    // 如果是跳转去login页，直接下一步
    next()
  } else {
    // 如果不是跳转到login
    // 跳转前判断是否需要登录以及是否已经登录, 这里设置的是meta中带admin的都需要登录
    // 遍历路由元信息，查看是否有admin，如果有admin，检查是否有token
    if (to.matched.some(record => record.meta.admin)) {
      // 有admin字段，判断是否有token
      if (localStorage.getItem('token')) {
        // 有token，直接往下执行
        next()
      } else {
        // 没有token，跳转到登录页
        next({
          name: 'login',
          query: { redirect: to.fullPath } // 记录要去的页面，登录成功后直接跳转
        })
      }
    } else {
      // 没有admin字段，直接往下执行
      next()
    }
  }
})

export default router
