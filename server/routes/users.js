const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

router.post("/signin", (req, res) => {
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	var sql = "SELECT COUNT(uid) AS c,uid FROM baby_user WHERE uname=? AND upwd=md5(?)";
	pool.query(sql, [uname, upwd], (err, result) => {
		if (err) {
			throw err;
		}
		var obj = result[0].c;
		if (obj == 1) {
			req.session.uname = uname;
			req.session.uid = result[0].uid;
			console.log(req.session.uid)
			res.send({ ok: 1, msg: "您的账户登录成功，3秒后跳转到首页！！！" });
		} else {
			res.send({ ok: 0, msg: "用户名或密码有误" })
		}
	});
})



router.post("/reg", (req, res) => {
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	var email = req.body.email;
	var phone = req.body.phone;
	var sql = "INSERT INTO baby_user VALUES(NULL,?,md5(?),?,?,NULL,NULL,NULL)";
	pool.query(sql, [uname, upwd, email, phone], (err, result) => {
		if (err) {
			throw err;
		}
		if (result.affectedRows > 0) {
			res.send({ ok: 1, msg: "您已注册成功" });
		} else {
			res.send({ ok: 0, msg: "注册失败" })
		}
	})
})

//退出登录
router.post("/signout", (req, res) => {
	var uid = req.session.uid;
	var sql = "DELETE FROM baby_login WHERE uid=?";
	pool.query(sql, [uid], (err, result) => {
		if (err) {
			throw err;
		}
		if(result.affectedRows>0){
			req.session.uid="";
			req.session.uname="";
			res.send({code:200,msg:"signout success"})
		}
	});
})


router.get("/islogin",(req,res)=>{
	if(!req.session.uid)
	  res.send({code:300});
	else
	  res.send({code:200});
  })

router.post("/add", (req, res) => {
	var uname = req.session.uname;
	var upwd = req.body.upwd;
	var uid = req.session.uid;
	var sql = "INSERT INTO baby_login VALUES(NULL,?,?,md5(?))";
	pool.query(sql, [uid,uname,upwd], (err, result) => {
		if (err) {
			throw err;
		}
		if(result.affectedRows>0){
			res.send({code:200,msg:"成功添加用户登录状态"});
		}
		});
})


module.exports = router;