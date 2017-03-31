const express = require('express');
const bodyparser = require('body-parser');
const static = require('express-static');
const mysql = require('mysql');
const sqlOption = {
	host: 'localhost',
	user: 'root', 
	password: '692415abc', 
	database: 'wechat'
}
const db = mysql.createPool(sqlOption);
const server = express();

server.use(bodyparser.urlencoded({extended:false}));
server.listen(8080);

server.post('/login',(req,res,next)=>{
	res.setHeader('Content-Type', 'text/plain');
	console.log(req.body.username);
	db.query(`SELECT * FROM user_table WHERE username='${req.body.username}'`,(err,data)=>{
		if(err){
			res.send({"msg":"404"});
		}else {
			console.log(JSON.stringify(data));
			var message = data[0];
			console.log('查询成功：'+ message);
			if(message != null || message != undefined){
				if(message.password == req.body.password){
					res.send({"msg":"ok","reseon":"登陆成功"});
					next();
				}else{
					res.send({"msg":"fild","reseon":"密码错误"});
					next();
				}
			}else{
				res.send({"msg":"fild","reseon":"暂无用户，请注册！"});
				next();
			}
		}
	})
});

server.post('/regist',(req,res,next)=>{
	res.setHeader('Content-Type', 'text/plain');
	console.log(req.body);
	db.query(`SELECT * FROM user_table WHERE username='${req.body.username}'`,(err,data)=>{
		if (err) {
			console.log('err')
			res.send({"msg":"404","reason":"网络错误"});
		}else {
			if (data.account == null || data.account == undefined) {
				db.query(`INSERT INTO user_table(account,username,password,telphone) VALUES ('${req.body.account}','${req.body.username}','${req.body.password}','${req.body.telphone}')`,(err,data)=>{
					if(err){
						res.send({"msg":"failde","reason":"数据错误，请重新提交"});
						next();
					}else{
						res.send({"msg":"ok","reason":"恭喜您注册成功"});
						next();
					}
				})
			}else{
				res.send({"msg":"error","reason":"账号已存在，请重新输入"});
				next();
			}
		}
	})
})

server.get('/',(req,res,next)=>{
	next();
})

server.use(static('./www'));

console.log('server starting sucess ,address: http://127.0.0.1:8080');