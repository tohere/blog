<template>
  <!-- 页面：主题内容部分 -->
  <el-card class="box-card">
    <el-row type="flex" justify="space-between" align="middle" v-for="article in articles" :key="article._id">
      <router-link tag="div" :to="{ path: '/article/' + article._id }" style="width: 100%">
        <el-col :span="18">
          <h2 class="ellipsis">{{ article.title }}</h2>
          <time>{{ article.pubTime }}</time>
          <span class="readNums"><i class="el-icon-view"></i> {{ article.scan }}</span>
        </el-col>
        <el-col :span="2">
          <img :src="article.imgs[0]" v-if="article.imgs && article.imgs[0]" alt="">
        </el-col>
      </router-link>
    </el-row>
  </el-card>
</template>

<script>
import { getArticles, getArticlesByClassify } from '@/api/getData'
import { formatTime } from '@/utils/tool'
export default {
  data () {
    return {
      articles: [] // 文章集合
    }
  },
  created () {
    this.getArticleList()
    // 注意， evenBus.$emit是瞬时性的，因此使用 evenBus.$emit派发事件时，evenBus.$on要已经在监听了，就是evenBus.$on要比emit先执行，否则无法接收到事件。
    // 所以此处需要一开始就进行初始化
    this.getArticles()
  },
  methods: {
    /**
     * @Desc 获取文章列表
     */
    async getArticleList () {
      const { data: { articles } } = await getArticles()
      articles.map(item => {
        item.pubTime = formatTime(item.pubTime)
      })
      this.articles = articles
    },
    getArticles () {
      const _this = this
      // eslint-disable-next-line
      eventBus.$on('getArticlesByClass', async (cate) => {
        const {data: {articles}} = await getArticlesByClassify(cate)
        _this.articles = articles
        console.log(articles)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@color8: #888;
@colorf2: #f2f2f2;
.box-card {
  width: 100%;
  height: 100%;
  box-shadow: none;
  border: none;
  padding: 0;
  img {
    width: 60px;
    height: 60px;
  }
  .el-card__body {
    & > div {
      cursor: pointer;
      border-bottom: 1px solid @colorf2;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background: #fafafa
      }
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 60px;
    &:hover {
      text-decoration: underline;
    }
  }
}
time,
.readNums {
  font-size: 15px;
  color: #888;
}
.readNums {
  margin-left: 10px;
}
</style>
