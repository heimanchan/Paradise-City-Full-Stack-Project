import React from 'react';
import SpotIndexContainer from '../spot/spot_index_container';

const Search = ({ spots }) => {
  return (
    <div className="search-container">
      <SpotIndexContainer />
      {/* <SpotMap  /> */}
    </div>
  )
}
export default Search;