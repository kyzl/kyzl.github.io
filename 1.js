// ==UserScript==
// @name 学生申请请假页面
// @run-at document-idle
// @match http://e-office.nuist.edu.cn/taskcenter/wechat/appall
// @description 0
// @version 0.1
// ==/UserScript==
(
function(){
	var domainStr = "http://e-office.nuist.edu.cn/taskcenter/wechat/appall";
	var domainStr1 = "http://e-office.nuist.edu.cn/taskcenter/refresh";
	var domain = window.location.href;
	
	// 1.学生申请请假页面  将学生申请请假中的链接给更改掉
	let studentQJ = function(){
		 var xsqjsq = document.querySelector('a[title="学生请假申请"]');
		 xsqjsq.href = "http://e-office.nuist.edu.cn/infoplus/form/2492714/render";
	}
	
	if(domainStr == domain || domainStr1 == domain){
		studentQJ();
	}
	
	
}
)();
