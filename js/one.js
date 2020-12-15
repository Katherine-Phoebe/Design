//如果搜索框内为空，点击搜索按钮，则出现提示弹窗
search=document.getElementsByClassName("search")[0];
sub=document.getElementsByClassName("submit")[0];
sub.onclick=function(){
	if(search.value==""){
		alert("请输入搜索内容");
	}
}

//账号设置
div1=document.getElementsByClassName("form-info-one")[0];
myname=div1.children[1]

p1=document.createElement("p");

p1.style.fontFamily="fangsong";
p1.style.marginLeft='10px';

div1.appendChild(p1);


myname.onfocus=function show_one(){
	p1.innerHTML="账号至少9位"
}
myname.onblur=function show_two(){
	if(myname.value!=''){
		p1.innerHTML="";
	}
	else{
		p1.innerHTML='账户不能为空';
	}
}

//密码设置
div2=document.getElementsByClassName("form-info-two")[0];
pass=div2.children[1];

p2=document.createElement("p");

p2.style.marginLeft='10px';
p2.style.fontFamily="fangsong";

div2.appendChild(p2);

pass.onfocus=function show_three(){
	p2.innerHTML="长度至少为9位";
}
pass.onblur=function show_four(){
	if(myname.value!=''){
		p2.innerHTML="";
	}
	else{
		p2.innerHTML='密码不能为空';
	}
}

//转换背景颜色
change1=document.getElementById("bg_one");
change2=document.getElementById("bg_two");
flag=0;
butchange.onclick=function(){
	if(flag==0){
		change1.style.backgroundColor="lavenderblush";
		change2.style.backgroundColor="lavenderblush";
		flag=1;
	}else if(flag==1){
		change1.style.backgroundColor="lavender";
		change2.style.backgroundColor="lavender";
		flag=0;
	}
}

//轮播图
var box = document.getElementById('box');
var slider = document.getElementById('slider');
var index = 1;
var timer;

function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, null)[attr];
		}
	}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
	var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
		}, 30)
	}
setInterval(function(){
	index++;
	animate(slider,{left:-1000*index},function(){
		if(index==6){
			slider.style.left="-1000px";
			index=1;
		}
	});
}, 2000)
			
