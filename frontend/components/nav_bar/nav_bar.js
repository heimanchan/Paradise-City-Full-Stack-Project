import React from 'react';
import { Link } from 'react-router-dom';

 const NavBar = ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div>
      {/* {user profile pic} */}
      {/* click pic => drop down => logout */}
      <h2>Welcome, {currentUser.first_name}</h2>
      <button onClick={logout}>Log out</button>
    </div>
  ) : (
      <div>
        {/* <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link> */}
        <button className="nav-button" onClick={() => openModal('Sign Up')}>Sign up</button>
        <button className="nav-button" onClick={() => openModal('Log In')}>Log in</button>
      </div>
    );

  return (
    <nav className="banner-nav">
      {display}
    </nav>
  )
}

export default NavBar;