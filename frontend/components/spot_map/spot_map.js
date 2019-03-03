import React from 'react';
import MarkerManager from '../../util/marker_manager';


class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this.state;
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    // const map = this.refs.map;
    const mapOptions = {
      disableDefaultUI: true,
      center: { lat: 37.7489, lng: -122.309 }, // this is SF
      zoom: 12,
      zoomContorl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      },
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    this.MarkerManager.updateMarkers(this.props.spots);
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