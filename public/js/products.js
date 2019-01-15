$(function(){
    var pno;
    function loadPage(no=0){
        pno=no;
        console.log(pno)
        if(location.search.indexOf("kwords=")!=-1){
          var kwords=location.search.split("=")[1];
          $.ajax({
            url:"http://127.0.0.1:3000/products",
            type:"get",
            xhrFields:{
              withCredentials:true
          },
          crossDomain:true,
            data:{kwords,pno},
            dataType:"json",
            success:function(output){
                console.log(output)
                var {products,count}=output;
                var html=`<span>共${count}个商品</span>`;
                $("section div.content div.right>div.count").html(html) 
              


              var html="";
              for(var p of products){
                var {lid,title,price,title,md,payCount}=p;
                html+=`<div class="item">
                <div class="img">
                      <a href="detail.html?lid=${lid}" title="${title}"><img src="${md}"></a>
                </div>
                <div class="text">
                      <p class="title">${title}</p>
                      <p class="price">
                        <span class="pri fl">￥${price.toFixed(2)}</span>
                        <span class="nub fr">${payCount}人付款</span>
                      </p>
               </div>
              </div>`;
              }
              $("section div.content div.right div.products div.content").html(html);
    
              var {pno,pageCount}=output;
              var html=`<li><a class="${pno==0?'disabled':''}" href="javascript:;">上一页</a></li>`;
              for(var i=0;i<pageCount;i++){
                html+=`<li><a class="${pno==i?'active':''}" href="javascript:;">${i+1}</a></li>`;
              }
              html+=`<li><a class="${pno==pageCount-1?'disabled':''}" href="javascript:;">下一页</a></li>`;
  
              $("div.page ul").html(html);
              
            }
          })
        }
    }
    loadPage();
    $(".page ul").on("click","a:not(.disabled):not(.active)",function(e){
        e.preventDefault();
        var $a=$(this);
        if($a.parent().is(":first-child")){
          loadPage(pno-1);
          console.log(pno)
        }else if($a.html()==="下一页"){
          loadPage(pno+1);
        }else{
            pno=$a.html();
            loadPage(pno-1);
        }
      }
    )
  
  $("section div.content div.left-nav dl dt").click(function(){
    var $dt=$(this)
    if($dt.parent().hasClass("h"))
    $dt.parent().removeClass("h");//把我自己关上
    else{//否则，如果我自己是关着的
      //查找.tree下开着的span
      var open=$("section div.content div.left-nav dl.h")
      if(open!=null){//如果找到
        open.removeClass("h");//将其关上
      }
      $dt.parent().addClass("h");//将自己打开
    
    }
  })
  })
  