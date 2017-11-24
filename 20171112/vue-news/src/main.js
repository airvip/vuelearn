import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/'
import axios from 'axios'
// import Loading from './components/loading'
import filters from './filters'

console.log(filters);
// Vue.filter('名字','函数');
Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]));

Vue.use(VueRouter);
// Vue.use(Loading);

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
axios.defaults.baseURL='http://localhost:8080/';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;

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
