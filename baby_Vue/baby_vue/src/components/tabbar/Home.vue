<template>
    <div class="app-home">
    <!--1 顶部导航栏-->
    
    <!--2 轮播图-->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in lists" :key="item.cid">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <!--3 九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/newslist">
                    <img src="../../img/menu1.png"/>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/goodslist">
                    <img src="../../img/menu2.png"/>
                    <div class="mui-media-body">商品</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu3.png"/>
                    <div class="mui-media-body">购物车</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu4.png"/>
                    <div class="mui-media-body">location</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu5.png"/>
                    <div class="mui-media-body">Search</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../img/menu6.png"/>
                    <div class="mui-media-body">Phone</div>
                </a>
            </li>
        </ul>
        <!--4 tabbar-->
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists:[]
            }
        },
        methods:{
            getImages(){
               this.$http.get("index/carousel").then(
                   result=>{
                    console.log(result.body)
                    this.lists=result.body;
                   }
                );
            }
        },
        created(){
            this.getImages();
        }
    }
</script>
<style>
    .app-home .mint-swipe{
        height:126px;
    }
    .app-home .mint-swipe img{
        width:100%;
    }
    /*九宫格图片大小*/
    .app-home .mui-grid-view.mui-grid-9 img{
        width:60px;
        height:60px;
    }
    .app-home .mui-grid-view.mui-grid-9{
        background-color:#fff;
    }
    .app-home .mui-grid-view.mui-grid-9 li{
        border:0;
    }
</style>