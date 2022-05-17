
// ==UserScript==
// @name 学生请假办理
// @run-at document-start
// @match http://e-office.nuist.edu.cn/infoplus/form/XSQXJSQ/start?back=1&x_posted=true
// @description 学生请假办理
// @version 0.1
// ==/UserScript==
(
function(){

	// 1.学生申请请假页面  将学生申请请假中的链接给更改掉
	let studentQJ = function(){
		window.location.href = "http://e-office.nuist.edu.cn/infoplus/form/2492714/render";
	}
	
}
)();
