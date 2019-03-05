import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';


class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this.state;
    this.handleClick = this.handleClick.bind(this);
    this.renderMap = this.renderMap.bind(this);
  }

  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  renderMap() {
    let coords;
    if (this.props.location.search) {
      coords = queryString.parse(this.props.location.search);
    } else {
      coords = { lat: '37.7758', lng: '-122.435' }
    }

    const mapOptions = {
      center: { lat: parseFloat(coords.lat), lng: parseFloat(coords.lng) },
      zoom: 11
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.registerListner();
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    this.MarkerManager.updateMarkers(this.props.spots)
  }

  registerListner() {
    this.map.addListener('idle', () => {
      let { north, south, east, west } = this.map.getBounds().toJSON();
      let bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      }
      this.props.updateFilter('bounds', bounds)
    })
  }

  componentWillUnmount() {
    // google.maps.event.clearListeners(this.map, 'idle');
  }

  componentDidUpdate(prevProps) {
    this.MarkerManager.updateMarkers(this.props.spots)
    if (this.props.location.search != prevProps.location.search) {
      this.renderMap();
    }
  }

  handleClick(spot) {
    // console.log(`${spot.lat}, ${spot.lng}`);
    this.props.history.push(`spots/${spot.id}`)
  }

  render() {
    return (
      <div id="map-container" ref={map => this.mapNode = map}>
        Map
      </div>
    )
  }
}

export default withRouter(SpotMap);