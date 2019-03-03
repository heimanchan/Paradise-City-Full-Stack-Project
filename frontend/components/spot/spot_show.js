import React from 'react';
import SearchNavContainer from '../nav_bar/search_nav_container';
import SpotMap from '../spot_map/spot_map'

class SpotShow extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId)
  }

  render() {
    return(
      <>
        <SearchNavContainer />
        <div className="spot-show-container">
          {this.props.spot.title}
        </div>
        <div className="spot-show-map">
          <SpotMap spots={[this.props.spot]}/>
        </div>
      </>
    )
  }
}

export default SpotShow;