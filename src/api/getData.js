import axios from 'axios'
axios.defaults.baseURL = '/api'

/* ************************ 前台展示页面开始 ******************************/

/**
 * @Desc 获取分类数据
 */
export const getCate = () => axios.get('/articles/classify')

/**
 * @Desc 获取文章数据列表
 */
export const getArticles = () => axios.get('/articles')

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

/**
 * @Desc 通过分类名获取数据
 * @param {String} classify 分类名
 */
export const getArticlesByClassify = (classify) => axios.get(`/articles?classify=${classify}`)

/* ************************ 前台展示页面结束 ******************************/

/* ************************ 后台展示页面开始 ******************************/

/**
 * @Desc 获取文章发布内容，并保存到数据库
 * @param {String} title 文章标题
 * @param {String} content 文章内容
 */

export const postArticle = (title, content) => axios.post('/acticle', {title, content})

/* ************************ 后台展示页面开始 ******************************/
