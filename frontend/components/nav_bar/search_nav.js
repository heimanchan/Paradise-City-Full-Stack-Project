import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown';
import SearchBar from '../search_bar';


const SearchNav = ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    // <div>
    <Dropdown logout={logout} />
    // </div>
  ) : (
      <div className="user-nav">
        <button className="nav-button" onClick={() => openModal('Sign Up')}>Sign up</button>
        <button className="nav-button" onClick={() => openModal('Log In')}>Log in</button>
      </div>
    );

  return (
    <div>
      <header className="search-header">
        <div className="header-banner">
          <Link to="/" className="logo-button">
            <div className="logo-box">
              <div className="logo"></div>
            </div>
          </Link>
          <nav className="banner-nav">
            {display}
          </nav>
        </div>
      </header>

      <div className="filter-banner">
        <div className="filter-type-box">
          <span className="filter-type">Dates</span>
        </div>
        <div className="filter-type-box">
          <span className="filter-type">Dates</span>
        </div>
        <div className="filter-type-box">
          <span className="filter-type">Dates</span>
        </div>
      </div>
    </div>
    

  )
}

export default SearchNav;