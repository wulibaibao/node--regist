$(function(){
	$('#login').on('click',function(){
		var username = $('#username').find('input').val();
		var  password = $('#password').find('input').val();

		let regist = {"username":username,"password":password};

		$.ajax({
		 	type: "POST",
           	url: "/login",
           	data: regist,
           	async: false,
           	success:(data)=>{
           		var data = JSON.parse(data);
           		console.log(data);
           		if(data.msg == 'ok'){
           			userStatus(data,jumpWind);
           		}	
           	},
           	error:(err)=>{
           		console.log(err);
           	}
		})
		
	});
	$('#regist').on('click',function(){
		location.href = "/views/regist.html";
	})
})
function userStatus(res,callback){
	alert(res.reason);
	callback();
}
function jumpWind(){
	location.href = '/views/chatroom.html';
}