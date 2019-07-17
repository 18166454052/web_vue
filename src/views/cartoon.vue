<template>
  <div>
    <div>
      <router-link to="/search">
        <search-btn title="搜索动漫名称"></search-btn>
      </router-link>
    </div>
    <cartoon-category ref="category" @getitem="getItem"></cartoon-category>
    <mu-load-more  
    :loading="loading" 
    @load="loadMore" 
    :loaded-all="loadingAll"
    class="loadMore">
      <div class="movie-list">
        <div class="item"  v-for="item in cartoonList" :key="item['cartoon_title']">
          <cartoon-item :cartooninfo="item" v-tap="(e)=>toPLayer(item,e)"></cartoon-item>
        </div>
      </div>   
    </mu-load-more>
    <v-tabs></v-tabs>
  </div>
</template>

<script>
import searchBtn from "../component/searchBtn.vue"
import cartoon_item from "../component/cartoonItem.vue"
import category from "../component/cartoonCategory.vue"
import Tabs from "../component/tab.vue"
import {cartoonCategory, cartoonItem} from "@/api/cartoon/index.js"
export default {
  name: 'tv',
  components:{
    'search-btn':searchBtn,
    'cartoon-item':cartoon_item,
    'cartoon-category':category,
    'v-tabs':Tabs
  },
  data () {
    return {
      categoryList:{},
      cartoonList:[],
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
      cartoonItem({
        page:this.page,
        size:this.size,
        category:this.category
      }).then(res=>{
        this.loading = false;
        if(res.code==200){
          this.cartoonList= [...this.cartoonList,...res.data];
          if(res.data && res.data.length < this.size){
             this.loadingAll = true
          }
        }
      }).catch(err=>{
          this.loading = false;
      })
      
      
    },
    getCategryList:function(){
       cartoonCategory({}).then(res=>{
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
      this.getCartoonItem();

    },
    getCartoonItem:function(){
      this.Loading = this.$loading({
        overlayColor:'rgba(0,0,0,.2)', 
                // 背景色
        size: 48,
        color: 'primary',                           // color
        className: '',
      
      });
      cartoonItem({
        page:this.page,
        size:this.size,
        category:this.category
      }).then(res=>{
        if(this.Loading){
          this.Loading.close()
        }
        if(res.code==200){
          this.cartoonList = res.data;
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
      //this.state.url = info["movie_url"];
      console.log(info)
      this.state["item_id"] = info.id
      this.$router.push("/cartoonList")
    }
  },
  created:function(){
     this.state['active_tab'] = 3
     this.getCategryList();
     this.getCartoonItem();
  }
}
</script>
<style scoped>

</style>

