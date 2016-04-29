function checkstoragesupports(){
	if(window.localStorage){
		alert("浏览器支持localStorage");
	}else{
		alert("浏览器不支持localStorage");
	}
	if(window.sessionStorage){
		alert("浏览器支持sessionStorage")
	}else{
		alert("浏览器不支持sessionStorage");
	}
}
/*checkstoragesupports();*/