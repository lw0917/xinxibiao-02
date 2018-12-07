require(['../js/main.js'],function(){
	require(['mui','dom','getParams'],function(mui,dom,getParams){
		mui.init();
		
		var id = getParams.id || '';
		
		if(id){
			mui.ajax('/users/api/detail',{
				data:{
					id:id
				},
				success:function(res){
					if(res.code === 1){
						var data = res.data[0];
						dom('.name').value = data.name;
						dom('.age').value = data.age || '';
						dom('.phone').value = data.phone || '';
						dom('.address').value = data.address || '';
						dom('.id-card').value = data.id_card;
					}
				}
			})
		}
		
		//点击添加
		dom('.add-btn').addEventListener('tap',function(){
			var name = dom('.name').value,
				pass = dom('.age').value,
				auth = dom('.auth').value;
				
			if(!name || !auth){
				alert("姓名或职务为空")
			}else{
				var url = id ? '/users/api/update' : '/users/api/add';
				mui.ajax(url,{
					data:{
                        name:name,
                        pass:pass,
                        auth:auth,
						id:id
					},
					dataType:'json',
					type:'post',
					success:function(res){
						console.log(res);
						if(res.code === 1){
							location.href="../../index.html"
						}
					}
				})
			}
		})
	})
})