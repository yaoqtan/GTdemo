$("html").css("fontSize",$(window).width()/160*7+"px");
$(window).resize(function(){$("html").css("fontSize",$(window).width()/160*7+"px");});  

window.onload = function function_name () {
    $(".loading").fadeOut("400");
    $(".touxiang").attr("style","-webkit-animation: bounceinT 1s linear 0s both;animation: bounceinT 1s linear 0s; both;opacity: 1;");
    
    $(".line").attr("style","-webkit-animation:bounceinL 1s ease 0s both;animation:bounceinL 1s ease 0s both;opacity: 1;");
    $(".zhiye").attr("style","-webkit-animation: bounceinL 1s linear .5s both;animation: bounceinL 1s linear .5s; both;opacity: 1;");
    var sHeight = $(window).height();
    var sWidth = $(window).width();
    if(sWidth >= 480){
         $('#homeSwipe').css({width: 480 + 'px', height: sHeight + 'px'});
        $('.swiper-slide').css({width: 480 + 'px', height: sHeight + 'px'});
    }else{
         $('#homeSwipe').css({width: sWidth + 'px', height: sHeight + 'px'});
        $('.swiper-slide').css({width: sWidth + 'px', height: sHeight + 'px'});
    }
   

    var zuoyou = true; //手势状态

    var homeSwiper = new Swiper('#homeSwipe', {
        pagination: '.pagination',
        paginationClickable: true,  
        mode: 'vertical',
        loop:true,
        speed:0,
        
        onSlideChangeStart:function(swiper){  
            $(".fangkuai,.line_s,.shijianzhou_txt,.shijianzhou2_txt,.p3_con,.meirong,.meirong1,.fu_title,.fu_title1,.two1,.two2,,.two3,.two4,.two5,.two6,.two7,.p5_con1,.p5_con2,.p5_con3,.p5_con4,.bwzq,.zqyx,.p9_con,.thank,.thank1,.thank2,.thank3,.touxiang,.jianli,.xingming,.zhiye,.line,.Ttime,.Ttime1,.liucheng,.thanks").attr("style","");
            $(".fangkuai,.line_s,.shijianzhou_txt,.shijianzhou2_txt,.p3_con,.meirong,.meirong1,.fu_title,.fu_title1,.two1,.two2,,.two3,.two4,.two5,.two6,.two7,.p5_con1,.p5_con2,.p5_con3,.p5_con4,.bwzq,.zqyx,.p9_con,.thank,.thank1,.thank2,.thank3,.touxiang,.jianli,.xingming,.zhiye,.line,.liucheng,.thanks").removeClass("zoomIn animated ");
              $(".Ttime").removeClass("animated fadeInRight");
              $(".liucheng").removeClass("fadeInDown animated");
              $(".p9_con").removeClass("fadeInUp animated");
               if(homeSwiper.activeIndex==0){
               $(".thank2").attr("style","-webkit-animation:zoomIn 1s ease 0s 1 both;animation:zoomIn 1s ease 0s 1 both;opacity: 1;");
               $(".thank3").attr("style","-webkit-animation:zoomIn 1s ease 0s 1 both;animation:zoomIn 1s ease 0s 1 both;opacity: 1;");
            }
               
            if (homeSwiper.activeIndex==1) {
                $(".touxiang").attr("style","-webkit-animation:fadeIn 2s ease 0s 1 both;animation:fadeIn 2s ease 0s 1 both;opacity: 1;");
               
                $(".zhiye").attr("style","-webkit-animation:fadeIn 2s ease 0s 1 both;animation:fadeIn 2s ease 0s 1 both;opacity: 1;");
               
            } 
            if(homeSwiper.activeIndex==2){   
               
            
                  $(".p3_con").attr("style","-webkit-animation:fadeIn 2s ease 0s 1 both;animation:fadeIn 2s ease 0s 1 both;opacity: 1;");
                   $(".xingming").attr("style","-webkit-animation:fadeIn 2s ease 0s 1 both;animation:fadeIn 2s ease 0s 1 both;opacity: 1;");
            }
            if(homeSwiper.activeIndex==3){ 
                  $(".thanks").addClass("zoomIn animated");

             }
            if(homeSwiper.activeIndex==4){  
                
               $(".Ttime").addClass("fadeInRight animated");
               $(".Ttime1").attr("style","-webkit-animation:fadeInLeft 1s ease 0s 1 both;animation:fadeInLeft 1s ease 0s 1 both;opacity: 1;");

               $(".p9_con").addClass("fadeInUp animated");
            }   
            if(homeSwiper.activeIndex==5){  
                $(".liucheng").addClass("fadeInDown animated");;  
            }
            if(homeSwiper.activeIndex==6){
               $(".meirong").addClass("zoomIn animated");
                $(".fu_title").addClass("zoomIn animated");
                $(".two1").addClass("zoomIn animated");
            }
            if(homeSwiper.activeIndex==7){
                $(".meirong1").attr("style","-webkit-animation:zoomIn 1s ease 0s 1 both;animation:zoomIn 1s ease 0s 1 both;opacity: 1;");
                $(".fu_title1").attr("style","-webkit-animation:zoomIn 1s ease 0s 1 both;animation:zoomIn 1s ease 0s 1 both;opacity: 1;");
                $(".two2").attr("style","-webkit-animation:zoomIn 1s ease 0s 1 both;animation:zoomIn 1s ease 0s 1 both;opacity: 1;");
            }
            if(homeSwiper.activeIndex==8){
                $(".thank").attr("style","-webkit-animation:zoomIn 1s ease 0s 1 both;animation:zoomIn 1s ease 0s 1 both;opacity: 1;");
                $(".thank1").attr("style","-webkit-animation:zoomIn 1s ease 0s 1 both;animation:zoomIn 1s ease 0s 1 both;opacity: 1;");
            }
            if(homeSwiper.activeIndex==9){
               $(".thank2").attr("style","-webkit-animation:zoomIn 1s ease 0s 1 both;animation:zoomIn 1s ease 0s 1 both;opacity: 1;");
               $(".thank3").attr("style","-webkit-animation:zoomIn 1s ease 0s 1 both;animation:zoomIn 1s ease 0s 1 both;opacity: 1;");
            }
             if (homeSwiper.activeIndex==10) {
                $(".touxiang").attr("style","-webkit-animation:fadeIn 2s ease 0s 1 both;animation:fadeIn 2s ease 0s 1 both;opacity: 1;");
               
                $(".zhiye").attr("style","-webkit-animation:fadeIn 2s ease 0s 1 both;animation:fadeIn 2s ease 0s 1 both;opacity: 1;");
               
            } 
           
        }
    });
    var swiperNested1 = new Swiper('.swiper-nested-1',{
        mode: 'horizontal',
        pagination: '',
        autoplay:'3000'
    });
     $('.arrow-left1').on('click', function(e){
        e.preventDefault();
        swiperNested1.swipePrev();
    });
      $('.arrow-right1').on('click', function(e){
        e.preventDefault();
        swiperNested1.swipeNext();
    });

    var swiperNested2 = new Swiper('.swiper-nested-2',{
        mode: 'horizontal',
        pagination: '',
        autoplay:'3000'
    });
    $('.arrow-left2').on('click', function(e){
        e.preventDefault();
        swiperNested2.swipePrev();
    });
      $('.arrow-right2').on('click', function(e){
        e.preventDefault();
        swiperNested2.swipeNext();
    });

    var swiperNested3 = new Swiper('.swiper-nested-3',{
        mode: 'horizontal',
        pagination: '',
        autoplay:'3000'
    });
    $('.arrow-left3').on('click', function(e){
        e.preventDefault();
        swiperNested3.swipePrev();
    });
      $('.arrow-right3').on('click', function(e){
        e.preventDefault();
        swiperNested3.swipeNext();
    });
    var swiperNested4 = new Swiper('.swiper-nested-4',{
        mode: 'horizontal',
        pagination: '',
        autoplay:'3000'
    });
    $('.arrow-left4').on('click', function(e){
        e.preventDefault();
        swiperNested4.swipePrev();
    });
      $('.arrow-right4').on('click', function(e){
        e.preventDefault();
        swiperNested4.swipeNext();
    });
    var swiperNested5 = new Swiper('.swiper-nested-5',{
        mode: 'horizontal',
        pagination: '',
        autoplay:'3000'
    });
    $('.arrow-left5').on('click', function(e){
        e.preventDefault();
        swiperNested5.swipePrev();
    });
      $('.arrow-right5').on('click', function(e){
        e.preventDefault();
        swiperNested5.swipeNext();
    });
    var swiperNested6 = new Swiper('.swiper-nested-6',{
        mode: 'horizontal',
        pagination: '',
        autoplay:'3000'
    });
    $('.arrow-left6').on('click', function(e){
        e.preventDefault();
        swiperNested6.swipePrev();
    });
      $('.arrow-right6').on('click', function(e){
        e.preventDefault();
        swiperNested6.swipeNext();
    });
    var swiperNested7 = new Swiper('.swiper-nested-7',{
        mode: 'horizontal',
        pagination: '',
        autoplay:'3000'
    });
    $('.arrow-left7').on('click', function(e){
        e.preventDefault();
        swiperNested7.swipePrev();
    });
      $('.arrow-right7').on('click', function(e){
        e.preventDefault();
        swiperNested7.swipeNext();
    });
}