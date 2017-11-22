<template>
	<div id="nav">
		<!-- <div class="nav">
			      <mt-navbar class="page-part" v-model="navNum">
			      	<mt-tab-item id="1">
				
			      			推荐
				
			      	</mt-tab-item>
		        	<mt-tab-item id="2" >
		        		
		        			关注
			        	
			        </mt-tab-item>
			<mt-tab-item id="3">
				
			       			栏目
			        	
			        </mt-tab-item>
			      </mt-navbar>
		    	</div> -->
		<div class="nav">
    	<div class="mint-navbar page-part">
    		<router-link to="/home" class="mint-tab-item">	
    			<div class="mint-tab-item-icon"></div> 
    			<div class="mint-tab-item-label">
        			推荐
        		</div>
        	</router-link>
        	<router-link to="/follow" class="mint-tab-item">	
        		<div class="mint-tab-item-icon"></div> 
        		<div class="mint-tab-item-label">
            		关注
	            </div>
	        </router-link>
        	<router-link to="/column" class="mint-tab-item">	
	        	<div class="mint-tab-item-icon"></div> 
	        	<div class="mint-tab-item-label">
        			栏目
            	</div>
            </router-link>
        </div>
    </div>
	</div>
</template> 


<script>
	export default{
	  data () {
	    return {
	      navNum:'1'
	    }
	  },
	}
</script>

<style scoped>
.mint-tab-item{
	color: #000;
}
.router-link-active{
	border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -3px;
    font-weight: bolder;
}

</style>