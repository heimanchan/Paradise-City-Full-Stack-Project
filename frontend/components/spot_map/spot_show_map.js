import React from 'react';
import MarkerManager from '../../util/marker_manager';


class SpotShowMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    debugger
    const mapOptions = {
      center: { lat: this.props.spot[0].lat, lng: this.props.spot[0].lng },
      zoom: 14,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    this.MarkerManager.updateMarkers(this.props.spot);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spot);
  }

  handleClick(spot) {
    console.log(`${spot.lat}, ${spot.lng}`);
  }

  render() {
    return (
      <div id="spot-show-map" ref={map => this.mapNode = map}>
        Map
      </div>
    )
  }
}

export default SpotShowMap;