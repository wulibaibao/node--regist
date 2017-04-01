const express = require('express');        //express框架
const bodyparser = require('body-parser');  //bodyparser  数据解析
const static = require('express-static');	//静态文件访问
const mysql = require('mysql');             //mysql模块
const login = require('login');
const sqlOption = {				//sql配置
	host: 'localhost',
	user: 'root', 
	password: '692415abc', 
	database: 'wechat'
}
const db = mysql.createPool(sqlOption); 		//  sql连接池链接sql表
const server = express();	//开启express服务
server.use(bodyparser.urlencoded({extended:false}));	//配置bodyparser
server.listen(8080);   //开启端口监听配置端口
server.post('/login',(req,res,next)=>{			//express  post方法   接口请求
	res.setHeader('Content-Type', 'text/plain');	//设置请求头
	console.log(req.body.username);	
	login.login(db,res,req,next);
});
server.post('/regist',(req,res,next)=>{
	res.setHeader('Content-Type', 'text/plain');
	console.log(req.body)
	login.regist(db,res,req,next);
});
server.post('/chatroom',(req,res,next)=>{
	res.setHeader('Content-Yype','text/plain');
	login.chatRoom(db,req,res,next);
})
server.get('/',(req,res)=>{	//get方法  读取文件 get请求
	
})
server.use(static('./www'));       //静态文件配置  
console.log('server starting sucess ,address: http://127.0.0.1:8080');