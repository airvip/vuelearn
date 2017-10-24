/**
 * Created by Administrator on 2017/10/19.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'

Vue.use(VueRouter);

//配置路由
const router = new VueRouter();

router.map(routerConfig);

router.start(App,'#app')