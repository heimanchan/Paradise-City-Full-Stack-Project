import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/dropdown';
import SearchBar from '../search_bar';

const SearchNav = ({ currentUser, logout, openModal, receiveSearch}) => {
  const display = currentUser ? (
    <Dropdown logout={logout} user={ currentUser }/>
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
            <Link to="/search" className="logo-button">
              <div className="logo-box">
                <div className="logo"></div>
              </div>
            </Link>
            <div className="search-bar">
              <SearchBar receiveSearch={receiveSearch}/>
            </div>
          </div>
          
          <nav className="banner-nav">
            {display}
          </nav>
        </div>
      </header>

    </div>
    

  )
}

export default SearchNav;