import React from 'react';
import SpotIndexItem from './spot_index_item';
import SpotIndexItem2 from './spot_index_item2';
import SearchNavContainer from '../nav_bar/search_nav_container';
import SpotMap from '../spot_map/spot_map';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSpots();
  }

  render() {
    const spotItems = this.props.spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
    const spotItems2 = this.props.spots.map(spot => <SpotIndexItem2 key={spot.id} spot={spot} />)
    return (
      <div>
        <SearchNavContainer />
        <div className="content-box">
          <div className="spots-index">
            {spotItems}
            {spotItems2}
            {spotItems}
            {spotItems2}
          </div>
          <div className="map-box">
            <div className="map-search">
              <SpotMap />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpotIndex;
