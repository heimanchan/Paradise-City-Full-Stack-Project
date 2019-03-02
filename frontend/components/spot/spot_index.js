import React from 'react';
import SpotIndexItem from './spot_index_item';
import SpotIndexItem2 from './spot_index_item2';
import SearchNavContainer from '../nav_bar/search_nav_container';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSpots();
  }

  render() {
    const spotsItems = this.props.spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
    const spotsItems2 = this.props.spots.map(spot => <SpotIndexItem2 key={spot.id} spot={spot} />)
    return (
      <div className="sub-banner">
        <SearchNavContainer />
        <div className="content-box">
          <div className="spots-index">
            {spotsItems}
            {spotsItems2}
            {spotsItems}
            {spotsItems2}
          </div>
          <div className="map-box">
            <div className="map-search">
              <p>
                z-index: -1;
                z-index: -1;
                z-index: -1;
                z-index: -1;
                z-index: -1;
                z-index: -1;
                z-index: -1;
                z-index: -1;
                z-index: -1;
                z-index: -1;
                z-index: -1;

                z-index: -1;z-index: -1;z-index: -1;z-index: -1;z-index: -1;z-index: -1;z-index: -1;
              </p>
            </div>
          </div>
        </div>
      </div>
        
      
    )
  }
}
export default SpotIndex;
