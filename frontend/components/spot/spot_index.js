import React from 'react';
import SpotIndexItem from './spot_index_item';
import NavBar from '../nav_bar/nav_bar_container';

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
      <div className="search-header">
        <NavBar />
        <div className="spots-index">
          {spotsItems}
        </div>
      </div>
      
    )
  }
}
export default SpotIndex;
