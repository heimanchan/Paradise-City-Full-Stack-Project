import React from 'react';
import { Link } from 'react-router-dom';

export default class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = { showMenu: false, }

    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  showDropdown(e) {
    e.preventDefault();
    this.setState({ showMenu: true });
  }

  closeDropdown(e) {
    e.preventDefault();
    this.setState({ showMenu: false });
  }
  
  render() {
    return (
      <div>
        <div className="profile-box" onClick={this.showDropdown}>
          <div className="profile-pic"></div>
        </div>

        {
          this.state.showMenu ? (
            <div className="dropdown-background" onClick={this.closeDropdown}>
              
                <div className="user-dropdown">
                  <Link to="/" className="user-dropdown-link">
                    <div className="user-dropdown-el">My Profile</div>
                  </Link>

                  <Link to="/" className="user-dropdown-link">
                    <div className="user-dropdown-el">Logout</div>
                  </Link>
                </div>

            </div>
          ) : ( null )
        }
      </div>
    )
  }
}
