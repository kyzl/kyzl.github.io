// @name  学生请假
// @run-at document-end

(
function(){
	var domainStr = "http://e-office.nuist.edu.cn/infoplus/form/2492714/render";
	var domain = window.location.href;
	if(domainStr == domain){
		var title_content = document.getElementById("title_content");
		title_content .innerText = '学生请假申请:申请人(已通过)';
		var lsh = document.getElementById("title_description_short");
		lsh .innerText ='流水号:1875883';
		
		date = new Date();
		month = date.getMonth() + 1;
		if(month < 10){month="0"+month;}
		day = date.getDate()-1;
		if(day<10){day = "0"+day;}
		var tContent = document.getElementsByClassName("infoplus_labelControlContainer inline");
		tContent[0].innerText = '2022-'+month+'-'+day;
		tContent[17].innerText = '2022-'+month+'-'+day;
		tContent[19].innerText = '2022-'+month+'-'+(Number(day)+1);
		tContent[24].innerText = '2022-'+month+'-'+day;
		tContent[26].innerText = '2022-'+month+'-'+day;
		tContent[28].innerText = '2022-'+month+'-'+day;
		tContent[30].innerText = '2022-'+month+'-'+day;
		
		var tr = document.querySelector('.xdLayout > tbody');
		var trChild = tr.childNodes;
		for(let t =70;t<87;t++){
			trChild[t].style.display = 'none';
		}
		
		
		
		var lisheItem= document.getElementsByClassName("remark_item");
		
		lisheItem[0].style.display = 'none';
		lisheItem[1].style.display = 'none';
		lisheItem[2].style.display = 'none';
		lisheItem[3].style.display = 'none';
		lisheItem[9].style.display = 'none';
		lisheItem[10].style.display = 'none';
		lisheItem[11].style.display = 'none';
		
		var shijian = document.getElementsByClassName("form_remark_time");
		for(let i = 4;i<9;i++){
			time = shijian[i].innerText.split(' ')[1];
			shijian[i].innerText = 	'2022-'+month+'-'+day+" "+time ;
		}
		
		
	}
}
)();
