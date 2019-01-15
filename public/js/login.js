$(function(){
    $(".btn").click(function(){
      var uname=$("#uname").val();
      var upwd=$("#upwd").val();
      $.ajax({
        url:"http://127.0.0.1:3000/users/signin",
        type:"post",
        xhrFields:{
          withCredentials:true
      },
      crossDomain:true,
        data:{uname,upwd},
        dataType:"json",
        success:function(res){
          var msg=res.msg;
          if(res.ok==1){
            loginState(upwd)
            $("#msg").removeClass("fail").addClass("success").html(msg)
            sessionStorage.setItem("uname",uname); 
            setTimeout(function(){
              location.href=`index.html`;
            },3000)
          }else{
            $("#msg").addClass("fail").html(msg)
          }
        }
      })
    })
    function loginState(upwd){
      $.ajax({
        url:"http://127.0.0.1:3000/users/add",
        type:"post",
        xhrFields:{
          withCredentials:true
        },
        crossDomain:true,
        data:{upwd},
        success:function(res){
          console.log(res)
          
        }
      })
    }
  })