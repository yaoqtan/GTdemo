require.config({
	paths:{
		jquery: 'jquery-1.11.3.min'
	}
});
require(['jquery','sroll','resize'],function($,sroll,resize){
	sroll.sroll();
	resize.RE();
	
});

/*require(['jquery','resize'],function($,resize){
	
	resize.Re();
});*/

//依赖math.js模块
/*require(['math'],function(math){
	alert(math.add(1,1));
});*/


/*	  var box = document.getElementById("top");
	  var top =box.getBoundingClientRect().top;//距离可视区域的高度
	  var he = document.documentElement.clientHeight;//可视区域高度
	  
	  if(top<he){
	      box.className="top animation";
	  }
	  window.onscroll = function(){
	    top =box.getBoundingClientRect().top
	     if(top-he<0){
	      box.className="top animation";
	      console.log(top-he)
	  }
	    
	  }
*/