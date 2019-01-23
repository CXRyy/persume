<template>
    <div class="app-swipe">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in lists" :key="item.id">
                <img :src="item.img_url"/>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        props:["lists"]
    }
</script>
<style>
    .app-swipe .mint-swipe{
        height:200px;
    }
    .app-swipe .mint-swipe img{
        width:100%;
    }
</style>