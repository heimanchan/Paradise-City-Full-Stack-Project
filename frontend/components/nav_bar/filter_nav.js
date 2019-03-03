import React from 'react';
// import { Link } from 'react-router-dom';
// import Dropdown from '../dropdown';
// import SearchBar from '../search_bar';


const FilterNav = ({ currentUser, logout, openModal }) => {

  return (
    <div className="filter-banner">
      <button className="filter-type-box">
        <span className="filter-type">Dates</span>
      </button>
      <button className="filter-type-box">
        <span className="filter-type">City</span>
      </button>
      <button className="filter-type-box">
        <span className="filter-type">Guests</span>
      </button>
    </div>
  )
}

export default FilterNav;