import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors,
  formType: "Sign Up"
})

const mapDispatchToProps = dispatch => ({
  // login: user => dispatch(login(user)),  
  // processForm: user => dispatch(signup(user))
  processForm: user => {
    user.username === 'guest' ? dispatch(login(user)) : dispatch(signup(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);