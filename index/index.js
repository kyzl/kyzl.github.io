image1 = document.getElementById("img1");
image1_width = image1.style.width;
image1_height = image1.style.height;

console.log(image1_height);

image1_width = window.screen.width+"px";
document.getElementById("img2").style.width = window.screen.width+"px";




var imag1 = document.getElementById("qjarea");

// width =window.screen.width;
// height = document.getElementById("img1").style.height;

// console.log("宽度"+width);
// console.log("高度"+height);
// point1 = 0;
// point2 = 0.345*height;
// point3 = width;
// point4 = 0.399*height;
coords1= 0+","+0.31*2312+","+ window.screen.width+","+0.36*2312+"";
// console.log(coords);
imag1.setAttribute("coords",coords1)
var imag2 = document.getElementById("xjarea");
coords2= 0+","+0.36*2312+","+ window.screen.width+","+0.42*2312+"";
// console.log(coords);
imag2.setAttribute("coords",coords2)