import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { fetchBooking, updateBooking } from '../../actions/booking_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultBooking = { startDate: null, endDate: null, numGuests: null };
  const booking = state.entities.bookings[ownProps.bookingId] || defaultBooking;
  const currentUserId = state.session.currentUserId;
  const formType = "Update";
  const spot = state.entities.spots[booking.spotId];
  const errors = state.errors;
  
  return { booking, formType, currentUserId, spot, errors }
}

const mapDispatchToProps = dispatch => ({
  fetchBooking: id => dispatch(fetchBooking(id)),
  action: booking => dispatch(updateBooking(booking)),
  closeModal: () => dispatch(closeModal())
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
    const { action, formType, booking, spot, currentUserId, bookingId, closeModal, errors} = this.props;
    return (
      <BookingForm
        spot={spot}
        action={action}
        formType={formType}
        booking={booking}
        currentUserId={currentUserId} 
        bookingId={bookingId}
        closeModal={closeModal}
        errors={errors}
      />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBookingForm));