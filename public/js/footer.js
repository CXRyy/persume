$(function(){
    $("<link rel='stylesheet' href='./css/footer.css'>").appendTo("head");
    $.ajax({
        url:"footer.html",
        type:"get",
        xhrFields:{
            withCredentials:true
        },
        crossDomain:true,
        success:function(res){
            $(res).replaceAll("#footer")
        }
    })
})
