


function showDiv(v) {	
	for(var i = 1; i <= 11; i++) {
		if(v == i) {
			document.getElementById('kli' + i).style.display = 'block';
			document.getElementById('bli' + i).style.backgroundColor='white';
			document.getElementById('bli' + i).style.color='coral';
		} else{
			document.getElementById('kli' + i).style.display = 'none';
			document.getElementById('bli' + i).style.color='black';
			document.getElementById('kli12').style.display = 'block';
		}
	}
}

function hideDiv(){    
     	for(var i=1;i<=11;i++){
			document.getElementById('kli'+i).style.display='none';
			document.getElementById('bli' + i).style.backgroundColor='#FFF8ED';
			document.getElementById('bli' + i).style.color='black';
		}
}




function showDiv2(v) {
	    for(var j = 1; j <= 11; j++) {
		    if(v == j) {
			document.getElementById('kli' + j).style.display = 'block';
			document.getElementById('bli' + j).style.backgroundColor='white';
			
			
		}
	}
}

function hideDiv2(v) {
			for(var i = 1; i <= 11; i++) {
				if(v == i) {
					document.getElementById('kli' + i).style.display = 'none';
					document.getElementById('bli' + i).style.backgroundColor='#FFF8ED';
				}else{
					document.getElementById('kli12').style.display = 'block';
				}
			}
}



