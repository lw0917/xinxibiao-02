require(['./js/main.js'],function(){
	  require(['mui','jquery'],function(mui,$){
		  mui.init();
		  
		  //滚动
		  mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		  });
		  
		  //请求初始化数据
		  //请求数据
		  mui.ajax('/api/userlist',{
			dataType:'json',
			success:function(res){
				console.log(res);
				if(res.code === 1){
					///renderList(res.data);
				}
			}
		 })
		  
		  
		  
	  })
})