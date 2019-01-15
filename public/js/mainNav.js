$(function(){
    $("<link rel='stylesheet' href='./css/base.css'><link rel='stylesheet' href='./css/mainNav.css'>").appendTo("head");
    $.ajax({
      url:"mainNav.html",
      type:"get",
      xhrFields:{
        withCredentials:true
      },
      crossDomain:true,
      success:function(res){
        $(res).appendTo("#mainNav");
      }
    })

})