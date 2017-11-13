<template>
  <div id="app">

    <div id="header">
      <mt-navbar class="page-part" v-model="selected" :active.sync="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>
    </div>
    {{selected}}
    <div id="swipe" class="page-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
        <mt-swipe-item :class="{slide1:true}">2</mt-swipe-item>
        <mt-swipe-item :class="{slide1:true}">3</mt-swipe-item>
      </mt-swipe>
    </div>

    <div id="content">
      <!-- tab-container -->
      <mt-tab-container v-model="selected"  :active.sync="selected">
        <mt-tab-container-item id="1">
          <mt-cell  :title="'内容 ' + 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell  :title="'测试 ' + 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell  :title="'选项 ' + 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
      
    

    <!-- footer -->
    <mt-tabbar>
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/logo.png" >
        首页
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/logo.png" >
        搜索
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="./assets/logo.png" >
        我的
      </mt-tab-item>
      
    </mt-tabbar>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome',
      selected:1
    }
  }
}
</script>

<style lang="scss">
body{margin: 0;padding: 0;}

.page-swipe .mint-swipe{
  height:200px;
  color:#fff;
  font-size:30px;
  text-align:center;
}
.page-swipe .mint-swipe{
  height:200px;
  color:#fff;
  font-size:30px;
  text-align:center;
  margin-bottom: 20px;
}
.page-swipe .mint-swipe-item{
  line-height: 200px;
}
.page-swipe .slide1{
  background-color: #f60;
  color: #fff; 
}
.page-swipe .slide2{
  background-color: #960;
  color: #fff; 
}
.page-swipe .slide3{
  background-color: #360;
  color: #fff; 
}
.page-swipe-desc{
  text-align: center;
  color:#666;
  margin-bottom: 5px;
}


.page-part {
    margin-bottom: 3px;
}
.mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -3px;
}
.mint-navbar .mint-tab-item {
    padding: 17px 0;
    font-size: 15px;
}
.mint-tab-item {
    display: block;
    padding: 7px 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-decoration: none;
}
</style>
