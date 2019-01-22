<template>
  <!-- 页面： 文章分类管理页面 -->
  <div class="class-manage">
    <div class="header-title">
      <div>分类</div>
      <div class="right">操作</div>
    </div>
    <div class="content">
      <div class="item" v-for="item in classifies" :key="item._id">
        <div v-if="!item.mod">{{ item.classify }}</div>
        <input type="text" v-if="item.mod" v-focus @keyup.enter="confirmMod(item)" @blur="confirmMod(item)" v-model="item.classify" />
        <div class="right">
          <el-button size="mini" type="warning" @click="item.mod = true" class="el-icon-edit-outline"></el-button>
          <el-button size="mini" type="danger" @click="delClass(item._id)" class="el-icon-delete"></el-button>
        </div>
      </div>
      <div class="add">
        <el-input
          placeholder="请输入分类名称"
          v-model="cate"
          clearable>
        </el-input>
        <el-button type="primary" @click="addClass">添加分类</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { getCate, delCate, addCate, modCate } from '@/api/getData'
export default {
  data () {
    return {
      classifies: [], // 分类集合
      cate: '' // 分类名称
    }
  },
  created () {
    this.getClassifies()
  },
  directives: {
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-21 22:43:47
     * @Desc: 文本框自动获取焦点
     */
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    // 获取分类数据
    async getClassifies () {
      const { data: {classifies} } = await getCate()
      classifies.forEach(item => {
        item.mod = false
      })
      console.log(classifies)
      this.classifies = classifies
    },
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-21 21:42:37
     * @Desc: 删除分类
     */
    async delClass (id) {
      console.log(id)
      const {data: {msg}} = await delCate(id)
      if (msg === 'delete success') {
        this.$message({
          message: '删除成功！',
          type: 'success'
        })
      } else {
        this.$message({
          message: '删除失败！',
          type: 'error'
        })
      }
      this.getClassifies()
    },
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-21 22:14:05
     * @Desc: 添加分类
     */
    async addClass () {
      if (!this.cate) {
        return this.$message.error('请输入分类名称！')
      }
      const { data: {msg} } = await addCate(this.cate)
      if (msg === 'add success') {
        this.$message({
          message: '添加成功！',
          type: 'success'
        })
        this.cate = ''
      } else {
        this.$message({
          message: '添加失败！',
          type: 'error'
        })
      }
      this.getClassifies()
    },
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-21 22:32:08
     * @Desc: 确定修改分类
     */
    async confirmMod (item) {
      const { data } = await modCate(item._id, item.classify)
      console.log(item)
      if (data.msg === 'update success') {
        this.$message.success('修改成功!')
      } else {
        this.$message.error('修改失败!')
      }
      item.mod = false
    }
  }
}
</script>

<style lang="less" scoped>
.class-manage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
  .content {
    input {
      width: 200px;
      line-height: 40px;
      outline: none;
      font-size: 14px;
    }
  }
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
  height: 60px;
  align-items: center;
  box-sizing: border-box;
  .el-input {
    width: 200px;
    margin-right: 20px;
  }
}
</style>
