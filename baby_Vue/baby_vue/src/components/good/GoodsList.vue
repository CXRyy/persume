<template>
    <div class="app-goodslist">
    <!--左侧商品-->
    <div class="goods-item" v-for="item in lists" :key="item.id">
        <!--<img :src="item.img_url" @click="jumpDetail(item.id)"/>-->
        <img :src="item.img_url" @click="jumpDetail" :data-id="item.id"/>
        <h3 class="title">{{item.title}}</h3>
        <div class="info">
            <div class="price">
                <span class="now">{{item.now}}</span>
                <span class="old">{{item.old}}</span>
            </div>
        </div>
        <div class="sell">
            <span>热卖中</span>
            <span>剩 1 件</span>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                lists:[]
            }
        },
        methods:{
            getMore(){
                var url="product/list";
                this.$http.get(url).then(result=>{
                    this.lists=result.body;
                });
            },
            jumpDetail(e){
                //console.log(e.target.dataset.id);
                var id=e.target.dataset.id;
                this.$router.push("/GoodsInfo/"+id);
            }
        },
        created(){
            this.getMore();//组件创建成功，调用方法
        }
    }
</script>
<style>
    .app-goodslist{
        display:flex;/*最外层设置弹性布局 */
        flex-wrap:wrap;/*子元素换行*/
        justify-content:space-between;
        padding:7px;
    }
    /*当前商品的元素项 */
    .app-goodslist .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        padding:2px;
        display:flex;/*子元素弹性布局*/
        flex-direction:column;/*排列方式 垂直*/
        min-height:210px;/*最小高度*/
        justify-content:space-between;
    }
    .app-goodslist .goods-item h3{
        font-size:18px
    }
    .app-goodslist .goods-item img{
        width:100%;
    }
    /*商品价格 */
    .app-goodslist .goods-item .now{
        color:#f00;
        font-size:16px;
        font-weight:bold;
    }
    .app-goodslist .goods-item .old{
        font-size:12px;
        text-decoration:line-through;
    }
</style>