<template>
  <!-- 页面：文章详情部分 -->
  <article class="article">
    <!-- 文章标题部分 -->
    <div class="title">
      <h1>文章标题</h1>
      <time>2019-01-01</time>
      <span class="readNums">阅读数: 1000</span>
    </div>
    <!-- 文章主体 内容部分 -->
    <article class="content">
      <!-- markdown展示部分 -->
      <mavon-editor v-model="val" codeStyle='vs2015' :subfield="false" defaultOpen="preview" :toolbarsFlag="false" :boxShadow="false"></mavon-editor>
    </article>
  </article>
</template>
<script>
export default {
  data () {
    return {
      val: 'data'
    }
  },
  mounted () {
    // 动态设置页面
    document.title = document.getElementsByTagName('h1')[0].innerText || '我的博客'
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
