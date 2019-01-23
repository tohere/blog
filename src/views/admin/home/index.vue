<template>
  <!-- 页面：个人主页 -->
  <div class="admin-home">
    <vchart-line :data="chartData"></vchart-line>
  </div>
</template>
<script>
// 引入v-chart折线图
import VchartLine from 'v-charts/lib/line.common'
import { getTimeArticles } from '@/api/getData'
import { formatTime } from '@/utils/tool'
export default {
  data () {
    return {
      chartData: {
        columns: ['日期', '浏览量'],
        rows: [
          { 日期: '2019-01-15', 浏览量: 1393 },
          { 日期: '2019-01-16', 浏览量: 3530 },
          { 日期: '2019-01-17', 浏览量: 2923 },
          { 日期: '2019-01-18', 浏览量: 1723 },
          { 日期: '2019-01-19', 浏览量: 3792 },
          { 日期: '2019-01-20', 浏览量: 4593 }
        ]
      }
    }
  },
  created () {
    this.getArticlesData()
  },
  components: {
    VchartLine
  },
  methods: {
    async getArticlesData () {
      const { data: { articles } } = await getTimeArticles()
      console.log(articles)
      const datas = articles.map(item => {
        return {
          '日期': formatTime(item.pubTime),
          '浏览量': parseInt(item.scan)
        }
      })
      console.log(datas)
      this.chartData.rows = datas
    }
  }
}
</script>

<style lang="less" scoped>
.admin-home {
  .ve-line{
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 100px;
  }
}
</style>
