import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
import store from './store/'

Vue.use(VueRouter);
const router = new VueRouter({
	mode:'history',
	routes:routerConfig
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
