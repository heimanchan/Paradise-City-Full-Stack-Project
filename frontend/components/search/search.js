import React from 'react';
import SpotIndexContainer from '../spot/spot_index_container';

const Search = ({ spots, updateFilter }) => {
  return (
    <>
      <SpotIndexContainer 
        spots={spots}
        updateFilter={updateFilter}/>
    </>
  )
}
export default Search;