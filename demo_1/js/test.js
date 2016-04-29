/*function a(a,b,c){
	arguments[2] = 10;
	alert(c);
}
a(1,2,3)*/

/*function a(a,b,c){
	c = 10;
	alert(arguments[2]);
}
a(1,2,3)*/
window.onload = function(){
/*	var div = document.getElementById("div");
	var span = document.getElementById("span");
	span.onclick = function(){
		alert("span");
	}
	div.onclick = function(){
		alert("div");

	}*/
/*	span.addEventListener("click",function(){
		alert("span")
	},true);
	div.addEventListener("click",function(){
		alert("div")
	},true)
*/

 	var outer=document.getElementById("outer");  
      var inner=document.getElementById("inner");  
      var btn= document.getElementById("btn");  
/*      alert(outer);  
      alert(inner); 
      alert(btn);   */
        outer.onclick=function(){  
          alert("click outer");  
          this.style.color="red";  
        }  
        inner.onclick=function(){  
        	alert("click inner")
          this.style.color="blue";  
        }  
        btn.onclick=function(){  
        	alert("click button")
          this.style.color="yellow";  
        }  
}

setInterval(
	setTimeout(function(){
		console.log(1)
	},
	2000),1000);