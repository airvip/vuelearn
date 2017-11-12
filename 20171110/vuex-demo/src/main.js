import Vue from 'vue'
import App from './App.vue'

//src1使用
//import store from './store.js'

//src 使用
import store from './store/'

new Vue({
	store,
    el: '#app',
    render: h => h(App)
})
