import UserIndex from './user_index';
import { connect } from'react-redux';
import { fetchAllBookings, deleteBooking} from '../actions/booking_actions';
import { openModal } from '../actions/modal_actions';


const mapStateToProps = state => ({
  userId: state.session.currentUserId,
  bookings: Object.values(state.entities.bookings)
})

const mapDispatchToProps = dispatch => ({
  fetchAllBookings: (userId) => dispatch(fetchAllBookings(userId)),
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)

