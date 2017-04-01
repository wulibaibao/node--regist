	
$(()=>{
	/*
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
	*/
	var timer = setInterval(()=>{
		var userAccount = '';
        $.ajax({
            type: "POST",
            url: "/chatroom",
            async: false,
            success:(data)=>{
                console.log(data);
            },
            error:(err)=>{
                console.log(err);
            }
        })
	},1000);
})