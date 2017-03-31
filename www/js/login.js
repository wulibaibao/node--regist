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
           		console.log(data);	
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