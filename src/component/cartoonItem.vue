<template>
    <div class="movie-item" >
        <div class="image-info">
            <img class="image" v-lazy="cartooninfo['cartoon_image']"  />
            <div class="caption">{{cartooninfo["cartoon_caption"]}}</div> 
        </div>
        <div class="title">{{cartooninfo["cartoon_title"]}}</div>
        <div class="remark">{{cartooninfo["cartoon_desc"]}}</div>
    </div>
</template>
<script>
export default {
    props:["cartooninfo"],
    data(){
        return {
           
        }
    }
}
</script>

<style scoped>

</style>


