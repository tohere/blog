<template>
  <div class="b-manage">
    <el-card class="box-card" v-for="item in 10" :key="item">
      <h2 class="ellipsis">🏆 掘金年度征文 | 2018 与我的技术之路🏆 掘金年度征文 | 2018 与我的技术之路🏆 掘金年度征文 | 2018 与我的技术之路</h2>
      <p
        class="ellipsis"
      >2018 已经过去，这一年，你又学习了什么新技术？踩过哪些坑？做了什么项目？2019 年又给自己定了什么目标？参与掘金技术征文活动，记录你的 2018，还有掘金周边、小册优惠码赠送哦。</p>
      <div class="others">
        <div class="scans el-icon-view"> 245浏览</div>
        <div class="edit">
          <a href="javascript:;" class="edit-article el-icon-edit-outline"> 编辑</a>
          <a href="javascript:;" class="del-article el-icon-delete"> 删除</a>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.b-manage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  .box-card {
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 40px;
    h2 {
      width: 100%;
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
