$(function(){
	mouse();
});

function mouse(){
	$(".widget-selectbox").mouseover(function(){
		$(this).find(".widget-selectbox-content").show();
	})
}