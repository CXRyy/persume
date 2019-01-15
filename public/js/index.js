$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/index/more",
        type:"get",
        xhrFields:{
            withCredentials:true
        },
        crossDomain:true,
        dataType:"json",
        success:function(res){
            console.log(res)
            var html="";
            for(var p of res){
                var {lid,img_url,content,price}=p;
                html+=`<div class="item">
                <a href="/detail.html?lid=${lid}">
                    <img src="${img_url}" alt="" />
                </a>
                <p class="title">${content}</p>
                <p class="price">
                    <span>¥${price.toFixed(2)}</span>
                </p>
            </div>`;
            }
            $("section div.more div.p-list").html(html);

            
        }
    })

    $.ajax({
        url:"http://127.0.0.1:3000/index/today",
        type:"get",
        xhrFields:{
            withCredentials:true
        },
        crossDomain:true,
        dataType:"json",
        success:function(res){
            var html="";
            for(var p of res){
                var {img_url,content,price,original}=p;
                html+=`<div class="item">
                <a href="">
                    <img src="${img_url}" alt="" />
                </a>
                <p class="title">${content}</p>
                <p class="price">
                    <span class="new fl">¥${price.toFixed(2)}</span>
                    <span class="old fr">¥${original.toFixed(2)}</span>
                </p>
            </div>`;
            }
            $("section div.must div.today div.content div.p-carousel div.p-list").html(html);



            var count=0;
            function carousel(){
                return setInterval(function(){
                    count++;
                    if(count>(res.length/4)-1){
                        count=0;
                    }
                    if(count<1){
                        $("section div.must div.today div.content>a").children().attr("src","./image/disabled-next.png") 
                    }else{
                        $("section div.must div.today div.content>a").children().attr("src","./image/hover-next.png")
                    }
                    $("section div.must div.today div.content div.p-carousel div.p-list").css("margin-left",-count*915+"px");
                },5000)
            }
            var timer1=carousel()
            $("section div.must div.today div.content div.p-carousel").on("mouseover",function(){
                clearInterval(timer1)
            })
            $("section div.must div.today div.content div.p-carousel").on("mouseout",function(){
                timer1=carousel()
            })

            $("section div.must div.today div.content>a").click(function(){
                count--;
                if(count<1){
                    $("section div.must div.today div.content>a").children().attr("src","./image/disabled-next.png")
                    count=0;
                    $("section div.must div.today div.content div.p-carousel div.p-list").css("margin-left",-count*915+"px");
                }
                
            })
        }
    })


    $.ajax({
        url:"http://127.0.0.1:3000/index/hot",
        type:"get",
        xhrFields:{
            withCredentials:true
        },
        crossDomain:true,
        dataType:"json",
        success:function(res){
                var html="";
                html+=`<div class="item">
                <h3>热销推荐</h3>
                <div class="top">
                    <a href="">
                        <img src="${res[0].img_url}" alt="" />
                    </a>
                </div>
                <div class="bottom">
                    <a href="">
                        <img src="${res[1].img_url}" alt="" />
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="top">
                    <a href="">
                        <img src="${res[2].img_url}" alt="" />
                    </a>
                </div>
                <div class="bottom">
                    <a href="">
                        <img src="${res[3].img_url}" alt="" />
                    </a>
                    <a href="">
                        <img src="${res[4].img_url}" alt="" />
                    </a>
                </div>
            </div>
            <div class="item">
                <a href="">
                    <img src="${res[5].img_url}" alt="" />
                </a>
                <a href="">
                    <img src="${res[6].img_url}" alt="" />
                </a>
            </div>`;
            $("section div.hot div.content").html(html);
        }


        
    })

    $.ajax({
        url:"http://127.0.0.1:3000/index/f1",
        type:"get",
        xhrFields:{
            withCredentials:true
        },
        crossDomain:true,
        dataType:"json",
        success:function(res){
            console.log(res)
            var html="";
            html+=`<a href="">
            <img src="${res[0].img_url}" alt="" />
        </a>
        <div class="bottom">
            <a href="">
                <img src="${res[1].img_url}" alt="" />
            </a>
            <a href="">
                <img src="${res[2].img_url}" alt="" />
            </a>
            <a href="">
                <img src="${res[3].img_url}" alt="" />
            </a>
            <a href="">
                <img src="${res[4].img_url}" alt="" />
            </a>
            <a href="">
                <img src="${res[5].img_url}" alt="" />
            </a>
        </div>`;
            $("section div.floor div.f1 div.content div.right").html(html);
        }
    })



    $.ajax({
        url:"http://127.0.0.1:3000/index/carousel",
        type:"get",
        xhrFields:{
            withCredentials:true
        },
        crossDomain:true,
        dataType:"json",
        success:function(res){
            var html="";
            for(var elem of res){
                var {cid,href,title,img}=elem;
                html+=`<li data-id="${cid}"><a href="${href}"><img src="${img}" title="${title}" /></a></li>`
            }
            $("nav div.content div.bottom div.right ul").html(html);
            
            
            var count=0;
            
            function carousel(){
                return setInterval(function(){
                    count++;
                    if(count==3){
                        $next.children().attr("src","./image/disabled-next.png");
                    }
                    if(count>3){
                        count=0;
                        $next.children().attr("src","./image/hover-next.png");
                    }
                    
                    if(count>0){
                        $prev.children().attr("src","./image/hover-prev.png"); 
                    }else{
                        $prev.children().attr("src","./image/disabled-prev.png");
                    }
                    var left=count*1130;
                    $("nav div.content div.bottom div.right ul").css("margin-left",-left+"px");
                    },3000)
            }
            var timer=carousel();
            $("nav div.content div.bottom div.right").on("mouseover",function(){
                clearInterval(timer);
            })
            $("nav div.content div.bottom div.right").on("mouseout",function(){
                timer=carousel();
            })

            var $prev=$("nav div.content div.bottom div.right a.prev")
            var $next=$("nav div.content div.bottom div.right a.next")
            $prev.click(function(){
                count--;
                if(count<1){
                    $prev.children().attr("src","./image/disabled-prev.png");
                    count=0;
                }else{
                    $prev.children().attr("src","./image/hover-prev.png");
                    $next.children().attr("src","./image/hover-next.png");
                }
                var left=count*1130;
                $("nav div.content div.bottom div.right ul").css("margin-left",-left+"px");
            })
            
            $next.click(function(){
                count++;
                if(count>3){
                    $next.children().attr("src","./image/disabled-next.png");
                    count=3;
                }else{
                    $prev.children().attr("src","./image/hover-prev.png");
                    $next.children().attr("src","./image/hover-next.png");
                }
                var left=count*1130;
                $("nav div.content div.bottom div.right ul").css("margin-left",-left+"px");
            })
            

            
            
            
            
            
            
            
            
            
            
        }
    })
   


   $("nav div.content div.bottom div.left li a").mouseenter(function(){
   	   var $a=$(this);
       var id=$a.attr("data-id")
       $("#content").addClass("block");
       $(`#content #${id}`).siblings().removeClass("block")
   	   $(`#content #${id}`).addClass("block")
   })
   $("#content").mouseleave(function(){
       $("#content").removeClass("block");
        $("#content>div").removeClass("block");
        console.log($("#content>div"))
    })
   
})
