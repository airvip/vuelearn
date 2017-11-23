<template>
	<div id="article">
		<mt-header title="详情">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <!-- S<mt-button icon="more" slot="right"></mt-button> -->
		</mt-header>
		<article >					
			<p>{{articleData.title}}</p>
			<div class="avatar"><img :src="articleData.author_face" alt=""></div>
			{{articleData}}
		</article>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				articleData:{}
			}
		},
		mounted(){
			// console.log(this.$route.path)
			var reg = /\/article\/(\d+)/;
			var id = this.$route.path.match(reg)[1]; 
		  	//获取数据
		  	this.fetchData(id);
		  },
		  methods:{
		  	fetchData(id){
		  		var _this = this;
		  		this.$http.get('../src/data/article.data').then(function(res){
		  			// console.log(res)
		  			_this.articleData = res.data[id-1];
		  		}).catch(function(err){
		  			console.log('article detail page',err)
		  		});
		  	}
		  }
	}
</script>

<style scoped >
    article{
    	overflow: hidden;
    	padding: 1rem;
    }
	.avatar img{width: 100%}
</style>