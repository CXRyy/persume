const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routers/user.js');
const myUserRouter=require('./routers/myUser.js'); 
//创建服务器
var app=express();
app.listen(3000);
app.use(express.static("public"));
app.use(express.static("css"));
app.use(express.static("image"));
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use("/myUser",myUserRouter);
app.use("/user",userRouter);