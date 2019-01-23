<template>
    <div class="app-newslist">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in lists" :key="item.id">
                <router-link :to="'/newsinfo?id='+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                        <span>{{item.ctime | datetimeFilter}}</span>
                        <span>点击：{{item.point}}次</span>
                        </p>
                    </div>                                                                 
                </router-link>
            </li>
        </ul>
        <mt-button size="large" type="primary" @click="getMore">
            加载更多
        </mt-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                lists:[],     //当前显示的数据列表
                pno:0,        //当前页码
                pageSize:7,   //页大小
                pageCount:1   //总页数
            }
        },
        methods:{
            getMore(){
                this.pno++;
                //创建变量保存是否有当前页的条件
                //true：有数据  false：无数据
                var hasMore=this.pno<=this.pageCount;
                //如果没有页数了，停止函数的执行   return：停止函数的执行
                if(!hasMore){
                    return;
                }
                //console.log("123");
                var url="news/newslist?pno="+this.pno+"&pageSize="+this.pageSize;
                this.$http.get(url).then(result=>{
                    console.log(result)
                    //this.lists=result.body.data;
                    var rows=this.lists.concat(result.body.data);
                    this.lists=rows;
                    //保留总页数
                    this.pageCount=result.body.pageCount;
                    //console.log(result);
                });
            }
        },
        created(){
            this.getMore();
        }
    }
</script>
<style scoped>
    .app-newslist .mui-table-view li .mui-ellipsis{
        display:flex;
        font-size:12px;
        color:#226aff;
        justify-content:space-between;
    }
</style>