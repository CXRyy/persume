const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/list",(req,res)=>{
	var obj = [];
	obj.push({id:1,title:"小辣椒",old:1999,now:99,img_url:"http://127.0.0.1:3000/image/hot1.png"});
	obj.push({id:2,title:"中辣椒",old:2999,now:99,img_url:"http://127.0.0.1:3000/image/hot1.png"});
	obj.push({id:3,title:"大辣椒",old:3999,now:99,img_url:"http://127.0.0.1:3000/image/hot1.png"});
	res.send(obj);
  
});


router.get("/imagelist",(req,res)=>{
	//1:参数 id 
	var id = req.query.id;
	var sql = " SELECT md AS img_url FROM baby_product_pic WHERE product_id = ?";
	pool.query(sql,[id],(err,result)=>{
		if(err)throw err;
		res.send({code:1,data:result});
	});
});
	
  
router.get("/detail",(req,res)=>{
	//1:参数 id 
	var id = req.query.id;
	var sql = " SELECT * FROM baby_product WHERE id = ?";
	pool.query(sql,[id],(err,result)=>{
		if(err)throw err;
		res.send({code:1,data:result});
	});
});


//功能十一:搜索商品
router.get("/search",(req,res)=>{
	//如果搜索参数太多
	//var color = req.query.color;
	//var are = req.query.are;
	//var sql = "SELECT ....";
	//if(color != undefined){
	//sql += "AND color="+color;
	//}
	//if(are != undefined){
	//  sql+"AND are = "+color
	//}

	//商品名称关键字
	var keyword = req.query.keyword;
	var low = req.query.low;
	var high = req.query.high;
	var sql = " SELECT lid,title,price";
	sql +=" FROM baby_product";
	sql +=" WHERE title LIKE ?";
	sql +=" AND price >= ?";
	sql +=" AND price <= ?";
	low = parseFloat(low);
	high = parseFloat(high);
	pool.query(sql,[`%${keyword}%`,low,high],(err,result)=>{
		if(err)throw err;
		if(result.length == 0){
		  res.send({code:-1,msg:"您搜索商品不存在噢!"});
		}else{
		  res.send({code:1,data:result})
		}
	});
 })




module.exports=router;


























