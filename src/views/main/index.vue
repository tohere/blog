<template>
  <!-- 页面：主题内容部分 -->
  <el-card class="box-card" v-loading="loading">
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
    <el-pagination
      background
      v-show="count > 10"
      layout="prev, pager, next"
      @current-change='pageChange'
      :total="count">
    </el-pagination>
  </el-card>
</template>

<script>
import { getArticlesByClassify } from '@/api/getData'
import { formatTime } from '@/utils/tool'
export default {
  data () {
    return {
      articles: [], // 文章集合
      page: 1,
      count: 0,
      cate: '', // 分类
      loading: true
    }
  },
  created () {
    this.loading = true
  },
  methods: {
    async getArticlesData (cate) {
      this.loading = true
      const {data: {articles, count}} = await getArticlesByClassify(cate, this.page)
      articles.map(item => {
        item.pubTime = formatTime(item.pubTime)
      })
      this.articles = articles
      this.count = count
      this.loading = false
    },
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-23 23:11:11
     * @Desc: 分页改变时触发
     */
    async pageChange (index) {
      this.loading = true
      const { data: { articles } } = await getArticlesByClassify(this.cate, index)
      this.articles = articles
      this.loading = false
    }
  },
  watch: {
    $route: {
      handler () {
        // 刚加载页面，路由监听就会触发，这样可以不用eventBus去触发事件，eventBus有个bug就是会多次触发，虽说可以消除这个问题，但是又会随之产生其他问题
        if (this.$route.name === 'main') {
          this.page = 1
          const cate = this.$route.fullPath.split('/')[1]
          this.getArticlesData(cate)
        }
      },
      deep: true,
      immediate: true
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
    line-height: 56px;
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
.el-pagination {
  margin-top: 20px;
}
</style>
