import React from 'react';
import MarkerManager from '../../util/marker_manager';


class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this.state;
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    const mapOptions = {
      // disableDefaultUI: true,
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 12,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    this.MarkerManager.updateMarkers(this.props.spots);

    // let markers = this.MarkerManager.markers;
    // let newBoundary = new google.maps.LatLngBounds();
    // for (i in markers) {
    //   let position = markers[i].position;
    //   newBoundary.extend(position);
    // }
    // this.map.setCenter(newBoundary.getCenter());
    // this.map.fitBounds(newBoundary);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }
  
  handleClick(spot) {
    console.log(`${spot.lat}, ${spot.lng}`);
  }
  
  render() {
    return(
      <div id="map-container" ref={map => this.mapNode = map}>
        Map
      </div>
    )
  }
}

export default SpotMap;