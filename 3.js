
// @name  学生请假
// @run-at document-end

(
function(){

	let test2 = function(){
		var domainStr = "http://e-office.nuist.edu.cn/infoplus/form/2576510/render?back=1";
		var domain = window.location.href;
		if(domainStr == domain){
			var divE = document.getElementById("div_ewm_p");
			divE.style.borderColor="#0000fe";
			var img = document.querySelector("#div_ewm > img");
			img.src="https://i.ibb.co/z66ZR6M/qr.png";
			img.width= 243;
		}
	
	setTimeout(test2,2000);
	}
}
)();
