import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  const booking = { startDate: null, endDate: null, numGuests: null };
  const currentUser = state.entities.users[state.session.currentUserId];
  // const spot = state.entities.spots[ownProps.match.params.spotId];
  const formType = "Book";

  return { booking, formType, currentUser }
}

const mapDispatchToProps = dispatch => ({
  action: booking => dispatch(createBooking(booking))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)