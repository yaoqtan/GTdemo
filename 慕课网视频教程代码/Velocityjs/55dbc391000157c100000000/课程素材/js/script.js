(function($){
/*	$("#box1").velocity({
		width:'300px',
		height:"300px"
	},3000);
	$("#box2").velocity({
		width:'300px',
		height:"300px"
	},{
		duration:3000,
		delay:3000
	});*/

/*	$("#box1").velocity({
		width:'300px',
		height:"300px"
	},{
		duration:1000,
		complate:function(){
			$("#box2").velocity({
				width:'300px',
				height:"300px"
			},{
				duration:3000,
			});
		}
	});
*/
/*	var seq = [
	{
		elements:$("#box1"),
		properties:{width:"300px"},
		options:{duration:1000}
	},{
		elements:$("#box2"),
		properties:{width:"300px"},
		opt4ions:{duration:1000}
	}
	];
	$.Velocity.RunSequence(seq);*/

	/*$("#box1").on("mouseover",function(){
		$(this).velocity("callout.shake");
	});
	$.Velocity.RegisterEffect('lixin.pulse',{//RegisterEUI
		defaultDuration:300,
		calls:[
			[{scaleX:5.1},0.5],
			[{scaleX:0.5},0.5],
			[{scaleX:1.0},0.5]
		]
	});
	$("#box2").on("mouseover",function(){
		$(this).velocity("lixin.pulse");
	});*/



	//定义变量(动画元素,事件变量)
	var container = $(".container");
	var box = $(".box");
	var buddy = $(".buddy");
	var pop = $(".pop");
	var open = $(".btn");
	var close = $(".close");
	var imgs = pop.find("img");

	//自定义动画
	$.Velocity.RegisterUI("lixin.slideUpIn",{
		defaultDuration:500,
		calls:[
			[{opacity:[1,0],translateY:[0,100]}]
		]
	});

	$.Velocity.RegisterUI("lixin.slideDownOut",{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],translateY:[100,0]}]
		]
	});

	$.Velocity.RegisterUI("lixin.scaleIn",{
		defaultDuration:300,
		calls:[
			[{opacity:[1,0],scale:[1,0.3]}]
		]
	});
	$.Velocity.RegisterUI("lixin.scaleOut",{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],scale:[0.3,0]}]
		]
	});

	//动画序列
	var seqInit = [{
		elements:container,
		properties:'lixin.slideUpIn',
		options:{
			delay:300
		}
	},{
		elements:box,
		properties:'lixin.slideUpIn',
		options:{
			sequenceQueue:false
		}
	},{
		elements:buddy,
		properties:'lixin.slideUpIn',
		options:{
			delay:60,
			sequenceQueue:false
		}

	}];

	var seqClick = [{
		elements:container,
		properties:'lixin.slideDownOut',
	},{
		elements:box,
		properties:'lixin.slideDownOut',
		options:{
			sequenceQueue:false
		}
	},{
		elements:container,
		properties:'lixin.slideUpIn',	
	},{
		elements:pop,
		properties:'lixin.slideUpIn',
		options:{
			sequenceQueue:false
		}
	},{
		elements:imgs,
		properties:'lixin.scaleIn',	
	}
	];

	var seqClose = [
	{
		elements:imgs,
		properties:'lixin.scaleOut',	
	},{
		elements:container,
		properties:'lixin.slideDownOut',
		options:{
			sequenceQueue:false
		}
	},{
		elements:pop,
		properties:'lixin.slideDownOut',
		options:{
			sequenceQueue:false
		}
	},{
		elements:container,
		properties:'lixin.slideUpIn',	
	},{
		elements:box,
		properties:'lixin.slideUpIn',
		options:{
			sequenceQueue:false
		}
	}
	];
	//事件绑定
	$.Velocity.RunSequence(seqInit)
	open.on("click",function(){
		$.Velocity.RunSequence(seqClick);
	})
	close.on("click",function(){
		$.Velocity.RunSequence(seqClose);
	})
})(jQuery);
