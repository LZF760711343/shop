
/* 鼠标切图*/
var y1 = document.getElementById('y1');

function ccG1(){
	y1.style.display='none';
	y2.style.display='block';
	y3.style.display='none';
	y4.style.display='none';
	y5.style.display='none';
	
}
function sh2(){
	ccG1();
}
function ccG2(){
	y1.style.display='block';
	y2.style.display='none';
	y3.style.display='none';
	y4.style.display='none';
	y5.style.display='none';
	
}
function sh1(){
	ccG2();
}
function ccG3(){
	y1.style.display='none';
	y3.style.display='block';
	y2.style.display='none';
	y4.style.display='none';
	y5.style.display='none';
}
function sh3(){
	ccG3();
}
function ccG4(){
	y1.style.display='none';
	y4.style.display='block';
	y2.style.display='none';
	y3.style.display='none';
	y5.style.display='none';
}
function sh4(){
	ccG4();
}
function ccG5(){
	y1.style.display='none';
	y5.style.display='block';
	y2.style.display='none';
	y3.style.display='none';
	y4.style.display='none';
}
function sh5(){
	ccG5();
}
var xz1= document.getElementById('xz1');
function waC2(){
	xz1.style.display='none';
	xz2.style.display='block';
	xz3.style.display='none';
	xz4.style.display='none';
}
function see2(){
	waC2();
}
function waC1(){
	xz2.style.display='none';
	xz1.style.display='block';
	xz3.style.display='none';
	xz4.style.display='none';
}
function see1(){
	waC1();
}
function waC3(){
	xz1.style.display='none';
	xz3.style.display='block';
	xz2.style.display='none';
	xz4.style.display='none';
}
function see3(){
	waC3();
}
function waC4(){
	xz1.style.display='none';
	xz4.style.display='block';
	xz3.style.display='none';
	xz2.style.display='none';
}
function see4(){
	waC4();
};




