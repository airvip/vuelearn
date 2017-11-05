<template>
	<div id="news">
		<h3>i am news page</h3>
		<ol>
			<li v-for="(val,index) in news" v-text="val"></li>
		</ol>
	</div>
</template>

<script>
	export default{
		name:'news',
		data(){
			return {
				news:[
					'1111111111',
					'2222222222',
					'3333333333',
					'4444444444'
				]
			}
		}
	}
</script>

<style scoped>
    li{
    	border-bottom: 1px dashed #f60;
    }	
</style>