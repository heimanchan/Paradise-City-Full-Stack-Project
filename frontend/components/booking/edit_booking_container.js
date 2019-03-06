import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { fetchBooking, updateBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultBooking = { startDate: null, endDate: null, numGuests: null };
  const booking = state.entities.bookings[ownProps.match.params.bookingId] || defaultBooking;
  const currentUser = state.entities.users[state.session.currentUserId];
  // const userBookings = state.entities.users.userBookings;  
  const formType = "Update";

  return { booking, formType, currentUser, userBookings}
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
    const { action, formType, booking } = this.props;
    return (
      <BookingForm
        action={action}
        formType={formType}
        booking={booking} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBookingForm)