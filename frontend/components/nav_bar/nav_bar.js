import React from 'react';
import { Link } from 'react-router-dom'

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      {/* {user profile pic} */}
      {/* click pic => drop down => logout */}
      <h2>Welcome, {currentUser.first_name}</h2>
    </div>
  ) : (
      <div>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </div>
    );

  return (
    <>
      {display}
    </>
  )
}