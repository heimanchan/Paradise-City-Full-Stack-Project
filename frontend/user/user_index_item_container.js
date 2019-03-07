import UserIndexItem from './user_index_item';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.booking.spotId]
})

const mapDispatchToProps = dispatch => ({
  openModal: (modal, bookingID) => dispatch(openModal(modal, bookingID)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserIndexItem)