import React from 'react';
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util'
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/sign_up_form_container';

 const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      {/* {user profile pic} */}
      {/* click pic => drop down => logout */}
      <h2>Welcome, {currentUser.first_name}</h2>
      <button onClick={logout}>Log out</button>
    </div>
  ) : (
      <div>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
        <h3>Test</h3>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </div>
    );

  return (
    <nav>
      {display}
    </nav>
  )
}

export default NavBar;