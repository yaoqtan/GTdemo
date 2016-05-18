(function() {

    var video = $("#video");
    var btn = $("#btn");
    var progress = $(".progress");
    var bufferBar = $(".bufferBar");
    var currentTime = $(".currentTime");
    var duration = $(".duration");
    var currentTime_time = $(".currentTime-time");
    var duration_time = $(".duration-time");
    var mute = $(".mute");
    var screen = $(".screen");
    var plug = $(".plug");
    var 
  COM = {
    init:function(){
      COM.play_pause();
      COM.mute();
      COM.screen();
      COM.timeFormat();
      duration_time.text(COM.timeFormat(video[0].currentTime));
      console.log(video[0].currentTime)
      duration_time.text(COM.timeFormat(video[0].duration));
      COM.time_update();
    },
      //是否播放
    play_pause:function(){
      btn.on("click",function(){
        if(video[0].paused){
          video[0].play();
          btn.html("暂停");
      }else{
          video[0].pause();
          //time.html("已经播放时间："+video.currentTime+"总播放时间："+video.duration)
          btn.html("播放");
      }
        video.on("ended",function(){
           btn.html("播放");
        });
      });
    },
    mute:function(){
      mute.on("click",function(){
        if(video[0].muted == true){
          video[0].muted = false;
          mute.html("静音/是")
        }else{
          video[0].muted = true;
          mute.html("静音/否")
        }
      });
    },
    screen:function(){
      screen.on("click",function(){
        if(plug.hasClass("hide")){
          video[0].className = "";
          plug.removeClass("hide");
        }else{
         
          plug.addClass("hide");
          video[0].className = "lage";
        }
      });
     /* screen.on('click', function() {
        if($.isFunction(video[0].webkitEnterFullscreen)) {
          video[0].webkitEnterFullscreen();
        } 
        else if ($.isFunction(video[0].mozRequestFullScreen)) {
          video[0].mozRequestFullScreen();
        }
        else {
          alert('Your browsers doesn\'t support fullscreen');
        }
      });*/
    },
    timeFormat:function(seconds){
      var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
      var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
      return m+":"+s;
    },
    time_update:function(){
      video.on('timeupdate', function() {
        var currentPos = video[0].currentTime;
        var maxduration = video[0].duration;
        var perc = 100 * currentPos / maxduration;
        currentTime.css('width',perc+'%');  
        currentTime_time.text(COM.timeFormat(currentPos)); 
    });
    }
    
  };

  $(function() {
    COM.init();

  });
}).call(this);



