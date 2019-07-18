<template>
<div>
     <v-back></v-back>
    <div class="tv-lists" v-show="list.length>0">
        
        <v-tv-list 
           v-for="list in list" :key="list['tv_num']"
           :list="list"
           :url="url"
            v-tap="(e)=>goPlayer(list,e)"
        ></v-tv-list>
        
    </div>
    <div class="empty" v-show="list.length==0">
        没有查询到具体的列表，请切换其他电视剧!
    </div>
</div>
    
</template>
<script>
import {tvList} from "@/api/tv/index.js"
import TvList from "@/component/tvList"
import Cookies from 'js-cookie'
export default {
    components:{
        "v-tv-list":TvList
    },
    data(){
        return {
           list:[],
           Loading:null,
           url:'',
           item_id:''

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
            tvList({id:this.item_id}).then(res=>{
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
            this.url = info["tv_url"]
            Cookies.set("url",info["tv_url"])
            this.$router.push("/player")
        }
    },
    created:function(){
        this.url = Cookies.get("url")
        this.item_id = Cookies.get("item_id")
        this.getList()
    }
    
}
</script>
<style scoped>

</style>


