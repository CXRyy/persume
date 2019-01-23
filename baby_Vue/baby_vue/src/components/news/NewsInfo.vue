<template>
    <div class="app-newsinfo">
        <h3>{{info.title}}</h3>
        <textarea>{{info.content}}</textarea>
        <h3>{{info.ctime | datetimeFilter}}</h3>
        <h3>点击 {{info.point}} 次数</h3>
        <!--新闻评论子组件-->
        <comment-box :id="id">
        </comment-box>
    </div>
</template>
<script>
    import Comment from "../sub/Comment"
    export default{
        data() {
           return {
                id:this.$route.query.id,
                info:{}
           }
        },
        created(){
            //console.log("接受新闻列表的参数");
            //console.log(this.$route.query.id);
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                var id=this.$route.query.id;
                this.$http.get("news/newsinfo?id="+id).then(result=>{
                    //console.log(result.body.data[0]);
                    this.info=result.body.data[0];
                });
            }
        },
        components:{//注册子组件
            "comment-box":Comment
        }
    }
</script>
<style scoped>
    
</style>