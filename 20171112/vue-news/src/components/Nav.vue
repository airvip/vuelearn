<template>
	<div id="nav">
		<div class="nav">
	      <mt-navbar class="page-part" v-model="selected">
	      	<mt-tab-item id="1">
				<router-link :to="{path:'home'}">
	      			首页
				</router-link>
	      	</mt-tab-item>
        	<mt-tab-item id="2" >
        		<router-link :to="{path:'follow'}">
        			关注
	        	</router-link>
	        </mt-tab-item>
			<mt-tab-item id="3">
				<router-link :to="{path:'column'}">
	       			栏目
	        	</router-link>
	        </mt-tab-item>
	      </mt-navbar>
    	</div>
	</div>
</template> 


<script>
	export default{
		  data () {
		    return {
		      selected:'1'
		    }
		  }
	}
</script>

<style scoped>
.mint-tab-item-label a{
	text-decoration: none;
	font-weight: bolder;
}
.mint-tab-item.is-selected a{
	color:#26a2ff;
}
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