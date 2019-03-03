import React from 'react';
import SearchNavContainer from '../nav_bar/search_nav_container';
import SpotMap from '../spot_map/spot_map'

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId)
  }

  render() {
    return(
      <>
        <SearchNavContainer />
        <div className="">
        </div>
      </>
    )
  }
}

export default SpotShow;