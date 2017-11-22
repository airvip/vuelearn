<template>
	<div id="content">
		<mt-tab-container >
	        <mt-tab-container-item>
	          <mt-cell v-for="(item,index) in arrList" >
	            <div class="title">{{index+1}} . {{item.title}}</div>
	            <div class="content">{{item.detail}}</div>
	            <!-- <div class="time">2017/11/14 00:00:12</div> -->
	          </mt-cell>
	        </mt-tab-container-item>
	      </mt-tab-container>
	</div>
</template>

<script>
	export default{
		  data () {
		    return {
		  		arrList:[]
		    }
		  },
		  mounted(){
		  	//获取数据
		  	this.fetchData();
		  },
		  methods:{
		  	fetchData(){
		  		var _this = this;
		  		this.$http.get('src/data/follow.data').then(function(res){
		  			// console.log(res)
		  			_this.arrList = res.data;
		  		}).catch(function(err){
		  			console.log('Home',err)
		  		});
		  	}
		  }
	}
</script>

<style scoped>
	#content{
		margin-top: 3px;
	}
</style>