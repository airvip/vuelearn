<template>
	<div class="myLoading">
		{{msg}}
	</div>
</template>

<style scoped>
	.myLoading{
		color: #F60;
		font-size: 40px;
		text-shadow: 2px 2px 5px #000;
	}
</style>

<script>
	export default{
		data(){
			return {
				msg:'Loading...'
			}
		}
	}
</script>