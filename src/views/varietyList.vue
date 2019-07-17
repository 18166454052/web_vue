<template>
<div>
    <div class="variety-lists" v-show="list.length>0">
        
        <v-variety-list 
           v-for="list in list" :key="list['variety_url']"
           :list="list"
           :url="url"
            v-tap="(e)=>goPlayer(list,e)"
        ></v-variety-list>
        
    </div>
    <div class="empty" v-show="list.length==0">
        没有查询到具体的列表，请切换其他综艺!
    </div>
</div>
    
</template>
<script>
import { varietyList } from "@/api/variety/index.js"
import VarietyList from "@/component/varietyList"
export default {
    components:{
        "v-variety-list":VarietyList
    },
    data(){
        return {
           list:[],
           Loading:null,
           url:''

        }
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
            varietyList({id:this.state["item_id"]}).then(res=>{
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
            this.url = info["variety_url"]
            //this.state.variety_list_url = info["variety_url"]
            //this.state.url = info["variety_url"]
            this.$router.push("/player")
        }
    },
    created:function(){
        this.url =  this.state.variety_list_url 
        this.getList()
    }
    
}
</script>
<style scoped>

</style>


