const mysql=require('mysql');
var pool=mysql.createPool({
    host:'127.0.0.1',
	potr:'3306',
	user:'root',
	password:'',
	database:'ash',
	connectionLimit:10
});
module.exports=pool;