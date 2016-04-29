define(["jquery"],function($){
	function RE(){
		$(window).resize(function(){
			console.log($(window).width());
		});
	};
	function Math_add(a,b){
		return a+b;
	}
	return{
		RE:RE,
		Math_add:Math_add
	}
	  
});