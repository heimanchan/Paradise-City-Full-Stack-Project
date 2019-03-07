import { connect } from 'react-redux';
import SearchNav from './search_nav';
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal.type))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchNav);