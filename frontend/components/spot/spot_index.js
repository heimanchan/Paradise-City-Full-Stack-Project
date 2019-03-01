import React from 'react';
import SpotIndexItem from './spot_index_item';

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
      <div className="spots-index">
        {spotsItems}
      </div>
    )
  }
}
export default SpotIndex;

// width: 80%!!!!