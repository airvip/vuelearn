import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routerConfig from './router.config.js'

import '!style-loader!css-loader!./assets/css/animate.css'
// require('!style-loader!css-loader!./assets/css/animate.css');// get animate.css

Vue.use(VueRouter);

const router= new VueRouter(routerConfig);

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
