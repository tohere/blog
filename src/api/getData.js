import axios from '../axios'
axios.defaults.baseURL = '/api'

/* ************************ 前台展示页面开始 ******************************/

/**
 * @Desc 获取分类数据
 */
export const getCate = () => axios.get('/classifies')

/**
 * @Desc 获取某一篇文章的内容
 * @param {String} id 文章ID
 */
export const getOneArticle = (id) => axios.get(`/articles?id=${id}`)

/**
 * @Desc 增加文章浏览量
 * @param {String} id 文章ID
 */
export const addScan = (id) => axios.get(`/articles/addscan?id=${id}`)

/* ************************ 前台展示页面结束 ******************************/

/* ************************ 后台展示页面开始 ******************************/

/**
 * @Desc 登录
 * @param {String} username 用户名
 * @param {String} password 密码
 */
export const login = (username, password) => axios.post('/users/login', { username, password })

/**
 * @Desc 获取文章发布内容，并保存到数据库
 * @param {String} title 文章标题
 * @param {String} content 文章内容
 */

export const postArticle = (title, content) => axios.post('/acticle', {title, content})

/**
 * @Desc 搜索文章
 * @param {String} txt 要搜索的文本
 */
export const searchArticle = (txt) => axios.get(`/articles/search?txt=${txt}`)

/**
 * @Desc 删除分类
 * @param {String} id 分类id
 */
export const delCate = (id) => axios.delete('/classifies', { data: { id } })

/**
 * @Desc 添加分类
 * @param {String} cate 分类名称
 */
export const addCate = (cate) => axios.post('/classifies', { cate })
/**
 * @Desc 修改分类
 * @param {String} id 要修改的分类的id
 * @param {String} cate 修改后的分类名称
 */
export const modCate = (id, cate) => axios.put('/classifies', { id, cate })

/**
 * @Desc 发布文章
 * @param {String} title 文章标题
 * @param {String} content 文章内容
 * @param {String} classify 文章分类
 */
export const publishArticle = (title, content, classify) => axios.post('/articles', { title, content, classify })

/**
 * @Desc 删除某一篇文章
 * @param {String} id 文章id
 */
export const delArticle = id => axios.delete('/articles', { data: { id } })

/**
 * @Desc 通过分类名获取数据
 * @param {String} classify 分类名
 */
export const getArticlesByClassify = (classify, page) => axios.get(`/articles?classify=${classify}&page=${page}`)

/**
 * @Desc 获取近7天文章浏览量
 */
export const getTimeArticles = () => axios.get('/articles/times')

/* ************************ 后台展示页面结束 ******************************/
