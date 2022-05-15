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
		
		var sqrq = document.getElementById('label_0231ece2-3192-4fa2-af70-f9cbd9b012e4');
		var date = new Date();
		month = date.getMonth() + 1;
		if(month < 10){month="0"+month;}
		day = date.getDate()-1;
		if(day<10){day = "0"+day;}
		sqrq.innerText = '2022-'+month+'-'+day;
		
		
		var jtlx = document.getElementById('label_d0948c32-7926-4855-b345-6fe283ffbe59');
		jtlx.innerText = '2022-'+month+'-'+day;
		var jtfx =document.getElementById('label_7fee0cd2-9991-4aa3-9c0f-0be4e5d8df66');
		jtfx.innerText = '2022-'+month+'-'+(Number(day)+1);
		
		
		var shrq = document.getElementById('label_d54277e5-bf5a-4e16-88a3-1241f6ef5d17');
		shrq.innerText = '2022-'+month+'-'+day;
		
		var dsss = document.getElementById("label_7521010f-2dd9-4812-94af-1e7f208782f6");
		dsss.innerText = '2022-'+month+'-'+day;
		
		var zn = document.getElementById("label_d54277e5-bf5a-4e16-88a3-1241f6ef5d17");
		zn.innerText = '2022-'+month+'-'+day;
		
		var zcy = document.getElementById("label_d9e28365-9aca-46cc-99cd-4f7c4206afb8");
		zcy.innerText ='2022-'+month+'-'+day;
		
		var gh = document.getElementById("label_3ff05105-da7d-48d8-8720-c7897643d3d3");
		gh.innerText = '2022-'+month+'-'+day;
		
		var xjsj = document.getElementById("label_53905014-5872-4ffe-9df4-00206957cc67");
		xjsj.innerText =  '2022-'+month+'-'+(Number(day)+1);
		
		
		var shsj =document.getElementById("label_15421907-b32a-4ed2-941a-a6f4511c3176");
		shsj.innerText = '2022-'+month+'-'+day;
		
		
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
