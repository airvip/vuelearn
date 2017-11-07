<template>
  <div id="app">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger" icon="el-icon-delete">危险按钮</el-button>

    <el-row>
      <el-col :span="12">
        <div class="my-grid">122</div>
      </el-col>
      <el-col :span="12">
        <div class="my-grid">122</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
@color:red;
.height(@h){
  height:@h;
}
.my-grid {
  .height(50px);
  border:1px solid @color;
}
</style>
