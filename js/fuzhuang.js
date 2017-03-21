
var xll=document.getElementById('xxll')

function xx1Show(img){
	img.setAttribute('src','img/goods_wedding01.jpg');
}
function xx2Show(img){
	img.setAttribute('src','img/goods_wedding03.jpg');
}
function xx3Show(img){
	img.setAttribute('src','img/goods_wedding04.jpg');
}
function xx4Show(img){
	img.setAttribute('src','img/goods_wedding02.jpg');
}
function inkk(){
	xx1Show(xxll);
}
function inkl(){
	xx2Show(xxll);
}
function inki(){
	xx3Show(xxll);
}
function inko(){
	xx4Show(xxll);
}


var Img=document.getElementById('Imge');



function Imgclick(){
	
	alert('购买成功！！！欢迎下次再来！！！');
}




function inww(){

	Imgclick();
	
};

 /*
        	吴焯斌
        	鼠标图片切换
        */

var r_mid=document.getElementById('r_mid'); 
var img1=document.getElementById('img1');
var li1=document.getElementById('li1');
function tu2Show(){
	img1.setAttribute('src','img/ban_01.jpg');
	li2.style.backgroundColor='#F76C0E';
	li1.style.backgroundColor='#6F6C6D';
	li3.style.backgroundColor='#6F6C6D';
}
function tu1Show(){
	img1.setAttribute('src','img/ban_02.jpg');
	li1.style.backgroundColor='#F76C0E';
	li2.style.backgroundColor='#6F6C6D';
	li3.style.backgroundColor='#6F6C6D';
}
function tu3Show(){
	img1.setAttribute('src','img/ban_06.jpg');
	li3.style.backgroundColor='#F76C0E';
	li1.style.backgroundColor='#6F6C6D';
	li2.style.backgroundColor='#6F6C6D';
}
function init(){
	tu2Show(img1);
}
function incc(){
	tu1Show(img1);
}
function ingg(){
	tu3Show(img1);
}
function inxC(){
	li1.style.backgroundColor='#F76C0E';
}
inxC();


 /*
        	
        	图片轮播
        */
var img0=['img/ban_01.jpg','img/ban_02.jpg','img/ban_06.jpg'];
var li1 = document.getElementById('li1');
var li2 = document.getElementById('li2');
var li3 = document.getElementById('li3');
var li0 =[li1,li2,li3];
var i=0;
var j=0;
function imgA(){
         j++;
          i=j;
        if(i>2){
            j=0;
            i=0;
        }
        img0[i];
   	    li0[i];
   	    img1.setAttribute('src',img0[i]);
   	    
   	  if(i==0){
   	    li0[0].style.backgroundColor=' #F76C0E';
   	    li0[1].style.backgroundColor=' #6F6C6D';
   	    li0[2].style.backgroundColor=' #6F6C6D';
   	    }
	  if(i==1){
   	    li0[1].style.backgroundColor=' #F76C0E';
   	    li0[0].style.backgroundColor=' #6F6C6D';
   	    li0[2].style.backgroundColor=' #6F6C6D';
   	    }
      if(i==2){
   	    li0[2].style.backgroundColor=' #F76C0E';
   	    li0[1].style.backgroundColor=' #6F6C6D';
   	    li0[0].style.backgroundColor=' #6F6C6D';
   	    }
   
   	
}
    changeImg=setInterval(function(){
		imgA();
	},2000)
    
function imgB(){
	clearInterval(changeImg);
}
function imgBx(){
	imgB();
}
function imgC(){
	 changeImg=setInterval(function(){
		imgA();
	},2000)
}
r_mid.addEventListener('mouseover',imgBx);
r_mid.addEventListener('mouseout',imgC);



/*点击切图*/

var r_left=document.getElementById('r_left');
var r_right=document.getElementById('r_right');


function qieTu1(){
	  
	  i=i-1;
	  if(i<0){
	  	i=2;
	  	
	  }
	 img1.setAttribute('src',img0[i]);
	  if(i==0){
   	    li0[0].style.backgroundColor=' #F76C0E';
   	    li0[1].style.backgroundColor=' #6F6C6D';
   	    li0[2].style.backgroundColor=' #6F6C6D';
   	    }
	  if(i==1){
   	    li0[1].style.backgroundColor=' #F76C0E';
   	    li0[0].style.backgroundColor=' #6F6C6D';
   	    li0[2].style.backgroundColor=' #6F6C6D';
   	    }
      if(i==2){
   	    li0[2].style.backgroundColor=' #F76C0E';
   	    li0[1].style.backgroundColor=' #6F6C6D';
   	    li0[0].style.backgroundColor=' #6F6C6D';
   	    }
   
}
function qieTu2(){
	  i=i+1;
	  if(i>2){
	  	i=0;
	  	
	  }
	 img1.setAttribute('src',img0[i]); 
	  if(i==0){
   	    li0[0].style.backgroundColor=' #F76C0E';
   	    li0[1].style.backgroundColor=' #6F6C6D';
   	    li0[2].style.backgroundColor=' #6F6C6D';
   	    }
	  if(i==1){
   	    li0[1].style.backgroundColor=' #F76C0E';
   	    li0[0].style.backgroundColor=' #6F6C6D';
   	    li0[2].style.backgroundColor=' #6F6C6D';
   	    }
      if(i==2){
   	    li0[2].style.backgroundColor=' #F76C0E';
   	    li0[1].style.backgroundColor=' #6F6C6D';
   	    li0[0].style.backgroundColor=' #6F6C6D';
   	    }
   
}

function momo1(){
	r_left.style.cursor='pointer';
}
function momo2(){
	r_right.style.cursor='pointer';
}
function xian1(){
	r_left.style.display='block';
	r_right.style.display='block';

}
function xian2(){
	r_left.style.display='none';
	r_right.style.display='none';

}

r_left.addEventListener('click',qieTu1);
r_right.addEventListener('click',qieTu2);
r_left.addEventListener('mouseover',momo1);
r_right.addEventListener('mouseover',momo2);
r_mid.addEventListener('mouseover',xian1);
r_mid.addEventListener('mouseout',xian2);





