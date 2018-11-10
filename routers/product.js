const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//商品列表
router.get('/list',function(req,res){
	var obj=req.query;
	var $start=obj.start,$count=obj.count;
	if(!$start){
	    $start=1;
	}
	if(!$count){
	    $count=3;
	}
    $start=parseInt($start);
	$count=parseInt($count);
	pool.query('SELECT * FROM ash_laptop LIMIT ?,?',[($start-1)*$count,$count],function(err,result){
	    if(err){
		    throw err;
		}
		res.send(result);
	});
});
//商品的删除
router.get('/delete',function(req,res){
	var obj=req.query;
	var $lid=obj.lid;
	if(!$lid){
		res.send({code:301,msg:'delete failed'});
	}
	pool.query('DELETE FROM ash_laptop WHERE lid=?',$lid,function(err,result){
	    if(err){
		    throw err;
		}
		if(result.affectedRows>0){
			res.send({code:200,msg:'reg success'});
		}
	});
});
//商品的增加
router.get('/add',function(req,res){
	var obj=req.query;
	var $family_id=obj.family_id,$title=obj.title,$subtitle=obj.subtitle,$price=obj.price,$promise=obj.promise,$spec=obj.spec,$lname=obj.lname,$os=obj.os,$memory=obj.memory,$resolution=obj.resolution,$video_card=obj.video_card,$cpu=obj.cpu,$video_memory=obj.video_memory,$category=obj.category,$disk=obj.disk,$details=obj.details,$shelf_time=obj.shelf_time,$sold_count=obj.sold_count,$is_onsale=obj.is_onsale;
	if(!$family_id || !$title || !$subtitle || !$price || !$promise || !$spec || !$lname || !$os || !$memory || !$resolution || !$video_card || !$cpu || !$video_memory || !$category || !$disk || !$details || !$shelf_time || !$sold_count || !$is_onsale){
		res.send({code:301,msg:'update failed'});
	}
	pool.query('INSERT INTO ash_laptop VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?',[$family,$title,$subtitle,$price,$promise,$spec,$lname,$os,$memory,$resolution,$video_card,$cpu,$video_memory,$category,$disk,$details,$shelf_time,$sold_count,$is_onsale]',function(err,result){
	    if(err){
		    throw err;
		}
		if(result.affectedRows>0){
			res.send({code:200,msg:'reg success'});
		}
});
//商品的更新（修改）
router.get('/update',function(req,res){
	var obj=req.query;
	var $lid=obj.lid,$family_id=obj.family_id,$title=obj.title,$subtitle=obj.subtitle,$price=obj.price,$promise=obj.promise,$spec=obj.spec,$lname=obj.lname,$os=obj.os,$memory=obj.memory,$resolution=obj.resolution,$video_card=obj.video_card,$cpu=obj.cpu,$video_memory=obj.video_memory,$category=obj.category,$disk=obj.disk,$details=obj.details,$shelf_time=obj.shelf_time,$sold_count=obj.sold_count,$is_onsale=obj.is_onsale;
	if(!lid || !$family_id || !$title || !$subtitle || !$price || !$promise || !$spec || !$lname || !$os || !$memory || !$resolution || !$video_card || !$cpu || !$video_memory || !$category || !$disk || !$details || !$shelf_time || !$sold_count || !$is_onsale){
		res.send({code:301,msg:'update failed'});
	}
	pool.query('UPDATE ash_laptop SET family_id=?,title=?,subtitle=?,price=?,promise=?,spec=?,lname=?,os=?,memory=?,resolution=?,video_card=?,cpu=?,video_memory=?,category=?,disk=?,details=?,shelf_time=?,sold_count=?,is_onsale=? WHERE lid=?',[$family,$title,$subtitle,$price,$promise,$spec,$lname,$os,$memory,$resolution,$video_card,$cpu,$video_memory,$category,$disk,$details,$shelf_time,$sold_count,$is_onsale,$lid],function(err,result){
		if(err){
			throw err;
		}
		if(result.affectedRows>0){
			res.send({code:200,msg:"update success"});
		}
	});
});
//商品的详情
router.get('/detail',function(req,res){
	var obj=req.query;
	var $lid=obj.lid;
	if(!$lid){
		res.send({code:301,msg:'delete failed'});
	}
	pool.query('SELECT * FROM ash_laptop WHERE lid=?',$lid,function(err,result){
	    if(err){
		    throw err;
		}
		if(result.length>0){
			res.send({code:200,msg:'reg success'});
		}
	});
});

module.exports=router;


























