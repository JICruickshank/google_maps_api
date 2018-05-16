const MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
  return marker;
};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, "click", function(event) {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    coords = {lat: lat, lng: lng }
    this.addMarker(coords);
  }.bind(this));
};

MapWrapper.prototype.addInfoWindow = function (marker, content) {
  let infoWindow = new google.maps.InfoWindow({
    content: content
  })
  marker.addListener("click", function() {
    infoWindow.open(this, marker)
  });
};
