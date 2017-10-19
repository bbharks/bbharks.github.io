<html>
    <head>
<div>
  <div id="map" style="width: 400px; height: 400px;"></div>

<script src="https://maps.google.com/maps/api/js?key=AIzaSyC0kJP6PVDMSHhpbR0D92YEYaKckhubSVM"></script>
</div>

</head>
<body>
    <script>

    var locations = [
      [
          "SUB: 48.4650, -123.3082",
          48.4650, -123.3082
      ],
      [
          "David Turpin: 48.4648, -123.3146",
          48.4648, -123.3146
      ],
      [
          "Cornett: 48.4643, -123.3130",
          48.4643, -123.3130
      ]
  ]
  
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(48.463649,  -123.311951),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
  
      var infowindow = new google.maps.InfoWindow();
  
      var marker, i;
  
      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });
  
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]+"  "+locations[i][1]+"  "+cnt++);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
      var cnt = 0;
      function counting(){
      cnt++ ;
      alert(cnt);
      }
  
  


</script>



</body>





</html>