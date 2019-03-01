import React from 'react';
import SpotIndexItem from './spot_index_item';
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
    return (
      <div className="sub-banner">
        <SearchNavContainer />
        <div className="content-box">
          <div className="spots-index">
            <div>
              {spotsItems}
            </div>
          </div>
        </div>
        
      </div>
        
      
    )
  }
}
export default SpotIndex;
