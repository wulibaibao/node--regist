$(function(){

	$('#submit').on('click',function(){
		let username = $('.name').val();
        let password = $('.password').val();
        let confirmPassword = $('.confirm-password').val();
        let telphone = $('.telphone').val();
        let accountNumber = $('.account-number').val();
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
                    var data = JSON.parse(data);
		       		if(data.msg == 'ok'){
		       			userStatus(data,jumpWind);
					}
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
function userStatus(res,callback){
    alert(res.reason);
    callback();
}
function jumpWind(){
    location.href = '/views/login.html';
}