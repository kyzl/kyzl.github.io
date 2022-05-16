
// @name  学生请假
// @run-at document-end

(
function(){
	'use strict';
	var domainStr = "http://e-office.nuist.edu.cn/taskcenter/wechat/appall";
	var domain = window.location.href;
	if(domainStr == domain){
		var xsqjsq = document.querySelector('a[title="学生请假申请"]');
		   xsqjsq.href = "http://e-office.nuist.edu.cn/infoplus/form/2492714/render";
	}
}
)();
