(function() {
  var COM;
  var URL = "pru.json";
  COM = {

    css_into:function(){
      $("body, ul, li, div, p, h1, table, th, tr, td, h4").css({
        "margin":0,
        "padding":0,
        "border":0
      });
      $("ul,li").css({
        "listStyle":"none",
        "textAlign":"center"
      })

     //wrap-time
     $(".wrap-time").css({
      "width":"15%",
      "display":"inline",
      "float":"left"
     });
     //#wrapper
     $("#wrapper").css({
      "position":"relative",
      "overflow":"hidden",
      "width":"84%",
      "float":"left",
      "display":"inline"
     });
     //#scroller
     $("#scroller").css({
      "width":"100%",
      "height":"100%",
      "overflow":"scroll"
     });
     //table
     $("#scroller table").css({
      "borderRight":"1px solid #ccc",
      "borderBottom":"1px solid #ccc",
      "width":"1050px"
     });
     $("#scroller tr").css("height","50px")
     $("#scroller th,#scroller td").css({
      "borderLeft":"1px solid #ccc",
      "borderTop":"1px solid #ccc",
      "width":"150px",

     });
     $("#scroller th").css("height","50px");
     $("#scroller th div").css({"fontSize":"20px","lineHeight":"100%","textAlign":"center"});
     $("#scroller th p").css({"fontSize":"16px","lineHeight":"100%","textAlign":"center"});
     $("#scroller td div").css({
      "minHeight":"60px",
     });
     $("#scroller td div").css({
        "minHeight":"60px",
        "margin":"1px 2px",
        "padding":"5px 0 5px 5px",
        "boxSizing":"border-box",
        "color":"#fff",
        "border":"1px soild #fff",
        "borderRadius":"5px",
        "lineHeight":"1",
        /*"background":color,*/
      });
     $("#scroller td span").css({
      "display":"inline-block",
      "background":"#fff",
      //"color":"#4298ba",
      "padding":"2px",
      "fontSize":"14px",
      "margin":"1px"
     });
     $("#scroller table tr").each(function(i){
        var trheight = $(this).height();
       $(".wrap-time").find("li").eq(i).css({
        "minHeight":"50px",
        "height":trheight,
        "lineHeight":"0px",
        "textAlign":" center"
       })
      
     });
     var tableheight = $("#scroller table").height();
     var ulheight = $(".wrap-time").height();
     if(ulheight > tableheight ){
        tableheight = ulheight;
     }
     $(".wrap").css({
      "width":"100%",
      "height":tableheight,
      //"overflowX":"hidden"
     });
    },
    Table_form:function(){
      var $ul = $(".wrap").find("ul");
      var $table = $(".wrap").find("table");
      $.ajax({
        url:URL,
        type:"GET",
        dataType:"json",
        success:COM.Table_success,
        error:function(){
          console.log("error")
        }
      });
      COM.css_into();
    },
    Table_success:function(data){
         var data = eval(data);
         var dataText = data.workingList
         var dataworking = dataText.working
         //var worklength = dataworking.length;

         //COM.Made_form(dataworking[0].startDateTime,dataworking[0].clientName,worklength)
         $.each(dataworking,function(index){
            var interview = dataworking[index].interviewNatures.interviewNature;
            var spanview = "";
            $.each(interview,function(j){
              spanview+="<span style = 'color:"+dataworking[index].interviewType.name+"'>"+interview[j].name+"</span>";
              
            });
            COM.Made_form(dataworking[index].startDateTime,dataworking[index].endDateTime,dataworking[index].clientName,spanview,dataworking[index].interviewType.name)
            //console.log(spanview)
            //console.log(dataworking[index].clientName)
            //console.log(dataworking[index].interviewType.name)
            //console.log(COM.DateTime(dataworking[index].startDateTime))
         });
         console.log("success")
    },
    Made_form:function(time,endtime,clientName,natureName,color){
      //var tr = "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"
      var clientName = clientName;
      var natureName = natureName;
      var color = color;
      var endHour = new Date(endtime).getHours()
      var datetime = time;
      var startHour = new Date(datetime).getHours();
      console.log(startHour);
      var weekday = (new Date(datetime).getDay())-1;
      //th时间星期
      COM.initDate(datetime);
      //时间表格
      var startTime = COM.inithour(startHour);
      var endTime = COM.end_hour(endHour);
      var numTime = endTime - startTime;
      console.log("startTime:"+startTime+" endTime:"+endTime);
      if(startTime == endTime){
        COM.set_table(startTime,weekday,clientName,natureName,color/*,numTime*/);
      }else{
        
        for(var i = 0;i<=numTime;i++){
          COM.set_table((startTime+i),weekday,clientName,natureName,color/*,numTime*/);
        }
      }
      
    },
    set_table:function(startTime,weekday,clientName,natureName,color/*,numTime*/){
      var tddiv =  $("#scroller table").find("tr").eq(startTime).find("td").eq(weekday);

          tddiv.append("<div style = 'background:"+color+"'><h4>"+clientName+"</h4>"+natureName+"</div>");
          tddiv.find("div").css({
            "minHeight":"60px",
            "margin":"1px 2px",
            "padding":"5px 0 5px 5px",
            "boxSizing":"border-box",
            "color":"#fff",
            "border":"1px soild #fff",
            "borderRadius":"5px",
            "lineHeight":"1",
            /*"background":color,*/
          });
          tddiv.find("h4").css({
            "margin":"3px 0",
            "padding":0      
          });

           tddiv.find("span").css({
            "display":"inline-block",
            "background":"#fff",
            /*"color":color,*/
            "padding":"2px",
            "fontSize":"14px",
            "margin":"1px"     
          });
          /*if(numTime){
             tddiv.find("span").css({
              "color":"red"
             })
          }*/
          $("#scroller table tr").each(function(i){
            var trheight = $(this).height();
           $(".wrap-time").find("li").eq(i).css({
            "minHeight":"50px",
            "height":trheight,
            "lineHeight":"0px",
            "textAlign":" center"
           });
          });
          var tableheight = $("#scroller table").height();
          var ulheight = $(".wrap-time").height();
          if(ulheight > tableheight ){
              tableheight = ulheight;
          }
          $(".wrap").css({
            "width":"100%",
            "height":tableheight,
            //"overflowX":"hidden"
          });
    },
    inithour:function(starthour){
      //var endtime = endhour;
      var time = 1;
      if(starthour<12){
        time = 1;
      }else if(starthour<14){
        time = 2;
      }else if(starthour<17){
        time = 3;
      }else if(starthour<19){
        time = 4;
      }else{
        time = 5;
      }
      return time;
    },//时间time 00:00
    end_hour:function(endhour){
      var time = 1;
      if(endhour<=12){
        time = 1;
      }else if(endhour<=14){
        time = 2;
      }else if(endhour<=17){
        time = 3;
      }else if(endhour<=19){
        time = 4;
      }else{
        time = 5;
      }
      return time;
    },
    initDate:function(date){
        var date = date;
        var aryDay = new Array("日","一","二","三","四","五","六");
        var currDT = new Date(date);

        var dw = currDT.getDay();//从Date对象返回一周中的某一天(0~6)
        var tdDT;//日期  

        //在表格中显示一周的日期  
        for(var i=0;i<7;i++) {
          tdDT = COM.getDays(date)[i];
          //console.log("tdDt:"+tdDT);
          dw = tdDT.getDay();
          //星期几
          $("th").eq(i).find("div").html(tdDT.getDate());
          $("th").eq(i).find("p").html(aryDay[dw])
        } 
      },//日期

    getDays:function(date){
      var date = date;
      var days = new Array();
      for(var i=1;i<=7;i++) {
        days[i-1] = COM.getWeek(i,date);
        //console.log(days[i-1])
      }
      return days;
    },   
    getWeek:function(i,date){
      var now = new Date(date);
      var n = now.getDay();
      var start = new Date(date);
      start.setDate(now.getDate() - n + i);//取得一周内的第一天、第二天、第三天...
      return start;
    }

  };


  $(function() {
    COM.Table_form();
  });
}).call(this);

window.onload=function(){
  var html = $("#wrap").html();
  console.log(html)
}

