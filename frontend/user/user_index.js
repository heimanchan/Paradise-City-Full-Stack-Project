import React from 'react';
import SearchNavContainer from '../components/nav_bar/search_nav_container';
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
    const header = (Object.values(this.props.bookings).length === 0) ? (
      <h1>You don't have any bookings now</h1>
      ) : (
        <h1>Your next trip to a paradise city...</h1>
     )
    return(
      <>
        <SearchNavContainer />
        <div className="user-index-container">
          {header}
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