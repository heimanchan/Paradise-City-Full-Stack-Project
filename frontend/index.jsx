import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

// Testing
import * as SpotActions from './actions/spot_actions';

document.addEventListener('DOMContentLoaded', () => {
  // Testing
  // 

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchAllSpots = SpotActions.fetchAllSpots;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});