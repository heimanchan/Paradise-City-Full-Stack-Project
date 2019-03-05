import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/dropdown'

 const NavBar = ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <Dropdown logout={logout} user={currentUser} />
  ) : (
      <div className="user-nav">
        <button className="nav-button" onClick={() => openModal('Sign Up')}>Sign up</button>
        <button className="nav-button" onClick={() => openModal('Log In')}>Log in</button>
      </div>
    );

  return (
    <header className="banner">
      <div className="header-banner">
        <Link to="/search" className="logo-button">
          <div className="logo-box">
            <div className="logo"></div>
          </div>
        </Link>
        <nav className="banner-nav">
          {display}
        </nav>
      </div>
    </header>
    
  )
}

export default NavBar;