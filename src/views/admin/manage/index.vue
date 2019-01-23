<template>
  <div class="b-manage">
    <el-input v-model="searchTxt" placeholder="请输入搜索内容"><el-button slot="append" icon="el-icon-search" @click="search"></el-button></el-input>
    <el-card class="box-card" v-for="article in articles" :key="article._id">
      <h2 class="ellipsis">{{ article.title }}</h2>
      <div class="others">
        <div class="scans el-icon-view">
          <span> {{ article.scan }} 浏览 </span>
          <span> {{ article.pubTime }}</span>
        </div>
        <div class="edit">
          <a href="javascript:;" class="edit-article el-icon-edit-outline"> 编辑</a>
          <a href="javascript:;" @click.prevent="del(article._id)" class="del-article el-icon-delete"> 删除</a>
        </div>
      </div>
    </el-card>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import { searchArticle, getArticles, delArticle } from '@/api/getData'
import { formatTime } from '@/utils/tool'
export default {
  data () {
    return {
      articles: [], // 文章列表
      searchTxt: '' // 搜索文本
    }
  },
  created () {
    this.getAllArticles()
  },
  methods: {
    async getAllArticles () {
      const { data: { articles } } = await getArticles()
      articles.map(item => {
        item.pubTime = formatTime(item.pubTime)
      })
      this.articles = articles
    },
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-22 21:38:33
     * @Desc: 通过关键字搜索文章
     */
    async search () {
      const { data: { articles } } = await searchArticle(this.searchTxt)
      this.articles = articles
    },
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-22 21:58:10
     * @Desc: 删除某一篇文章
     */
    async del (id) {
      const {data} = await delArticle(id)
      if (data.msg === 'delete fail') {
        this.$message.error('删除失败!')
      } else if (data.msg === 'delete success') {
        this.$message.success('删除成功！')
      }
      this.getAllArticles()
    }
  }
}
</script>

<style lang="less" scoped>
.b-manage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  .el-input {
    padding: 10px 20px;
    box-sizing: border-box;
  }
  .box-card {
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 40px;
    cursor: pointer;
    h2 {
      width: 100%;
      &:hover{
        text-decoration: underline;
      }
    }
    .others {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 40px;
      a:hover {
        color: #f00;
      }
    }
  }
}
</style>
