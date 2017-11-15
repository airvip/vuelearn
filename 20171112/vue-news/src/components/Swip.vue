<template>
	<div id="swipe" >
      <mt-swipe :auto="4000">
        <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
        <mt-swipe-item :class="{slide1:true}">2</mt-swipe-item>
        <mt-swipe-item :class="{slide1:true}">3</mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
	
</script>

<style scoped>
#swipe{
  margin-top: 3px;
}
.mint-swipe{
  height:200px;
  font-size:30px;
  text-align:center;
  position: relative;
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