<template>
  <div id="app">
    <NavView></NavView>

    <FooterView></FooterView>
    
  </div>
</template>

<script>
import NavView from './components/Nav.vue'
import FooterView from './components/Footer.vue'

export default {
  components:{
    NavView,
    FooterView
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
