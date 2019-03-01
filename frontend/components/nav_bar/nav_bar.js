import React from 'react';
import { Link } from 'react-router-dom';

 const NavBar = ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div>
      <button onClick={logout}>
        <div className="profile-box">
          <div className="profile-pic"></div>
        </div>
      </button>
    </div>
  ) : (
      <div className="user-nav">
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