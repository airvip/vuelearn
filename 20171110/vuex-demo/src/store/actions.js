import * as types from './types.js'

export default {
	increment:({commit})=>{
		commit(types.INCREMENT)
	},
	decrement:({commit})=>{
		commit(types.DECREMENT)
	},
	clickOdd:({commit,state})=>{
		// console.log(state.mutations.count)
		if(0 == state.mutations.count%2){
			commit(types.INCREMENT)
		}else{
			alert('现在不是偶数')
		}
	},
	clickAsync:({commit})=>{
		new Promise((resolve)=>{
			setTimeout(function () {
				// alert(1);
				commit(types.INCREMENT);
				resolve();
			},1000);
		});
	}
}