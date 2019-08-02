<template>
   <div>
        <van-button type="default">默认按钮</van-button>

        <van-contact-list
            v-model="chosenContactId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"  
        />

        <!-- 联系人编辑 -->
        <van-popup v-model="showEdit" position="bottom">
            <van-contact-edit
                :contact-info="editingContact"
                :is-edit="isEdit"
                @save="onSave"
                @delete="onDelete"
            />
        </van-popup>
    </div> 
</template>

<script>
import {Button,ContactList,Toast,ContactEdit,Popup} from 'vant'
import axios from 'axios'
export default {
    name:'vant',
    data(){
        return {
            list:[{
                id:1,
                name:'admin',
                tel:'135'
            }],
            instance:null, //axios实例
            showEdit:false, //编辑弹窗的显隐
            editingContact:{},//正在编辑的联系人数据
            isEdit:false //新建or编辑
        }
    },
    created(){
        this.instance = axios.create({
            baseURL:'http://localhost:9000/api',
            timeout:1000
        })
        this.getList()
    },
    component:{
        [Button.name]:Button,
        [ContactList.name]:ContactList,
        [ContactEdit.name]:ContactEdit,
        [Popup.name]:Popup
    },
    methods:{   
        onAdd(){
            this.showEdit=true
            this.isEdit=false
            this.editingContact=''
        },
        onEdit(info){
            this.showEdit=true
            this.isEdit=true
            this.editingContact = info
        },
        onSave(info){
            if(this.isEdit){
                //编辑保存
                this.instance.put('/contact/edit',info).then(res=>{
                    if(res.data.code === 200){
                        Toast('编辑成功')
                        this.showEdit =false
                        this.getList()
                    }
                }).catch(err=>{
                    Toast('编辑失败')
                })
            }else{
                //新建保存
                //let res = await this.$Http.newContactJson(info)
                this.instance.post('/contact/new/json',info).then(res=>{
                    console.log(res)
                    if(res.data.code === 200){
                        Toast('新建成功')
                        this.showEdit=false
                        this.getList()
                    }
                }).catch(err=>{
                    console.log(err)
                    Toast('新建失败')
                })
            }
        },
        onDelete(info){
            this.instance.delete('/contact',{
                params:{
                    id:info.id
                }
            }).then(res=>{
                console.log(res)
                if(res.data.code === 200){
                    Toast('删除成功')
                    this.showEdit=false
                    this.getList()
                }
            }).catch(err=>{
                console.log(err)
                 Toast('删除失败')
                 this.showEdit=false
                 this.getList()
            })
        },
        getList(){
            this.instance.get('/contactList').then(res=>{
                this.list =res.data.data
            }).catch(err=>{
                Toast('请求失败!')
            }) 
        }
        // async getList(){
        //     let res = await this.$Http.getContactList()
        //     console.log(res)
        //     this.list = res.data
        // }
    }
}
</script>

<style scoped>
    /* .van-contact-list_add{
        z-index:0;
    }
    .van-popup{
        height: 100%;
    } */
</style>


