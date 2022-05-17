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
	
	let qjTable = function(){
		
		var title_content = document.getElementById("title_content");
		title_content .innerText = '学生请假申请:申请人(已通过)';
		var lsh = document.getElementById("title_description_short");
		lsh.innerText ='流水号:1875883';
		var titleHolder = document.getElementById("title_holder");
		titleHolder.style.backgroundColor = "#01acc0";
		
		var noaction = document.getElementsByClassName("no_action");
		noaction[0].innerText = "已通过审核";
	}
	

	
	
	var divLoader = document.getElementById("div_loader");
	

	function callback(mutationRecords, observer){
	    mutationRecords.forEach(mutationRecord => {
	        // console.dir(mutationRecord)
	        if(mutationRecord.type === "attributes") {
				
				qjTable();
			}
			
	    })
	}
	
	const observer = new MutationObserver(callback);

	const config = {
	    attributes: true,
	    attributeFilter: undefined, 
	    attributeOldValue: true,
	    characterData: false,
	    characterDataOldValue: false,
	    childList: false,
	    subtree: false
	};
	
	var domain4 = "http://e-office.nuist.edu.cn/infoplus/alive";
	
	if(domainQjTable == domain3 || domain3 == domain4){
		observer.observe(divLoader, config);
	}
}
)();
