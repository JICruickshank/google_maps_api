const initialize = function() {
  const center = {lat: 53.4631, lng: -2.2913};
  let chicago = {lat: 41.8781, lng: -87.6298}
  const container = document.querySelector("#main-map");
  let map = new MapWrapper(container, center, 10);
  let marker = map.addMarker(center);
  map.addClickEvent();
  map.addInfoWindow(marker, "Theatre of Dreams")  ;
  takeMeTo(map, chicago);
}

const takeMeTo = function(map, coords) {chicagoButton = document.querySelector("#chicago-button")
chicagoButton.addEventListener("click", function() {
  debugger;
  map.googleMap.setCenter(coords);
});
}

window.addEventListener("load", initialize);
