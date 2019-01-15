const express=require("express");
const router=express.Router();
const pool=require("../pool");


router.get("/",(req,res)=>{
  var lid=req.query.lid;
  var output={
    product:{},
    specs:[],
    color:[],
    pics:[]
  };
  //查询商品对象
  var sql="SELECT * FROM baby_product WHERE lid=?";
  pool.query(sql,[lid],(err,result)=>{
    if(err) console.log(err);
    output.product=result[0];
    
    var family_id=output.product.family_id;
    var sql="SELECT lid,color,size from baby_product WHERE family_id=?";
    pool.query(sql,[family_id],(err,result)=>{
      if(err) console.log(err);
      output.specs=result;
      
      var sql="SELECT * FROM baby_product_pic WHERE product_id=?";
      pool.query(sql,[lid],(err,result)=>{
        if(err) console.log(err);
        output.pics=result;
        res.send(output);
      })
    });
  });
})

module.exports=router;