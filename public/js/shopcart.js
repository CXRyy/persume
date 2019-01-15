$(function(){ 
  getCart();
  //获取购物车信息
  function getCart(){
    $.ajax({
      url:"http://127.0.0.1:3000/shopcart",
      type:"get",
      xhrFields:{
          withCredentials:true
      },
      crossDomain:true,
      dataType:"json",
      success:function(res){
        console.log(res)
          var html='';
          //购物车是空的
          if(res.code==0){
            html=`<div id="none">
            <p><img src="./image/404_img2.png" alt=""></p>
            <h1>购物车是空的</h1>
            <button>去逛逛</button>
          </div>`
          $("section div.content div.table-box").html(html)

          $("#none button").click(function(){
            location.href="index.html"
          })
          }else{
          //购物车中有商品
          for(var p of res.data){
            var {iid,product_id,img,title,color,size,price,count,is_checked}=p;
            html+=`<tr data-iid="${iid}">
            <td><input type="checkbox" data-chk="${is_checked}" ${is_checked==1?'checked':''}/></td>
            <td>
              <a href="http://127.0.0.1:3000/details?lid=${product_id}">
                <img class="img" src="${img}" alt="" />
              </a>
              <p class="title">${title}</p>
              <p class="desc">
                <span>${color}</span>
                <span>${size}</span>
              </p>
            </td>
            <td>¥${price.toFixed(2)}</td>
            <td>
              <button>-</button>
              <span>${count}</span>
              <button>+</button>
            </td>
            <td>¥${(price*count).toFixed(2)}</td>
            <td>
              <a href="">删除</a>
            </td>
          </tr>`;
          }
          $("table tbody").html(html);


          var is_checked=1;

          //首次请求数据回来后全选按钮的状态
          var result=true;
          var now=null;
          var chkList=$("table tbody tr td:first-child input")
          for(var item of chkList){
            now=item.dataset.chk==1?true:false;
            result=result&&now;
          }
          if(result){
            $("table thead tr th:first-child").html("<input type='checkbox' checked/>")
          }else{
            $("table thead tr th:first-child").html("<input type='checkbox'/>")
          }



          //点击每个商品时选中的状态以及全选按钮状态
          $("table tbody tr td:first-child input").click(function(){
              var iid=$(this).parent().parent().attr("data-iid")
              if($(this)[0].dataset.chk==1){
                $(this)[0].dataset.chk=0;
                is_checked=0;
              }else{
                $(this)[0].dataset.chk=1;
                is_checked=1;
              }
              isChecked(is_checked,iid)
            })
         
          



          //全选按钮
          $("table thead tr th:first-child input").click(function(){
            var state=$(this).prop("checked");
            if(state){
              $("table tbody tr td:first-child").html("<input data-chk='1' type='checkbox' checked/>");
              is_checked=1;
            }else{
              $("table tbody tr td:first-child").html("<input data-chk='0'  type='checkbox'/>");
              is_checked=0;
            }
            var list=$("table tbody tr td:first-child input")
            for(var item of list){
              var iid=$(item).parent().parent().attr("data-iid");
              isChecked(is_checked,iid);
            }
            
          })
          var chkCount=0;
          for(var item of res.data){
            if(item.is_checked==1){
              chkCount+=item.count;
            }
          }
          $("table tfoot tr td:first-child span").html(`已选${chkCount}件`)
          



          











       

          //删除
          $("table tbody tr").on("click","td:last-child a",function(){
            var $a=$(this);
            var iid=$a.parent().parent().attr("data-iid");
            deleteCart(iid);
          })
          //数量的加减
          var $td=$("tbody tr td:nth-child(4)");
          $td.children(":first-child").click(function(){
            var $btn=$(this);
            var count=parseInt($btn.next().html())
            var iid =$btn.parent().parent().attr("data-iid");
            if(count>1){
              count--;
              updateCart(count,iid);
            } 
          })
          $td.children(":last-child").click(function(){
            var $btn=$(this);
            var count=parseInt($btn.prev().html())
            var iid =$btn.parent().parent().attr("data-iid");
            if(count<999){
              count++;
              updateCart(count,iid);
            }
          })
          
          

          //总和
          var total=0;
          for(var item of res.data){
            if(item["is_checked"]==1){
              total+=(item.count*item.price);
            }
          }
          $("tfoot .total").html('¥'+total.toFixed(2))
          
        }
      }
        
      })
      
         
  }
 
 
 
 
 
 
 
 
  //更新购物车数量
  function updateCart(count,iid){
    $.ajax({
      url:"http://127.0.0.1:3000/shopcart/updateCart?count="+count+"&iid="+iid,
      type:"get",
      xhrFields:{
          withCredentials:true
      },
      crossDomain:true,
      success:function(res){
        getCart();
      }
    })
  }
  //更新购物车选中状态
  function isChecked(is_checked,iid){
    $.ajax({
      url:"http://127.0.0.1:3000/shopcart/isChecked?is_checked="+is_checked+"&iid="+iid,
      type:"get",
      xhrFields:{
          withCredentials:true
      },
      crossDomain:true,
      success:function(res){
        getCart();
      }
    })
  }
  //删除购物车信息
  function deleteCart(iid){
      $.ajax({
        url:"http://127.0.0.1:3000/shopcart/deleteCart",
        type:"post",
        data:{iid},
        xhrFields:{
            withCredentials:true
        },
        crossDomain:true,
        success:function(res){
          getCart();
        }
      })
  } 
  
  
  
})
  