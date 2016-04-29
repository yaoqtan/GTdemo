$(function(){


//轮播初始化
$(".banner img").css("display","none");
$(".banner img").eq(0).css("display","block");
$(".banner ul li").eq(0).css("color","red")
$(".banner strong").html($(".banner img").eq(0).attr("alt"));
/*alert($(".banner img").eq(0).first().attr("alt"))*/

//轮播器计数器
var banner_index=0;

//自动轮播 

var banner_timer = setInterval(banner_fn,3000);

//手动轮播
$(".banner ul li").each(function(i){
$(this).hover(function(){
		clearInterval(banner_timer);
		$(".banner img").css("display","none");
		$(".banner img").eq(i).css("display","block");
		$(".banner ul li").css("color","#999");
		$(".banner ul li").eq(i).css("color","red");
		$(".banner strong").html($(".banner img").eq(i).attr("alt"));
	},function(){
		banner_index = i+1;
		banner_timer = setInterval(banner_fn,1000);
	});
});

function banner(){
	    $(".banner img").css("display","none");
		$(".banner img").eq(banner_index).css("display","block");
		$(".banner ul li").css("color","#999");
		$(".banner ul li").eq(banner_index).css("color","red");
		$(".banner strong").html($(".banner img").eq(banner_index).attr("alt"));
}
function banner_fn(){
	if(banner_index >= $(".banner ul li").length) banner_index=0;
		banner();
		banner_index++;
}


});