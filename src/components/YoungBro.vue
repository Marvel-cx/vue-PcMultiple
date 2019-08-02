<template>
	<div>
		<div>{{testData}}</div>
		<div>{{broMessage}}</div>
	</div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
import bus from '../common/js/bus'
export default{
	data(){
		return {
			defaultStr:this.TestString,
			testData:"123"
		}
	},
	props:{
	  broMessage: {
        type: String,
        default: ''
      }
	},
	mounted(){
		bus.$on("eventTarget",v=>{
			console.log(v)
			this.testData = v
		})
	},
	computed:{
		...mapGetters([
			'TestString'
		])
	}
}
</script>

<style scoped>	
</style>