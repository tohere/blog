<template>
  <!-- 页面：文章详情部分 -->
  <article class="article">
    <!-- 文章标题部分 -->
    <div class="title">
      <h1>{{ article.title }}</h1>
      <time>{{ article.pubTime }}</time>
      <span class="readNums"><i class="el-icon-view"></i> {{ article.scan }}</span>
    </div>
    <!-- 文章主体 内容部分 -->
    <article class="content">
      <!-- markdown展示部分 -->
      <mavon-editor v-model="article.content" codeStyle='monokai-sublime' :subfield="false" defaultOpen="preview" :toolbarsFlag="false" :boxShadow="false"></mavon-editor>
    </article>
  </article>
</template>
<script>
import { getOneArticle, addScan } from '@/api/getData'
import { formatTime } from '@/utils/tool'
export default {
  data () {
    return {
      article: {}
    }
  },
  created () {
    this.getOneArticleData() // 获取某一篇文章数据
    addScan(this.$route.params.id) // 增加浏览量
  },
  mounted () {
    // 动态设置页面
    document.title = document.getElementsByTagName('h1')[0].innerText || '我的博客'
  },
  methods: {
    async getOneArticleData () {
      const { data: { article } } = await getOneArticle(this.$route.params.id)
      article.pubTime = formatTime(article.pubTime)
      this.article = article
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 10px 20px 40px;
  box-sizing: border-box;
  .content {
    margin-top: 20px;
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
.title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
h1 {
  font-size: 24px;
  font-weight: 600;
  line-height: 60px;
}
#editor {
  width: 100%;
  height: 100%;
}
</style>
