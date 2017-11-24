<template>
  <div id="app">
    <Loading v-show="loading"></Loading>
    <NavView  v-show="headerShow"></NavView>

    <div id="com">
      <transition name="slide-down">
        <keep-alive>
          <router-view class="router-view"></router-view>
        </keep-alive> 
      </transition>
    </div>
    <FooterView></FooterView>
    
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
import FooterView from './components/Footer.vue'
import Loading from './components/loading/Loading.vue'

import {mapGetters,mapActions} from 'vuex';

export default {
  computed:mapGetters([
    'headerShow','loading'
    ]),
  watch:{//用于监听路由变化
    $route(to,from){
      // console.log('to:'+to.path);
      // console.log('from:'+from.path);
      // console.log(to.path.indexOf('/article'));
      if(to.path=='/user-info' || to.path.indexOf('/article') >= 0){
        this.$store.dispatch('hideHeader')
      }else if(to.path=='/home'){
        this.$store.dispatch('showHeader');
      }
    }
  },
  components:{
    NavView,
    FooterView,
    Loading
  },
  mounted:function () {
    if(this.$route.path == '/user-info' || this.$route.path.indexOf('/article') >= 0){
      this.$store.dispatch('hideHeader')
    }
  }
}
</script>

<style lang="scss">
body{margin: 0;padding: 0;}
a{text-decoration: none;}
#com{margin-bottom: 60px;}
.mint-cell-value{
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}
.mint-cell-value .title{
    margin-bottom: 5px;
    font-size: 18px;
    overflow: hidden;
    height: 20px;
    line-height: 20px;
}
.mint-cell-value .content{
    margin-bottom: 5px;
    font-size: 14px;
    color: #999;
    line-height: 18px;
}
.mint-cell-value .time{
    font-size: 14px;
    color: #999;
    line-height: 18px;
    align-self: flex-end;
}
.slide-down-enter-active,
.slide-down-leave-active{
  transition:.4s all ease;
  opacity:0.2;
  transform:translate3d(0,6em,0)
}
.slide-down-enter,
.slide-down-leave{
  opacity:1;
  transform:translate3d(0,6em,0)
}
</style>
