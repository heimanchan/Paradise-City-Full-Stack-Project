import React from 'react';
import SearchNavContainer from '../components/nav_bar/search_nav_container';
import UserIndexItem from './user_index_item'
import UserIndexItemConatainer from './user_index_item_container';

export default class UserIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBookings(this.props.userId);
  }

  render() {
    const userBookingItems = this.props.bookings.map(
      booking => <UserIndexItemConatainer 
        booking={booking} 
        key={booking.id}
        deleteBooking={this.props.deleteBooking}
      />
    )
    return(
      <>
        <SearchNavContainer />
        <div className="user-index-container">
          <h1>Your next trip to a paradise city...</h1>
          {/* css divided line */}
          <div style={{ marginTop: 24, marginBottom: 24 }}><div className="br"></div></div>
          <div className="user-booking-index">
            {userBookingItems}
          </div>

        </div>
      </>
    )
  }
}