import React from 'react';
import SearchNavContainer from '../nav_bar/search_nav_container';
import SpotShowMap from '../spot_map/spot_show_map';

class SpotShow extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId)
  }

  render() {
    // debugger

    return(
      <>
        <SearchNavContainer />
        <div className="spot-show-container">
          {this.props.spot.title}
        </div>
        <div id="spot-show-map">
          <SpotShowMap spot={[this.props.spot]}/>
        </div>
      </>
    )
  }
}

export default SpotShow;