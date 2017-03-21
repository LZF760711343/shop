
var img1=document.getElementById('imgimg1');
var img2=document.getElementById('imgimg2');
var img3=document.getElementById('imgimg3');
var img4=document.getElementById('imgimg4');
var img5=document.getElementById('imgimg5');
var datuhuang=document.getElementById('datuhuang');
var spanjian=document.getElementById('spanjian');
var spanshuzi=document.getElementById('spanshuzi');
var spanjia=document.getElementById('spanjia');


function xiaotuji(k){
	switch (k){
		    case 1:
		img1.style.border='2px solid #F44D4D';
		datuhuang.src=img1.src;
		img2.style.border='2px solid white';
		img3.style.border='2px solid white';
		img4.style.border='2px solid white';
		img5.style.border='2px solid white';
			break;
			case 2:
		img2.style.border='2px solid #F44D4D';
		datuhuang.src=img2.src;
		img1.style.border='2px solid white';
		img3.style.border='2px solid white';
		img4.style.border='2px solid white';
		img5.style.border='2px solid white';
			break;
			case 3:
		img3.style.border='2px solid #F44D4D';
		datuhuang.src=img3.src;
		img2.style.border='2px solid white';
		img1.style.border='2px solid white';
		img4.style.border='2px solid white';
		img5.style.border='2px solid white';
			break;
			case 4:
		img4.style.border='2px solid #F44D4D';
		datuhuang.src=img4.src;
		img2.style.border='2px solid white';
		img3.style.border='2px solid white';
		img1.style.border='2px solid white';
		img5.style.border='2px solid white';
			break;
			case 5:
		img5.style.border='2px solid #F44D4D';
		datuhuang.src=img5.src;
		img2.style.border='2px solid white';
		img3.style.border='2px solid white';
		img4.style.border='2px solid white';
		img1.style.border='2px solid white';
			break;
		default:
			break;
	}
};

function xiaotuli(k){
	switch (k){
		    case 1:
		img1.style.border='2px solid white';
			break;
			case 2:
		img2.style.border='2px solid white';
			break;
			case 3:
		img3.style.border='2px solid white';
			break;
			case 4:
		img4.style.border='2px solid white';
			break;
			case 5:
		img5.style.border='2px solid white';
			break;
		default:
			break;
	}
};


function spanjianblick(){
	if(spanshuzi.innerHTML == 1){
		spanshuzi.innerHTML = 1;
	}else{
	spanshuzi.innerHTML--;
	};
};

function spanjiaclick(){
	if(spanshuzi.innerHTML == 86){
		spanshuzi.innerHTML = 86;
	}else{
	
	spanshuzi.innerHTML++;
	};
};
function viewinit(){
	spanjian.addEventListener('click',spanjianblick);
	spanjia.addEventListener('click',spanjiaclick);
};



function init(){
	viewinit();
};




init();