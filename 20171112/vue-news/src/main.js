import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading/index.js'

Vue.use(VueRouter);
Vue.use(Loading);

//关于axios配置
axios.interceptors.request.use(function(config){
	store.dispatch('showLoading')
	return config;
},function(error){
	return Promise.reject(error);
});
axios.interceptors.response.use(function(response){
	store.dispatch('hideLoading')
	return response;
},function(error){
	return Promise.reject(error);
});

const router = new VueRouter({
	mode:'history',
	scrollBehavior:()=>({
		y:0
	}),
	routes:routerConfig
});



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
