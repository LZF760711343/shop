var shouye1 =document.getElementById('shouyi1');
var shouye2 =document.getElementById('shouyi2');
var shouye3 =document.getElementById('shouyi3');
var shouye4 =document.getElementById('shouyi4');



function shouyeshow(k){
	switch (k){
		case 1:
		shouye1.style.display='block';
			break;
		case 2:
		shouye2.style.display='block';
			break;
		case 3:
		shouye3.style.display='block';
			break;
		case 4:
		shouye4.style.display='block';
			break;
			
		default:
			break;
	}
};

function shouyetoshou(k){
	switch (k){
		case 1:
		shouye1.style.display='none';
			break;
		case 2:
		shouye2.style.display='none';
			break;
		case 3:
		shouye3.style.display='none';
			break;
		case 4:
		shouye4.style.display='none';
			break;
		default:
			break;
	}
	
};
