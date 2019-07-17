<template>
    <div class="movie-item" >
        <div class="image-info">
            <img class="image" v-lazy="varietyinfo['variety_image']"  />
            <div class="caption">{{varietyinfo["variety_caption"]}}</div> 
        </div>
        <div class="title">{{varietyinfo["variety_title"]}}</div>
        <div class="remark">{{varietyinfo["variety_desc"]}}</div>
    </div>
</template>
<script>
export default {
    props:["varietyinfo"],
    data(){
        return {
           
        }
    }
}
</script>

<style scoped>

</style>


