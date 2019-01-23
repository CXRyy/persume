<template>
    <div class="app-search">
        <div class="mui-card">
			<div class="mui-card-header">
                <input type="text" name="keyword" v-model="keyword" placeholder="关键字"> 
            </div>
            <div class="mui-card-header">
                <input type="number" name="low" v-model="low" placeholder="价格下限">
            </div>
            <div class="mui-card-header">
                <input type="number" name="high" v-model="high" placeholder="价格上限">  
            </div>
            <div class="mui-card-header">
                <mt-button type="primary" size="large" @click="handleSearch">搜索</mt-button>  
            </div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<ul class="mui-table-view">
				        <li class="mui-table-view-cell mui-media" v-for="item of list" :key="item.lid">
					        <a href="javascript:;">
						        <img class="mui-media-object mui-pull-left" src="../../assets/hot2.png">
						        <div class="mui-media-body">
							        {{item.title}}
							        <p class='mui-ellipsis'>{{item.price}}</p>
						        </div>
					        </a>
				        </li>
                    </ul>
				</div>
			</div>
		</div> 
    
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default {
        data() {
            return {
                list:[],
                keyword:"",
                low:"",
                high:""
            }
        },
        methods:{
            handleSearch(){
                var high=this.high;
                var low=this.low;
                if(high==""){
                    high=2100000000;
                }
                if(low==""){
                    low=0;
                }
                this.axios.get("http://127.0.0.1:3000/product/search?keyword="+this.keyword+"&low="+low+"&high="+high).then(result=>{
                    this.list=result.data.data;
                    if(result.data.code==-1){
                        Toast(result.data.msg);
                    }
                })
            }
        },
        created(){
            
        }
    }
</script>
<style>
    .goodslist{
        display:flex;/*最外层设置弹性布局 */
        flex-wrap:wrap;/*子元素换行*/
        justify-content:space-between;
        padding:7px;
    }
    /*当前商品的元素项 */
    .goodslist .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow:0 0 8px #ccc;
        padding:2px;
        display:flex;/*子元素弹性布局*/
        flex-direction:column;/*排列方式 垂直*/
        min-height:210px;/*最小高度*/
        justify-content:space-between;
    }
    .goodslist .goods-item h3{
        font-size:18px
    }
    .goodslist .goods-item img{
        width:100%;
    }
    /*商品价格 */
    .goodslist .goods-item .now{
        color:#f00;
        font-size:16px;
        font-weight:bold;
    }
    .goodslist .goods-item .old{
        font-size:12px;
        text-decoration:line-through;
    }
</style>