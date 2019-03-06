import React from 'react';
import { Link } from 'react-router-dom';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showMenu: false, }
    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.setDropdownMenu = this.setDropdownMenu.bind(this);
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

  setDropdownMenu(element) {
    this.dropdownMenu = element;
  }
  
  render() {
    let url;
    if (!this.props.user.photoUrl) {
      url = "https://s3-us-west-1.amazonaws.com/paradise-city-seed/images/users/cheese.jpg"
    } else {
      url = this.props.user.photoUrl;
    }
    return (
      <div>
        <button className="profile-box" onClick={this.showDropdown}>
          {/* <div className="profile-pic"></div> */}
          {/* <img className="profile-pic" src={this.props.user.photoUrl} /> */}
          <img className="profile-pic" src={url} />
        </button>
        {
          this.state.showMenu ? (
            <div 
              className="dropdown-background"
              ref={this.setDropdownMenu}
            >
              <div className="user-dropdown">
                <Link to="/" className="user-dropdown-link">
                  <div className="user-dropdown-el"><div>My Profile</div></div>
                </Link>

                <button onClick={this.props.logout} className="user-dropdown-link">
                  <div className="user-dropdown-el"><div>Logout</div></div>
                </button>
              </div>
            </div>
          ) : ( null )
        }
      </div>
    )
  }
}
