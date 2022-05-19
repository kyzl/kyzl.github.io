
	// http://e-office.nuist.edu.cn/infoplus/form/2588715/render
	var domainStr = "http://e-office.nuist.edu.cn/taskcenter/wechat/appall";
	var chuxiaoDomain = window.location.href;
	var xsqjcxbl = 'http://e-office.nuist.edu.cn/infoplus/form/XSQXJSQ/start?back=1&x_posted=true';

	// 1.学生申请请假页面  将学生申请请假中的链接给更改掉
	let chuxiaoQr = function(){
		 var chuxiao = document.querySelector('a[title="查看出校二维码"]');
		 var xsqjsq = document.querySelector('a[title="学生请假申请"]');
		 if(chuxiao != null){
			 let chuxiaohref='http://e-office.nuist.edu.cn/infoplus/form/2588715/render';
			 chuxiao.href = chuxiaohref;
		 }

		 if(xsqjsq != null){
			 let xsqj = "http://e-office.nuist.edu.cn/infoplus/form/2492714/render";
			 xsqjsq.href = xsqj;
		 }
	}
	if(domainStr == chuxiaoDomain ){
		setTimeout(chuxiaoQr,1000);
	}
	if(chuxiaoDomain == xsqjcxbl ){
		window.location.replace("http://e-office.nuist.edu.cn/infoplus/form/2492714/render"); 
	}

