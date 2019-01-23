const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

//功能七:用户登录
router.get("/login",(req,res)=>{
	//1:获取参数 uname,upwd
	var uname = req.query.uname;
	var upwd = req.query.upwd;
	//2:创建正则表达式验证
	//3:创建sql
	var sql = "SELECT count(uid) as c";
	sql +=" FROM baby_login";
	sql +=" WHERE uname = ? AND upwd = md5(?)";
	pool.query(sql,[uname,upwd],(err,result)=>{
	 if(err)throw err;
	 var obj = result[0].c;
	 if(obj == 1){
	  //7.3:将用户名保存session对象中
	  req.session.uname = uname;
	  res.send({code:1,msg:"登录成功"});
	 }else{
	  res.send({code:-1,msg:"用户名或密码有误"}) 
	  }  
	});
	//4:返回结果
 })
 


module.exports = router;