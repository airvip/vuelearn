import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state ={
	count:10
};

const mutations = {
	increment(state){//处理状态（数据）的变化
		state.count++;
	},
	decrement(state){
		state.count--;
	}
}

const actions = {
	//处理你要干什么,异步请求，判断，流程控制
	increment:({commit})=>{
		commit('increment');
		// console.log(commit);
	},
	decrement:({commit})=>{
		commit('decrement');
	},
	clickOdd:({commit,state})=>{
		// alert(state.count)
		if(0 == state.count%2){
			commit('increment')
		}else{
			alert('现在还不是偶数')
		}
	},
	clickAsync:({commit,state})=>{
		new Promise((resolve)=>{
			setTimeout(function () {
				// alert(1);
				commit('increment');
				resolve();
			},1000);
		});
	}
};

const getters = {
	count(state, getters){
		return state.count;
	}
};


//需要导出 Store 对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});