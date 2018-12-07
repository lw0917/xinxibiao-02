require(['./js/main.js'],function(){
	  require(['mui'],function(mui){
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
				if(res.code === 0){
					renderList(res.msg);
				}
			}
		 })
		 
		 function renderList(data){
						 var str='';
						 console.log(data)
						 data.forEach(function(file){
							   str+=`<li class="mui-table-view-cell">
								 ${file.user}
								 <div class="btns">
									 <button type="button" class="mui-btn mui-btn-primary" data-id="${file.adds}">
										 查看详情
									 </button>
									 <button type="button" class="mui-btn mui-btn-danger"  data-id="${file.adds}">
										 删除
									 </button>
								 </div>
							 </li>`
						 })
						document.querySelector('.list').innerHTML=str;
		 }
		
		 //点击添加去添加界面
		var addBtn = document.querySelector('.mui-icon-plus');
		addBtn.addEventListener('tap',function(){
			location.href="./page/add.html";
		})
		  
	  })
})