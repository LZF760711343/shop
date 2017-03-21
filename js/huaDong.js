var tut = document.getElementById('tu2');
var ded = document.getElementById('de2');
function yiDong(){
	if(ded.offsetWidth-tut.scrollLeft<0){
		tut.scrollLeft-=ded.offsetWidth;
	}else{
		tut.scrollLeft++;
	}
	if(ded.offsetWidth-tut.scrollLeft==269){
		tut.scrollLeft=0;
	}
}
var moveDown=setInterval(yiDong,15);
tut.onmouseover=function(){
		clearInterval(moveDown);
}
tut.onmouseout=function(){
	moveDown=setInterval(yiDong,15);
	tut.style.cursor='pointer';
}
