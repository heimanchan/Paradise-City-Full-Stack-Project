import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch, Link } from 'react-router-dom';
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import Modal from './modal/modal'
import Splash from './splash';

const App = () => (
  <div>
    <div className="splash">
      <Modal />
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
      <Switch>
        <Route path="/" component={Splash} />
      </Switch>
    </div>
    
  </div>
)

export default App;