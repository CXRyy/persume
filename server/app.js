const express=require('express');
const bodyParser=require('body-parser');
const cors=require("cors");
const session = require("express-session")
const users=require('./routes/users.js');
const index=require('./routes/index.js');
const products=require("./routes/products.js");
const details=require("./routes/details.js");
const informations=require("./routes/informations.js");
const shopcart=require("./routes/shopcart.js");
const comment=require("./routes/comment.js");
//创建服务器
var app=express();
app.listen(3000);
app.use(express.static("../public"));
app.use(cors({credentials:true,origin:["http://127.0.0.1:5500"]}))
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(session({
	secret:"128位随机字符",    //安全字符串
	resave:false,             //请求保存
	saveUninitialized:true,   //初始化保存
	cookie:{
	  	maxAge:1000 * 60 * 60 * 24
	}
}));
app.use("/users",users);
app.use("/index",index);
app.use("/products",products);
app.use("/details",details);
app.use("/informations",informations);
app.use("/shopcart",shopcart);
app.use("/comment",comment);







