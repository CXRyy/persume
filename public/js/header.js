$(function(){
     $("<link rel='stylesheet' href='./css/header.css'>").appendTo("head");
    $.ajax({
      url:"header.html",
      type:"get",
      xhrFields:{
        withCredentials:true
      },
      crossDomain:true,
        success:function(res){
          $(res).replaceAll("#header");
          
          //判断用户是否登录，依据状态改变首页头部的显示内容，实现退出登录的功能
          if(sessionStorage.getItem("uname")!==null){
            $(".top .right").children(":first-child").html(`欢迎回来：${sessionStorage.getItem("uname")}&nbsp;&nbsp;<a class="quit" href="javascript:;">退出登录</a>`)
          }else{
            $(".top .right").children(":first-child").html(`请登录`)
          }
          //退出登录
          $(".top .right .quit").click(singout)
          //是否进入购物车
          $(".top .right a.cart").click(isLogin)

          //实现商品搜索以及页面跳转功能
          var $input=$("div.search button").click(function(){
              var $btn=$(this);
              var kwords=$btn.prev().val();
              if(kwords.trim()!==""){
                  location.href=`products.html?kwords=${kwords}`;
              }
          })    
        .prev().keyup(function(e){
          if(e.keyCode==13){
            $(this).next().click()
          }
        });
        if(location.search.indexOf("kwords=")!=-1){
          $input.val(
            decodeURIComponent(
              location.search.split("=")[1]
            )
          )
        }
      }
    })
    //退出登录
    function singout(){
      $.ajax({
        url:"http://127.0.0.1:3000/users/signout",
        type:"post",
        xhrFields:{
          withCredentials:true
        },
        crossDomain:true,
        success:function(res){
          if(res.code==200){
            sessionStorage.removeItem("uname");
            confirm("您已退出登录,3秒后即将跳转到首页");
            setTimeout(function(){
              location.href="index.html";
            },3000)
          }
        }
      })
    }
    //进入购物车是否登录
    
      function isLogin(){
        $.ajax({
          url:"http://127.0.0.1:3000/users/islogin",
          xhrFields:{
            withCredentials:true
          },
          crossDomain:true,
          type:"get",
          success:(res)=>{
            if(res.code==300){
              confirm("您尚未登录,请先登录");
            }else{
              location.href="shopcart.html";
            }
          }
        })
      }

      
})