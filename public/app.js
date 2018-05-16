const initialize = function() {
  const center = {lat: 53.4631, lng: -2.2913};
  let chicago = {lat: 41.8781, lng: -87.6298}
  const container = document.querySelector("#main-map");
  let map = new MapWrapper(container, center, 10);
  let marker = map.addMarker(center);
  map.addClickEvent();
  map.addInfoWindow(marker, "Theatre of Dreams")  ;
  takeMeTo(map, chicago);
  checkLocation();

const takeMeTo = function(map, coords) {chicagoButton = document.querySelector("#chicago-button")
chicagoButton.addEventListener("click", function() {
  map.googleMap.setCenter(coords);
});
}

const checkLocation = function() {
  document.querySelector("#checkLocation");
  checkLocation.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    const myLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
    map.googleMap.setCenter(myLocation);
  })
});
}
}

window.addEventListener("load", initialize);
