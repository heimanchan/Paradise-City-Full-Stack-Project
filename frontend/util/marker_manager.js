export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(spots) {
    const spotObj = {};
    spots.forEach(spot => spotObj[spot.id] = spot);
    spots
      .filter(spot => !this.markers[spot.id])
      .forEach(newSpot => this.createMarkerFromSpot(newSpot))

    Object.keys(this.markers)
      .filter(spotId => !spotObj[spotId])
      .forEach(spotId => this.removeMarker(this.markers[spotId]))
  }

  createMarkerFromSpot(spot) {
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id,
      icon: {
        path: 'M22-48h-44v43h16l6 5 6-5h16z',
        fillColor: 'white',
        fillOpacity: 1,
        scale: 0.85,
        labelOrigin: new google.maps.Point(-1, -25),
        strokeColor: 'gray',
      },
      label: {
        text: `$${spot.price}`,
        fontWeight: '600',
        fontSize: '14px',
      }
    })

    marker.addListener('click', () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}
