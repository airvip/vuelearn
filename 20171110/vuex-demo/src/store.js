import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state ={
	cunt:10;
};

const mutations = {
	increment(stat){

	}
}

const actions = {
	increment:({//处理你要干什么
		commit
	})=>{
		commit('increment');
		// console.log(commit);
	}
};


//需要导出 Store 对象
export default new Vuex.Store({
	actions
});