import React from 'react';
import SearchNavContainer from '../components/nav_bar/search_nav_container';

export default class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBookings(this.props.userId);
  }

  render() {
    return(
      <>
        <SearchNavContainer />
        <div>

        <h2>Your Next Trip to the Paradise City...</h2>
        </div>
      </>
    )
  }
}