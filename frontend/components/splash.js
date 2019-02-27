import React from 'react';
import NavBarContainer from '../components/nav_bar/nav_bar_container'

export default () => {
  return (

      <div className="splash-box">
        <div className="main">
          {/* <div className="banner">
          banner is here
          <nav className="nav-bar">
            <button>

            </button>
          </nav>
        </div> */}
          {/* <NavBarContainer /> */}

          <div className="fo">
            <div className="next-trip">
              <div className="trip-title">
                <h1>Plan your next trip</h1>
              </div>

              <div className="trip-search">
                <div>
                  <form>
                    <div className="trip-location">
                      img
                      <input placeholder="Surfing in Los Angeles" type="text" />
                    </div>

                    <div className="trip-button">
                      <div>
                        <button type="submit">
                          search
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

