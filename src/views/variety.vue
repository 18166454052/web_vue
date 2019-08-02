<template>
  <div>
    <div>
      <router-link to="/search">
        <search-btn title="搜索综艺名称"></search-btn>
      </router-link>
    </div>
    <variety-category ref="category" @getitem="getItem"></variety-category>
    <mu-load-more  
    :loading="loading" 
    @load="loadMore" 
    :loaded-all="loadingAll"
    class="loadMore">
      <div class="movie-list">
        <div class="item"  v-for="item in varietyList" :key="item['variety_title']">
          <variety-item :varietyinfo="item" v-tap="(e)=>toPLayer(item,e)"
            @click.native="toPLayer(item,$event)"
            ></variety-item>
        </div>
      </div>   
    </mu-load-more>
    <v-tabs></v-tabs>
  </div>
</template>

<script>
import searchBtn from "../component/searchBtn.vue"
import variety_item from "../component/varietyItem.vue"
import category from "../component/varietyCategory.vue"
import Tabs from "../component/tab.vue"
import {varietyCategory, varietyItem} from "@/api/variety/index.js"
import Cookies from 'js-cookie'
export default {
  name: 'tv',
  components:{
    'search-btn':searchBtn,
    'variety-item':variety_item,
    'variety-category':category,
    'v-tabs':Tabs
  },
  data () {
    return {
      categoryList:{},
      varietyList:[],
      loading:false,
      page:1,
      size:30,
      category:{},
      Loading:null,
      loadingAll:false
    }
  },
  methods:{
    loadMore() {
      this.loading = true;
      this.page+=1;
      varietyItem({
        page:this.page,
        size:this.size,
        category:this.category
      }).then(res=>{
        this.loading = false;
        if(res.code==200){
          this.varietyList= [...this.varietyList,...res.data];
          if(res.data && res.data.length < this.size){
             this.loadingAll = true
          }
        }
      }).catch(err=>{
          this.loading = false;
      })
      
      
    },
    getCategryList:function(){
       varietyCategory({}).then(res=>{
         if(res.code==200){
            this.categoryList = res.data;
            this.$refs.category.$emit("category", res.data)
         }
      }).catch(err=>{
        this.loading = false;
      })
    },
    getItem:function(info){
      console.log(info)
      // 点击了查询的分类
      this.category=info;
      this.page = 1;
      this.getVarietyItem();

    },
    getVarietyItem:function(){
      this.Loading = this.$loading({
        overlayColor:'rgba(0,0,0,.2)', 
                // 背景色
        size: 48,
        color: 'primary',                           // color
        className: '',
      
      });
      varietyItem({
        page:this.page,
        size:this.size,
        category:this.category
      }).then(res=>{
        if(this.Loading){
          this.Loading.close()
        }
        if(res.code==200){
          this.varietyList = res.data;
          if(res.data && res.data.length<this.size){
             this.loadingAll = true
          }
        }
      }).catch(err=>{
        this.loading = false;
         if(this.Loading){
          this.Loading.close()
        }
      })
    },
    toPLayer:function(info,e){
      Cookies.set("item_id",info.id)
      this.$router.push("/varietyList")
    }
  },
  created:function(){
     this.state['active_tab'] = 2
     this.getCategryList();
     this.getVarietyItem();
  }
}
</script>
<style scoped>

</style>

