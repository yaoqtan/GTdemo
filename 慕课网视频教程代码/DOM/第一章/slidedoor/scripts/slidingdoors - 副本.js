window.onload = function(){
	//容器对象
	var box = document.getElementById("container");

	//获得图片NodeList对象集合
	var imgs = box.getElementsByTagName("img");

	//单张图片的宽度
	var imgWidth = img[0].offsetWidth;

	//设置掩藏们的宽度
	var exposeWidth = 160;

	//设置容器总宽度
	var boxWdith = imgWidth + (imgs.length - 1) * exposeWidth;

	box.style.width = boxWdith +"px";
	//设置每道们的初始位置
	function setImgsPos(){
		for(var i = 1, len = imgs.length; i<len; i++){
			imgs[i].style.left = imgWidth + exposeWidth * (i -1) + "px";
		}	
	}
	setImgsPos()

	//计算每道门打开时应移动的距离
	var translate = imgWidth - exposeWidth;

	//为每道们绑定事件
	for(var i = 0,len = imgs.length;i<len;i++){
		//使用立即调用的函数表达式,为了获得不同的i值
		(function(i){
			imgs[i].onmouseover = function(){
				//先将复位每道们
				setImgsPos();
				//打开门
				for(var j = 1;j<=i;j++){
					imgs[j].style.left = parseInt(imgs[j].style.left,10)-translate +"px";
				}
			}
		})(i)
	}
};