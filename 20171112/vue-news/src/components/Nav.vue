<template>
	<div id="nav">
		<div class="nav">
	      <mt-navbar class="page-part" v-model="selected">
	        <mt-tab-item id="1">选项一</mt-tab-item>
	        <mt-tab-item id="2">选项二</mt-tab-item>
	        <mt-tab-item id="3">选项三</mt-tab-item>
	      </mt-navbar>
    	</div>

    	<SwipView></SwipView>

    	<div id="content">
	      <!-- tab-container -->
	      <mt-tab-container v-model="selected">
	        <mt-tab-container-item id="1">
	          <mt-cell v-for="n in 3" >
	            <div class="title">title</div>
	            <div class="content">双十一的到来，几乎就是一个野生的大蛋糕。所有商家都忙着去分一块羮，其中最受瞩目的莫过于马云的阿里巴巴和刘强东的京东了。</div>
	            <div class="time">2017/11/14 00:00:12</div>
	          </mt-cell>
	        </mt-tab-container-item>
	        <mt-tab-container-item id="2">
	          <mt-cell v-for="n in 2" >
	            <div class="title">title</div>
	            <div class="content">性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的。</div>
	            <div class="time">2017/11/14 00:00:12</div>
	          </mt-cell>
	        </mt-tab-container-item>
	        <mt-tab-container-item id="3">
	          <mt-cell v-for="n in 4" >
	            <div class="title">title</div>
	            <div class="content">大家好像总是觉得换手机特别麻烦，每次一说起换手机号，就说手机绑定涉及的东西太多了，换了很麻烦等等。</div>
	            <div class="time">2017/11/14 00:00:12</div>
	          </mt-cell>
	        </mt-tab-container-item>
	      </mt-tab-container>
	    </div>

	</div>
</template>

<script>
	import SwipView from './Swip.vue'
	export default{
		components:{
		    SwipView
		  },
		  data () {
		    return {
		      selected:'1'
		    }
		  }
	}
</script>

<style scoped>
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