import SpotShow from './spot_show';
import { connect } from 'react-redux';
import { fetchSpot } from '../../../actions/spot_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  spot: state.entities.spots[ownProps.match.params.spotId],
  reviews: Object.values(state.entities.reviews),
  users: state.entities.users,
  currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow);