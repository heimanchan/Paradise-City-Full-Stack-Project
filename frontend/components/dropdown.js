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
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeDropdown);
    });
  }

  closeDropdown(e) {
    e.preventDefault();
    if(!this.dropdownMenu.contains(e.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeDropdown);
      })
    }
  }

  
  
  render() {
    return (
      <div>
        <div className="profile-box" onClick={this.showDropdown}>
          <div className="profile-pic"></div>
        </div>

        {
          this.state.showMenu ? (
            <div 
              className="dropdown-background"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              <div className="user-dropdown">
                <Link to="/" className="user-dropdown-link">
                  <div className="user-dropdown-el">My Profile</div>
                </Link>

                <button onClick={this.props.logout} className="user-dropdown-link">
                  <div className="user-dropdown-el">Logout</div>
                </button>
              </div>
            </div>
          ) : ( null )
        }
      </div>
    )
  }
}
