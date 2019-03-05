import React from 'react';
import SpotIndexContainer from '../spot/spot_index_container';

const Search = ({ spots, updateFilter, receiveSearch }) => {
  return (
    <>
      <SpotIndexContainer 
        spots={spots}
        updateFilter={updateFilter}
        receiveSearch={receiveSearch}/>
    </>
  )
}
export default Search;