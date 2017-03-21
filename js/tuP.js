

 /*
        	吴焯斌
        	鼠标图片切换
        */
var f_mid=document.getElementById('f_mid'); 
var r_mid=document.getElementById('r_mid'); 
var img1=document.getElementById('img1');
var li1=document.getElementById('li1');
function tu2Show(){
	img1.setAttribute('src','img/ban_02.jpg');
	li2.style.backgroundColor='#F76C0E';
	li1.style.backgroundColor='#6F6C6D';
	li3.style.backgroundColor='#6F6C6D';
}
function tu1Show(){
	img1.setAttribute('src','img/ban_01.jpg');
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
	li1.style.backgroundColor=' #F76C0E';
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
f_mid.addEventListener('mouseover',imgBx);
f_mid.addEventListener('mouseout',imgC);



/*点击切图*/

var m_left=document.getElementById('m_left');
var m_right=document.getElementById('m_right');


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
	m_left.style.cursor='pointer';
}
function momo2(){
	m_right.style.cursor='pointer';
}
function xian1(){
	m_left.style.display='block';
	m_right.style.display='block';

}
function xian2(){
	m_left.style.display='none';
	m_right.style.display='none';

}

m_left.addEventListener('click',qieTu1);
m_right.addEventListener('click',qieTu2);
m_left.addEventListener('mouseover',momo1);
m_right.addEventListener('mouseover',momo2);
f_mid.addEventListener('mouseover',xian1);
f_mid.addEventListener('mouseout',xian2);




