<template>
  <!-- 页面：主题内容部分 -->
  <el-card class="box-card">
    <el-row type="flex" justify="space-between" align="middle" v-for="item in 10" :key="item">
      <el-col :span="18">
        <h2 class="ellipsis">🏆 掘金年度征文 | 2018 与我的技术之路</h2>
        <p class="ellipsis">2018 已经过去，这一年，你又学习了什么新技术？踩过哪些坑？做了什么项目？2019 年又给自己定了什么目标？参与掘金技术征文活动，记录你的 2018，还有掘金周边、小册优惠码赠送哦。</p>
      </el-col>
      <el-col :span="2">
        <img src="http://p3.so.qhimgs1.com/bdr/_240_/t01619d2fdaed472843.jpg" alt="">
      </el-col>
    </el-row>
  </el-card>
</template>

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
  p {
    line-height: 40px;
    font-size: 14px;
    color: @color8;
    margin-bottom: 10px;
  }
}
</style>
