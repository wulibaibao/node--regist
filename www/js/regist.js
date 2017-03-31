$(function(){

	$('#submit').on('click',function(){
		var username = $('.name').val();
		var password = $('.password').val();
		var confirmPassword = $('.confirm-password').val();
		var telphone = $('.telphone').val();
		var accountNumber = $('.account-number').val();
		if(password == confirmPassword){
			let submitInform = {
				"username":username,
				"password":password,
				"account" : accountNumber,
				"telphone" : telphone
			};
			console.log(submitInform);
			$.ajax({
			 	type: "POST",
		       	url: "/regist",
		       	data: submitInform,
		       	async: false,
		       	success:(data)=>{
		       		console.log(data);	
		       	},
		       	error:(err)=>{
		       		console.log(err);
		       	}
			})
		}else{
			alert('密码错误，请重新输入')
		}
	})
	
})