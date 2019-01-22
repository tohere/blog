<template>
  <!-- 编辑页面 -->
  <div class="editor">
    <el-dialog title="发布文章" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择文章分类">
            <el-option v-for="item in classifies" :label="item.classify" :value="item.classify" :key="item._id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <input type="text" placeholder="请输入文章标题" v-model="title">
    <el-button class="publish-btn" type="primary" @click="publish">发布</el-button>
    <mavon-editor class="editors" ref=md @imgAdd="$imgAdd" v-model="val" codeStyle="monokai-sublime"></mavon-editor>
  </div>
</template>
<script>
import axios from 'axios'
import { getCate, publishArticle } from '@/api/getData'
export default {
  data () {
    return {
      title: '', // 文章标题
      val: '', // 文章内容
      dialogFormVisible: false,
      form: {
        region: ''
      },
      formLabelWidth: '120px',
      classifies: [] // 文章分类
    }
  },
  methods: {
    /**
     * @Desc: 发表文章
     */
    async publish () {
      // 标题为空
      if (!this.title) {
        return this.$notify.error({
          title: '错误',
          message: '文章标题不能为空！',
          offset: 100
        })
      }
      const {data: {classifies}} = await getCate()
      this.classifies = classifies
      this.dialogFormVisible = true
    },
    /**
     * @Author: tomorrow-here
     * @Date: 2019-01-22 22:25:26
     * @Desc: 确定发布文章
     */
    async confirm () {
      if (this.form.region === '') {
        return this.$message.error('请选择文章分类！')
      }
      const { data } = await publishArticle(this.title, this.val, this.form.region)
      if (data.msg === 'publish fail') {
        this.$message.error('发布失败!')
      } else if (data.msg === 'publish success') {
        this.$message.success('发布成功!')
      }
      this.dialogFormVisible = false
    },
    // 绑定@imgAdd event
    $imgAdd (pos, $file) {
      // 第一步.将图片上传到服务器.
      const formdata = new FormData()
      formdata.append('file', $file)
      axios({
        url: '/articles/uploadimg',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        /**
       * $vm 指为mavonEditor实例，可以通过如下两种方式获取
       * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
       * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
       */
        this.$refs.md.$img2Url(pos, url.data.url)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.editor {
  position: absolute;
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
  input {
    line-height: 60px;
    font-size: 24px;
    font-weight: bold;
    width: 100%;
    text-indent: 20px;
  }
  .publish-btn {
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
.v-show-content {
  padding-bottom: 40px !important;
  box-sizing: border-box
}
</style>
