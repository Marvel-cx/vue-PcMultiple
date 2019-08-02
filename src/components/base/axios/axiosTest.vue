<template>
    <div class="wrapper">
        axios
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'axiosText',
    data() {
      return {
        showFlag: false
      }
    },
    created(){
        //无参数情况
        axios.get('/data.json').then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log("接口获取失败原因")
            console.log(err)
        })

        axios({
            method:'get',
            url:'/data.json',
            params:{
                id:12
            }
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

        //带参数情况
        axios.get('/data.json',{
            params:{
                id:2
            }
        }).then((res) =>{
            console.log(res)
        }).catch((err) =>{
            console.log(err)
        })

        let data={
            id:2
        }

        //Content-Type:application/json
        // axios.post('/post',data).then(res=>{
        //     console.log("222")
        // }).catch(err=>{
        //     console.log("www")
        // })

        axios({
            method:'post',
            url:'/post1',
            data:data
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })


        //form-data请求
        let formData =new FormData()
        for(let key in data){
            formData.append(key,data[key])
        }

        //
        axios.post('/post',formData).then(res=>{
            console.log("111")
        }).catch((res)=>{
            console.log("222")
        })

        //put请求
        axios.put('/put',data).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

        //patch请求
        axios.patch('/patch',data).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

        //delete请求
        //1:使用params,在url中可以显示?id=2
        axios.delete('/delete',{
            params:{
                id:12
            }
        }).then(res=>{
            console.log(red)
        })
        
        //2:使用data,不再url中显示
        axios.delete('/delete',{
            data:{
                id:12
            }
        }).then(res=>{
            console.log(red)
        })

    },
    methods: {
     
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .wrapper
        margin-left:auto
        height:100px
</style>