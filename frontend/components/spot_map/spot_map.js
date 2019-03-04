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
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 12,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', ()=> {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      }
      this.props.updateFilter("bounds", bounds);
    })
    // google.maps.event.addListener(this.map, 'click', e => {
    //   const coords = getCoordsObj(e.latLng);
    //   this.handleClick(coords);
    // })
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