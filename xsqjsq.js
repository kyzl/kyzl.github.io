// ==UserScript==
// @name 学生请假办理
// @run-at document-start
// @match http://e-office.nuist.edu.cn/infoplus/form/XSQXJSQ/start?back=1&x_posted=true
// @description 学生请假办理
// @version 0.1
// ==/UserScript==
(
function(){
	
	var domain0= window.location.href;
	var domain1= "http://e-office.nuist.edu.cn/infoplus/form/XSQXJSQ/start?back=1&x_posted=true";

	// 1.学生申请请假页面  将学生申请请假中的链接给更改掉
	let studentBL = function(){
		window.location.replace("http://e-office.nuist.edu.cn/infoplus/form/2492714/render"); 
	}
	
	if(domain0 == domain1){
		studentBL();
	}
}
)();
