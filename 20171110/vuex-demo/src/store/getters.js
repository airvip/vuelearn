export default{
	count(state){
		return state.count;
	},
	isOdd(state){
		return 0 == state.count%2 ? '是' : '不是';
	}
}