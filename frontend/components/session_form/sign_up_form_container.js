import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors,
  formType: "Sign Up"
})

const mapDispatchToProps = dispatch => ({
  processForm: user => {
    user.username === 'guest' ? dispatch(login(user)) : dispatch(signup(user))
  },
  login: user => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('Log In'))}>
      Sign Up
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);