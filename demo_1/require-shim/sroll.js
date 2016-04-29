define(['resize'],function(resize){
	function Sroll(){
		if(resize.Math_add(1,2)===3){
			var body = document.getElementsByTagName("body")[0]
		  	var p = document.createElement('p');
		 	var wrap = document.createElement("div");
		 	var box = document.createElement("div");
		 	body.appendChild(p);
		    body.appendChild(wrap);

		    wrap.className="wrap";
		    wrap.appendChild(box);
		    box.id = "top";
		    box.className = "top";
		    //var box = document.getElementById("top");
		    var top =box.getBoundingClientRect().top;//距离可视区域的高度
		    var he = document.documentElement.clientHeight;//可视区域高度
		    if(top<he){
		      box.className="top animation";
		    }
		    window.onscroll = function(){
		     top =box.getBoundingClientRect().top
		      if(top-he<0){
		       box.className="top animation";
		      }else{
		      	box.className="top";
		      }
			    
			}
		};
	}
	  
	return{
		sroll:Sroll
	}
	  
});