function initMap(){
  var myCenter = new google.maps.LatLng(23.117,113.27);
  var json =[
      {
          "address":{
              "lat":23.117,
              "lng":113.227
          },
          "imgurl":"http://127.0.0.1/Link/Link_Revamp_doc/Weblmages/20160516/20160516/inner_page/ico_map_nearest_shopping_center.png",
          
      },
      {
          "address":{
              "lat":23.117,
              "lng":113.27
          },
          "imgurl":"http://127.0.0.1/Link/Link_Revamp_doc/Weblmages/20160516/20160516/inner_page/ico_map_shopping_center.png",
      },
      {
          "address":{
              "lat":23.127,
              "lng":113.27
          },
          "imgurl":"http://127.0.0.1/Link/Link_Revamp_doc/Weblmages/20160516/20160516/inner_page/ico_legend_car_park.png",
      },
      {
          "address":{
              "lat":23.127,
              "lng":113.187
          },
          "imgurl":"http://127.0.0.1/Link/Link_Revamp_doc/Weblmages/20160516/20160516/inner_page/ico_map_nearest_carpark.png",
      }
  ];
  var mapProp = {
    center:json[0].address,
    zoom:14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
/*  disableDoubleClickZoom:true,
    mapTypeControl:true,
    apMaker:true,
    disableDefaultUI:true,*/
    //draggable:false,
    };
    var map=new google.maps.Map(document.getElementById("visit-map")
      ,mapProp);


  for(i=0;i<json.length;i++){
      
      
  }
  $.each(json,function(i){
      var marker = [];
         marker[i] = new google.maps.Marker({
          position:json[i].address,
          map:map,
          icon:json[1].imgurl,
      });
      var latLng = json[i].address;
      var imgsrc = json[i].imgurl;
       var myOptions = {
         content: "<div id = 'visit-map-content'><div class = 'visit-map-img'><img src='"+imgsrc+"'></div><div class = 'visit-map-into'><a href = 'javascript:void(0);' class = 'visit-map-icon'><img src='http://127.0.0.1/Link/Link_Revamp_doc/Weblmages/20160516/20160516/inner_page/btn_mall_detail_more.png'></a><h3>Address</h3><p>Recommendation Bar content depends on</p></div></div>",
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-300, -300),
        zIndex: null,
        boxStyle: { 
          width: "270px"
         },
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
      };  
      var ib = new InfoBox(myOptions);
      markerListener(latLng,marker[i],ib);
  })
  function markerListener(latLng,marker,ib){
          google.maps.event.addListener(marker, "click", function (e) {
              map.setCenter(latLng);
              if($("#visit-map-content").html()){
                  $("#visit-map-content").remove();
              }
              this.setIcon("http://127.0.0.1/Link/Link_Revamp_doc/Weblmages/20160516/20160516/inner_page/ico_map_nearest_shopping_center.png");
              ib.open(map, this);
     
      });
      map.addListener('click',function(){
          ib.open(null);
          marker.setIcon("http://127.0.0.1/Link/Link_Revamp_doc/Weblmages/20160516/20160516/inner_page/btn_mall_detail_more.png")
      });
}