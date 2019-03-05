import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { center: null };
    this.handleClick = this.handleClick.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.registerListeners = this.registerListeners(this);
  }
  
  componentDidMount() {
    this.renderMap();
    
  }

  renderMap() {
    let coords;
    if (this.props.location.search) {
      coords = queryString.parse(this.props.location.search);
    } else {
      coords = {lat: "37.7758", lng: "-122.435" }
    }

    const mapOptions = {
      // center: { lat: 37.7758, lng: -122.435 }, // this is SF
      center: { lat: parseFloat(coords.lat), lng: parseFloat(coords.lng) }, // this is SF
      zoom: 12,
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    this.MarkerManager.updateMarkers(this.props.spots);
    this.registerListeners();
  }
  
  registerListeners() {
    // debugger
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

  componentDidUpdate(prevProps) {
    if (this.props.location.search != prevProps.location.search) {
      this.renderMap();
    }
    this.MarkerManager.updateMarkers(this.props.spots)
  }
  
  handleClick(spot) {
    // console.log(`${spot.lat}, ${spot.lng}`);
    this.props.history.push(`spot/${spot.id}`)
  }
  
  componentWillUnmount() {
    google.maps.event.clearListeners(this.map, 'idle');
  }
  
  render() {
    return(
      <div id="map-container" ref={map => this.mapNode = map}>
        Map
      </div>
    )
  }
}

export default withRouter(SpotMap);