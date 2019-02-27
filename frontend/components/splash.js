import React from 'react';

export default () => {
  return (
    <div className="main">
      <div className="banner">
        banner is here
        <nav className="nav-bar">
          <button>

          </button>
        </nav>
      </div>

      <div className="fo">
        <div className="next-trip">
          <div className="trip-title">
            <h1>Plan your next trip</h1>
          </div>

          <div className="trip-search">
            <div>
              <form>
                <div className="trip-location">
                  {/* <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"
                    style={"height:1.5em,width:1.5em,display:block,fill:currentColor"}>
                    <path
                      d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7">
                    </path>
                  </svg> */}
                  <input placeholder="Surfing in Los Angeles" type="text" />
              </div>

                <div className="trip-button">
                  <div>
                    <button type="submit">
                    {/* <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false"
                      style={"height:2em,width:2em,display:block,fill:currentColor"}>
                      <path
                        d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7">
                      </path>
                    </svg> */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}