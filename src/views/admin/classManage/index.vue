<template>
  <!-- 页面： 文章分类管理页面 -->
  <div class="class-manage">
    <div class="header-title">
      <div>分类</div>
      <div class="right">操作</div>
    </div>
    <div class="content">
      <div class="item" v-for="item in classfies" :key="item.id">
        <div>{{ item.classfiy }}</div>
        <div class="right">
          <el-button size="mini" type="warning" class="el-icon-edit-outline"></el-button>
          <el-button size="mini" type="danger" class="el-icon-delete"></el-button>
        </div>
      </div>
      <div class="add">
        <el-button type="primary">添加分类</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classfies: [
        { id: 1, classfiy: '分类1' },
        { id: 2, classfiy: '分类1' },
        { id: 3, classfiy: '分类1' },
        { id: 4, classfiy: '分类1' },
        { id: 5, classfiy: '分类1' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.class-manage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
}
.header-title {
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  box-sizing: border-box;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  .right {
    width: 200px;
    text-align: center;
  }
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #E4E7ED;
  height: 60px;
  transition: all .2s;
  &:hover {
    background: #F2F6FC;
  }
  .right {
    width: 200px;
    text-align: center;
  }
}
.add {
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  box-sizing: border-box;
  .el-button {
    margin-top: 20px;
  }
}
</style>
