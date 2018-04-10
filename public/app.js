const initialize = function() {
  const center = {lat: 53, lng: -2};
  const container = document.querySelector("#main-map");
  let map = new MapWrapper(container, center, 10);
  map.addMarker(center);
  map.addClickEvent();
}

window.addEventListener("load", initialize);
