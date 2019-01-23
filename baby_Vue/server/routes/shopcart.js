const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
//加入购物车
router.get("/addCart",(req,res)=>{
  var uid = req.query.uid;
  var pid = req.query.pid;
  var c = req.query.count;
  var img=req.query.img;
  var sql  =" INSERT INTO `baby_shoppingcart_item`(`iid`, `user_id`, `product_id`,`img`, `count`, `is_checked`) VALUES (null,?,?,?,?,0)"
  pool.query(sql,[uid,pid,img,c],(err,result)=>{
       if(err)throw err;
       res.send({code:1,msg:"购物车添加成功"});
  });
})
  
 //查询购物详细信息
 router.get("/getCarts",(req,res)=>{
  var uid = req.query.uid;
  var sql =" SELECT c.iid,c.user_id,c.count,c.img";
  sql +=" ,p.price,p.title";
  sql +=" FROM baby_product p,";
  sql +=" baby_shoppingcart_item c";
  sql +=" WHERE p.lid = c.product_id";
  sql +=" AND c.user_id = ?";
  uid = parseInt(uid);
  pool.query(sql,[uid],(err,result)=>{
   if(err)throw err;
   res.send({code:1,data:result});
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
