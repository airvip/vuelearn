<template>
	<div id="nav">
		<div class="nav">
	      <mt-navbar class="page-part" v-model="selected">
	        <mt-tab-item id="1">首页</mt-tab-item>
	        <mt-tab-item id="2">关注</mt-tab-item>
	        <mt-tab-item id="3">栏目</mt-tab-item>
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