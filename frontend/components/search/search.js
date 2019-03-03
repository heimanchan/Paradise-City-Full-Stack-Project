import React from 'react';
import SearchNavContainer from '../nav_bar/search_nav_container';
import SpotMap from '../spot_map/spot_map';
import SpotIndexContainer from '../spot/spot_index_container';

const Search = ({ spots }) => {
  return (
    <div className="search-container">
      <SpotIndexContainer spots={spots} />
    </div>
  )
}
export default Search;