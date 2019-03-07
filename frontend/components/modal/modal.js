import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/sign_up_form_container';
import EditBookingContainer from '../booking/edit_booking_container'

const Modal = (props) => {
  if (!props.modal.type) {
    return null;
  }

  let component;
  switch (props.modal.type) {
    case 'Log In':
      component = <LoginFormContainer />;
      break;
    case 'Sign Up':
      component = <SignupFormContainer />;
      break;
    case 'Edit Booking':
      component = <EditBookingContainer bookingId={props.modal.bookingId}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={props.closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);