<template>
    <mu-appbar style="width: 100%;" color="teal">
        <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value="arrow_back" size="48"></mu-icon>
        </mu-button>
    </mu-appbar>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

