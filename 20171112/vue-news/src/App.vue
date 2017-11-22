<template>
  <div id="app">
    <!-- <loading v-show="loading"></loading> -->
    <NavView  v-show="headerShow"></NavView>

    <div>
      <router-view class="router-view"></router-view>
    </div>
    <FooterView></FooterView>
    
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
import FooterView from './components/Footer.vue'

import {mapGetters,mapActions} from 'vuex';

export default {
  computed:mapGetters([
    'headerShow','loading'
    ]),
  watch:{//用于监听路由变化
    $route(to,from){
      // console.log('to:'+to.path);
      // console.log('from:'+from.path);
      if(to.path=='/user-info'){
        this.$store.dispatch('hideHeader')
      }else if(to.path=='/home'){
        this.$store.dispatch('showHeader');
      }
    }
  },
  components:{
    NavView,
    FooterView
  },
  mounted:function () {
    if(this.$route.path == '/user-info'){
      this.$store.dispatch('hideHeader')
    }
  }
}
</script>

<style lang="scss">
body{margin: 0;padding: 0;}

.mint-cell-value{
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}
.mint-cell-value .title{
    margin-bottom: 5px;
    font-size: 18px;
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

</style>
