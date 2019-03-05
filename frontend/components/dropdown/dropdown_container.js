import { connect } from 'react-redux';
import Dropdown from './dropdown'

const mapStateToProps = state => ({
  user: state.entities.users[state.session.currentUserId]
})

export default connect(mapStateToProps)(Dropdown);
