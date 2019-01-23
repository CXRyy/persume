<template>
    <div class="app-goodsinfo">
        <!--轮播图的卡片-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipe-box :lists="lists">
                    
                    </swipe-box>
                </div>
            </div>
		</div>
        <!--商品的信息-->
        <div class="mui-card">
				<div class="mui-card-header">商品名称</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价格：<del>2999.00</del>    
                            销售价格：<span class="now">2100.00</span>
                        </p>
                        购买数量：
                        <div class="mui-numbox">
                            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
                            <input class="mui-input-numbox" type="number" value="1" v-model="val"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
				        </div>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addCart">加入购物车</mt-button>
                </div>
			</div>
        <!--商品的参数-->
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    //1 引入轮播图子组件
    import swipe from "../sub/Swipe";
    //2 引入mui.js
    //import mui from "../../lib/mui/js/mui.js"
    export default {
        created(){
            //console.log(this.$route.params.id);
            this.getImages();
        },
        data(){
            return {
                nid:this.$route.params.id,
                lists:[],
                val:1
            }
        },
        methods:{
            getImages(){
                var url="http://127.0.0.1:3000/product/imagelist?id="+this.nid;
                this.axios.get(url).then(result=>{
                    console.log(111)
                    console.log(result.data.data)
                    this.lists=result.data.data;
                });
            },
            goodSub(){
                if(this.val>1){
                    this.val--;
                }
            },
            goodAdd(){
                if(this.val<=998){
                    this.val++;
                }
            },
            addCart(){
                //1获取参数  pid count uid
                var pid=this.$route.params.id;
                var count=this.val;
                var uid=3;
                //2发送请求
                var url="http://127.0.0.1:3000/shopcart/addCart?pid="+pid+"&img="+this.lists[0].img_url+"&count="+count+"&uid="+uid;
                this.axios.get(url).then(result=>{
                    //console.log(result);
                    if(result.data.code==1){
                        this.$store.commit("increment",count)
                        Toast("购物车添加成功");
                        this.$router.push("/goodslist");
                    }else{
                        Toast("购物车添加失败");
                    }
                });
                //3如果请求成功提示
            }
        },
        components:{
            "swipe-box":swipe
        }
    }
</script>
<style>
    
</style>