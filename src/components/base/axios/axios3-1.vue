<template>
    <div class="wrapper">
        axios实例创建
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'axios3-1',
    created(){
      let instance = axios.create({
          baseURL:'http://localhost:3000',
          timeout:1000
      })
      
      let instance2 = axios.create({
          baseURL: 'http://localhost:3000',
          timeout:5000
      })

      instance.get('/static/mock/db.json').then(res=>{
          console.log(res)
      }) 

      axios.create({
        baseURL:'http://localhost:8080',//请求的域名，基本的地址
        timeout:1000,//请求超时时长
        url:'/data.json',//请求的接口路径
        method:'get',
        headers:{
          token:""
        },
        params:{},
        data:{}
      })

      //1:axios全局配置
      //axios.defaults.timeout=1000
      //axios.defaults.baseURL="http://localhost:8081"
      //2:axios实例配置
      //let instance = axios.create()
      //3:axios请求配置(优先级)

    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>