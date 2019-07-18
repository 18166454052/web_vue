<template>
    <div>
       
       <iframe :src="url" width="100%" height="100%" >

       </iframe>
       
    </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
    data(){
        return{
           url:""
        }
    },
    created:function(){
       this.url = "http://jx.598110.com/?url=" + Cookies.get("url")
    }
}
</script>
<style scoped>

</style>


