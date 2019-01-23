const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/",(req,res)=>{
    //1:获取参数
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    //2:设置默认值 1 8
    if(!pno){pno = 1}
    if(!pageSize){pageSize=8}
    //3:创建正则表达式验证用户输入验证
    var reg = /^[0-9]{1,3}$/;
    //4:如果错出停止函数运行
    if(!reg.test(pno)){
        res.send({code:-1,msg:"页编格式不正确"});
        return;
    }
    if(!reg.test(pageSize)){
       res.send({code:-2,msg:"页大小格式不正确"});
       return;
    }
   
    var progress = 0;
    var obj = {code:1};
    obj.pno=pno;
    //5:创建sql1 查询总记录数   严格区分大小写
    var sql = "SELECT count(id) AS c FROM baby_informations";
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        var pageCount = Math.ceil(result[0].c/pageSize);
        progress+=50;
        obj.pageCount = pageCount;
        if(progress==100){
            res.send(obj);
    }
});
    //6:创建sql2 查询当前页内容 严格区分大小写
    var sql =" SELECT id,title,ctime,img_url,";
        sql+=" point,content";
        sql+=" FROM baby_informations";
        sql+=" LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);
        pageSize = parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err)throw err;
      progress+=50;
      obj.data=result;
      if(progress==100){
        res.send(obj);
      }
    })
    //7:返回结果
   });  
/*
router.get("/info",(req,res)=>{
    //1:参数 id 
    var id = req.query.id;
    var sql = " SELECT id,title,content,";
        sql +=" point,ctime";
        sql +=" FROM baby_informations WHERE id = ?";
    //3:json {code:1,data:[{}]}
    pool.query(sql,[id],(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result});
    });
});
*/

module.exports=router;
