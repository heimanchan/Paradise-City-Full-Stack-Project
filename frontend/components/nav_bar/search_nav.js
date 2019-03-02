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
    <div className="a">
      <header className="search-header">
        <div className="header-banner">
          <div className="logo-search">
            <Link to="/" className="logo-button">
              <div className="logo-box">
                <div className="logo"></div>
              </div>
            </Link>
            <div className="search-bar">
              <SearchBar />
            </div>
          </div>
          
          <nav className="banner-nav">
            {display}
          </nav>
        </div>
      </header>

      <div className="filter-banner">
        <button className="filter-type-box">
          <span className="filter-type">Dates</span>
        </button>
        <button className="filter-type-box">
          <span className="filter-type">Dates</span>
        </button>
        <button className="filter-type-box">
          <span className="filter-type">Dates</span>
        </button>
      </div>
    </div>
    

  )
}

export default SearchNav;