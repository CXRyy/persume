$(function(){
    var pno=0;
    var list=[];
    var pageSize=7;
    var nid = parseInt(location.search.split("=")[1]);
    function postComment(){
        var msg = $("section div.f2>div.content>textarea").val();
        var size = msg.trim().length;
        if(size==0){
            alert("评论内容不能为空");
            return; 
        }
        $.ajax({
            url:"http://127.0.0.1:3000/comment/addComment",
            type:"post",
            xhrFields:{
                withCredentials:true
            },
            crossDomain:true,
            data:{nid:nid,content:msg},
            success:(result)=>{
                if(result.code == 1){
                    pno=0;
                    list=[];
                    getMore();
                    $("section div.f2>div.content>textarea").val("")
                }else{
                    alert("评论发表失败")
                }
            }          
        })
    }
    $("section div.f2>div.content>button.postComment").click(postComment)
    
    function getMore(){
        pno++;
        $.ajax({
            url:"http://127.0.0.1:3000/comment/getcomment?pno="+pno+"&nid="+nid+"&pageSize="+pageSize,
            xhrFields:{
                withCredentials:true
            },
            crossDomain:true,
            dataType:"json",
            success:(result)=>{
                var rows =list.concat(result.data);
                list = rows;
                var html="";
                for(var i=0;i<list.length;i++){
                    var {user_name,content,ctime}=list[i];
                    html+=`<div class="cmt-item" >
                    <div class="cmt-info">
                        <div class="user-info">
                            <span class="fl">第 ${i+1} 楼: 用户名:${user_name}</span>
                            <span class="fr">发表时间:${ctime}</span>
                        </div>
                        <div class="cmt-body">
                            ${content}
                        </div>
                    </div>
                </div>`;
                }
                $("section div.f2>div.content div.cmt-list").html(html);

                }     
        })  
       } 
       getMore(); 
       $("section div.f2>div.content button.getMore").click(getMore) 
       
    //商品详情
    var lid = parseInt(location.search.split("=")[1]);
    function detail(){
        $.ajax({
            url:"http://127.0.0.1:3000/details?lid="+lid,
            type:"get",
            xhrFields:{
                withCredentials:true
            },
            crossDomain:true,
            success:function(res){
                console.log(res)
                var {product, specs, pics}=res; 
                var html=`<img src="${pics[0].md}" alt="" />`;
                $("section div.details div.left a").html(html)
    
                var html=`${product.title}`;
                $("section div.details div.right div.title h4").html(html)
    
                var html=`<p class="reference">
                参考价：
                <del>¥${product.oprice.toFixed(2)}</del>
            </p>
            <p class="activity">
                活动价：
                <span>¥${product.price.toFixed(2)}</span>
            </p>`;
                $("section div.details div.right div.price").html(html)
                var html="";
                for(var p of specs){
                    html+=`<a href="detail.html?lid=${p.lid}" data-id="${p.lid}" class="${p.lid==lid?'colorActive':''}">${p.color}</a>`;
                }
                $("section div.details div.right div.color div").html(html);
                var html="";
                for(var p of specs){
                    html+=`<a href="detail.html?lid=${p.lid}" data-id="${p.lid}" class="${p.size==product.size?'colorActive':''}">${p.size}cm</a>`;
                }
                $("section div.details div.right div.size div").html(html);



                var $span=$("section div.details div.right div.count div.fl span")
                var val=$span.html();
                $span.prev().click(function(){
                    if(val>1){
                        val--
                    }
                    $span.html(val)    
                })
                $span.next().click(function(){
                    if(val<999){
                        val++
                    }
                    $span.html(val)
                    
                })



                var img=$("section>div.content>div.details>div.left>a>img").attr("src");
                $("button.addCart").click(function(){
                    $.ajax({
                        url:"http://127.0.0.1:3000/shopcart/addCart?pid="+lid+"&count="+val+"&img="+img,
                        type:"get",
                        xhrFields:{
                            withCredentials:true
                        },
                        crossDomain:true,
                        success:(result)=>{
                            if(result.code == 1){
                                confirm("商品已加入您的购物车")
                            }
                        }          
                    })
                })
            }
        })
    }
    detail()
    

    

})