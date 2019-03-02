import React from 'react';
import SearchNavContainer from '../nav_bar/search_nav_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }

  render() {
    return (
      <div className="sub-banner">
        <SearchNavContainer />
      </div>
    )
  }
}

export default Search;