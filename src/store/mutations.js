import * as types from './mutation-types'

const mutations ={
	[types.SET_DEFAULT](state,TestString){
		state.TestString = TestString
		try{
			//localStorage.setItem('tempStr',TestString)
			localStorage.tempStr = TestString
		}catch(e){
			console.log(e.error)
		}
	}
}

export default mutations