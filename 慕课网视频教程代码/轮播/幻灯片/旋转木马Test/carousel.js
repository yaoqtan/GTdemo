;(function($){
	var Carousel = function(poster){
		/*alert(poster.attr("data-setting"));*/
		//保存单个旋转木马对象
		this.poster = poster;
		this.posterItemMain = poster.find("ul.poster-list");
		this.nextBtn = poster.find("div.poster-next-btn");
		this.prevBtn = poster.find("div.poster-prev-btn");
		this.posterFirstItem = poster.find("li").eq(0);
		this.posterItems = poster.find("li.poster-item");
		//默认配置参数
		this.setting={
			
            "height":1000,//幻灯片高度
            "width":270,//幻灯片宽度
            "posterWidth":640,//幻灯片第一帧宽度
            "posterHeight":270,//幻灯片第一帧高度
            "scale":0.9,//记录比例关系
            "speed":500,
            "verticalAlign":"middle",
		};
		$.extend(this.setting,this.getSetting());
		this.setSettingValue();
		this.setPosterPos();

	};

	 Carousel.prototype = {
	 	//设置剩余的帧的位置关系
	 	setPosterPos:function(){
	 		var sliceItems = this.posterItems.slice(1);
	 		var sliceSize = sliceItems.size()/2;
	 		var rightSlice=sliceItems.slice(0,sliceSize);
	 		var level = Math.floor(this.posterItems.size()/2);
	 		/*alert(rightSlice.size())*/
	 		alert(level)

	 		//设置右边帧位置关系和宽度高度top

	 		var rw = this.setting.posterWidth,
	 			rh = this.setting.posterHeight,
	 			gap = ((this.setting.width-this.setting.posterWidth)/2)/level;
	 		rightSlice.each(function(){
	 			level--;
	 			rw = rw*this.setting.scale;
	 			rh = rh*this.setting.scale;
	 			$(this).css({
	 				zIndex:level,
	 				width:rw,
	 				height:rh,
	 				opacity:1/(++i),
	 			/*	width:ww,
	 				height:hh,
	 				opacity:oo,
	 				left:ll,
	 				top:tt*/
	 			});
	 		})



	 	},

	 	//设置配置参数值去控制基本的宽度高度
	 		setSettingValue:function(){
	 			this.poster.css({
	 				width:this.setting.width,
	 				height:this.setting.height,
	 			})
	 			this.posterItemMain.css({
	 				width:this.setting.width,
	 				height:this.setting.height,
	 			})
	 			//计算上下切换按钮的宽度
	 			var w = (this.setting.width-this.setting.posterWidth)/2;
	 			this.nextBtn.css({
	 				width:w,
	 				height:this.setting.height,
	 				zIndex:Math.ceil(this.posterItems.size()/2),
	 			})
	 			this.prevBtn.css({
	 				width:w,	
	 				height:this.setting.height,
	 				zIndex:Math.ceil(this.posterItems.size()/2),
	 			});
	 			this.posterFirstItem.css({
	 				width:this.setting.posterWidth,
	 				left:w,
	 				zIndex:Math.ceil(this.posterItems.size()/2),
	 			})

	 		},

	 	//获取人工配置参数
	 	getSetting:function(){
	 		
	 		var setting = this.poster.attr("data-setting");
	 		if(setting&&setting!=""){
	 			return $.parseJSON(setting);
	 		}else{
	 			return {};
	 		};
	 	}
	 };

	Carousel.init = function(posters){
		var _this_ = this;
		posters.each(function(){
			new _this_($(this));
		}); 
	};
	window['Carousel'] = Carousel;
})(jQuery);