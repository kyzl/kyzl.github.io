// ==UserScript==
// @name  学生请假表
// @run-at document-idle
// @match http://e-office.nuist.edu.cn/infoplus/form/2492714/render
// @require https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js
// @description 0
// @version 0.1
// ==/UserScript==
(
function(){
	
	var domainQjTable = "http://e-office.nuist.edu.cn/infoplus/form/2492714/render";
	var domain3 = window.location.href;
	// 2.点击进入请假表之后  修改请假表
	let qjTable = function(){
		// 修改页面最上面的信息  颜色是：#01acc0  文字:学生请假申请：申请人（提交：XXX）
		var title_content = document.getElementById("title_content");
		title_content .innerText = '学生请假申请:申请人(已通过)';
		var lsh = document.getElementById("title_description_short");
		lsh.innerText ='流水号:1875883';
		var titleHolder = document.getElementById("title_holder");
		titleHolder.style.backgroundColor = "#01acc0";
		
		var noaction = document.getElementsByClassName("no_action");
		noaction[0].innerText = "已通过审核";
	}
	
	// 当请假页面出现： 加载完成(100%)  执行代码
	// 思路  ：   1. 每隔1秒运行 qjTable一次  直到请假表格刷出来
    //           2. 使用监听机制
	
	
	var divLoader = document.getElementById("div_loader");
	
	// // 事件处理器
	function callback(mutationRecords, observer){
	    mutationRecords.forEach(mutationRecord => {
	        // console.dir(mutationRecord)
	        if(mutationRecord.type === "attributes") {
				// return console.log('属性发生了变化 target =', mutationRecord.target);
				
				// 如果属性发生了变化 修改表格
				qjTable();
			}
			// if(mutationRecord.type === 'childList') return console.log('添加or删除了 childList: ',mutationRecord.target)
	        // if(mutationRecord.type === 'characterData') return console.log('文本节点的数据发生了变化',mutationRecord.target)
	    })
	}
	
	const observer = new MutationObserver(callback);
	/*
	 * 配置文件
	*/
	const config = {
	    attributes: true,
	    attributeFilter: undefined, /*需要监听的属性名称列表，如果没有表示监听全部的属性*/
	    attributeOldValue: true, /*传递之前旧的值给mutationRecord*/
	    characterData: false, /*是否监听内部文本节点的数据变化*/
	    characterDataOldValue: false, /*mutationRecord 是否包含内部文本节点变化前的数据*/
	    childList: false,
	    subtree: false /*是否把监听的方位放到节点树中的全部子节点上*/
	};
	
	var domain4 = "http://e-office.nuist.edu.cn/infoplus/alive";
	// 进入请假页面后执行
	if(domainQjTable == domain3 || domain3 == domain4){
		observer.observe(divLoader, config);
	}
}
)();
