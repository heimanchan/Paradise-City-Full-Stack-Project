import React from 'react';
import SpotIndexContainer from '../spot/spot_index_container';

const Search = ({ spots }) => {
  return (
    <div className="search-container">
      <SpotIndexContainer spots={spots} />
    </div>
  )
}
export default Search;