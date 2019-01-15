const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
//添加购物车
router.get("/addCart",(req,res)=>{
    var uid = req.session.uid;
    console.log(req.session.uid)
    var pid = req.query.pid;
    var c = req.query.count;
    var img=req.query.img;
    var sql  =" INSERT INTO `baby_shoppingcart_item`(`iid`, `user_id`, `product_id`,`img`, `count`, `is_checked`) VALUES (null,?,?,?,?,1)"
    pool.query(sql,[uid,pid,img,c],(err,result)=>{
         if(err)throw err;
         res.send({code:1,msg:"购物车添加成功"});
    });
  })
  
  //查询购物详细信息
router.get("/",(req,res)=>{ 
  var uid = req.session.uid;
  var sql =" SELECT c.img,c.iid,c.user_id,c.product_id,c.count,c.is_checked";
  sql +=" ,p.price,p.title,p.color,p.size";
  sql +=" FROM baby_product p,";
  sql +=" baby_shoppingcart_item c";
  sql +=" WHERE p.lid = c.product_id";
  sql +=" AND c.user_id = ?";
  uid = parseInt(uid);
  pool.query(sql,[uid],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send({code:1,data:result});
    }else{
      res.send({code:0,msg:"购物车为空"});
    }
  });
  //4:返回结果
})
  
  //更新购物数量
router.get("/updateCart",(req,res)=>{
    //1:参数 iid/count
    var iid = req.query.iid;
    var count = req.query.count;
    var sql = " UPDATE baby_shoppingcart_item";
    sql += " SET count = ? WHERE iid = ?";
    iid = parseInt(iid);
    count = parseInt(count);
    pool.query(sql,[count,iid],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows > 0){
          res.send({code:1,msg:"数量修改成功"});
        }else{
          res.send({code:-1,msg:"数量修改失败"});
        }
    })
})


//更新购物商品是否选中
router.get("/isChecked",(req,res)=>{
  //1:参数 iid/count
  var iid = req.query.iid;
  var is_checked = req.query.is_checked;
  var sql = " UPDATE baby_shoppingcart_item";
  sql += " SET is_checked = ? WHERE iid = ?";
  iid = parseInt(iid);
  is_checked = parseInt(is_checked);
  pool.query(sql,[is_checked,iid],(err,result)=>{
      if(err)throw err;
      if(result.affectedRows > 0){
        res.send({code:1,msg:"状态修改成功"});
      }else{
        res.send({code:-1,msg:"状态修改失败"});
      }
  })
})
//删除购物车信息
router.post("/deleteCart",(req,res)=>{
  var uid = req.session.uid;
  var iid = req.body.iid;
  iid=parseInt(iid);

  var sql  =" DELETE FROM `baby_shoppingcart_item` WHERE user_id=? AND iid=?"
  pool.query(sql,[uid,iid],(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0){
          res.send({code:1,msg:"购物车信息删除成功"});
        }   
  });
})

module.exports=router;
