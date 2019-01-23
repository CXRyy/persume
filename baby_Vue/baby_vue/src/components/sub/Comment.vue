<template>
    <div class="app-comment">
        <h3>评论子{{id}}组件</h3>
        <!--发表评论的区域-->
        <textarea placeholder="请吐槽最多120个字..." maxlength="120" v-model="msg">        
        </textarea>
        <mt-button size="large" @click="postComment">发表评论</mt-button>
        <!--显示评论的区域-->
        <div class="cmt-list">
             <div class="cmt-item" v-for="(item,i) in lists" :key="item.id">
                 <div class="cmt-info">
                     第{{i+1}}楼：用户名：{{item.user_name}}
                    发表时间：{{item.ctime | datetimeFilter}}
                    <div class="cmt-body">
                       {{item.content}} 
                    </div>
               </div>
             </div>
        </div>
        <mt-button size="large" type="primary" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
  export default {
      data(){
          return {
              lists:[],
              pno:0,
              pageSize:7,
              pagCount:1,
              //nid:this.$route.query.nid,
              msg:""//评论内容双向绑定
          }
      },
      props:["id"],
      created(){
         //console.log(this.id);
         this.getMore();
      },
      methods:{
          getMore(){
              var nid=this.id;//新闻id
              this.pno++;//页码自增 初始为0
              var pno=this.pno;//当前页码
              var pageSize=this.pageSize;//页大小
              var url="comment/getcomment?pno="+pno+"&nid="+nid+"&pageSize="+pageSize;
              this.$http.get(url).then(result=>{
                  var rows=this.lists.concat(result.body.data);
                  this.lists=rows;
              });
            //   this.$http.get("getcomment?nid="+this.id).then(result=>{
            //       this.lists=this.lists.concat(result.body.data);
            //       this.pageCount=result.body.pageCount;
            //   });
          },
          postComment(){
              //console.log(111);
              var msg=this.msg;//评论内容
              var nid=this.id;//父元素传递新闻编号
              //var user_name="匿名";//用户名
              //判断如果评论内容为空
              var size=msg.trim().length;
              //提示评论内容不能为空
              if(size==0){
                  Toast("评论内容不能为空");
                  return ;//停止函数执行
              }
              //方法送post请求
            //   var url="addcomment";
            //   var obj={nid:nid,user_name:user_name,content:msg};
            //   this.$http.post(url,obj).then(result=>{
            //       //console.log(result);
            //       var obj=result.body;
            //       //提示发表成功
            //       if(obj.code==1){
            //           Toast("评论发表成功");
            //           //显示最新一页数据
            //           this.pno=0;
            //           this.lists=[];
            //           this.getMore();
            //           this.msg="";
            //       }else{
            //           Toast("评论发表失败");
            //       }
            //   })
              var url="http://127.0.0.1:3000/comment/addcomment";
              var params=`nid=${nid}&content=${msg}`;
              this.axios.post(url,params).then(result=>{
                  if(result.data.code==1){
                      Toast("评论成功");
                      this.pno=0;
                      this.lists=[];
                      this.getMore();
                      this.msg="";
                  }else{
                      Toast("评论失败");
                  }
              });              
          }
      }
  }
</script>
<style>
    .app-comment h3{
        font-size:18px;
    }
    .app-comment textarea{
        font-size:14px;
        height:68px;
        margin:0;
    }
    .app-comment .cmt-list{
        margin:5px 0;
    }
    .app-comment .cmt-list .cmt-item{
        border:1px solid #aaa;
        margin-top:15px;
    }
    .app-comment .cmt-list .cmt-info{
        line-height:30px;
        background:#ccc;
    }
</style>