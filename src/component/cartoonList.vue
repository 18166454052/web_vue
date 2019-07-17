<template>
<div>
    <div class="tv-list" v-if="isNumber(list['cartoon_num'])">
        <div class="item" :class="{current: url == list['cartoon_url']?true:false}">
            {{list["cartoon_num"]}}
        </div>
        <span class="mark" v-show="list['is_trail_notice'] == 1">
            <img class="mark_pic" src="//i.gtimg.cn/qqlive/images/mark/mark_12.png" alt="预告" srcset="//i.gtimg.cn/qqlive/images/mark/mark_12@2x.png 2x">
        </span>
    </div>
    <div class="com-variety-list" v-else>
        <div class="item" :class="{current: url == list['cartoon_url']?true:false}">
            {{list["cartoon_num"]}}
        </div>
        <span class="mark" v-show="list['is_trail_notice'] == 1">
            <img class="mark_pic" src="//i.gtimg.cn/qqlive/images/mark/mark_12.png" alt="预告" srcset="//i.gtimg.cn/qqlive/images/mark/mark_12@2x.png 2x">
        </span>
    </div>
</div>
</template>
<script>
export default {
    props:['list','url'],
    data(){
        return {
         
        }
    },
    methods:{
        isNumber(obj) {
            return typeof Number(obj) === 'number' && !isNaN(obj)
        }
    }
}
</script>


