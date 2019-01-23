<template>
    <div class="app-cart">
        <div class="mui-card">
            <div class="mui-card-header">
                <h3>
                    商品列表
                </h3>   
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <ul class="mui-table-view">
				        <li class="mui-table-view-cell mui-media" v-for="item of list" :key="item.iid">
					        <a href="javascript:;">
						        <img class="mui-media-object mui-pull-left" :src="item.img">
						        <div class="mui-media-body">
							        {{item.title}}
							        <p class='mui-ellipsis'>
                                        <span class="price">{{item.price}}</span>
                                        <span>
                                            <div class="mui-numbox">
                                                <button class="mui-btn mui-btn-numbox-minus" type="button" @click="cartSub" :data-iid="item.iid">-</button>
                                                <input class="mui-input-numbox" type="number" :value="item.count"/>
                                                <button class="mui-btn mui-btn-numbox-plus" type="button" @click="cartAdd" :data-iid="item.iid">+</button>
				                            </div>
                                        </span>
                                    </p>
						        </div>
					        </a>
				        </li>
                     </ul>
                    
                </div>
            </div>
            <div class="mui-card-footer">
                <span>合计：{{total}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default {
        data() {
            return {
                list:[]
            }
        },
        methods:{
            cartSub(e){
                var iid=e.target.dataset.iid;
                for(var item of this.list){
                    if(item.iid==iid&&item.count>1){
                        item.count--;
                        this.updateCart(item.iid,item.count);
                        break;
                    }
                }
                
            },
            cartAdd(e){
                var iid=e.target.dataset.iid;
                for(var item of this.list){
                   if(item.iid==iid&&item.count<=998){
                        item.count++;
                        this.updateCart(item.iid,item.count);
                        break
                    }
                }
            },
            getMore(){
                this.axios.get("http://127.0.0.1:3000/shopcart/getCarts?uid=3").then(result=>{
                    this.list=result.data.data;
                })
            },
            updateCart(iid,count){
                this.axios.get("http://127.0.0.1:3000/shopcart/updateCart?iid="+iid+"&count="+count).then(result=>{
                    if(result.data.code==1){
                        Toast(result.data.msg);
                    }else{
                        Toast(result.data.msg);
                    }
                })
            }
        },
        created(){
            this.getMore();
        },
        computed:{
            total(){
                return this.list.reduce(function(prev,item){
                   return prev+item.count*item.price;
                },0)
            }
        }
    }
</script>
<style>

</style>