<template>
  <!-- 页面：个人主页 -->
  <div class="admin-home">
    <vchart-line :data="chartData"></vchart-line>
  </div>
</template>
<script>
// 引入v-chart折线图
import VchartLine from 'v-charts/lib/line.common'
export default {
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '2019-01-15', 访问用户: 1393 },
          { 日期: '2019-01-16', 访问用户: 3530 },
          { 日期: '2019-01-17', 访问用户: 2923 },
          { 日期: '2019-01-18', 访问用户: 1723 },
          { 日期: '2019-01-19', 访问用户: 3792 },
          { 日期: '2019-01-20', 访问用户: 4593 }
        ]
      }
    }
  },
  components: {
    VchartLine
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
