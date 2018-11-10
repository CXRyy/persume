const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//注册路由
router.post('/reg',function(req,res){
	var data=req.body;
	var $uname=data.uname,$upwd=data.upwd,$email=data.email,$phone=data.phone,$avatar=data.avatar,$user_name=data.user_name,$gender=data.gender;
    if(!$uname || !$upwd || !$email || !$phone || !$avatar || !$user_name ||!$gender){
		res.send({code:301,msg:'massage required'});
		return;
	}
	pool.query('INSERT INTO ash_user VALUES(NULL,?,?,?,?,?,?,?)',[$uname,$upwd,$email,$phone,$avatar,$user_name,$gender],function(err,result){
		if(err){
			throw err;
		}
		if(result.affectedRows>0){
		    res.send({code:200,msg:'reg success'});
		}
	});
});
//登录路由
router.post('/login',function(req,res){
	var data=req.body;
	var $uname=data.uname,$upwd=data.upwd;
    if( !$uname || !$upwd){
		res.send({code:301,msg:'massage required'});
		return;
	}
	pool.query('SELECT * FROM ash_user WHERE uname=? AND upwd=?',[$uname,$upwd],function(err,result){
		if(err){
			throw err;
		}
		if(result.length>0){
		    res.send({code:200,msg:'login success'});
		}
	});
});
//删除路由
router.get('/delete',function(req,res){
    var data=req.query;
	var $uid=data.uid;
	if(!$uid){
	    res.send({code:301,msg:'masage required'});
		return;
	}
	pool.query('DELETE FROM ash_user WHERE uid=?',$uid,function(err,result){
		if(err){
			throw err;
		}
		if(result.affectedRows>0){
			res.send({code:200,msg:'delete success'});
		}
	});
});
//检索路由
router.get('/detail',function(req,res){
    var data=req.query;
	var $uid=data.uid;
	if(!$uid){
		res.send({code:301,msg:'massage required'});
		return;
	}
	pool.query('SELECT * FROM ash_user WHERE uid=?',$uid,function(err,result){
		if(err){
			throw err;
		}
		if(result.length>0){
			res.send(result);
		}
	});
});
//更新路由
router.post('/update',function(req,res){
    var data=req.body;
	var $uid=data.uid,$upwd=data.upwd,$email=data.email,$phone=data.phone,$avatar=data.avatar,$uname=data.uname;
	if(!$uid || !$upwd || !$email || !$phone || !$avatar || !$uname){
		res.send({code:301,msg:'massage required'});
		return;
	}
	pool.query('UPDATE ash_user SET upwd=?,email=?,phone=?,avatar=?,uname=? WHERE uid=?',[$upwd,$email,$phone,$avatar,$uname,$uid],function(err,result){
		if(err){
			throw err;
		}
		if(result.affectedRows>0){
			res.send({code:200,msg:'update success'});
		}
	});
});
//列表路由
router.get('/list',function(req,res){
	var data=req.query;
	var $page=data.page,$count=data.count;
	if(!$page){
		$page=1;
	}
	if(!$count){
		$count=10;
	}
	$page=parseInt($page);
	$count=parseInt($count);
    pool.query('SELECT * FROM ash_user LIMIT ?,?',[($page-1)*$count,$count],function(err,result){
	    if(err){
			throw err;
		}
		if(result.length>0){
		    res.send(result);
		}
	});
});
module.exports=router;