<!DOCTYPE html>
# MiZGiR
The project MiZGiR
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Marker Clustering</title>
    <style>
      #map {height: 100%;}
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: uluru,
          styles: [{
      elementType: 'geometry',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#746855'
      }]
    }, {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#d59563'
      }]
    }, {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#d59563'
      }]
    }, {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{
        color: '#263c3f'
      }]
    }, {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#6b9a76'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
        color: '#38414e'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#212a37'
      }]
    }, {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#9ca5b3'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{
        color: '#746855'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#1f2835'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#f3d19c'
      }]
    }, {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{
        color: '#2f3948'
      }]
    }, {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#d59563'
      }]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{
        color: '#17263c'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#515c6d'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#17263c'
          }]
    }]
  });
     var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });
            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://github.com/TrashedBot/MiZGiR/m'});
      }
      var locations = [
        {lat: -31.563910, lng: 147.154312},
        {lat: -33.718234, lng: 150.363181},
        {lat: -33.727111, lng: 150.371124},
        {lat: -33.848588, lng: 151.209834},
        {lat: -33.851702, lng: 151.216968},
        {lat: -34.671264, lng: 150.863657},
        {lat: -35.304724, lng: 148.662905},
        {lat: -36.817685, lng: 175.699196},
        {lat: -36.828611, lng: 175.790222},
        {lat: -37.750000, lng: 145.116667},
        {lat: -37.759859, lng: 145.128708},
        {lat: -37.765015, lng: 145.133858},
        {lat: -37.770104, lng: 145.143299},
        {lat: -37.773700, lng: 145.145187},
        {lat: -37.774785, lng: 145.137978},
        {lat: -37.819616, lng: 144.968119},
        {lat: -38.330766, lng: 144.695692},
        {lat: -39.927193, lng: 175.053218},
        {lat: -41.330162, lng: 174.865694},
        {lat: -42.734358, lng: 147.439506},
        {lat: -42.734358, lng: 147.501315},
        {lat: -42.735258, lng: 147.438000},
        {lat: -43.999792, lng: 170.463352}
      ]
    </script>
    <script src="https://github.com/TrashedBot/MiZGiR/markerclusterer.js">
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD6WP9c1pu-CIJpJ51FORQdKZOXYCxpr5Qg&callback=initMap">
    </script>
  </body>
</html>
