import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

// Testing
import * as SessionActions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // Testing
  window.signup = SessionActions.signup;
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;

  window.receiveCurrentUser = SessionActions.receiveCurrentUser;
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});