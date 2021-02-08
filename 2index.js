// [START maps_earthquake_markers]
let map;
function initMap()
{
  map = new google.maps.Map
  ( 
    document.getElementById("map"),
    {
    zoom: 2,
    center: new google.maps.LatLng(2.8, -187.3),
    mapTypeId: "terrain",
    styles:
    [
      {elementType: 'geometry',stylers: [{color:'#242f3e'}]},
      {elementType: 'labels.text.stroke',stylers: [{color:'#242f3e'}]},
      {elementType: 'labels.text.fill',stylers: [{color:'#746855'}]},
      {featureType: 'administrative.locality',elementType: 'labels.text.fill',stylers: [{color:'#d59563'}]}, 
      {featureType: 'poi',elementType: 'labels.text.fill',stylers: [{color:'#d59563'}]},
      {featureType: 'poi.park',elementType: 'geometry',stylers: [{color:'#263c3f'}]},
      {featureType: 'poi.park',elementType: 'labels.text.fill',stylers: [{color:'#6b9a76'}]},
      {featureType: 'road',elementType: 'geometry',stylers: [{color:'#38414e'}]},
      {featureType: 'road',elementType: 'geometry.stroke',stylers: [{color:'#212a37'}]},
      {featureType: 'road',elementType: 'labels.text.fill',stylers: [{color: '#9ca5b3'}]},
      {featureType: 'road.highway',elementType: 'geometry',stylers: [{color: '#746855'}]},
      {featureType: 'road.highway',elementType: 'geometry.stroke',stylers: [{color: '#1f2835'}]},
      {featureType: 'road.highway',elementType: 'labels.text.fill',stylers: [{color: '#f3d19c'}]},
      {featureType: 'transit',elementType: 'geometry',stylers: [{color: '#2f3948'}]},
      {featureType: 'transit.station',elementType: 'labels.text.fill',stylers: [{color: '#d59563'}]},
      {featureType: 'water',elementType: 'geometry',stylers: [{color: '#17263c'}]},
      {featureType: 'water',elementType: 'labels.text.fill',stylers: [{color: '#515c6d'}]},
      {featureType: 'water',elementType: 'labels.text.stroke',stylers: [{color: '#17263c'}]}
    ]
    }
  );
  map.data.loadGeoJson(
    "https://script.googleusercontent.com/macros/echo?user_content_key=dIWZrKwFgFknlQrUzvPb6rvrEtcxuKewPaj_eiZ1dybt2xTs7sWqGgL3IG76ew2__6UsFQejG6c3GsDAqbRg2gpqKSulPWEAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOMnaV0NuzGuVzhEtQl69eEnf9o2fC3kgWls4S7nSf0CtTUcfLDDSZandPWNUyxT9g&lib=Mc8KzVU3_s1AkC74h0iWLBHC7tyB-4zAN"
  );

  /*
  const script = document.createElement("script");
  script.src ="https://script.googleusercontent.com/macros/echo?user_content_key=dIWZrKwFgFknlQrUzvPb6rvrEtcxuKewPaj_eiZ1dybt2xTs7sWqGgL3IG76ew2__6UsFQejG6c3GsDAqbRg2gpqKSulPWEAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOMnaV0NuzGuVzhEtQl69eEnf9o2fC3kgWls4S7nSf0CtTUcfLDDSZandPWNUyxT9g&lib=Mc8KzVU3_s1AkC74h0iWLBHC7tyB-4zAN";
  document.getElementsByTagName("coordinates")[0].appendChild(script);

map.data.add({
    geometry: new google.maps.Data.MultiPoint([
      coordinates,
      coordinates1,
      coordinates2,
    ]),
  });
};
const  = function (results) 
{
  for (
    let i = 0; 
    i < results.features.length;
    i++) {
    const coordinates = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coordinates[0]);
    new google.maps.Marker({
      position: latLng,
      map: map,});
  }
*/
};
