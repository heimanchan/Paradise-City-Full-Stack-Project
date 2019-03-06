import UserIndex from './user_index';
import { connect } from'react-redux';
import { fetchAllBookings } from '../actions/booking_actions'

const mapStateToProps = state => ({
  userId: state.session.currentUserId,
  bookings: state.entities.bookings
})

const mapDispatchToProps = dispatch => ({
  fetchAllBookings: (userId) => dispatch(fetchAllBookings(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)

