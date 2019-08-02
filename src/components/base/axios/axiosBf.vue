<template>
    <div class="wrapper">
        axios并发
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'axiosBf',
    data() {
      return {
        showFlag: false
      }
    },
    created(){
       //axios.all()
       //axios.spread()
       //
       axios.all(
           [
              axios.get('/static/mock/db.json'),
              axios.get('/static/mock/data.json')
           ]
       ).then(
           axios.spread((dataRes,dbRes)=>{
               console.log(dataRes)
               console.log(dbRes)              
           })
       ).catch(
           axios.spread((dataRes,dbRes)=>{
               console.log(dataRes)
               console.log(dbRes)             
           })
       )
      // axios.get('/static/mock/db.json').then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>