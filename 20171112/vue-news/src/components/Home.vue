<template>
	<div id="content">
	  <SwipView></SwipView>
	      <!-- tab-container -->
      <mt-tab-container>
        <mt-tab-container-item >
          <mt-cell v-for="n in 3" >
            <div class="title">title</div>
            <div class="content">双十一的到来，几乎就是一个野生的大蛋糕。所有商家都忙着去分一块羮，其中最受瞩目的莫过于马云的阿里巴巴和刘强东的京东了。</div>
            <div class="time">2017/11/14 00:00:12</div>
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>
<script>
	import SwipView from './Banner.vue'
	export default{
		components:{
		    SwipView
		  },
		  data () {
		    return {
		  
		    }
		  }
	}
</script>