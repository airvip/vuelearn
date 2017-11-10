<template>
  <div id="app">
    <!-- header -->
    <mt-header fixed title="固定在顶部"></mt-header>



    <!-- Carousel -->
    <div id="container" class="page-swipe">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item :class="{slide1:true}">ad1</mt-swipe-item>
        <mt-swipe-item :class="{slide2:true}">ad2</mt-swipe-item>
        <mt-swipe-item :class="{slide3:true}">ad3</mt-swipe-item>
      </mt-swipe>
    </div>


    <!-- button -->
    <mt-button type="default">default</mt-button> 
    <mt-button type="primary" @click.native="open">primary</mt-button> 
    <mt-button type="danger">danger</mt-button>



    <mt-radio title="单选框列表"
    v-model="value"
    :options="['选项A','选项B','选项C']"></mt-radio>

    <!-- title -->
    <mt-cell title="标题文字">{{value}}</mt-cell>

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
      <mt-tab-item id="msg">
        <img slot="icon" src="./assets/logo.png" >
        社区
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="./assets/logo.png" >
        我的
      </mt-tab-item>
      
    </mt-tabbar>

  </div>
</template>

<script>
import {Indicator} from 'mint-ui'
export default {
  name: 'app',
  data () {
    return {
      msg: '',
      value: ''
    }
  },
  methods:{
    open(){
      Indicator.open('Loading...');

      setTimeout(()=>{
        Indicator.close();
      },2000);
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
#container{
  margin-top:40px;
}
</style>
