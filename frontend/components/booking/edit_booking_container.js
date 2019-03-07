import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { fetchBooking, updateBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const defaultBooking = { startDate: null, endDate: null, numGuests: null };
  const booking = state.entities.bookings[ownProps.bookingId] || defaultBooking;
  const currentUser = state.entities.users[state.session.currentUserId];
  // const userBookings = state.entities.users.userBookings;  
  const formType = "Update";
  const spot = state.entities.spots[booking.spotId];
  debugger
  
  return { booking, formType, currentUser, spot }
}

const mapDispatchToProps = dispatch => ({
  fetchBooking: id => dispatch(fetchBooking(id)),
  action: booking => dispatch(updateBooking(booking))
})

class EditBookingForm extends React.Component {
  componentDidMount() {
    this.props.fetchBooking(this.props.match.params.bookingId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.booking.id != this.props.match.params.bookingId) {
      this.props.fetchBooking(this.props.match.params.bookingId);
    }
  }

  render() {
    const { action, formType, booking, spot } = this.props;
    return (
      <BookingForm
        spot={spot}
        action={action}
        formType={formType}
        booking={booking} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBookingForm));