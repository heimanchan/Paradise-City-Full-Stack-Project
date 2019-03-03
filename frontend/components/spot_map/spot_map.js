import React from 'react';



class SpotMap extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }
  
  componentDidMount() {
    // const map = this.refs.map;
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
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