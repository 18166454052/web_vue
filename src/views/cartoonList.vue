<template>
<div>
    <div :class="{
        'tv-lists':list.length>0 && isNumber(list[0]['cartoon_num']),
        'variety-lists':list.length>0 && !isNumber(list[0]['cartoon_num'])
        }" 
        v-show="list.length>0">
        
        <v-cartoon-list 
           v-for="list in list" :key="list['cartoon_url']"
           :list="list"
           :url="url"
           v-tap="(e)=>goPlayer(list,e)"
        ></v-cartoon-list>
        
    </div>
    <div class="empty" v-show="list.length==0">
        没有查询到具体的列表，请切换其他动漫!
    </div>
</div>
    
</template>
<script>
import { cartoonList } from "@/api/cartoon/index.js"
import CartoonList from "@/component/cartoonList"
export default {
    components:{
        "v-cartoon-list":CartoonList
    },
    data(){
        return {
           list:[],
           Loading:null,
           url:''

        }
    },
    computed:{
        
    },
    methods:{
        getList:function(){
            this.Loading = this.$loading({
                overlayColor:'rgba(0,0,0,.2)', 
                        // 背景色
                size: 48,
                color: 'primary',                           // color
                className: '',
            
            });
            cartoonList({id:this.state["item_id"]}).then(res=>{
                 if(this.Loading){
                    this.Loading.close()
                }
                if(res.code==200){
                    console.log(res.data)
                    this.list = res.data
                }
                
            }).catch(err=>{
                if(this.Loading){
                    this.Loading.close()
                }
            })

        },
        goPlayer:function(info){
            console.log(info)
            this.url = info["cartoon_url"]
            //this.state.cartoon_list_url = info["cartoon_url"]
            //this.state.url = info["cartoon_url"]
            this.$router.push("/player")
        },
        isNumber(obj) {
            return typeof Number(obj) === 'number' && !isNaN(obj)
        }
       
   
    },
    created:function(){
        this.url =  this.state.cartoon_list_url 
        this.getList()
    }
    
}
</script>
<style scoped>

</style>


