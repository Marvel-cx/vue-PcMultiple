<template>
	<button @click="parent" v-html="TestString">{{TestString}}</button>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
import bus from '../common/js/bus'
export default{
	data(){
		return {
			default:this.TestString
		}
	},
	computed:{
		...mapGetters([
			'TestString'
		])
	},
	methods:{
		/*
		 * 向父组件传递
		 *
		 */
		parent(){
			this.setDefault("localTemp")
			this.$emit("listenToChildEvent","this message is from child")	
		},
		/*
		 * eventBus方式
		 */
		Buschange(){
			bus.$emit("eventTarget","我要加油");
		},
		/*
		 * vuex方式
		 */
		change(){
			console.log("11");
			this.setDefault("111")
		},
		...mapMutations({
			setDefault:"SET_DEFAULT"
		})
	}
}
</script>

<style scoped>	
</style>