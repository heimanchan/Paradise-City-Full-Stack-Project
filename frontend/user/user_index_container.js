import UserIndex from './user_index';
import { connect } from'react-redux';
import { fetchAllBookings } from '../actions/booking_actions'

const mapStateToProps = state => ({
  bookings: state.entities.bookings
})

const mapDispatchToProps = dispatch => ({
  fetchAllBookings: () => dispatch(fetchAllBookings())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)

