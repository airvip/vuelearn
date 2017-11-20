<template>
	<div id="footer">
		<!-- footer -->
	    <mt-tabbar>
	     
		      <mt-tab-item id="home">
		        <img slot="icon" src="../assets/logo.png" >
		         <router-link to="/home" tag='div'>
		         首页
		         </router-link>
		      </mt-tab-item>
		  
	      
		     <!--  <mt-tab-item id="search"> 
		     	<img slot="icon" src="../assets/logo.png" >
		     			    <router-link to="/follow" tag='div'>
		     			        搜索
		     		    	</router-link>
		     </mt-tab-item> -->
		  

	      
	      	 <mt-tab-item id="my">
		        <img slot="icon" src="../assets/logo.png" >
		        <router-link to="/user-info" tag='div'>
		        我的
		        </router-link>
		    </mt-tab-item>
	      
	      
	      
	    </mt-tabbar>
	</div>
</template>