import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../components/nav_bar/nav_bar_container'

export default () => {
  return (
    <div className="splash">
      <header className="banner">
        <div className="header-banner">
          <Link to="/" className="logo-button">
            <div className="logo-box">
              <div className="logo"></div>
            </div>
          </Link>
          <NavBarContainer />
        </div>
      </header>
      <div className="splash-box">
        <div className="fo">
          <div className="next-trip">
            <div className="trip-title">
              <h1>Plan your next trip</h1>
            </div>

            <div className="trip-search">
              <div>
                <form>
                  <div className="trip-location">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input placeholder="Surfing in Los Angeles" type="text" />
                  </div>

                  <div className="trip-button">
                    <div>
                      <button type="trip-submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

