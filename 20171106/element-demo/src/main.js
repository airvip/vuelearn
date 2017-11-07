import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'file-loader!style-loader!css-loader!element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/index.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
