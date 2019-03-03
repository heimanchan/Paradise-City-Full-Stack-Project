import React from 'react';
import SearchNavContainer from '../nav_bar/search_nav_container';
import SpotShowMap from '../spot_map/spot_show_map';

// Testing
import { fetchSpot } from '../../actions/spot_actions';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }
  
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    if (this.props.spot === undefined) return null;
    return(
      <>
        <SearchNavContainer />
        <div className="spot-show-container">
          {this.props.spot.title}
          {this.props.spot.cityName}
        </div>
        <div id="spot-show-map">
          <SpotShowMap spot={[this.props.spot]}/>
        </div>
      </>
    )
  }
}

export default SpotShow;