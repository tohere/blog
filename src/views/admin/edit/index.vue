<template>
  <!-- 编辑页面 -->
  <div class="editor">
    <input type="text" placeholder="请输入文章标题">
    <el-button type="primary">发布</el-button>
    <mavon-editor></mavon-editor>
  </div>
</template>

<style lang="less" scoped>
.editor {
  width: 100%;
  height: 100%;
  input {
    line-height: 60px;
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    text-indent: 20px;
  }
  .el-button {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 80px;
    height: 40px;
    font-size: 16px;
  }
}
.v-note-wrapper {
  height: 100%;
}
</style>
