<template>
  <div id="app">
    <button class="btn btn-success">成功按钮</button>
    <button class="btn btn-danger">危险按钮</button>

    <div class="row">
    	<div class="col-sm-8 innercolor1">8</div>
    	<div class="col-sm-4 innercolor2">4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to My App'
    }
  }
}
</script>

<style scoped>
.innercolor1{
    background: #f60;
}
.innercolor2{
    background: #360;
}
</style>
