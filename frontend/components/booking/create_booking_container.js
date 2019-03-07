import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = state => {
  const booking = { startDate: null, endDate: null, numGuests: null };
  const currentUserId = state.session.currentUserId;
  const formType = "Book";

  return { booking, formType, currentUserId }
}

const mapDispatchToProps = dispatch => ({
  action: booking => dispatch(createBooking(booking))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)