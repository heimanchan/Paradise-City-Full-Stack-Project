import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch, Link } from 'react-router-dom';
import NavBarContainer from '../components/nav_bar/nav_bar_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/sign_up_form_container';
// import Modal from './modal/modal'
import Splash from './splash';

const App = () => (
  <div>
    <div class="splash">
      {/* <Modal /> */}
      <header className="banner">
        <Link to="/" className="header-logo">
          {/* <img src="../../app/assets/images/airbnb.png" /> */}
          <h1>Take me down to the paradise city</h1>
        </Link>
        <NavBarContainer />
      </header>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/" component={Splash} />
      </Switch>
    </div>
    
  </div>
)

export default App;