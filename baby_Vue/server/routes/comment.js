const express=require("express");
const router=express.Router();
const pool=require("../pool.js");



//分页查找指定新闻下评论列表
router.get("/getcomment",(req,res)=>{
    //1:获取参数
    var pno = req.query.pno;  //页码
    var pageSize = req.query.pageSize;//页大小
    var nid = req.query.nid; //新闻id
    //2:设置默认值 1 7
    if(!pno){pno = 1}
    if(!pageSize){pageSize=7}
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
    obj.uname = req.session.uname;
    //11:49
    //5:创建sql1 查询总记录数   严格区分大小写
    var sql = "SELECT count(id) AS c FROM baby_comment WHERE nid = ?";
    nid = parseInt(nid);
    pool.query(sql,[nid],(err,result)=>{
      if(err)throw err;
      var pageCount = Math.ceil(result[0].c/pageSize);
      progress+=50;
      obj.pageCount = pageCount;
      if(progress==100){
        res.send(obj);
      }
    });
    //6:创建sql2 查询当前页内容 严格区分大小写
    var sql =" SELECT id,user_name,ctime,";
        sql+=" content";
        sql+=" FROM baby_comment";
        sql+=" WHERE nid = ?";
        sql+=" ORDER BY id DESC";
        sql+=" LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);
        pageSize = parseInt(pageSize);
    pool.query(sql,[nid,offset,pageSize],(err,result)=>{
      if(err)throw err;
      progress+=50;
      obj.data=result;
      if(progress==100){
        res.send(obj);
      }
    })
});
   
//发表评论
router.post("/addComment",(req,res)=>{
  //1:获取3个参数
  //需要第三方模块支持 bodyParser
  var nid = req.body.nid;
  var content = req.body.content;
  var user_name = req.session.uname;
  //2:创建sql语句
  var sql  =" INSERT INTO `baby_comment`(`id`,";
      sql +=" `nid`, `user_name`, `ctime`,";
      sql +=" `content`) VALUES";
      sql +=" (null,?,?,now(),?)";
  nid = parseInt(nid);
  pool.query(sql,[nid,user_name,content],(err,result)=>{
       if(err)throw err;
       res.send({code:1,msg:"评论发表成功"});
  });
  //3:返回添加结果
})



module.exports=router;