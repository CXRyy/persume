const express=require("express");
const pool=require("../pool.js");
const router=express.Router();
router.get("/more",function(req,res){
    var sql="SELECT lid,img_url,content,price FROM baby_index_more";
    pool.query(sql,[],function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
});

router.get("/today",function(req,res){
    var sql="SELECT img_url,content,price,original FROM baby_index_today";
    pool.query(sql,[],function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
});


router.get("/hot",function(req,res){
    var sql="SELECT img_url FROM baby_index_hot";
    pool.query(sql,[],function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
});



router.get("/f1",function(req,res){
    var sql="SELECT img_url FROM baby_index_of";
    pool.query(sql,[],function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
});

router.get("/carousel",function(req,res){
    var sql="SELECT cid,img,title,href FROM baby_index_carousel";
    pool.query(sql,[],function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
});
/*
router.get("/brand",function(req,res){
    var sql="SELECT * FROM baby_index_brand";
    pool.query(sql,[],function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
});

router.get("/active",function(req,res){
    var sql="SELECT * FROM baby_index_active";
    pool.query(sql,[],function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
});*/


module.exports=router;
