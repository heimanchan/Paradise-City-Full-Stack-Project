import React from 'react';
import SpotIndexItem from './spot_index_item';
import SpotIndexItem2 from './spot_index_item2';
import SearchNavContainer from '../nav_bar/search_nav_container';
import SpotMap from '../spot_map/spot_map';
import FilterNav from '../nav_bar/filter_nav';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchAllSpots();
  }

  render() {
    const spotItems = this.props.spots.map(spot => <SpotIndexItem key={spot.id} spot={spot} />)
    const spotItems2 = this.props.spots.map(spot => <SpotIndexItem2 key={spot.id} spot={spot} />)
    return (
      <div>
        <SearchNavContainer 
          updateFilter={this.props.updateFilter}
          receiveSearch={this.props.receiveSearch}
          />
        <FilterNav />

        <div className="content-box">
          <div className="spots-index">
            {spotItems}
            {spotItems2}
            {spotItems}
            {spotItems2}
          </div>
          <div className="map-box">
            <div className="map-search">
              <SpotMap 
                spots={this.props.spots}
                updateFilter={this.props.updateFilter}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpotIndex;
