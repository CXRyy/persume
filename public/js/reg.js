$(function(){
    function getFocus(elem){
        return function(){
            elem.parent().next().removeClass("vali_success").removeClass("vali_fail").removeClass("hidden")
        }
    }
    function vali(txt,reg,ctn){
        return  function(){
            var $div=txt.parent().next()
            if(reg.test(txt.val())){
                $div.addClass("vali_success")
                .html("")
            }else{
                $div.addClass("vali_fail").html(ctn)
            }
        }
    }


    var reguname=/^\w{6,18}$/;
    var regupwd=/^[0-9a-zA-Z]{6,16}$/;
    var regemail=/\w+@[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)+/;
    var regphone=/(\+86|0086)?\s*1[3-8]\d{9}/;
    var regregCode=/^[a-zA-Z0-9]{4}$/;


    var $uname=$("#uname");
    $uname.focus(getFocus($uname))
    .blur(vali($uname,reguname,"请输入6~16位字母或数字！！！"))

    var $upwd=$("#upwd"); 
    $upwd.focus(getFocus($upwd))
    .blur(vali($upwd,regupwd,"请输入6~16位字母或数字！！！"))

    var $cpwd=$("#cpwd"); 
    $cpwd.focus(getFocus($cpwd))
    .blur(function(){
        if($cpwd.val()===$upwd.val()&&$cpwd.val()!=""){
            $cpwd.parent().next().html("").addClass("vali_success")
        }else{
            $cpwd.parent().next().html("确认密码失败！！！").addClass("vali_fail")
        }
    })

    var $email=$("#email");
    $email.focus(getFocus($email))
    .blur(vali($email,regemail,"请输入您的邮箱！！！"))

    var $phone=$("#phone");
    $phone.focus(getFocus($phone))
    .blur(vali($phone,regphone,"建议使用常用手机！！！"))
    
    
    var $regCode=$("#regCode");
    $regCode.focus(getFocus($regCode))
    .blur(vali($regCode,regregCode,"请输入正确的验证码！！！"))
    
    
    $(".btn").click(function(){
        if(reguname.test($uname.val())&&regupwd.test($upwd.val())&&regemail.test($email.val())&&regphone.test($phone.val())){
            var uname=$uname.val();
            var upwd=$upwd.val();
            var email=$email.val();
            var phone=$phone.val();
            $.ajax({
            url:"http://127.0.0.1:3000/users/reg",
            type:"post",
            xhrFields:{
                withCredentials:true
            },
            crossDomain:true,
            data:{uname,upwd,email,phone},
            dataType:"json",
            success:function(res){
                confirm(res.msg+",3秒后跳转到登录页面")
                setTimeout(function(){
                    location.href="userLogin.html";
                },3000)
            }
            })
        }else{
            confirm("您输入的信息有误，请检查！！！")
        }
    }) 
    
    
   
})







  