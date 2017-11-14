<template>
  <div id="app">
    <div id="header">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>
    </div>

    <div id="swipe" >
      <mt-swipe :auto="4000">
        <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
        <mt-swipe-item :class="{slide1:true}">2</mt-swipe-item>
        <mt-swipe-item :class="{slide1:true}">3</mt-swipe-item>
      </mt-swipe>
    </div>

    <div id="content">
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 3" >{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 2" >{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 4" >{{n}}</mt-cell>
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
      selected:'1'
    }
  }
}
</script>

<style lang="scss">
body{margin: 0;padding: 0;}

.mint-swipe{
  height:200px;
  font-size:30px;
  text-align:center;
}
.mint-swipe-item{
  line-height: 200px;
  color:#FFF;
}
.slide1{
  background-color: #f60;
}
.slide2{
  background-color: #960;
}
.slide3{
  background-color: #360;
}



</style>
