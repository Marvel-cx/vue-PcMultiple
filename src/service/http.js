import axios from 'axios'
import service from './contactApi'
import {Toast} from 'vant'
//service 循环遍历输出不同的请求方法
let instance = axios.create({
    baseURL:'http://localhost:9000/api',
    timeout:1000
})

const Http = {}; //包裹请求方法的容器

for(let key in service){
    let api =service[key]; // url method
    //async 避免进入回调地狱
    Http[key] = async function(params,isFormData=false,config={}){
       //params get/post/patch/delete
       //let res = await axios.get('url')
       let url = api.url
       let newParams = {}
       
       //content-type是否是form-data的判断
       if(params && isFormData){
            newParams = new FormData()
            for(let i in params){
                newParams.append(i,params[i])
            }
       }else{
            newParams = params
       }

       //不同请求的判断
       //
       let response ={}  //请求的返回值
       if(api.method === 'put' || api.method ==='post'|| api.method ==='patch'){
            try{
                response = instance[api.method](api.url,newParams,config)       
            }catch(err){
                response=err    
            }
       }else if(api.method === 'delete' || api.methpd === 'get'){
            config.params =newParams
            try{
                response = await instance[api.method](api.url,config)
            }catch(err){
                response=err
            }
       }
       return response; //响应返回值
    }
}

//拦截器的添加
instance.interceptors.request.use(config=>{
    //发起请求前做些什么
    console.log(config)
    
    Toast.loading({
        mask:false,
        duration:0,//一直存在
        forbidClick:true,
        message:'加载中..'
    })
    
    return config
},err=>{
    //请求错误
    console.log(err)
    Toast.clear()
    Toast('请求错误,请稍后再试')
})

//响应拦截器
instance.interceptors.response.use(res=>{
    //请求成功
    Toast.clear()
    return res.data
},err=>{
    Toast.clear()
    Toast('请求错误，请稍后再试')
})

export default Http