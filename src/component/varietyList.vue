<template>
    <div class="com-variety-list">
        <div class="item" :class="{current: url == list['variety_url']?true:false}">
            {{list["variety_title"]}}
        </div>
        <span class="mark" v-show="list['is_trail_notice'] == 1">
            <img class="mark_pic" src="//i.gtimg.cn/qqlive/images/mark/mark_12.png" alt="预告" srcset="//i.gtimg.cn/qqlive/images/mark/mark_12@2x.png 2x">
        </span>
    </div>
</template>
<script>
export default {
    props:['list','url'],
    data(){
        return {

        }
    }
}
</script>
<style scoped>

</style>




