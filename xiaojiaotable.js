// ==UserScript==
// @name  学生请假表
// @run-at document-end
// @match http://e-office.nuist.edu.cn/infoplus/form/2492714/render
// @description  学生请假表
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
	

	

		let date = new Date();
		let month = date.getMonth() + 1;
		if(month < 10){month="0"+month;}
		let day = date.getDate()-1;
		if(day<10){day = "0"+day;}
		var tContent = document.getElementsByClassName("infoplus_labelControlContainer inline");
		tContent[0].innerText = '2022-'+month+'-'+day;
		tContent[17].innerText = '2022-'+month+'-'+day;
		tContent[19].innerText = '2022-'+month+'-'+(Number(day)+1);
		tContent[24].innerText = '2022-'+month+'-'+day;
		tContent[26].innerText = '2022-'+month+'-'+day;
		tContent[28].innerText = '2022-'+month+'-'+day;
		
		tContent[30].innerText = '2022-'+month+'-'+day;
		tContent[38].innerText = '2022-'+month+'-'+day;
		tContent[40].innerText = '2022-'+month+'-'+day;

		// var tr = document.querySelector('.xdLayout > tbody');
		// var trChild = tr.childNodes;
		// for(let t =73;t<86;t++){
		// 	trChild[t].style.display = 'none';
		// }

		
		var image = document.querySelectorAll('img');
		// image[1].src = "苏康码";
		// image[3].src = "行程码";
		// image[5].src = "核酸码" 
		
		var remark = document.getElementById('form_remark_holder');
		var remarkUl = remark.getElementsByTagName('ul');
		var li1 = remarkUl[0].getElementsByTagName('li');
       // let  b = li1[0].getElementsByTagName('b')[1];
       //  b.innerText='假辅导员审核';

		for(let i =1;i<5;i++){
			li1[1].remove();
		}

		let h = 20;
		let m = 50;
		for(let i = 0;i<7;i++){
			let t1 = li1[i].getElementsByClassName("form_remark_time");
			t1[0].innerText = "2022/"+month +"/"+day+" "+h+":"+m;
			h -= 2;
			m-=7;
		}

		var moreHistory = document.getElementsByClassName("moreHistory");
		moreHistory[0].innerText=" 点击展开8个较早历史";

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
				// qjTable();
			   setTimeOut(qjTable,200);
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
