import UserIndex from './user_index';
import { connect } from'react-redux';
import { fetchAllBookings, deleteBooking} from '../actions/booking_actions';


const mapStateToProps = state => ({
  userId: state.session.currentUserId,
  bookings: Object.values(state.entities.bookings)
})

const mapDispatchToProps = dispatch => ({
  fetchAllBookings: (userId) => dispatch(fetchAllBookings(userId)),
  deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)

