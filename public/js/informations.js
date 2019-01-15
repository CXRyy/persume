$(function(){
    var pno;
    function loadPage(no){
        pno=no;
          $.ajax({
            url:"http://127.0.0.1:3000/informations",
            type:"get",
            xhrFields:{
                withCredentials:true
            },
            crossDomain:true,
            data:{pno},
            dataType:"json",
            success:function(output){
                var {data}=output;
                for(var p of data){
                    var {title,content,ctime,img_url,point}=p;
                    html+=`<div>
					<img class="fl" src="${img_url}" alt="" />
					<div class="question fr">
						<h4 class="title">${title}</h4>
						<p class="dp">
							<span class="date">${ctime.toLocaleString()}</span>
							点击：<span class="point">${point}</span>次
						</p>
						<p class="response">${content}</p>
					</div>
				</div>`;
                }
                $("section>div.content").html(html);


                var {pno,pageCount}=output;
                var html=`<li><a class="${pno==1?'disabled':''}" href="javascript:;">上一页</a></li>`;
                for(var i=0;i<pageCount;i++){
                    html+=`<li><a class="${pno==i+1?'active':''}" href="javascript:;">${i+1}</a></li>`;
                }
                html+=`<li><a class="${pno==pageCount?'disabled':''}" href="javascript:;">下一页</a></li>`;
    
                $("div.page ul").html(html);
                }
          })
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
            loadPage(pno);
        }
      }
    )



})