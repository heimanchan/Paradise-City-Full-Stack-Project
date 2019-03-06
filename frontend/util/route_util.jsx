import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUserId),
  currentUserId: state.session.currentUserId
});

const Auth = ({ currentUserId, loggedIn, path, exact, component: Component }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
      ) : (
      <Redirect to="/" />
    )
  )} />
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));