<template>
	<div id="content">
		<mt-tab-container >
	        <mt-tab-container-item>
	          <mt-cell v-for="n in 4" >
	            <div class="title">title</div>
	            <div class="content">大家好像总是觉得换手机特别麻烦，每次一说起换手机号，就说手机绑定涉及的东西太多了，换了很麻烦等等。</div>
	            <div class="time">2017/11/14 00:00:12</div>
	          </mt-cell>
	        </mt-tab-container-item>
	    </mt-tab-container>
	</div>
</template>

<style scoped>
	#content{
		margin-top: 3px;
	}
</style>