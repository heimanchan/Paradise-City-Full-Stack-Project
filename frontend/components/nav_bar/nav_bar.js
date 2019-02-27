import React from 'react';
import { Link, Route } from 'react-router-dom';


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
      </div>
    );

  return (
    <nav>
      {display}
    </nav>
  )
}

export default NavBar;