window.user='18819352078';
window.password='123456';
window.youxiangzhi ='760711343@qq.com';

var yonghumingkuang = document.getElementById('spanyonghu');
var mimakuang = document.getElementById('spanmima');
var denglu = document.getElementById('denglu');
var yonghuming = document.getElementById('t1');
var mima = document.getElementById('m1');
var ma = document.getElementById('erweima');
var from = document.getElementById('formdenglu');
var daweima = document.getElementById('erweimafada');
var chongzhi = document.getElementById('chongzhi');
var dagougou = document.getElementById('dagougou');
var geshi =/^[1][358][0-9]{9}$/;
var zifu =/[\u4e00-\u9fa5]/;
var youxiang =/^[1-9]\d{4,10}@qq\.com$/


function dengluclick(){
      	//点登录按钮时同时把两个文本框恢复原来的白色
	yonghuming.style.backgroundColor='#FFFFFF';
	mima.style.backgroundColor='#FFFFFF';
	    //首先判断用户名框内是否有值并且清空密码框的值
	if(yonghuming.value == ''){
		yonghumingkuang.innerHTML = '用户名不得为空';
		mima.value='';
		dagougou.style.display='none';
		//先判断汉字，排出汉字的干扰
	}else if(yonghuming.value.match(zifu) != null){
		yonghumingkuang.innerHTML = '请用手机号或qq邮箱';
		yonghuming.value = '';
        mima.value='';
        dagougou.style.display='none';
        //这里判断手机和qq邮箱的格式问题，如果不对就报错
	}else  if(yonghuming.value.match(geshi) == null && yonghuming.value.match(youxiang) == null){
    	yonghumingkuang.innerHTML = '用户名格式有误';
        yonghuming.value = '';
        mima.value='';
        dagougou.style.display='none';
        //判断手机号和qq邮箱是否存在我的数据中
    }else if(yonghuming.value == user|| yonghuming.value == youxiangzhi){ 
   	    //alert(yonghuming.value,youxiangzhi);
   	    //判断密码是否为空
   	     if(mima.value == ''){
   	        mimakuang.innerHTML = '密码不得为空';
   	    //判断密码是否正确
    }else if(mima.value != password){
    		mimakuang.innerHTML = '密码有误';
    		mima.value = '';
    	//到这里的话就是手机号密码都正确或者qq邮箱都正确我们就可以实现页面的跳转了	
    }else{
   	  window.location.href='gouwuche.html';
         }
        //这里判断的是手机号或qq邮箱的格式是正确，不过我的数据没有这两个数据，就报错。
    }else if(yonghuming.value != user || yonghuming.value != youxiangzhi){
    	yonghumingkuang.innerHTML = '该用户名不存在';
        yonghuming.value = '';
        mima.value='';
        dagougou.style.display='none';
           }
    }
//点击用户名的text框的时候给个背景再把密码框的颜色恢复原始色并且清空全部内容
function yongclick(){
	dagougou.style.display='none';
	yonghuming.style.backgroundColor='#dddddd';
	mima.style.backgroundColor='#FFFFFF';
	yonghumingkuang.innerHTML='';
	yonghuming.value = '';
	mimakuang.innerHTML='';
	mima.value='';
}

//点击密码框时把用户名的文本框变回原始颜色并且密码框的颜色变回选中的颜色暗灰色 密码的提示框清空为后面的铺垫
function miclick(){
	  	//点密码框按钮时同时把用户名文本框恢复原来的白色
	yonghuming.style.backgroundColor='#FFFFFF';
	    //首先判断用户名框内是否有值
	if(yonghuming.value == ''){
		yonghumingkuang.innerHTML = '用户名不得为空';
		//先判断汉字，排出汉字的干扰
	}else if(yonghuming.value.match(zifu) != null){
		yonghumingkuang.innerHTML = '请用手机号或qq邮箱';
		yonghuming.value = '';
        //这里判断手机和qq邮箱的格式问题，如果不对就报错
	}else  if(yonghuming.value.match(geshi) == null && yonghuming.value.match(youxiang) == null){
    	yonghumingkuang.innerHTML = '用户名格式有误';
        yonghuming.value = '';
    }else{
    	dagougou.style.display='block';
    }
	
	yonghuming.style.backgroundColor='#FFFFFF';
	mima.style.backgroundColor='#dddddd';
	mimakuang.innerHTML='';
}

//移入小二维码的效果，首先把之前的表单隐藏起来，变个手出来，把放大的二维码显示出来，并且在移入小二维码的时候把表单的内容全部初始化
function mablick(){
	from.style.display='none';
	ma.style.cursor='pointer';
	daweima.style.display='block';
	yonghuming.value='';
	yonghumingkuang.innerHTML='';
	mima.value='';
	mimakuang.innerHTML='';
	dagougou.style.display='none';
}
//移出小二维码的时候恢复原状
function macblick(){
	yonghuming.style.backgroundColor='#FFFFFF';
	mima.style.backgroundColor='#FFFFFF';
	from.style.display='block';
	daweima.style.display='none';
}
//重置按钮点击 也是恢复原始表单的各个内容
function chongclick(){
	yonghuming.style.backgroundColor='#FFFFFF';
	mima.style.backgroundColor='#FFFFFF';
	yonghumingkuang.innerHTML='';
	mimakuang.innerHTML='';
	dagougou.style.display='none';
}
//创建各个按钮的监听事件
function viewinit(){
	denglu.addEventListener('click',dengluclick);
	yonghuming.addEventListener('click',yongclick);
	mima.addEventListener('click',miclick);
	ma.addEventListener('mouseover',mablick);
	ma.addEventListener('mouseout',macblick);
	chongzhi.addEventListener('click',chongclick);
}



function init(){
	viewinit();
};


init();


