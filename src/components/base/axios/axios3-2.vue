<template>
    <div class="wrapper">
        axios拦截器
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'axios3-2',
    created(){
        //请求拦截器
        axios.interceptors.request.use(config=>{
            //在发送请求前做些什么
            return config
        },err=>{
            //在请求错误的时候做些什么
            return Promise.reject(err)
        })

        //响应拦截器
        axios.interceptors.response.use(res=>{
            //请求成功对响应数据做处理
            return res
        },err=>{
            //响应错误应做些什么
            return Promise.reject(err)
        })

        //取消拦截器
        let interceptors = axios.interceptors.request.use(config=>{
            config.headers={
                auth:true
            }
            return config
        })
        axios.interceptors.request.eject(interceptors)

        //登录状态(token:'') 需要登陆访问的接口,不需要登陆的话可取消追加请求头s
        let instance= axios.create({})
        instance.interceptors.request.use(config=>{
            config.headers.token = ''
            return config
        })
        
        //移动端开发
        let instance_phone = axios.create({})

        instance_phone.interceptors.request.use(config=>{
            $('#modal').show()
            return config
        },err=>{
            //请求错误一般http状态码 以4开头，常见401 超时,404 not found
            $('#modal').show()
            setTimeout(()=>{
                $("#modal").hide()
            },2000)
            return Promise.reject(err)
        })

        instance_phone.interceptors.response.use(res=>{
            $('#modal').hide()
            return res
        },err=>{
            $('#modal').show()
            setTimeout(()=>{
                $("#modal").hide()
            },2000)
        }) 
        
        instance_phone.get('/data.json').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

        //取消请求
        let source = axios.CancelToken.source()

        axios.get('/static/mock/data.json',{
            cancelToken:source.token
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

        //取消请求
        source.cancel('cancle http')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>