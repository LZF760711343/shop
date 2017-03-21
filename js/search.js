
var searchTxt = document.getElementById('search_text');
var searchBtn = document.getElementById('searchGO');
var searchArea = ['婚纱','电脑','服装']
function searchTag(){
	if(searchTxt.value==searchArea[0]){
		window.open('sousuo.html');
	}
	if(searchTxt.value==searchArea[1] || searchTxt.value==searchArea[2]){
		window.open('fuzhuang.html');
	}
	if(searchTxt.value==''){
		alert('输入热门词‘婚纱’，‘电脑’，‘服装’');
	}
};
function bbtn(){
	searchBtn.style.cursor='pointer';
}
searchBtn.addEventListener('click',searchTag);
searchBtn.addEventListener('mouseover',bbtn);