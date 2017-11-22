<template>
	<div id="footer">
		<!-- footer -->
	    <!-- <mt-tabbar>
	     
	    		      <mt-tab-item id="home">
	    		        <img slot="icon" src="../assets/logo.png" >
	    		         <router-link to="/home" tag='div'>
	    		         首页
	    		         </router-link>
	    		      </mt-tab-item>
	    		  
	      
	    		     <mt-tab-item id="search"> 
	    		     	<img slot="icon" src="../assets/logo.png" >
	    		     			    <router-link to="/follow" tag='div'>
	    		     			        搜索
	    		     		    	</router-link>
	    		     </mt-tab-item>
	    		  
	    
	      
	      	 <mt-tab-item id="my">
	    		        <img slot="icon" src="../assets/logo.png" >
	    		        <router-link to="/user-info" tag='div'>
	    		        我的
	    		        </router-link>
	    		    </mt-tab-item>
	      
	      
	      
	    </mt-tabbar> -->

	    <div class="mint-tabbar">
	    	<router-link to="/home" class="mint-tab-item">
	    		<div class="mint-tab-item-icon">
	    			<img src="/dist/logo.png?82b9c7a5a3f405032b1db71a25f67021">
	    		</div> 
	    		<div class="mint-tab-item-label"> 
	                   首页
	    		 </div>
	 		</router-link>
	 		<router-link to="/user-info" class="mint-tab-item">
	 			<div class="mint-tab-item-icon">
	 				<img src="/dist/logo.png?82b9c7a5a3f405032b1db71a25f67021">
	 			</div> 
	 			<div class="mint-tab-item-label"> 
	        			我的
	        	</div>
	        </router-link>
	    </div>
	</div>
</template>

<style scoped>
	.mint-tab-item{
		color: #000;
	} 
	.router-link-active{
		color: #26a2ff;
		font-weight: bolder;
	}
</style>