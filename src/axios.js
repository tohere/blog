// 在此进行请求和响应拦截
import axios from 'axios'
import { Message } from 'element-ui'

// 超时时间
axios.defaults.timeout = 10000

// 获取token
const token = localStorage.getItem('token') || ''

// 请求拦截
axios.interceptors.request.use(req => {
  // 如果token存在，将token携带在请求头上
  if (token) {
    req.headers.token = token
  }
  return req
}, err => {
  Message.error('请求超时!')
  return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use(res => {
  // 响应成功
  return res
}, err => {
  // 响应失败
  Message.error('加载失败!')
  return Promise.reject(err)
})

export default axios
