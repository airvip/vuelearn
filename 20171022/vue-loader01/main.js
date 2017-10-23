/**
 * Created by Administrator on 2017/10/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter);
//引入模块
import Home from './components/Home.vue'
import News from './components/News.vue'

//配置路由
const router = new VueRouter();

router.map({
	'home':{
		component:
	}
});

new Vue({
	el:'body',
	components:{
        app:App
    }
});