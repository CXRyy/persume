const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//用户注册时用户名的验证
router.get("/checkUname",function(req,res){
    var data=req.query;
	var $uname=data.uname;
	if(!$uname){
		res.send("用户名不能为空");
		return;
	}
	pool.query("SELECT * FROM ash_user WHERE uname=?",[$uname],function(err,result){
		if(err){
			throw err;
		}
		if(result.length>0){
			res.send("0");
		}else{
			res.send("1");
		}
	});
});
//用户注册
router.post("/userReg",function(req,res){
	var $uname=req.body.uname;
	if(!$uname){
		res.send("uname不存在！");
		return;
	}
	var $upwd=req.body.upwd;
	if(!$upwd){
		res.send("upwd不存在！");
		return;
	}
	var $email=req.body.email;
	if(!$email){
		res.send("email不存在！");
		return;
	}
	 var $phone=req.body.phone;
	if(!$phone){
		res.send("phone不存在！");
		return;
	}
	pool.query("INSERT INTO ash_user VALUES(NULL,?,?,?,?,NULL,NULL,NULL)",[$uname,$upwd,$email,$phone],function(err,result){
		if(err){
			throw err;
		}
		res.send("注册成功");
	});
});
//用户登录
router.post("/userLogin",function(req,res){
	var data=req.body;
	var $uname=data.uname,$upwd=data.upwd;
	if(!$uname){
		res.send("用户名不能为空");
	}
	if(!$upwd){
		res.send("密码不能为空");
	}
	pool.query("SELECT * FROM ash_user WHERE uname=? AND upwd=?",[$uname,$upwd],function(err,result){
		if(err){
			throw err;
		}
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("登录失败");
		}
	});
});
//用户列表
router.get("/userList",function(req,res){
	var data=req.query;
	var $start_page=data.start_page,$count=data.count;
	if(!$start_page){
		$start_page=1;
	}
	if(!$count){
		$count=5;
	}
	$start_page=Number($start_page);
	$count=Number($count);
	pool.query("SELECT * FROM ash_user LIMIT ?,?",[($start_page-1)*$count,$count],function(err,result){
		if(err){
			throw err;
		}
		res.send(result);
	});

});
//删除用户信息
router.get("/deleteUser",function(req,res){
    var data=req.query;
	var $uid=data.uid;
	if(!$uid){
		res.send("用户编号不能为空");
		return;
	}
	pool.query("DELETE FROM ash_user WHERE uid=?",[$uid],function(err,result){
		if(err){
			throw err;
		}
		res.send("1");
	});
});
//获取用户信息
router.get("/getMsg",function(req,res){
    var data=req.query;
	var $uid=data.uid;
	if(!$uid){
		res.send("用户编号不能为空");
		return;
	}
	pool.query("SELECT * FROM ash_user WHERE uid=?",[$uid],function(err,result){
		if(err){
			throw err;
		}
		res.send(result[0]);
	});
});
//修改用户信息
router.post("/setMsg",function(req,res){
  var $uid=req.body.uid;
  if(!$uid){
    res.send("uid不存在！");
	return;
  }
  
  var $uname=req.body.uname;
  if(!$uname){
    res.send("uname不存在！");
	return;
  }

  var $upwd=req.body.upwd;
  if(!$upwd){
    res.send("upwd不存在！");
	return;
  }

  var $email=req.body.email;
  if(!$email){
    res.send("email不存在！");
	return;
  }

  var $phone=req.body.phone;
  if(!$phone){
    res.send("phone不存在！");
	return;
  }
  var $avatar=req.body.phone;
  if(!$avatar){
    res.send("avatar不存在！");
	return;
  }

  var $user_name=req.body.user_name;
  if(!$user_name){
    res.send("user_name不存在！");
	return;
  }

  var $gender=req.body.gender;
  if(!$gender){
    res.send("gender不存在！");
	return;
  }
	pool.query("UPDATE ash_user SET uname=?,upwd=?,email=?,phone=?,avatar=?,user_name=?,gender=? WHERE uid=?",[$uname,$upwd,$email,$phone,$avatar,$user_name,$gender,$uid],function(err,result){
		if(err){
			throw err;
		}
		res.send("<script>alert('成功修改信息');location.href='http://127.0.0.1:3000/userList.html'</script>");
	});
});

module.exports=router;